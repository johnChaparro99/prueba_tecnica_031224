$(function () {
	$("#enviar").click(function(){
		iniciarSession();
	});

	$("#cerrarSession").click(function(){
		cerrarSession();
	});

	$('#nav_usuarios').click(function(){
		$('#usuarios_form').removeClass('oculto');
		$('#posts_form').addClass('oculto');
	});


	$('#nav_posts').click(function(){
		$('#posts_form').removeClass('oculto');
		$('#usuarios_form').addClass('oculto');
		
	});

	

});

function iniciarSession(){
	let cedula = $('#cedula').val();
	let contrasenia = $('#contrasenia').val();

	if (cedula != '' && contrasenia != '') {
		$.post('controller/general.php', {cedula : cedula, contrasenia: contrasenia, accion:'login'}, function(resp) {
		    let respuesta = jQuery.parseJSON(resp);
		    
		    if(respuesta.success){

		    	location.href = 'view/principal.php';
		    }else{
		    	$('#cedula').val('');
				$('#contrasenia').val('');

		    	Swal.fire(
				  'Error!',
				  respuesta.message,
				  'error'
				);
		    }
		});
	}else{
		Swal.fire(
		  'Error!',
		  'los campos deben estar diligenciados',
		  'error'
		)
	}
}

function cerrarSession(){
	$.post('../controller/general.php', {accion:'cerrarSession'}, function(resp) {
		console.log(resp);
	    let respuesta = jQuery.parseJSON(resp);

	    if(respuesta.success){
	

	    	location.href = '../index.html';
	    }else{
	    	$('#cedula').val('');
			$('#contrasenia').val('');

	    	Swal.fire(
			  'Error!',
			  respuesta.message,
			  'error'
			);
	    }
	});
}

