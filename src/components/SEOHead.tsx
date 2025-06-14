
import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext"; // добавить импорт

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
  const { language } = useLanguage(); // получить язык из контекста
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

  // Динамические OG / Twitter / hreflang и theme-color
  React.useEffect(() => {
    // --- OG и Twitter ---
    const head = document.head;

    const setMetaTag = (name: string, content: string, propType: "name" | "property" = "property") => {
      let selector = propType === "property" ? `meta[property='${name}']` : `meta[name='${name}']`;
      let tag = head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        (tag as any)[propType] = name;
        head.appendChild(tag);
      }
      (tag as HTMLMetaElement).setAttribute("content", content);
    };

    // --- Ограничения на длину для meta данных ---
    const cut = (s?: string, max = 200) => s ? String(s).slice(0, max) : "";

    const imageUrl = image 
      ? absoluteUrl(image) 
      : absoluteUrl("/favicon.ico");

    // OG
    setMetaTag("og:title", cut(title || "Calabria Explorer", 60));
    setMetaTag("og:description", cut(description || "Travel in Calabria, Italy: Tours, guides, relocation support.", 160));
    setMetaTag("og:type", type || "website");
    setMetaTag("og:url", url);
    setMetaTag("og:image", imageUrl);
    setMetaTag("og:site_name", "Calabria Explorer");
    setMetaTag("og:locale", language === "ru" ? "ru_RU" : "en_US");
    // alternate locale
    setMetaTag("og:locale:alternate", language === "ru" ? "en_US" : "ru_RU");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", cut(title || "Calabria Explorer", 60), "name");
    setMetaTag("twitter:description", cut(description || "Travel in Calabria, Italy: Tours, guides, relocation support.", 160), "name");
    setMetaTag("twitter:image", imageUrl, "name");
    setMetaTag("twitter:site", "@calabriaexplorer", "name"); // Замените, если есть реальный твиттер

    // --- theme-color ---
    const theme = document.querySelector("meta[name='theme-color']") as HTMLMetaElement;
    if (!theme) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#0077B6";
      head.appendChild(meta);
    } else {
      theme.content = "#0077B6";
    }

    // --- hreflang/alternate ---
    // Очистим предыдущие rel="alternate" 
    Array.from(document.querySelectorAll("link[rel='alternate']")).forEach(l => l.remove());
    const origin = typeof window !== "undefined" ? window.location.origin : "https://calabriaexplorer.app";

    // Поддержка двух языков: ru и en
    const locales = [
      { code: "ru", hreflang: "ru", url: `${origin}${location.pathname.replace(/^\/en/, "")}` },
      { code: "en", hreflang: "en", url: `${origin}/en${location.pathname.replace(/^\/en/, "")}` }
    ];
    locales.forEach(loc => {
      if (loc.code === language) return; // не дублировать текущий язык
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = loc.hreflang;
      link.href = loc.url;
      head.appendChild(link);
    });
    // x-default
    const linkX = document.createElement("link");
    linkX.rel = "alternate";
    linkX.hreflang = "x-default";
    linkX.href = url;
    head.appendChild(linkX);

    // --- robots доп. защита ---
    let robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      (robotsTag as HTMLMetaElement).name = "robots";
      document.head.appendChild(robotsTag);
    }
    (robotsTag as HTMLMetaElement).content = noIndex ? "noindex, nofollow" : "index, follow";

    // Чистка "висящих" старых тегов (оставим только свежие)
    // Очищать дополнительные OG/twitter/hreflang если потребуется

    return () => {
      // Очистка alternate при SPA-переходах
      Array.from(document.querySelectorAll("link[rel='alternate']")).forEach(l => l.remove());
    };
  }, [title, description, url, image, type, language, noIndex, location.pathname]);

  return null;
};
export default SEOHead;

