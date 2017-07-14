$(document).ready(function() {
	var emailGuardado = $("#icon_prefix").text(localStorage.getItem("email"));
	$("#email").append(emailGuardado);
});
