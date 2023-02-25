
function onSubmitHandler(e) {
    console.log('Submit');
}

const ob = {fn: onSubmitHandler}

let str = `<form onSubmit=${ob} class="text-center border border-light p-5" action="#" method="">`;

const atributes = str.match(/(?<fn>\(\w.*\) ?(=>)? ?{([^}]*)})|(?<type>\w+="(.*?)")/g)

console.log(atributes)
let idx = str.indexOf('=');
console.log(typeof str.slice(idx));

