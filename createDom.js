const selfClosingTags = [
'area',
'base',
'br',
'col',
'embed',
'hr',
'img',
'input',
'keygen',
'link',
'meta',
'param', 
'source',
'track',
'wbr',
];



const createCustomElement = (type, atributes = {}) => {
    const el = document.createElement(type);


    Object.entries(atributes).forEach(([atr, value]) => {
        if (atr === 'content') {
            el.textContent = value;
        } else if (atr.slice(0, 2) === 'on') {
            console.log(atr);
            el.addEventListener(atr.slice(2).toLocaleLowerCase(), value);
        } else {
            el.setAttribute(atr, value);
        }
    });


    // nodes.forEach(node => {
    //     el.appendChild(node);
    // });

    return el;
};

const elementTextParser = (str) => {

    let text = str.slice(0, str.indexOf('<'));
    str = str.slice(text.length);
    return {
        text, str
    };
};


const elementParser = (str) => {
    const type = str.match(/(?<type><\w+ ?>?)/g)[0];

    const obj = {};
    const startFrom = type.length;
    const endIdx = str.indexOf('>');

    if (type[endIdx] !== '>') {

        const el = str.slice(startFrom, endIdx).trim();
        let atributes = el.match(/(?<fn>\(\w.*\) ?(=>)? ?{([^}]*)})|(?<type>[\w\-]+="(.*?)")/g) || [];

        for (let line of atributes) {
            const [atr, value] = line.split('=');
            obj[atr] = value.slice(1, -1).trim();
        }
    }


    return {
        type: type.match(/\w+/g)[0],
        atributes: obj,
        str: str.slice(endIdx + 1),
    }
};


const createDOMTree = (str, parent = null, memo = {}) => {

    if (Object.keys(memo).length === 0) {
        memo.htmlStr = str.replace(/\n|\r/g, "");
    }


    if (memo.htmlStr === '') {
        return;
    }

    let el = null;
    const elementProperties = {};

    if (!memo.htmlStr.startsWith('<') && memo.htmlStr.length > 0) {

        const { text, str: newStr } = elementTextParser(memo.htmlStr);
        memo.htmlStr = newStr.trim();
        parent.textContent = text;
        createDOMTree('', parent, memo);

    } else if (memo.htmlStr.startsWith('</')) {

        memo.htmlStr = memo.htmlStr.slice(memo.htmlStr.indexOf('>') + 1).trim();
        return createDOMTree('', parent.parentNode, memo);

    } else if (memo.htmlStr.startsWith('<')) {

        const { type, atributes, str: newStr } = elementParser(memo.htmlStr);
        el = createCustomElement(type, atributes);
        memo.htmlStr = newStr.trim();
        parent.appendChild(el);

        if (selfClosingTags.includes(type)) {
            createDOMTree('', parent, memo);

        } else {
            createDOMTree('', el, memo);
        }
    }
};

export default createDOMTree;