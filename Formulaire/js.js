document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formu');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      
      // Sélection des champs de formulaire
      const nomField = form.elements['Nom'];
      const prenomField = form.elements['Prenom'];
      const paysField = form.elements['pays'];
      const messageField = form.elements['Message'];
  
      // Supprime les messages d'erreur précédents
      removePreviousMessages();
  
      // Vérification et traitement du champ "Nom"
      if (!nomField.value.trim()) {
        displayErrorMessage(nomField, 'Nom manquant');
      } else {
        // Passe le nom en majuscules
        nomField.value = nomField.value.toUpperCase();
      }
  
      // Vérification et traitement du champ "Prénom"
      if (!prenomField.value.trim()) {
        displayErrorMessage(prenomField, 'Prénom manquant');
      } else {
        // Mettre la première lettre en majuscule et le reste en minuscules
        //prenomField.value = prenomField.value.charAt(0).toUpperCase() + prenomField.value.slice(1).toLowerCase();
        prenomField.value = capitalizeFirstLetter(prenomField.value);
      }
  
      // Modifie le message selon le pays sélectionné
      if (paysField.value === 'belgique') {
        messageField.value += '\nNous mangeons des Frites';
      } else if (paysField.value === 'australie') {
        messageField.value = 'Bonjour les Kangourous, ' + messageField.value;
      }
    });
  
    // Fonction pour afficher un message d'erreur
    function displayErrorMessage(element, message) {
      // Crée un élément span pour afficher le message d'erreur
      const errorSpan = document.createElement('span');
      errorSpan.textContent = ` ${message}`;
      errorSpan.style.color = 'yellow';
      errorSpan.style.backgroundColor = 'red';
      errorSpan.style.marginLeft = '1rem';
  
      // Ajoute le message d'erreur après l'élément concerné
      element.parentElement.appendChild(errorSpan);
    }
  
    // Fonction pour supprimer les messages d'erreur précédents
    function removePreviousMessages() {
      const errorSpans = document.querySelectorAll('span');
      errorSpans.forEach(span => span.remove());
    }
  });
  