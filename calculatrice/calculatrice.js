let answer;
let firstNumber;
let secondNumber;

do {
    answer = prompt("Que souhaitez vous faire ? \n\n1 - Addition\n2 - Soustraction\n3 - Multiplication\n4 - Division");
    answer = Number(answer);
} while (answer < 0 || answer > 4);

do {
    firstNumber = prompt("Entrez votre première valeur :");
    firstNumber = Number(firstNumber);
} while (isNaN(firstNumber));

do {
    secondNumber = prompt("Entrez votre seconde valeur :");
    secondNumber = Number(secondNumber);
} while (isNaN(secondNumber));

switch (answer) {
    case 1:
        alert(addition(firstNumber,secondNumber));
        break;
    case 2:
        alert(soustraction(firstNumber,secondNumber));
        break;
    case 3:
        alert(multiplication(firstNumber,secondNumber));
        break;
    default:
        if (secondNumber == 0)
            {
                alert("Division par ZERO !")
            }
            else
            {
                alert(division(firstNumber,secondNumber));
            }
        break;
}

//#region function
function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function soustraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
     return firstNumber / secondNumber;
}
//#endregion