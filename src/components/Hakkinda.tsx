const Hakkinda = () => {
  return (
    <>
    <section className="mt-10 p-3">
      <h2 className="text-3xl font-semibold text-center">KodMuhasebe Hakkında</h2>
      <h3 className="text-xl font-semi-bold">KodMuhasebe Nedir?</h3>
      <p className="text-gray-700 mt-2 p-5"><span className="text-indigo-600">KodMuhasebe</span>, yazılım projeleri için fiyat tahmini yapmaya yardımcı olmak için tasarlanmış yapay zeka tabanlı bir araçtır. KodMuhasebe sayesinde her türlü yazılım projesi için yaklaşık bir fiyat hesaplaması yapabilir; projeyi yaptıran kişiyseniz bütçenizi, projeyi yapan geliştirici veya ekipseniz de proje için alacağınız fiyat aralığını daha kolay bir şekilde keşfedip ayarlayabilirsiniz.</p>
      <h3 className="text-xl font-semi-bold">KodMuhasebe Nasıl Çalışır?</h3>
      <p className="text-gray-700 mt-2 p-5">KodMuhasebe, ana sayfadan gireceğiniz parametrelerle <span className="text-indigo-600">Mistral AI</span> kullanarak hesaplama gerçekleştirmekte, bu sayede yazılım projelerinin bütçe hesaplama süresini kısaltarak projeye daha hızlı ve güvenilir bir başlangıç yapılmasını sağlamayı amaçlamaktadır. Hesaplamalar, Türkiye'nin güncel ekonomik koşulları, piyasa ortalamaları ve parametrelerini girdiğiniz projenin teknik kapsamı göz önünde bulundurularak gerçekleşmektedir. Parametreleri girdikten sonra yaklaşık 10 saniye içinde hesaplama sonucunu alabilirsiniz. Dilerseniz KodMuhasebe sonucunu referans alabilir, dilerseniz fikir edinmek için kullanabilir, dilerseniz de ek olarak kendi fiyatınızı koyabilirsiniz.</p>
      <p className="text-gray-700 mt-2 p-5">KodMuhasebe'nin hızlı ve detaylı hesaplaması sayesinde proje planlama süresini kısaltabilir, fiyat tekliflerini daha hızlı bir şekilde verebilirsiniz. Yapılan akademik araştırmalara göre, yazılım projelerinin yaklaşık <strong className="text-indigo-600">%38’i zaman ve bütçe aşımına uğramaktadır</strong>. Bu oran, proje planlamasında doğru tahmin araçlarının ne kadar kritik olduğunu göstermektedir. KodMuhasebe, bu tür riskleri azaltmak için hızlı ve bağlamsal fiyat tahmini sunmayı amaçlamaktadır. Detaylı analiz için <a href="https://polen.itu.edu.tr/items/c06961f1-71d5-4226-b36b-71916b42ff95" target="_blank" className="px-1 py-1 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner">bu makaleye göz atabilirsiniz</a></p>
      <h3 className="text-xl font-semi-bold">KodMuhasebe Hangi Tech Stack İle Geliştirilmiştir?</h3>
      <p className="text-gray-700 mt-2 p-5">KodMuhasebe projesi, <a href="https://appcost.ai" target="_blank" className="px-1 py-1 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner">AppCost.ai</a> ve freelance tasarımcılara hitap eden <a href="https://www.ucreth.com/" className="px-1 py-1 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner">UcretH.com</a> sitelerinden esin alınarak geliştirilmektedir. Önyüzü (frontend) <span className="text-indigo-600">ReactJS</span>, arka yüzü ise <span className="text-indigo-600">PHP</span> ile hazırlanmaktadır. Proje şu anda <span className="text-indigo-600">MVP/alpha</span> aşamasında olup ilerleyen dönemlerde yeni parametreler ve yeni özellikler eklenmesi söz konusu olabilir.</p>
    </section>
    </>
  )
}

export default Hakkinda