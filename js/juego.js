function comenzar(){

	$('#orilla1').html('<img id="1" class="imagenes" src="img/maiz.png"><img id="2" class="imagenes" src="img/borrego.png"><img id="3" class="imagenes" src="img/lobo.png">');
	$('#comenzar').css('display','none');
	$('#comenzar').after('<select name="dato" id="dato1"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn1" >Elegir</button>')
	/*PRIMER PASO*/
	$('#btn1').click(function primero(){
		var primero = $('#dato1').val();
		if (primero=='borrego') {
			$('#resultado').html('<h1>El borrego cruzo el lago</h1>')
			$('#btn1').remove();
			$('#dato1').remove();
			$('#comenzar').after('<select name="dato" id="dato2"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn2" >Elegir</button>');
			$('#2').remove();
			$('#orilla2').append('<img id="2" class="imagenes" src="img/borrego.png">')	
				/*SEGUNDO PASO*/
				$('#btn2').click(function segundo(){
					var segundo = $('#dato2').val()
					if (segundo=='maiz'||segundo=='lobo') { $('#resultado').html('<h1>El '+segundo+' cruzo el lago</h1>');
						if (segundo=='maiz') {
							var img = 1;
						}
						if (segundo=='lobo') {
							var img = 3;
						}
						$('#'+img).remove();
						$('#orilla2').append('<img id="'+img+'" class="imagenes" src="img/'+segundo+'.png">')

					}else{
						$('#resultado').html('<h1>Ya has movido a el borrego<h1>');
						return segundo;
					}
					$('#btn2').remove();
					$('#dato2').remove();
					$('#comenzar').after('<select name="dato" id="dato3"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn3" >Elegir</button>');
					    /*TERCER PASO*/	
						$('#btn3').click(function tercero(){
							var tercero = $('#dato3').val();
							if (tercero==segundo) {
								$('#resultado').html('<h1>Ya a movido el '+segundo+'</h1>')
								return tercero;
							}
							if (tercero=='borrego') {
							$('#resultado').html('<h1>El borrego volvio al otro lado</h1>')
							$('#2').remove();
							$('#orilla1').append('<img id="2" class="imagenes" src="img/borrego.png">')
							
							}
							if (segundo=='lobo') {
								if (tercero=='maiz') {
									$('#resultado').html('<h1>El lobo se comio a el borrego</h1>')
									$('#btn3').remove();
									$('#dato3').remove();
									$('#comenzar').css('display','')
									$('#1').remove();
									$('#2').remove();
									$('#3').remove();
									return comenzar
								}

							}
							if (segundo=='maiz') {
								if (tercero=='lobo') {
									$('#resultado').html('<h1>El borrego se comio el maiz</h1>')
									$('#btn3').remove();
									$('#dato3').remove();
									$('#comenzar').css('display','')
									$('#1').remove();
									$('#2').remove();
									$('#3').remove();
									return comenzar
								}
							}
						$('#btn3').remove();
						$('#dato3').remove();
						$('#comenzar').after('<select name="dato" id="dato4"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn4" >Elegir</button>');
							/*CUARTO PASO*/
							$('#btn4').click(function cuarto(){
								var cuarto = $('#dato4').val();
								if (cuarto==tercero) {
									$('#resultado').html('<h1>Ya a movido el '+cuarto+'</h1>');
									return cuarto;
								}
								if (segundo=='lobo') {
									if (cuarto=='lobo') {
										$('#resultado').html('<h1>El borrego se comio el maiz</h1>');
									$('#btn4').remove();
									$('#dato4').remove();
									$('#comenzar').css('display','');
									$('#1').remove();
									$('#2').remove();
									$('#3').remove();
									return comenzar;

									}
									if (cuarto=='maiz') {
										$('#resultado').html('<h1>El maiz cruzo el lago</h1>');
										$('#btn4').remove();
										$('#dato4').remove();
										$('#comenzar').after('<select name="dato" id="dato5"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn5" >Elegir</button>');
										$('#1').remove();
										$('#orilla2').append('<img id="1" class="imagenes" src="img/maiz.png">')	;				
															$('#btn5').click(function quinto(){
																var quinto= $('#dato5').val();
																if (quinto==cuarto) {
																	$('#resultado').html('<h1>Ya has movido a el '+quinto+'</h1>')
																	return quinto
																}
																if (quinto=='borrego') {
																	$('#2').remove();
																	$('#orilla2').append('<img id="2" class="imagenes" src="img/borrego.png">');
																	
																	$('#resultado').html('<h1>GANASTE</h1>');
																}
																if (quinto=='lobo') {
																	$('#resultado').html('<h1>Estas a solo un pason intentalo nuevamente</h1>');
																	return quinto
																}
															})	
									}

								}
								if (segundo=='maiz') {
									if (cuarto=='maiz') {
										$('#resultado').html('<h1>El lobo se comio el borrego</h1>');
										$('#btn4').remove();
										$('#dato4').remove();
										$('#comenzar').css('display','');
										$('#1').remove();
										$('#2').remove();
										$('#3').remove();
										return comenzar;

									}
									if (cuarto=='lobo') {
										$('#resultado').html('<h1>El lobo cruzo el lago</h1>');
										$('#btn4').remove();
										$('#dato4').remove();
										$('#comenzar').after('<select name="dato" id="dato5"> <option value="maiz">Maiz</option><option value="borrego">Borrego</option><option value="lobo">Lobo</option></select><button id="btn5" >Elegir</button>');
										$('#3').remove();
										$('#orilla2').append('<img id="3" class="imagenes" src="img/lobo.png">')					
															$('#btn5').click(function quinto(){
																var quinto= $('#dato5').val();
																if (quinto==cuarto) {
																	$('#resultado').html('<h1>Ya has movido a el '+quinto+'</h1>')
																	return quinto
																}
																if (quinto=='borrego') {
																	$('#2').remove();
																	$('#orilla2').append('<img id="2" class="imagenes" src="img/borrego.png">');
																	
																	$('#resultado').html('<h1>GANASTE</h1>');
																	
																}
																if (quinto=='maiz') {
																	$('#resultado').html('<h1>Estas a solo un pason intentalo nuevamente</h1>');
																	return quinto;
																}	
															})	
									}
								}
							})
						})
				})

		}
		if (primero=='lobo') {
			$('#resultado').html('<h1>El borrego se comio el maiz</h1>');
			
			$('#btn1').remove();
			$('#dato1').remove();
			$('#comenzar').css('display','')

		}
		if (primero=='maiz') {
			$('#resultado').html('<h1>El lobo se comio a el borrego</h1>');
			
			$('#btn1').remove();
			$('#dato1').remove();
			$('#comenzar').css('display','');
		}
	})
}