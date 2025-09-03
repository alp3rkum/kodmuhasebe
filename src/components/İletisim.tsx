import React from 'react'

const İletisim = () => {

  const contactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try
    {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const jsonData: Record<string, string> = {};

      formData.forEach((value, key) => {
        jsonData[key] = value.toString();
      });

      const response = await fetch('api/iletisim.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });

      const data = await response.json(); // artık JSON bekliyoruz
      alert(data.reply);
    }
    catch (error)
    {
      console.error(error);
    }
  };

  return (
    <div className="pt-20 container text-center mt-10 mx-auto max-w-[800px]">
        <h2 className="text-[30px] font-bold mb-4 mt-3">Bizimle İletişime Geçin</h2>
        <p className="mb-3" >Bir soru, geri bildirim veya ihtiyacınız varsa, bizimle iletişime geçebilirsiniz.</p>

        <form id="iletisim-form" className="p-6" method="POST" onSubmit={(e) => contactSubmit(e)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-md font-bold mb-2">Adınız</label>
                    <input type="text" id="first-name" name="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 bg-white focus:shadow-[0_0_10px_#3b82f6] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250"></input>
                </div>
                <div>
                    <label className="block text-md font-bold mb-2">Soyadınız</label>
                    <input type="text" id="last-name" name="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 bg-white focus:shadow-[0_0_10px_#3b82f6] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250"></input>
                </div>
                <div>
                    <label className="block text-md font-bold mb-2">E-Posta Adresiniz</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 bg-white focus:shadow-[0_0_10px_#3b82f6] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250"></input>
                </div>
                {/* <div>
                    <label className="block text-md font-bold mb-2">Telefon Numaranız</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 bg-white focus:shadow-[0_0_10px_#3b82f6] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250"></input>
                </div> */}
            </div>
            <div className="mt-3">
              <label className="block text-md font-bold mb-2">Mesajınız</label>
              <textarea id="message" name="message" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 bg-white focus:shadow-[0_0_10px_#3b82f6] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250"></textarea>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-2 px-4 rounded-md max-w-[240px] focus:translate-y-[2px] focus:scale-[0.98] active:shadow-inner transition duration-250">Mesaj Gönder</button>
            </div>
        </form>
    </div>
  )
}

export default İletisim