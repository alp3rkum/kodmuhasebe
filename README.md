# KodMuhasebe - Yapay Zeka Tabanlı Yazılım Projesi Fiyat Hesaplayıcı

React bilgimi tazelemek ve halihazırda aktif olarak kullandığım PHP'yi de kullanarak basit fakat oldukça faydalı bir proje yapmak istedim. Özellikle yazılımcıların zaman zaman sorun yaşadığı fiyat belirleme alanında referans sunup destek olacak, bunu hızlı ve olabildiğince isabetli bir şekilde yapacak ve bunu proje türü bazlı gerçekleştirecek bir yazılım olan **KodMuhasebe**'yi, sadece birkaç parametreyle her türlü ekibin her türlü yazılım projesini ne kadar fiyata hazırlayabileceği konusundaki sorularınıza, Türkiye ekonomisi ve piyasa fiyatları çerçevesinde isabetli yanıt verecek şekilde hazırladım.

## Nasıl Çalışır?

KodMuhasebe, hesaplamalarını sizin gireceğiniz şu parametrelere göre yapar:

* Proje türü (ne projesi yapılacak)
* Platformu/Kategorisi (Web, Masaüstü, mobil, otomasyon, yapay zeka vs.)
* Geliştirileceği aşama (MVP, tam ürün, enterprise vs.)
* Üzerinde çalışacak ekibin büyüklüğü
* Tahmini ne kadar süreceği (saat, gün, hafta, ay cinsinden ayarlama yapılabilmektedir)
* Kaç kişinin kullanacağı (kişiye özel, yerel veya global SaaS, ya da özellikle satış yapmak için geliştireceğiniz bir yazılım olarak alabilirsiniz)
* Güvenlik & bug testlerinin ne kadar kapsamlı yapılacağı

Cevap olarak ise bu parametrelere göre hesaplayacağı yaklaşık bir aralık (örn. 5000-7000₺) döner. Siz de bu aralığa göre fiyatlandırmanızı yapar veya bunu referans alarak kendi fiyatlandırmanızı oluşturabilirsiniz. Ya da eğer projeyi yaptıracak kişiyseniz bütçenizi ona göre belirleyebilirsiniz.

### Örnek Hesaplama

Proje Türü: Kurumsal Web Sitesi
Platform/Kategori: Web
Geliştirileceği Aşama: Tam Ürün
Üzerinde Çalışacak Ekibin Büyüklüğü: 5
Tahmini Süre: 6 Gün
Kaç Kişi Kullanacak: 100-10000
Güvenlik & bug testlerinin ne kadar kapsamlı yapılacağı: Standart Test ve Güvenlik
Sonuç: 15000-25000TL

## Kullanılan Teknolojiler

Projede frontend olarak **React Vite**, backend olarak **PHP**, yapay zeka teknolojisi olarak ise **Mistral AI** kullandım. Bunlara ek olarak arayüz tasarımında **Tailwind**, iletişim formundan mesaj iletmek için **PHPMailer**, rotalama için **React-Router-Dom** ve SEO ayarlarını daha özenli gerçekleştirmek için **React Helmet** kütüphanelerini kullandım.

## Geliştirilme Aşaması

Bu proje şu an **MVP/alpha** aşamasındadır, bir yazılım çözümü olarak günlük hayatta kullanılabilir durumdadır. İlerleyen tarihlerde gerçekleşen geri dönüşlere ve ortaya çıkan yeni fikirlere göre daha da geliştirilecektir.

## Bu Site Yayında Mı?

Tabii ki yayında. [KodMuhasebe'nin canlı MVP'sine buradan ulaşabilirsiniz.](https://alperkum.hstn.me/kodmuhasebe)
