let button = document.querySelector('button');
// let conteneur = document.getElementById("conteneur");

// button.addEventListener('click', () => {
//     for (let index = 0; index <= 10; index++) {
//         let nouveauParagraphe = document.createElement("p");
//         nouveauParagraphe.textContent = index;
        
//         setTimeout(() => {
//             conteneur.append(nouveauParagraphe);
//         }, 1000 * index);
//     }
    
//     setTimeout(() => {
//         let boomParagraphe = document.createElement("p");
//         boomParagraphe.textContent = "Boom";
//         conteneur.append(boomParagraphe);
//     }, 1000 * 11);
// });


let seconde = 10;
let interval;

button.addEventListener('click', start);

function start () {
    interval = setInterval(decompte, 1000);
};

function stop()
{
    clearInterval(interval);
    document.body.innerHTML += "Stop !";
}

function decompte () {

    seconde--;
    if (seconde == 0)
    {
        stop();
    }
    else 
    {
        document.body.innerHTML += seconde + '<br>';
    }
};

