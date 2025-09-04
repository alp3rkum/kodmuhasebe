<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

$apiKey = '';

$input = json_decode(file_get_contents('php://input'), true);
$proje_tur       = $input['proje_tur'] ?? '';
$projectType     = $input['projectType'] ?? '';
$projectGrade    = $input['projectGrade'] ?? '';
$ekip_boyutu     = $input['ekip_boyutu'] ?? '';
$deliveryAmount  = $input['deliveryAmount'] ?? '';
$deliveryUnit    = $input['deliveryUnit'] ?? '';
$userScale       = $input['userScale'] ?? '';
$qualityLevel    = $input['qualityLevel'] ?? '';

$prompt = "Bir yazılım geliştiricisi olarak aşağıdaki parametrelere göre bir proje fiyatı tahmini yapmanı istiyorum. Lütfen Türkiye'deki güncel ekonomik koşulları, freelance piyasa ortalamalarını ve teknik kapsamı göz önünde bulundur.

Proje Türü: $proje_tur  
Teknik Kategori: $projectType  
Proje Seviyesi: $projectGrade  
Ekip Boyutu: $ekip_boyutu kişi  
Teslim Süresi: $deliveryAmount $deliveryUnit  
Kullanıcı Ölçeği: $userScale  
Kalite / Güvenlik Seviyesi: $qualityLevel

Lütfen bu parametrelere göre **tek bir fiyat aralığı** ver. Örneğin “5.000–7.000 TL” gibi. Fiyatı Türk Lirası cinsinden belirt. Cevabında başka bir şey yazmasın.";

$url = 'https://api.mistral.ai/v1/chat/completions';
$data = [
    'model' => 'mistral-small-latest',
    'messages' => [
        ['role' => 'user', 'content' => $prompt]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json',
    "Authorization: Bearer $apiKey"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);
//file_put_contents('log.txt', $response);
$decoded = json_decode($response, true);
$content = $decoded['choices'][0]['message']['content'] ?? 'Yanıt alınamadı.';

echo json_encode(['reply' => $content]);
?>