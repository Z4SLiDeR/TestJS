if ('geolocation' in navigator)
{
    let options = {
        enableHighAccuracy : true, //Précision max
        timeout : 10000
    }

    let watch = navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }, error, options);

    navigator.geolocation.clearWatch(watch);

    function error() 
    { 
        alert('Vous avez refusé la géo')
    }
}
else
{
    alert('La géolocalisation ne peut pas être utilisée.');
}