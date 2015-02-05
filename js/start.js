var indirizzo = 'http://app.playgroundaroundthecorner.it';

document.addEventListener('deviceready', partenza, true);

//AL CARICAMENTO DELLA PAGINA
function partenza()
{	
	window.onerror = function (message, file, line) {
    	alert("Error in Application: " +
	        message + ". Source File: " + file + ", Line: " + line);
	}

	//document.addEventListener('backbutton', backButtonCallback, true);
}


/*********************STRUTTURA*/
function popHome()
{
	//logo normale + refresh pagina
	$('body').prepend('<nav id="navbar" class="navbar navbar-inverse navbar-static-top" role="navigation">'+
      '<div class="container">'+
        '<div class="navbar-header">'+
          '<a id="logoNav" class="navbar-brand" href="index.html">'+
            '<img alt="brand" src="./img/segnaposto_trasp.png">'+
          '</a>'+
          '<button type="button" class="btn navbar-btn around" onClick="window.location=\'inserisci_coord.html\'"><i class="fa fa-child"></i> Inserisci</button>'+
        '</div>'+
      '</div>'+
    '</nav>');

	footerPop();
}
function popBack()
{
	//logo con freccia + pagina back
	$('body').prepend('<nav id="navbar" class="navbar navbar-inverse navbar-static-top" role="navigation">'+
      '<div class="container">'+
        '<div class="navbar-header">'+
          '<a id="logoNav" class="navbar-brand" href="javascript:history.go(-1);">'+
            '<img alt="brand" src="./img/segnaposto_trasp_back.png">'+
          '</a>'+
          '<button type="button" class="btn navbar-btn around" onClick="window.location=\'inserisci_coord.html\'"><i class="fa fa-child"></i> Inserisci</button>'+
        '</div>'+
      '</div>'+
    '</nav>');

	footerPop();
}

function footerPop()
{
	$('#bottom').html('<nav id="footer" class="navbar-fixed-bottom">'+
          '<div class="container">'+
              '<a href="credits.html">credits</a>'+
          '</div>'+
        '</nav>');
}

function scrollAlto()
{
	$('html, body').animate({scrollTop: 0 }, 'slow');
}

/****************LOCALIZZAZIONE*/

function localize()
{ 
	var wathcID = navigator.geolocation.getCurrentPosition(handle_localize, error_localize, {enableHighAccuracy: false, maximumAge: 300000, timeout: 10000});
}
function handle_localize(position)
{  	
	sessionStorage.lat = position.coords.latitude.toFixed(3);
	sessionStorage.longi = position.coords.longitude.toFixed(3);

	getCover();

	//alert('Ti trovi a: LATI:'+sessionStorage.lat+' LONGI:'+sessionStorage.longi);
}

function getCover()
{
	resolution();

	$.ajaxSetup({ cache: false });
	$.ajax({
		type:'GET',
		//url: indirizzo+'get_copertina?lat='+sessionStorage.lat+'&lng='+sessionStorage.longi,
		url: 'http://app.playgroundaroundthecorner.it/get_copertina?lat='+sessionStorage.lat+'&lng='+sessionStorage.longi,
		success: appendCover,
		error: errorHandler
	});

}
function appendCover(data)
{
	//se non ho copertine entro 20km
	if(data != 'no_copertina')
	{
		//scelgo risoluzione copertina
		if(sessionStorage.deviceHeight <= 1000)
		{
			sessionStorage.imgPath = indirizzo+data.small_path;
		}
		else
		{
			sessionStorage.imgPath = indirizzo+data.big_path;
		}
		
		sessionStorage.headTitle = data.descrizione_it;
	}

	checkCover();
}
//se abbiamo l'immagine di copertina la facciamo apparire
function checkCover()
{
	if(sessionStorage.imgPath){
		$('#header .imgCover').css('background-image','url('+sessionStorage.imgPath+')');
		
		//gestione caricamento immagine cover
		var img = new Image();
		var imageSrc = sessionStorage.imgPath;
		img.onload = function() {
		    $('#header .imgCover').fadeIn('slow');
		    $('#header h1').html(sessionStorage.headTitle);
		    $('#cortina').fadeOut();
		};
		img.src = imageSrc;
	}else
	{
		$('#cortina').fadeOut();
	}
	
}

/*********************RISOLUZIONE*/
function resolution()
{
	sessionStorage.deviceWidth = screen.width;
	sessionStorage.deviceHeight = screen.height;

	//alert('Risoluzione screen: '+sessionStorage.deviceWidth+' '+sessionStorage.deviceHeight);
}

/*****************ERRORI*/

function error_localize()
{
	modalGPS();
}
function modalGPS()
{
	scrollAlto();
	$('#attivaGPS').modal();
}

function errorHandler(xhr, textStatus, thrownError)
{
	alert("Errore "+xhr.status+" - "+textStatus);

	/*console.log(xhr.status);
	console.log(xhr.responseText);
	console.log(textStatus);
	console.log(thrownError);*/
}