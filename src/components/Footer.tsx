import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
  <footer className="pt-6 md:pt-3">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 pl-3">
      <div className="flex flex-col items-center justify-center text-center space-y-2 select-none">
        <img src={logo} alt="KodMuhasebe" width="40" />
        <h1 className="text-xl font-semibold text-gray-800">KodMuhasebe</h1>
      </div>
      <p className="text-center">Yapay zeka tabanlı yazılım projesi fiyat hesaplama aracı</p>
    </div>

    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <h4 className="text-[18px] font-bold text-center mt-2">Hızlı Linkler</h4>
      <ul className="list-none flex flex-col items-center text-center space-y-1">
        <li className="text-center w-[150px] text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner"><Link to="/">Ana Sayfa</Link></li>
        <li className="text-center w-[150px] text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner"><Link to="/hakkinda">Hakkında</Link></li>
        <li className="text-center w-[150px] text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:scale-[0.98] active:shadow-inner"><Link to="/iletisim">İletişim</Link></li>
      </ul>
    </div>
  </div>

  <hr className="text-sky-300 pb-2" />

  <div className="p-3 flex flex-col md:flex-row justify-between items-center">
    {/* <a href="/sitemap" className="font-semibold text-gray-700">Sitemap</a> */}
    <p className="font-semibold text-gray-700 mt-2 md:mt-0">&copy;2025 Tüm Hakları Saklıdır.</p>
  </div>
</footer>
    </>
  )
}

export default Footer