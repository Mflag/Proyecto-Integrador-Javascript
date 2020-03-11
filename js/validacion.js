function validar(){
    $('.alerta').remove();
	var usuario = $('#usuario').val();
	var email = $('#email').val();
	var contraseña = $('#contraseña').val();
/*USUARIO*/
	if (usuario=="" || usuario==null) {
		Color("usuario");
		alerta1("Este campo es obligatorio");
		return false;
	}else{
		var expresion= /^[A-Za-z0-9]*$/;
		if (!expresion.test(usuario)) {
			Color("usuario");
			alerta1("Este campo permite letras mayusculas, minusculas y numeros");
		}
	}
/*CORREO*/
	if (email=="" || email==null) {
		Color("email");
		alerta2("Este campo es obligatorio");
		return false;
	}else{
		var expresion= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if (!expresion.test(email)) {
			Color("email");
			alerta2("Por favor ingrese un Email valido p-el:Bandera@outlook.com");
		}
	}
/*CONTRASEÑA*/	
	if (contraseña=="" || contraseña==null) {
		Color("contraseña");
		alerta3("Este campo es obligatorio");
		return false;
	}else{
		var expresion= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
		if (!expresion.test(contraseña)) {
			Color("contraseña");
			alerta3("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.");
		}
	}
	
	$('#btn').after('<button ><a href="juego.html">JUGAR</a></button>');
	return false

}

function Color(dato){
	$('#'+ dato).css({border:"1px solid #dd5144"})
}
function alerta1(texto){
	$('#usuario').before('<div class="alerta">'+texto+'</div>')
}function alerta2(texto){
	$('#email').before('<div class="alerta">'+texto+'</div>')
}function alerta3(texto){
	$('#contraseña').before('<div class="alerta">'+texto+'</div>')
}