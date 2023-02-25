import createDOMTree from "./createDom.js";

const rootElement = document.getElementById('root');

const data = {
    id1: 'id1', 
    id2: 'id2', 
    id3: 'id3', 
    id4: 'id4', 
};



let component = (id) => `<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
<a class="navbar-brand text-light" href="/">Movies</a>
<ul class="navbar-nav ml-auto ">
    <li class="nav-item user">
        <a class="nav-link" id="welcome-msg">Welcome, email</a>
    </li>
    <li class="nav-item user">
        <a class="nav-link" href="/logout">Logout</a>
    </li>
    <li class="nav-item user">
        <a class="nav-link" href="/${id}">ID -> ${id}</a>
    </li>
    <li class="nav-item guest">
        <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item guest">
        <a class="nav-link" href="/register">Register</a>
    </li>
</ul>
</nav>`;


let str = `
${Object.entries(data).map(([key, val]) => {
    return component(val);
}).join('')}
<div class="container" id="container">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
        <li class="nav-item user">
            <a class="nav-link" id="welcome-msg">Welcome, email</a>
        </li>
        <li class="nav-item user">
            <a class="nav-link" href="/logout">Logout</a>
        </li>
        <li class="nav-item guest">
            <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item guest">
            <a class="nav-link" href="/register">Register</a>
        </li>
    </ul>
</nav>

<section id="home-page" class="view-section">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>

    <h1 class="text-center">Movies</h1>

    <section id="add-movie-button" class="user">
        <a href="/create" class="btn btn-warning ">Add Movie</a>
    </section>

    <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">

                <div class="card-deck d-flex justify-content-center">
                    <!-- movie list -->
                </div>
            </div>
        </div>
    </section>
</section>

<section id="add-movie" class="view-section">
    <form data-action="submit"  class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="imageUrl"
                value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>

<section id="movie-example" class="view-section">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: Black Widow</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous
                    conspiracy
                    with ties to her past arises. Comes on the screens 2020.</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="#">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
</section>

<section id="edit-movie" class="view-section">
    <form class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title" value="" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value=""
                name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>

<section id="form-login" class="view-section">
    <form class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password"
                value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>

<section id="form-sign-up" class="view-section">
    <form class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password"
                value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>

<footer class="page-footer font-small">
    <div class="footer-copyright text-center py-3">&copy; 2020
        <a href="#" class="text-dark">JS Applications</a>
    </div>
</footer>
`

createDOMTree(str, rootElement);


const handler = {
    "add-movie": (e) => {
        console.log("Handle event data in handler!!!")
    },
    default: (e) => {
        console.clear()
        console.log("\x1b[101mtest\x1b[0m")
        console.warn(`Handling action ${e.target?.dataset?.action} with missing selectror!`)
    }
}

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const action = e.target.dataset.action
    const selector = e.target.dataset.selector
    if (action === 'submit') {
        handler[selector] ? handler[selector](e) : handler.default(e)
    }
})


// function onClickHandler(e) {
//     e.preventDefault();

//     console.log(e.currentTarget);
// };

// const createCustomElement = (type, atributes = {}, nodes = []) => {
//     const el = document.createElement(type);


//     Object.entries(atributes).forEach(([atr, value]) => {
//         if (atr === 'content') {
//             el.textContent = value;
//         } else if (atr.slice(0, 2) === 'on') {
//             console.log(atr);
//             el.addEventListener(atr.slice(2).toLocaleLowerCase(), value);
//         } else {
//             el.setAttribute(atr, value);
//         }
//     });


//     nodes.forEach(node => {
//         el.appendChild(node);
//     });

//     return el;
// };

// const registerA = createCustomElement('a', { 'href': '/register', content: 'Register', onClick: onClickHandler });
// const loginA = createCustomElement('a', { 'href': '/login', content: 'Login' });
// const guestContainer = createCustomElement('div', { id: 'guest' }, [registerA, loginA]);

// const createA = createCustomElement('a', { 'href': '/create', content: 'Create' });
// const logoutA = createCustomElement('a', { 'href': '/logout', content: 'Logout' });
// const userContainer = createCustomElement('div', { id: 'user' }, [createA, logoutA]);

// const catalogA = createCustomElement('a', { 'href': '/catalog', content: 'Catalog', class: 'active catalog' });

// const navContainer = createCustomElement('nav', { id: 'navigation' }, [catalogA, userContainer, guestContainer]);

// const titelEl = createCustomElement('h1', { content: 'My Cookbook' });

// const headerEl = createCustomElement('header', {}, [titelEl, navContainer]);

// rootElement.appendChild(headerEl);
// rootElement.appendChild(createCustomElement('input', { type: 'password', placeholder: 'Enter password' }));