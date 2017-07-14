$(document).ready(function($) {
	
	$('.btn-tarifa').click(function(event) {
		event.preventDefault();
		var tarjeta = $('#num-card').val();
		var saldo =0;
		var costo = 0;
		var saldoFinal = 0;

		$('.saldo-tarjeta').removeClass('hide');
		$('.saldo-tarjeta').html('');

		$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+tarjeta,
		type: 'GET',
		dataType: 'json',
		})
		.done(function(res)){
			$('.btn-tarifa').html('');
			costo = $('#tarifas-horario').val();

			$('.costo-pasaje').append(costo);
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