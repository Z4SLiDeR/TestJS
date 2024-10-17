$('h1').text('Hello'); //Changer du texte 

$('p').text('ceci est un para'); //Changer le texte de tous les p

$('.maClass').html('<p><b>Html modifié avec Jquery<b/></p>'); //changer le texte via la classe 

$('h1').css('color','blue'); // changer la coleur du h1

$('#monId').addClass('important'); //Ajout d'une class 

$('#monId').removeClass('important'); // Supprimer une class 

$('p').css('color','purple'); //Changer toutes les couleurs des p

$('h1').prepend('Oh : '); //Ajout de texte avant le titre

$('h1').append(' à toi !'); //Ajout de texte Après le titre

$('h1').before('<div>Hello</div>'); //Ajout d'un élément avant la balise h1

$('h1').after('<div>Hello</div>'); //Ajout d'un élément après la balise h1

$('div').remove(); //Supprimer les div => (Ce qui ont été ajouté au dessus)

$('h1').attr('class'); //Selectionner un attribut

$('h1').attr('style', 'text-transform: lowercase'); // Met le titre h1 en minuscule

$('h1').click(() => { //Ajout d'un écouteur en Jquery 
    $('h1').css('color', 'orange');
});

$('p').click(() => { //Permet de selectionner directement tous les élements p sur un écouteur
    $('h1').css('color', 'red');
});

$('h1').on('mouseover', () => { // quand on passe au dessus du titre, ajoute la class .important à #monId (1er p)
    $('#monId').addClass('important');
});

const url = 'https://blockchain.info/ticker'; // récuperer une requete ajax

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        $('h1').text(data.EUR.last + 'euros');
    },
    error: () => {
        alert('Merci de revenir plus tard.');
    }
});

const url_bis = 'https://lesoublisdelinfo.com/api.php'; // envoyer une requete ajax

$.ajax({
    url: url_bis,
    type: 'POST',
    data: "prenom=Jhon",
    dataType: 'json',
    success: (data) => {
        $('#monId').text(data.resultat);
    },
    error: () => {
        alert('Merci de revenir plus tard.');
    }
});

$('h1').hide(); //Cache le titre

$('h1').show(); //Affiche le titre

$('p').click(() => {
    $('h1').toggle(); //Affiche ou cache selon l'état le titre 
    $('h1').fadeOut(); // ou fadeIn() //Cache l'element mais avec une petite animation 
    $('h1').fadeToggle();
    $('h1').slideToggle();
    $('h1').animate({
      opacity: .7, // seulement les propriétés qui ont une valeur numérique
      margin: 30
    });
    $('h1').slideUp().slideDown().animate({ opacity: .7, margin: 30 });
  });