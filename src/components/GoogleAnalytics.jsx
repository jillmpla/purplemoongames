import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const location = useLocation();

  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') return undefined;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });

    return () => {
      script.remove();
      delete window.gtag;
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX' || !window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
    });
  }, [location.pathname, location.search, measurementId]);

  return null;
}
