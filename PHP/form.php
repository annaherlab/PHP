<?php
if($_POST){
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$email = $_POST['email'];

$servername = "localhost";
$username = "root";
$passwd = "";
$dbname = "curso sql";

$conn = new mysqli($servername, $username, $passwd, $dbname);

if($conn->connect_error)
	die("Fallo en la conexión a la base de datos" . $conn->connect_error);

$sql = "INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";

if($conn->query($sql) === TRUE){
	echo "Se ha insertado el usuario correctamente";
}else{
	echo "Error: " . $conn->error;
}

$conn->close();


}
?>