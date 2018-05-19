$(document).ready(function(){
	

	$('#txtNome').keyup(function(){
		var nome = $(this).val();

		if (nome.length>=2 && $('#alerta').css('display') == 'none'){
			$('#alerta').show();

	}


	$('#alerta').html(nome);
	
	});


	



});