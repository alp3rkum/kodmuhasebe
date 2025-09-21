// import { useState } from 'react'
// import './App.css'
import Header from "./components/Header"
import Anasayfa from "./components/Anasayfa";
import Hakkinda from "./components/Hakkinda";
import İletisim from "./components/İletisim";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import { Routes, Route } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
    <div className="bg-sky-700/50">
      <div className="container mx-auto bg-linear-to-br from-sky-200 to-sky-200/70">
        <Header/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/hakkinda" element={<Hakkinda />} />
            <Route path="/iletisim" element={<İletisim />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer/>
      </div> 
    </div>
    </>
  )
}

export default App
