let button = document.querySelector('button');
let div = document.querySelector('div');
let hide = true;

div.style.display = "none";

button.addEventListener('click', swap);

function swap () {
    if(hide)
    {
        hide = false;
        div.style.display = "block";
    }
    else
    {
        hide = true;
        div.style.display = "none";
    }

    hide ? button.textContent = "Afficher" : button.textContent = "Cacher";
}
