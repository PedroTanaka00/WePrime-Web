<?php 
require_once ("../config.php");






$contatoNome  = $_POST['frm_nome'];
$contatoEmail = $_POST['frm_email'];



$Mailsubject = "Novo Contato do Formulário do Site";

$MailContent  = "<h1>{$Mailsubject}</h1>";
$MailContent .= "<p><b>NOME:</b> {$contatoNome}<p>";
$MailContent .= "<p><b>NOME:</b> {$contatoEmail}<p>";

$contatoTelefone = isset($_POST['frm_telefone']) ? $_POST['frm_telefone'] : '';
if (!empty($contatoTelefone)) {
    $MailContent .= "<p><b>TELEFONE:</b> {$contatoTelefone}<p>";
}

$contatoMensagem = isset($_POST['frm_mensagem']) ? $_POST['frm_mensagem'] : '';
if (!empty($contatoMensagem)) {
    $MailContent .= "<p><b>MENSAGEM:</b> {$contatoMensagem}<p>";
}


$Email = new Email;
$Email->EnviarMontando($Mailsubject, $MailContent, $contatoNome, $contatoEmail, MAIL_SENDER, MAIL_ADDRESS);


if(!$Email->getError()):
    echo json_encode([
        'classe' => 'popup-success',
        'mensagem' => 'Sua mensagem foi enviada com sucesso, entraremos em contato com você em breve!'
    ]);
else:
    echo json_encode([
        'classe' => 'popup-error',
        'mensagem' => 'Desculpe não foi possível enviar sua mensagem. Entre em contato atráves do e-mail ' . CONTATO_EMAIL . '. Obrigado!' . $Email->getError()
    ]);
endif;



