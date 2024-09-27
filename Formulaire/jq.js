$(document).ready(function() {
    // Sélection du formulaire et gestion de la soumission
    $('#formu').submit(function(event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
  
      // Sélection des champs de formulaire
      const nomField = $('input[name="Nom"]');
      const prenomField = $('input[name="Prenom"]');
      const paysField = $('select[name="pays"]');
      const messageField = $('textarea[name="Message"]');
  
      // Supprime les messages d'erreur précédents
      $('span.error-message').remove();
  
      // Vérification et traitement du champ "Nom"
      if ($.trim(nomField.val()) === '') {
        displayErrorMessage(nomField, 'Nom manquant');
      } else {
        // Passe le nom en majuscules
        nomField.val(nomField.val().toUpperCase());
      }
  
      // Vérification et traitement du champ "Prénom"
      if ($.trim(prenomField.val()) === '') {
        displayErrorMessage(prenomField, 'Prénom manquant');
      } else {
        // Mettre la première lettre en majuscule et le reste en minuscules
        prenomField.val(prenomField.val().charAt(0).toUpperCase() + prenomField.val().slice(1).toLowerCase());
      }
  
      // Modifie le message selon le pays sélectionné
      if (paysField.val() === 'belgique') {
        messageField.val(messageField.val() + '\nNous mangeons des Frites');
      } else if (paysField.val() === 'australie') {
        messageField.val('Bonjour les Kangourous, ' + messageField.val());
      }
    });
  
    // Fonction pour afficher un message d'erreur
    function displayErrorMessage(element, message) {
      // Ajoute un élément span à côté de l'élément concerné
      $('<span class="error-message"></span>')
        .text(` ${message}`)
        .css({
          'color': 'yellow',
          'background-color': 'red',
          'margin-left': '1rem'
        })
        .insertAfter(element);
    }
  });
  