let total = 0;
function calcul(number) {
    if(number > 0)
    {
        total += number;
        calcul(number-1);
    }
    else
    {
        console.log(total);   
    }
}
calcul(5);