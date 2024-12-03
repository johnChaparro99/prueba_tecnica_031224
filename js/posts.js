$(function () {
	$("#btn_guardar_posts").click(function(){
		guardarPosts();
	});

	$("#btn_editar_posts").click(function(){
		editarPosts();
	});

	cargarPosts();
});

function cargarPosts(){
	$.post('../controller/ctrl_posts.php', {accion:'cargarPosts'}, function(resp) {
	    let respuesta = jQuery.parseJSON(resp);

	    if(respuesta.success){
	    	//console.log(respuesta.tabla);
	    	$('#tb_posts').html(respuesta.tabla);
	    }else{
	    	Swal.fire(
			  'Error!',
			  respuesta.message,
			  'error'
			);
	    }
	});
}

function guardarPosts(){
	let titulo = $('#titulo').val();
	let contenido = $('#contenido').val();
	let categoria = $('#categoria').val();

	if (titulo != '' && contenido != '' && categoria != '') {
		$.post('../controller/ctrl_posts.php', 
			{
				accion:'guardarPosts',
				titulo: titulo,
				contenido: contenido,
				categoria: categoria
			}, 
			function(resp) {
			    let respuesta = jQuery.parseJSON(resp);

			    if(respuesta.success){
			    	Swal.fire(
					  'Hecho!',
					  respuesta.message,
					  'success'
					);
			    	
			    	limpiarFormHoteles();
			    	cargarPosts();
			    }else{
			    	Swal.fire(
					  'Error!',
					  respuesta.message,
					  'error'
					);
			    }
		});
	} else {
		Swal.fire(
		  'Ojo!',
		  'Los campos de titulo, contenido y categoria son obligatorios',
		  'warning'
		);
	}
}

function seleccionarPost(id_post){

	$.post('../controller/ctrl_posts.php', 
		{
			accion:'seleccionarPost',
			id_post: id_post,
		}, 
		function(resp) {
		    let respuesta = jQuery.parseJSON(resp);

		    if(respuesta.success){
		    	$('#id_post').val(respuesta.data[0]['id_post']);
				$('#titulo').val(respuesta.data[0]['titulo']);
		    	$('#contenido').val(respuesta.data[0]['contenido']);
				$('#categoria').val(respuesta.data[0]['categoria']);

				$('#btn_guardar_posts').addClass('oculto');
				$('#btn_editar_posts').removeClass('oculto');

				Swal.fire(
				  'Hecho!',
				  'Registro cargado',
				  'success'
				);
		    }else{
		    	Swal.fire(
				  'Error!',
				  respuesta.message,
				  'error'
				);
		    }
	});
	
}

function editarPosts(){
	let id_post = $('#id_post').val();
	let titulo = $('#titulo').val();
	let contenido = $('#contenido').val();
	let categoria = $('#categoria').val();

	if (titulo != '' && contenido != '' && categoria != '') {
		$.post('../controller/ctrl_posts.php', 
			{
				accion:'editarPosts',
				id_post: id_post,
				titulo: titulo,
				contenido: contenido,
				categoria: categoria
			}, 
			function(resp) {
			    let respuesta = jQuery.parseJSON(resp);

			    if(respuesta.success){
			    	Swal.fire(
					  'Hecho!',
					  respuesta.message,
					  'success'
					);
			    	
			    	$('#btn_guardar_hotel').removeClass('oculto');
					$('#btn_editar_hotel').addClass('oculto');
			    	limpiarFormHoteles();
			    	cargarPosts();
			    }else{
			    	Swal.fire(
					  'Error!',
					  respuesta.message,
					  'error'
					);
			    }
		});
	} else {
		Swal.fire(
		  'Ojo!',
		  'Los campos de Nombre del hotel, Dirección, Ciudad, Nit y Numero de cuartos son obligatorios',
		  'warning'
		);
	}
}

function eliminarPost(id_post){

	$.post('../controller/ctrl_posts.php', 
		{
			accion:'eliminarPost',
			id_post: id_post,
		}, 
		function(resp) {
		    let respuesta = jQuery.parseJSON(resp);

		    if(respuesta.success){
		    	cargarPosts();
				Swal.fire(
				  'Hecho!',
				  'Registro Eliminado',
				  'success'
				);
		    }else{
		    	Swal.fire(
				  'Error!',
				  respuesta.message,
				  'error'
				);
		    }
	});
	
}

function limpiarFormHoteles(){
	$('#id_post').val('');
	$('#titulo').val('');
	$('#contenido').val('');
	$('#categoria').val('');
}