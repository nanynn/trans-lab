$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();

	$('#btn-inicio').click(function(e) {
		e.preventDefault();
		validarCorreo();
		validarContra();

		if(validarCorreo() && validarContra()){
			window.open('opciones.html','_self',false);
			var email = $('#icon_prefix').val();
			localStorage.setItem("email", email);
		}
	});
});


var validarCorreo = function(){
	var email = $('#icon_prefix').val();
	var validarEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

	if(!validarEmail){
		$('#icon_prefix').append(alert('Debes ingresar un correo valido main@domain.com'));
		return false;
	}
	else{
		return true;	
	}	
};

var validarContra= function(){
	var password = $('#icon_telephone').val();
	var validarPass= (/[0-8]+/).test(password);

	if (!validarPass){
		$('#icon_telephone').append(alert('Debes ingresar una contraseña válida de 8 dígitos'));
		return false;
	}else{
		return true;
	}
};
	

var api = function(){
	var num = $('#saldo-card').val();

	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=49887442',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(res) {
		console.log(res);
			Array.from(res.saldoTarjeta).forEach(function(element){
				console.log(element);
			});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}

//marti:49887442
//vale:18048267
