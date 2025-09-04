import {useState} from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header id="header-desktop" className="container mx-auto p-3">
    <div className="flex justify-between items-center">
        {/* Sol taraf: Logo + Başlık */}
        <div className="flex items-center space-x-3 select-none">
        <img src={logo} alt="KodMuhasebe" width="40" />
        <h1 className="text-xl font-semibold text-gray-800">KodMuhasebe</h1>
        </div>

        <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list"></i>
        </button>

        {/* Sağ taraf: Navigation */}
        <nav id="header-nav-desktop" className="hidden md:flex flex space-x-6 mr-2">
            <Link to="/" className="text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:translate-y-[2px] active:scale-[0.98] active:shadow-inner">Ana Sayfa</Link>
            <Link to="/hakkinda" className="text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:translate-y-[2px] active:scale-[0.98] active:shadow-inner">Hakkında</Link>
            <Link to="/iletisim" className="text-gray-700 px-2 py-3 hover:text-indigo-600 active:bg-sky-300 rounded-lg transition duration-250 active:translate-y-[2px] active:scale-[0.98] active:shadow-inner">İletişim</Link>
        </nav>
    </div>
    {menuOpen && (
        <nav
          id="header-nav-mobile"
          className="flex flex-col space-y-2 mt-3 md:hidden"
        >
          <Link to="/" className="nav-link">Ana Sayfa</Link>
          <Link to="/hakkinda" className="nav-link">Hakkında</Link>
          <Link to="/iletisim" className="nav-link">İletişim</Link>
        </nav>
      )}
    </header>
    </>
    
  )
}

export default Header