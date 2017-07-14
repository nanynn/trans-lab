$(document).ready(function() {


	$('.btn-saldo').click(function(event) {
		event.preventDefault();
		var tarjeta = $('#num-card').val();
		var saldo ="";
		$('.saldo-tarjeta').removeClass('hide');

		$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+tarjeta,
		type: 'GET',
		dataType: 'json',
		})
		.done(function(res) {
			console.log(res.saldoTarjeta);
			$('.saldo-tarjeta').append('<p>Su saldo es: </p>'+res.saldoTarjeta);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});
});


	
	


//marti:49887442
//vale:18048267
