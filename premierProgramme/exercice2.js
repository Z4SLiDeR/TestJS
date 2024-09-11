function calculerIMC(poids, taille) {
    
    // Converti la taille en centimètres => mètres
    let tailleEnMetres = taille / 100;
  
    // Calcule la taille à la puissance 2
    let tailleCalculee = Math.pow(tailleEnMetres, 2);
  
    // Calcule l'IMC
    let resultat       = poids / tailleCalculee;

    // Retourne notre résultat
    return resultat;
  
    // Version simplifiée de cette fonction : return poids / Math.pow((taille / 100), 2);

}

let poids   = prompt("Quel est votre poids ? (en kg)");
let taille  = prompt("Quelle est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));