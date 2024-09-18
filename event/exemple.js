let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = () => {
//     confirm('Etes vous sur ?') ? location.href="https://google.com" : ""
// }

// button.onmouseover = () => {
//     document.body.style.backgroundColor = 'orange';
// }

// button.onmouseout = () => {
//     document.body.style.backgroundColor = 'white';
// }

a.addEventListener('click', () => {
    if(confirm('Etes-vous sûr ?'))
    {
        location.href="https://google.com";
    }
});

button.addEventListener('mouseover' , () => {
    document.body.style.backgroundColor = 'orange';
});

button.addEventListener('mouseout' , () => {
    document.body.style.backgroundColor = 'white';
});

let article = document.querySelector('article');
let h1 = document.querySelector('h1');

article.style.padding = "5px";

article.addEventListener('click', () => {
    alert('article cliqué');
});

h1.addEventListener('click', (e) => {
    alert('Titre cliqué');
    e.stopPropagation();
});

let timer = setTimeout("alert('bonjour')", 3000);
clearTimeout(timer);

let interval = setInterval("alert('bonjour')", 5000);
clearInterval(interval);