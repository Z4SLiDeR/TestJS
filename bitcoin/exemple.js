const url = 'https://blockchain.info/ticker';

function recupeterPrix () {
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType ='json';
    requete.send();
    
    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE)
        {
            if(requete.status === 200)
            {
                let reponse = requete.response;
                let prixEnEuro = reponse.EUR.last;  
                document.querySelector('#price_label').textContent = prixEnEuro; 
            }
            else
            {
                alert('Erreur, revenez plus tard !');
            }
        }
    };
}

recupeterPrix();
setInterval(recupeterPrix, 5000);