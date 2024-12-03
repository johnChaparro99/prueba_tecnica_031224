<?php 
include ('../conexion/conectar.php');
include('../model/mdl_posts.php');


$accion = $_POST['accion'];

switch ($accion) {
	case 'cargarPosts':
		cargarPosts();
		break;

		case 'guardarPosts':
		guardarPosts();
		break;

		case 'seleccionarPost':
		seleccionarPost();
		break;
	
		case 'editarPosts':
		editarPosts();
		break;

		case 'eliminarPost':
		eliminarPost();
		break;
	
}

function cargarPosts(){
	$post = new Posts;
	$datos = json_decode($post->cargarPosts());
	$tabla = '';
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {
		foreach ($datos->data as $key => $value) {
			$tabla .= '<tr>';
				$tabla .= '<th scope="row">'.$value->id_post.'</th>';
				$tabla .= '<td>'.$value->titulo.'</td>';
				$tabla .= '<td>'.$value->contenido.'</td>';
				$tabla .= '<td>'.$value->categoria.'</td>';
				$tabla .= '<td>'.$value->fecha_creacion .'</td>';
				$tabla .= '<td>';
					$tabla .= '<i class="fa fa-pencil" aria-hidden="true" style="margin-right: 15px;" onclick="seleccionarPost('.$value->id_post.')"></i>';
			        $tabla .= '<i class="fa fa-trash" aria-hidden="true" onclick="eliminarPost('.$value->id_post.')"></i>';
				$tabla .= '</td>';
			$tabla .= '</tr>';
		}

		$respuesta['success'] = true;
		$respuesta['tabla'] = $tabla;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

function guardarPosts(){
	$post = new Posts;

	$titulo = $_POST['titulo'];
	$contenido = $_POST['contenido'];	
	$categoria = $_POST['categoria'];

	$datos = json_decode($post->guardarPosts($titulo,$contenido,$categoria));
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {
		$respuesta['success'] = true;
		$respuesta['message'] = $datos->message;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

function seleccionarPost(){
	$post = new Posts;

	$id_post = $_POST['id_post'];

	$datos = json_decode($post->seleccionarPost($id_post));
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {

		$respuesta['success'] = true;
		$respuesta['data'] = $datos->data;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

function editarPosts(){
	$post = new Posts;

	$id_post = $_POST['id_post'];
	$titulo = $_POST['titulo'];
	$contenido = $_POST['contenido'];
	$categoria = $_POST['categoria'];

	$datos = json_decode($post->editarPosts($id_post,$titulo,$contenido,$categoria));
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {
		$respuesta['success'] = true;
		$respuesta['message'] = $datos->message;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

function eliminarPost(){
	$post = new Posts;

	$id_post = $_POST['id_post'];

	$datos = json_decode($post->eliminarPost($id_post));
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {

		$respuesta['success'] = true;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

function cargarListaAlimentos(){
	$usuarios = new Alimentos;
	
	$datos = json_decode($usuarios->cargarListaAlimentos());
	$respuesta = array();

	//var_dump($datos->data);
	if ($datos->success) {
		$respuesta['success'] = true;
		$respuesta['data'] = $datos->data;
	} else {
		$respuesta['success'] = false;
		$respuesta['message'] = $datos->message;
	}

	echo json_encode($respuesta);
}

?>