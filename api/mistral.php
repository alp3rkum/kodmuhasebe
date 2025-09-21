<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

$apiKey = 'XCg8iJadHOqUgTtfCfmFue9yhYcMAyxX';

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

Bu parametreler arasında projenin süresi ve kalite seviyesi, fiyatta yüksek etkiye sahip olacak. Projeyi geliştiren ekibin boyutu ve kullanıcı ölçeği daha düşük bir etkiye sahip olacak.

Örneğin:
• Tek ekranlı mobil uygulama → 3.000–5.000 TL
• Küçük çaplı bir kurumsal web sitesi → 5.000–8.000 TL
• Orta ölçekli e-ticaret sitesi → 20.000–30.000 TL
• Gömülü sistem için firmware geliştirme → 15.000–30.000 TL
• Geniş kapsamlı ERP sistemi → 100.000–150.000 TL

Lütfen bu parametrelere göre gerçekçi bir fiyat aralığı ver. Örneğin ‘20.000–25.000 TL’ gibi. Fiyatı Türk Lirası cinsinden belirt. Cevabında başka bir şey yazma.";

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
file_put_contents('log.txt', $response);
$decoded = json_decode($response, true);
$content = $decoded['choices'][0]['message']['content'] ?? 'Yanıt alınamadı.';

echo json_encode(['reply' => $content]);
?>