import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import favicon from './assets/favicon.ico';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/x-icon';
faviconLink.href = favicon;
document.head.appendChild(faviconLink);
document.title = "KodMuhasebe - Yapay Zeka ile Yazılım Fiyat Tahmini";

<Helmet>
  <meta charSet="UTF-8" />
  <html lang="tr" />
  <meta name="description" content="KodMuhasebe, yazılım projeleri için yapay zeka destekli fiyat tahmini sunan bir araçtır. Türkiye piyasasına uygun, hızlı ve karakterli hesaplama." />
  <meta name="keywords" content="yazılım fiyat hesaplama, yapay zeka, freelance, proje bütçesi, KodMuhasebe" />
  <meta name="author" content="KodMuhasebe" />
  <link rel="canonical" href={window.location.href} />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KodMuhasebe",
      "url": "https://kodmuhasebe.com",
      "description": "KodMuhasebe, yazılım projeleri için yapay zeka destekli fiyat tahmini sunan bir araçtır.",
      "creator": {
        "@type": "Person",
        "name": "Alper Kum"
      }
    })}
  </script>
</Helmet>

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/kodmuhasebe">
    <App />
  </BrowserRouter>,
)
