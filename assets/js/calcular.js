$(document).ready(function($) {
	
	$('.btn-tarifa').click(function(event) {
		event.preventDefault();
		var tarjeta = $('#num-card').val();
		var saldo =0;
		var costo = 0;
		var saldoFinal = 0;

		$('.costo-pasaje').removeClass('hide');
		$('.saldo-actual').removeClass('hide');
		$('.saldo-tarjeta').html('');

		$.ajax({
		url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+tarjeta,
		type: 'GET',
		dataType: 'json',
		})
		.done(function(){
			$('.btn-tarifa').html('');
			costo = $('#tarifas-horario').val();

			$('.costo-pasaje').append('<p>El costo del pasaje es: </p>'+ costo);
		})

		.done(function(e){
			saldo = e.saldoTarjeta;
			saldoFinal = parseInt(saldo.substr(1).split(".").join("")) - parseInt(costo);
			console.log(saldoFinal);
			$('.saldo-actual').append('<p>Su saldo final es: </p>'+ saldoFinal);
		})

		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});


});