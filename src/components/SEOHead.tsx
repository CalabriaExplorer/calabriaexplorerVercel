
import React from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  schema?: string; // изменили на строку!
  canonical?: string;
  noIndex?: boolean;
}

const DEF_FAVICON = "/favicon.ico";

function absoluteUrl(path: string) {
  if (typeof window === "undefined") return "";
  const origin = window.location.origin;
  if (path.startsWith("http")) return path;
  if (path.startsWith("//")) return window.location.protocol + path;
  return `${origin}${path.startsWith("/") ? "" : "/"}${path}`;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  type = "website",
  image,
  schema,
  canonical,
  noIndex,
}) => {
  const location = useLocation();
  const url = canonical || absoluteUrl(location.pathname);

  // Google Analytics (gtag.js)
  React.useEffect(() => {
    // Проверяем только на наличие window и того, что скрипт ещё не добавлен
    if (typeof window !== "undefined" && !document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      const gtagScript = document.createElement("script");
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-X4F3S1R0GK";
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      const inline = document.createElement("script");
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-X4F3S1R0GK');
      `;
      document.head.appendChild(inline);
    }
  }, []);

  // Фавикон на каждой странице
  React.useEffect(() => {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      (favicon as HTMLLinkElement).rel = "icon";
      (favicon as HTMLLinkElement).href = DEF_FAVICON;
      document.head.appendChild(favicon);
    } else {
      (favicon as HTMLLinkElement).href = DEF_FAVICON;
    }
  }, []);

  // Canonical
  React.useEffect(() => {
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      (canonicalTag as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    (canonicalTag as HTMLLinkElement).href = url;
  }, [url]);

  // Schema.org в <head>
  React.useEffect(() => {
    // Удаляем предыдущую схему при SPA переходах
    const toRemove = Array.from(document.head.querySelectorAll('script[type="application/ld+json"].lov-schema-org'));
    toRemove.forEach((el) => el.remove());
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.className = "lov-schema-org";
      script.innerHTML = schema;
      document.head.appendChild(script);
    }
  }, [schema]);

  // Meta теги (SPA-навигация)
  React.useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let descTag = document.querySelector("meta[name='description']");
      if (!descTag) {
        descTag = document.createElement("meta");
        (descTag as HTMLMetaElement).name = "description";
        document.head.appendChild(descTag);
      }
      (descTag as HTMLMetaElement).content = description;
    }
    if (noIndex) {
      let robotsTag = document.querySelector("meta[name='robots']");
      if (!robotsTag) {
        robotsTag = document.createElement("meta");
        (robotsTag as HTMLMetaElement).name = "robots";
        document.head.appendChild(robotsTag);
      }
      (robotsTag as HTMLMetaElement).content = "noindex, nofollow";
    } else {
      const robotsTag = document.querySelector("meta[name='robots']");
      if (robotsTag) (robotsTag as HTMLMetaElement).content = "index,follow";
    }
  }, [title, description, noIndex]);

  return null;
};
export default SEOHead;

