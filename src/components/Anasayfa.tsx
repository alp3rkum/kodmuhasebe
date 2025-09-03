import React, {useEffect} from 'react';

const Anasayfa = () => {
    useEffect(() => {
      document.title = "KodMuhasebe - Yapay Zeka ile Yazılım Fiyat Tahmini";
    }, []);
  const [sonuc, setSonuc] = React.useState<string>('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const hesapla = async (e: React.FormEvent) => {
    e.preventDefault();
    setSonuc('Hesaplanıyor...');

    try {
      const formData = new FormData(formRef.current!);
      const jsonData: Record<string, string> = {};

      formData.forEach((value, key) => {
        jsonData[key] = value.toString();
      });

      const response = await fetch('api/mistral.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });

      const data = await response.json();
      setSonuc(data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="mt-10 p-3 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Yazılım Projeleriniz İçin <span className="text-indigo-600">Hızlı</span> Fiyat Hesaplayıcı</h2>
        <p className="text-gray-600 mt-3">Birkaç saniye içinde yapacağınız yazılım projesinin fiyatlandırması hakkında bilgi alın.</p>
        <p className="text-gray-600 mt-3">Her türlü proje ve teknik deneyim seviyesi için fiyat hesaplaması yapabilirsiniz.</p>
      </section>
      <section className="mt-10 p-3 max-w-[600px] mx-auto">
        <form ref={formRef}>
          <input type="text" name="proje_tur" id="proje_tur" placeholder="Proje Türü" className="w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='mt-3'>
              <select name="projectType" className="w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">
                <option value="" disabled>Proje Türü Seçin</option>
                <option value="web">Web</option>
                <option value="mobile">Mobil</option>
                <option value="desktop">Masaüstü</option>
                <option value="ai">Yapay Zeka</option>
                <option value="script">Script / Cron Job</option>
                <option value="integration">Entegrasyon (API)</option>
                <option value="embedded">Gömülü Sistem</option>
              </select>
            </div>
            <div className='mt-3'>
              <select name="projectGrade" className="w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">
                <option value="" disabled>Proje Seviyesi Seçin</option>
                <option value="beginner">MVP (Prototip)</option>
                <option value="intermediate">Tam Ürün</option>
                <option value="expert">Enterprise</option>
              </select>
            </div>
            <div>
              <input type="number" name="ekip_boyutu" id="ekip_boyutu" placeholder='Ekip Boyutu' className='w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250' />
            </div>
            <div className="flex gap-4">
              <input type="number" name="deliveryAmount" min={1} placeholder="Süre" className="w-1/2 py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250" />
              <select name="deliveryUnit" defaultValue="" className="w-1/2 py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">
                <option value="" disabled>Zaman</option>
                <option value="hour">Saat</option>
                <option value="day">Gün</option>
                <option value="week">Hafta</option>
                <option value="month">Ay</option>
              </select>
            </div>
            <div>
              <select name="userScale" defaultValue="" className="w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">
                <option value="" disabled>Kullanıcı Sayısı Seçin</option>
                <option value="1">Tek Kullanıcı (Kişisel)</option>
                <option value="2-100">2–100 Kullanıcı (Küçük Takım)</option>
                <option value="100-10000">100–10.000 Kullanıcı (KOBİ / Topluluk)</option>
                <option value="10000-1000000">10.000-1.000.000 Kullanıcı (Kurumsal)</option>
                <option value="1000000+">1.000.000+ Kullanıcı (Global)</option>
                <option value="indeterminate">Satış</option>
              </select>
            </div>
            <div>
              <select name="qualityLevel" defaultValue="" className="w-full py-2 px-3 border bg-gray-100 focus:bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">
                <option value="" disabled>Kalite / Güvenlik Seviyesi</option>
                <option value="minimal">Minimum (Çalışsın yeter)</option>
                <option value="standard">Standart Test ve Güvenlik</option>
                <option value="high">Yüksek Güvenlik ve QA</option>
              </select>
            </div>
          </div>
          <button id="hesapla" onClick={(e) => hesapla(e)} className='w-full mt-3 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 active:translate-y-[2px] active:scale-[0.98] active:shadow-inner transition duration-250' type="button">Hesapla</button>
        </form>
      </section>
      <section id='sonuc' className="mt-4 p-3 mx-auto text-center">
        Sonuç: <span className="text-2xl text-indigo-600">{sonuc}</span>
        {(sonuc != '') ? <p className="text-xs">Bu hesaplama Mistral AI kullanılarak gerçekleştirilmiştir.</p> : ''}
      </section>
    </div>
  )
}

export default Anasayfa