<?php

  include('conector.php');

  $data['first_name'] = "'".$_POST['first_name']."'";
  $data['last_name'] = "'".$_POST['last_name']."'";
  $data['date'] = "'".$_POST['date']."'";
  $data['passw'] = "'".$_POST['passw']."'";
  $data['email'] = "'".$_POST['email']."'";


  $con = new ConectorBD('localhost','id5083018_admin','admin123');
  $response['conexion'] = $con->initConexion('id5083018_usuarios_db');

  if ($response['conexion']=='OK') {
    if($con->insertData('usuario', $data)){
      $response['msg']="exito en la inserción";
    }else {
      $response['msg']= "Hubo un error y los datos no han sido cargados";
    }
  }else {
    $response['msg']= "No se pudo conectar a la base de datos";
  }

  echo json_encode($response);

 ?>
