<?php

$to = "adrian_c4@hotmail.com"; // This is your Email address
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['name']; // This is the sender's Name
$subject = "Email de Star Wars API";
$comments = $_POST['comments'];

$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);

if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}

?>