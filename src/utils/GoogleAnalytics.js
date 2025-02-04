import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Inject Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S";
    document.head.appendChild(script);

    // Inject inline script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RQ96RJ4M5S');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;
