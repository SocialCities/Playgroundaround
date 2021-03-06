/**********************POSIZIONE*PARCO*/
function openGeo(back)
{
	//per prudenza cancello dati
	parzialeClear();
	popBack(back);

	sessionStorage.provenienza = 'nuovo';

	//mostra mappa e indirizzo
	localizzaMap(sessionStorage.lat, sessionStorage.longi);
	codeLatLng(sessionStorage.lat, sessionStorage.longi);
}
//mostra bottone conferma modifica indirizzo
function correggi()
{
	$('input').focus(function()
	{	
		$('#continua').hide();
		$('#correggi').show();
	});
}

/*****************************************INFO*PARCO*/
//avvio della pagina
function openNew(back)
{
	popBack(back);
	dataExists();
	valuta();
	checkAll();
}

/*CONTROLLI*E*ATTIVAZIONI*CAMPI*/

//se ho già inserito dei dati, li mostro a video
function dataExists()
{
	//se ho già caricato delle foto
	if(sessionStorage.listaPathFoto)
	{	
		//mostro anteprime
		$('#uploadedPhoto').html(sessionStorage.listaPathFoto);
		//nascondo bottone caricamento
		$('#addPhoto').hide();
	}
	else
	{
		//posso caricare al massimo 10 foto
		sessionStorage.fotoMancanti = 10;
	}

	//se ho già inserito dei dati
	if(sessionStorage.newTitle)
	{
		$('#title').val(sessionStorage.newTitle);
		$('#opening').val(sessionStorage.newOpening);
		$('#target_min').val(sessionStorage.newTarget_min);
		$('#target_max').val(sessionStorage.newTarget_max);
		$('#description').val(sessionStorage.newDesc);
		$('#note').val(sessionStorage.note);
		$('#email').val(sessionStorage.email);

		switch (sessionStorage.valutazione)
		{
			case '1':
				$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
			break;

			case '2':
				$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
			break;

			case '3':
				$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star');
			break;

			case '4':
				$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star');
			break;

			case '5':
				$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star');
				$('#rate i:nth-of-type(5)').attr('class', 'fa fa fa-3x fa-star');
			break;
		}
	}
}

//abilito rating parco
function valuta()
{
	$('#rate i:first-of-type').click(function()
	{
		sessionStorage.valutazione = 1;

		//accesi
		$(this).attr('class', 'fa fa fa-3x fa-star');
		//spenti
		$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(5)').attr('class', 'fa fa fa-3x fa-star-o');
	});

	$('#rate i:nth-of-type(2)').click(function()
	{
		sessionStorage.valutazione = 2;

		//accesi
		$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star'); 
		$(this).attr('class', 'fa fa fa-3x fa-star');
		//spenti
		$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(5)').attr('class', 'fa fa fa-3x fa-star-o');
	});

	$('#rate i:nth-of-type(3)').click(function()
	{
		sessionStorage.valutazione = 3;

		//accesi
		$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star'); 
		$(this).attr('class', 'fa fa fa-3x fa-star'); 
		//spenti
		$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star-o');
		$('#rate i:nth-of-type(5)').attr('class', 'fa fa fa-3x fa-star-o');
	});

	$('#rate i:nth-of-type(4)').click(function()
	{
		sessionStorage.valutazione = 4;

		//accesi
		$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star'); 
		$(this).attr('class', 'fa fa fa-3x fa-star');
		//spenti
		$('#rate i:nth-of-type(5)').attr('class', 'fa fa fa-3x fa-star-o');
	});

	$('#rate i:nth-of-type(5)').click(function()
	{
		sessionStorage.valutazione = 5;

		//accesi
		$('#rate i:first-of-type').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(2)').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(3)').attr('class', 'fa fa fa-3x fa-star');
		$('#rate i:nth-of-type(4)').attr('class', 'fa fa fa-3x fa-star'); 
		$(this).attr('class', 'fa fa fa-3x fa-star'); 
	});
}

//rende pannelli servizi cliccabili
function checkAll()
{
	$(".alert").click(function()
	{
		if($('input', this).is(':checked'))
		{
			$('input', this).prop('checked', false);
			$(this).removeClass('alert-success');
			$(this).addClass('alert-danger');
			$('i', this).prop('class', 'fa fa-square-o');
		}else
		{
			$('input', this).prop('checked', true);
			$(this).removeClass('alert-danger');
			$(this).addClass('alert-success');
			$('i', this).prop('class', 'fa fa-check-square-o');
		}
	});

	$("#policy").click(function()
	{
		if($('input', this).is(':checked'))
		{
			sessionStorage.consensoPrivacy = 'True';
		}else
		{
			sessionStorage.consensoPrivacy = 'False';
		}
	});

}

/*CAMPI*REQUIRED*/
function checkRequired()
{
	//evidenzio required mancanti (nome, descrizione)
	$('.required').each(function()
	{
	    if($(this).val().length < 5)
	    { 
	    	$(this).addClass("error");
	    }
	});

	$('#email').each(function()
	{
	    if($(this).val().length < 5 || $(this).val().indexOf('@') === -1 || $(this).val().indexOf('.') === -1)
	    { 
	    	$(this).addClass("error");
	    }
	});

	if(sessionStorage.consensoPrivacy != 'True')
	{
		$('#policy').addClass("error2");
	}

	//se mancanti blocco
	if( $("#formInsParco .error").length > 0 || $("#formInsParco .error2").length > 0)
	{
		//mostro alert dati mancanti
   		scrollAlto();
    	$('#datiMancanti').modal();

    	noErrorOnClick();
	}
	else
	{	
		$('#cortina').fadeIn();
		confermaParco();
	}
}
//on click tolgo evidenziazione
function noErrorOnClick()
{
	$('.required').focus(function()
	{	
		$(this).removeClass("error");
	});
	$('#email').focus(function()
	{	
		$(this).removeClass("error");
	});
	$('#policy').click(function()
	{	
		$(this).removeClass("error2");
	});
}

/*INVIO*PARCO*/
function confermaParco()
{
	$.when(getDati())
     .then(function (){
		inviaDati();
	});

}
//get di tutti i dati
function getDati()
{
	//get rating
	if(!sessionStorage.valutazione)
	{
		sessionStorage.valutazione = 0;
	}

	//get checkbox
	if($('#fenced input').is(':checked'))
	{
		sessionStorage.fenced = 'True';
	}else
	{
		sessionStorage.fenced = 'False';
	}

	if($('#park input').is(':checked'))
	{
		sessionStorage.park = 'True';
	}else
	{
		sessionStorage.park = 'False';
	}

	if($('#picnic input').is(':checked'))
	{
		sessionStorage.picnic = 'True';
	}else
	{
		sessionStorage.picnic = 'False';
	}

	if($('#snack input').is(':checked'))
	{
		sessionStorage.snack = 'True';
	}else
	{
		sessionStorage.snack = 'False';
	}

	if($('#toilette input').is(':checked'))
	{
		sessionStorage.toilette = 'True';
	}else
	{
		sessionStorage.toilette = 'False';
	}

	if($('#cleaning input').is(':checked'))
	{
		sessionStorage.cleaning = 'True';
	}else
	{
		sessionStorage.cleaning = 'False';
	}

	if($('#handicap input').is(':checked'))
	{
		sessionStorage.handicap = 'True';
	}else
	{
		sessionStorage.handicap = 'False';
	}

	//alert('FENCED:'+sessionStorage.fenced+' PARK:'+sessionStorage.park+' PICNIC:'+sessionStorage.picnic+' SNACK:'+sessionStorage.snack+' TOILETTE:'+sessionStorage.toilette+' CLEANING:'+sessionStorage.cleaning+' HANDICAP:'+sessionStorage.handicap);

	//get input
	sessionStorage.newTitle = $('#title').val();
	sessionStorage.newOpening = $('#opening').val();
	sessionStorage.newTarget_min = $('#target_min').val();
	sessionStorage.newTarget_max = $('#target_max').val();
	sessionStorage.newDesc = $('#description').val();
	sessionStorage.note = ''+$('#note').val();
	sessionStorage.email = $('#email').val();

	//get condizioni
	if($('#promo input').is(':checked'))
	{
		sessionStorage.promo_email = 'True';
	}else
	{
		sessionStorage.promo_email = 'False';
	}

	//completo se dati mancanti
	if(sessionStorage.newOpening == '')
	{
		sessionStorage.newOpening = '0-24';
	}
	if(sessionStorage.newTarget_min == '')
	{
		sessionStorage.newTarget_min = 0;
	}
	if(sessionStorage.newTarget_max == '')
	{
		sessionStorage.newTarget_max = 99;
	}

}

//invio dati al server
function inviaDati()
{
	//alert(sessionStorage.newLati+' '+sessionStorage.newLongi+' '+sessionStorage.newAddress+' '+sessionStorage.newTitle+' '+sessionStorage.newOpening+' '+sessionStorage.newTarget_min+' '+sessionStorage.newTarget_max+' '+sessionStorage.newDesc+' '+sessionStorage.note+' '+sessionStorage.valutazione+' '+sessionStorage.email+' '+sessionStorage.fenced+' '+sessionStorage.picnic+' '+sessionStorage.snack+' '+sessionStorage.park+' '+sessionStorage.toilette+' '+sessionStorage.cleaning+' '+sessionStorage.handicap);

	$.ajax({
		type: 'POST',
		url: indirizzo+'/inserimento_parco_2',
		data: {
			'name' : sessionStorage.newTitle,
			'indirizzo' : sessionStorage.newAddress,
			'longitude' : sessionStorage.newLongi,
			'latitude' : sessionStorage.newLati,
			'descrizione_it_parco' : sessionStorage.newDesc,
			'descrizione_en_parco' : '',
			'age_min' : sessionStorage.newTarget_min,
			'age_max' : sessionStorage.newTarget_max,
			'opening_hours' : sessionStorage.newOpening,
			'picnic' : sessionStorage.picnic,
			'parking' : sessionStorage.park,
			'fenced_area' : sessionStorage.fenced,
			'toilette' : sessionStorage.toilette,
			'caffe' : sessionStorage.snack,
			'cleaning' :sessionStorage.cleaning,
			'universally_accessible' : sessionStorage.handicap,
			'other' : sessionStorage.note,
			'evaluation' : sessionStorage.valutazione,
			'email' : sessionStorage.email,
			'promo_email' : sessionStorage.promo_email,
			'promozionale' : 'false'
		},
		contentType: 'application/x-www-form-urlencoded',
		error: errorHandler,
		success: datiInviati
	})

}

function caricaParcoEsistente()
{
	if($('#email').val().indexOf('@') === -1 || $('#email').val().indexOf('.') === -1)
	{
		$('#datiMancanti').modal();
		$('#email').addClass("error");
		noErrorOnClick();
	}
	else
	{
		sessionStorage.emailParcoEsistente = $('#email').val();
		associaFotoParco();
	}
}

function datiInviati(data)
{
	//alert('dati inviati '+data);
	dataJson = JSON.parse(data);
	sessionStorage.idParco = dataJson.id;
	sessionStorage.successParco = dataJson.testo;

	//se non ho caricato foto
	if(sessionStorage.listaIdFoto)
	{
		associaFotoParco();
	}
	else
	{
		parzialeClear();
		window.location='inserisci_ok.html';
	}
}
//associo foto al parco appena creato
function associaFotoParco()
{
	$.ajax({
		type: 'POST',
		url: indirizzo+'/associa_parco_foto',
		data: {
			'id_parco' : sessionStorage.idParco,
			'foto' : sessionStorage.listaIdFoto,
			'email' : sessionStorage.emailParcoEsistente
		},
		contentType: 'application/x-www-form-urlencoded',
		error: errorHandler,
		success: associaOk
	})
}

function associaOk(data)
{
	//alert('immagini associate '+data);
	parzialeClear();
	window.location='inserisci_ok.html';
}

//checkbox autorizzazione
function checkPermission()
{
	$("#autorizzazione").click(function()
	{
		//alert('click');
		if($('input', this).is(':checked'))
		{
			//alert('A checkato');

			$('input', this).prop('checked', false);
			$(this).removeClass('alert-success');
			$(this).addClass('alert-danger');
			$('i', this).prop('class', 'fa fa-square-o');

			$('#completaFoto').attr('disabled', 'disabled');
		}else
		{
			//alert('B non checkato');

			$('input', this).prop('checked', true);
			$(this).removeClass('alert-danger');
			$(this).addClass('alert-success');
			$('i', this).prop('class', 'fa fa-check-square-o');

			$('#completaFoto').removeAttr('disabled');
		}
	});
}

/**************************************INSERISCI*OK*/
function openInserisciOk(back)
{
	popBack(back);

	if(sessionStorage.provenienza == 'nuovo')
	{
		$('#parcoInserito span').html(sessionStorage.successParco);
		$('#parcoInserito').show();

		//dataClear();
	}
	else if(sessionStorage.provenienza == 'vecchio')
	{
		$('#fotoInserite').show();
	}
	else if(sessionStorage.provenienza == 'commento')
	{
		$('#commentoInserito').show();	
	}
}

/******************************CANCELLAZIONE*DATI*/
function dataClear()
{
	sessionStorage.clear();
}
function parzialeClear()
{
	delete sessionStorage.emailParcoEsistente;

	delete sessionStorage.listaIdFoto;
	delete sessionStorage.listaPathFoto;
}

/***********************************COMMENTA*PARCO*/
function commentoOpen(back)
{
	popBack(back);
	$('#formInsCommento h2 span').html(sessionStorage.titoloParco);
}

function commentoCheck()
{	
	commento = $('#comment').val();
	if(commento.length < 5)
	{
		$('#comment').addClass("error");
	}

	email = $('#email').val();
	if(email.indexOf('@') === -1 || email.indexOf('.') === -1)
	{
		$('#email').addClass("error");
	}

	//se mancanti blocco
	if( $("#formInsCommento .error").length > 0)
	{
		//mostro alert dati mancanti
    	$('#datiMancanti').modal();

    	noErrorOnClick();
	}
	else
	{
		commentoSend(commento, email);
	}
}
function commentoSend(commento, email)
{
	$.ajax({
		type: 'POST',
		url: indirizzo+'/invia_commento',
		data: {
			'id_parco' : sessionStorage.idParco,
			'testo' : commento,
			'email' : email
		},
		contentType: 'application/x-www-form-urlencoded',
		error: errorHandler,
		success: commentoInviato
	})
}
function commentoInviato()
{
	sessionStorage.provenienza = 'commento';
	window.location='inserisci_ok.html';
}