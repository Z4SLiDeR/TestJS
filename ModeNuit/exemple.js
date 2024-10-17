// Sélection du bouton pour changer le thème
const modeButton = document.getElementById('mode');

// Sélection du span qui contient le texte du bouton
const modeSpan = modeButton.querySelector('span');

if(localStorage.getItem('theme') === 'sombre')
{
    modeSombre();
}

modeButton.addEventListener('click', function()  {
    // Sélection de l'élément body
    const body = document.body;
  
    // Vérification si l'élément body a la classe 'dark'
    if (body.classList.contains('dark')) {
      // Retirer toutes les classes de l'élément body
      body.className = '';
  
      // Changer le texte du bouton en "Thème sombre"
      modeSpan.textContent = 'Thème sombre';
  
      // Définir un élément localStorage pour le thème
      localStorage.setItem('theme', 'clair');
    } else {
      // Si la classe 'dark' n'est pas présente, appeler la fonction modeSombre()
      modeSombre();
    }
  });

// Fonction pour activer le mode sombre
function modeSombre() {
  // Sélection de l'élément body
  const body = document.body;

  // Ajout de la classe 'dark' sur l'élément body
  body.classList.add('dark');

  // Changer le texte du bouton en "Thème clair"
  modeSpan.textContent = 'Thème clair';

  // Définir un élément localStorage pour le thème
  localStorage.setItem('theme', 'sombre');
}