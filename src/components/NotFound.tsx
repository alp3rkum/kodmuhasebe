import { useEffect } from 'react'
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

<Helmet>
  <meta name="robots" content="noindex" />
</Helmet>

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - KodMuhasebe";
  }, []);
  return (
    <div className="text-center mt-20 px-4">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-6">
        Aradığınız sayfa bulunamadı. Belki yanlış bir rota girdiniz, belki de bu sayfa henüz kodlanmadı.
      </p>
      <Link to="/" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-800 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 active:translate-y-[2px] active:scale-[0.98] active:shadow-inner transition duration-250">Ana Sayfaya Dön</Link>
    </div>
  )
}

export default NotFound