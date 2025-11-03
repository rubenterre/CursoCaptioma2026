<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoller datos do formulario
    $nombre = $_POST['name'] ?? '';
    $apellidos = $_POST['lastname'] ?? '';
    $ciudad = $_POST['cities'] ?? '';
    $telefono = $_POST['tel'] ?? '';
    $email = $_POST['email'] ?? '';
    $legal = isset($_POST['legal']) ? 'Aceptado' : 'Non aceptado';

    // Configurar o correo electrónico
    $para = "tucorreo@ejemplo.com";
    $asunto = "Nova rexistro de formulario";

    // Crear o corpo da mensaxe
    $mensaxe = "Recibiuse un novo rexistro:\n\n";
    $mensaxe .= "Nome: $nombre\n";
    $mensaxe .= "Apelidos: $apellidos\n";
    $mensaxe .= "Cidade: $ciudad\n";
    $mensaxe .= "Teléfono: $telefono\n";
    $mensaxe .= "Correo electrónico: $email\n";
    $mensaxe .= "Termos legais: $legal\n";

    // Cabeceiras do correo
    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if(mail($para, $asunto, $mensaxe, $cabeceras)) {
        echo "<script>
                alert('Formulario enviado correctamente');
                window.location.href='index.html';
              </script>";
    } else {
        echo "<script>
                alert('Erro ao enviar o formulario');
                window.location.href='index.html';
              </script>";
    }
} else {
    // Se alguén tenta acceder directamente a enviar.php
    header('Location: index.html');
}
?>
