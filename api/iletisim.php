<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Değişkenleri ata
$fromEmail = $data['email'] ?? 'noreply@example.com';
$fromName  = $data['first-name'] . ' ' . $data['last-name'];
$toEmail   = 'alperkum.cs@gmail.com';
$toName    = 'Alper Kum';
$subject   = 'KodMuhasebe İletişim Formu';
$body      = nl2br(htmlspecialchars($data['message'] ?? ''));

$mail = new PHPMailer(true);
try {
    $mail->isSMTP(true);
    $mail->CharSet = 'UTF-8';
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'alperkum.cs@gmail.com';
    $mail->Password = 'nxjy lfgd orwd fifa';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail, $toName);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->send();
    echo json_encode(['reply' => 'Mesaj gönderildi!']);
}
catch (Exception $e) {
    echo json_encode(['reply' => 'Mesaj gönderilemedi. Hata: ' . $mail->ErrorInfo]);
}
?>