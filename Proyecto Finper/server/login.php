<?php

  require('conector.php');

  $con = new ConectorBD('localhost','id5083018_admin','admin123');
  $response['conexion'] = $con->initConexion('id5083018_usuarios_db');

  if ($response['conexion']=='OK') {
  $resultado_consulta = $con->consultar(['usuario'],
  ['email', 'passw'], 'WHERE email= "'.$_POST['email'].'" ');

  if ($resultado_consulta->num_rows != 0) {
    $fila = $resultado_consulta->fetch_assoc();
    if ($fila['passw'] == $_POST['passw']) {
      $response['acceso'] = 'concedido';
      session_start();
      $_SESSION['email']=$fila['email'];
    }else {
      $response['motivo'] = 'Contraseña incorrecta';
      $response['acceso'] = 'rechazado';
    }
  }else{
    $response['motivo'] = 'Email incorrecto ';
    $response['acceso'] = 'rechazado';
  }
}

  echo json_encode($response);
  $con->cerrarConexion();
 ?>
