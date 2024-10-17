// Créer un cookie
document.cookie = 'prenom=John';

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = 'prenom=Mark';

// Supprimer un cookie
document.cookie = 'prenom=';

// Options

document.cookie = 'prenom=John; path=/admin';
document.cookie = 'prenom=John; path=/admin; domain=believemy.com';

let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie = 'prenom=John; path=/admin; domain=believemy.com; expires=' + date;

document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000';

document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000; secure';

// LocalStorage = Stocké dans le navigateur même après qu'il soit fermé
// SessionStorage = Stocké dans le navigateur pendant la session

// Et les cookies ?

// setItem[clé], [valeur]) / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clef située à l'index donnée
// length : obtenir le nombre d'éléments stockés

if(localStorage.getItem('prenom')) {
    document.body.append('Bonjour ' + localStorage.getItem('prenom'));
  }
  else {
    let prenom = prompt('Quel est votre prénom ?');
    localStorage.setItem('prenom', prenom);
    document.body.append('Bonjour ' + prenom);
  }
  // localStorage.clear();