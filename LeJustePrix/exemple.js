let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

error.style.display = "none";

input.addEventListener('keyup', () => {
    if(isNaN(input.value))
    {
        error.style.display = "inline";
    }
    else 
    {
        error.style.display = "none";
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value === "")
    {
        input.style.borderColor = "red";
    }
    else
    {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

function verifier(nombre) {
    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire)
    {
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
        instruction.className ="instruction plus";
    }
    else if (nombre > nombreAleatoire)
    {
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
        instruction.className ="instruction moins";
    }
    else
    {
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est gagné !";
        instruction.className ="instruction fini";
        input.disabled = true;
    }

    document.querySelector('#instructions').prepend(instruction);
};