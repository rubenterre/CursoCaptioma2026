<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit;
}

if (!defined("PHP_EOL")) {
    define("PHP_EOL", "\r\n");
}

// Recoger email del formulario: <input name="email">
$email = isset($_POST['email']) ? trim($_POST['email']) : '';

if ($email === '') {
    echo '<div class="error_message">Por favor, introduce un email.</div>';
    exit;
}

// Sanitizar y validar email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo '<div class="error_message">Has introducido un email no válido, por favor inténtalo otra vez.</div>';
    exit;
}

// Email de destino donde te llega el aviso de nuevo suscriptor
$address = "info@exemplo.com";

// Asunto y contenido del email que recibes tú
$e_subject = 'Nueva suscripción a la newsletter';
$e_body    = "Se ha suscrito un nuevo email a la newsletter:" . PHP_EOL . PHP_EOL;
$e_body   .= "Email: $email" . PHP_EOL;

$msg = wordwrap($e_body, 70);

$headers  = "From: info@exemplo.com" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

// (Opcional) email de agradecimiento al usuario
$user         = $email;
$usersubject  = "Gracias por suscribirte";
$userheaders  = "From: info@exemplo.com" . PHP_EOL;
$usermessage  = "Gracias por suscribirte a la newsletter. Te enviaremos novedades pronto.";

// Enviar emails
@mail($user, $usersubject, $usermessage, $userheaders);

if (@mail($address, $e_subject, $msg, $headers)) {
    echo "<div id='success_page' style='padding:20px 20px 20px 0'>";
    echo "<strong>Suscripción correcta.</strong> ";
    echo "Gracias, tu email <strong>$email</strong> ha sido añadido a la newsletter.";
    echo "</div>";
} else {
    echo '<div class="error_message">Ha ocurrido un error al procesar tu suscripción.</div>';
}
