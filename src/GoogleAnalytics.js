import { useEffect } from "react";

const GA_TRACKING_ID = "G-1WY6RV6HX7";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Inject the gtag script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Inject the gtag init script
    const script2 = document.createElement("script");
    script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
        `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;
