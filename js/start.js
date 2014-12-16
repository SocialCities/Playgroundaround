document.addEventListener('deviceready', partenza, true);

//AL CARICAMENTO DELLA PAGINA
function partenza()
{	
	jQuery.support.cors = true;

	document.addEventListener('backbutton', backButtonCallback, true);
}


/****************************/
function pop(){
	navbarPop();
	footerPop();
}

function navbarPop(){
	$('body').prepend('<nav class="navbar navbar-inverse navbar-static-top" role="navigation">'+
          '<div class="container">'+
            '<div class="navbar-header">'+
              '<a class="navbar-brand" href="#">'+
                '<img alt="brand" src="./img/logo.png">'+
              '</a>'+
              '<button type="button" class="btn navbar-btn" onClick="window.location=\'aggiungi.html\'">Inserisci</button>'+
            '</div>'+
          '</div>'+
        '</nav>');
}

function footerPop(){
	$('#bottom').html('<nav id="footer" class="navbar-fixed-bottom">'+
          '<div class="container">'+
              '<a href="credits.html">credits</a>'+
          '</div>'+
        '</nav>');
}

function scrollAlto(){
	$('html, body').animate({scrollTop: 0 }, 'slow');
}

/************************/

//Inizializza la geolocalizzazione veloce
function localize()
{ 
	var wathcID = navigator.geolocation.getCurrentPosition(handle_localize, {enableHighAccuracy: false, maximumAge: 300000, timeout: 10000});
}
function handle_localize(position)
{  	
	sessionStorage.lat = position.coords.latitude;
	sessionStorage.longi = position.coords.longitude;

	alert('Ti trovi a: LATI:'+sessionStorage.lat+' LONGI:'+sessionStorage.longi);
}