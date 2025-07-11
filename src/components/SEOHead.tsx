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
  preloadImages?: string[];
}

function absoluteUrl(path: string) {
  if (typeof window === "undefined") return "";
  const origin = window.location.origin;
  if (path.startsWith("http")) return path;
  if (path.startsWith("//")) return window.location.protocol + path;
  return `${origin}${path.startsWith("/") ? "" : "/"}${path}`;
}

const DEF_FAVICON = "/favicon.ico";

// Новые размеры фавиконок/иконок
const FAVICON_SIZES = [
  { rel: "icon", sizes: "32x32", href: "/favicon.ico" },
  { rel: "icon", sizes: "192x192", href: "/favicon-192.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
];

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  type = "website",
  image,
  schema,
  canonical,
  noIndex,
  preloadImages,
}) => {
  const location = useLocation();
  const { language } = useLanguage();
  // canonical без query-параметров пагинации/сортировки
  const cleanPath = location.pathname;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = canonical || absoluteUrl(cleanPath);

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

  // Фавиконы
  React.useEffect(() => {
    // Удалять предыдущие кастомные фавиконы
    Array.from(document.head.querySelectorAll("link[rel='icon'],link[rel='apple-touch-icon']")).forEach(f => f.remove());
    FAVICON_SIZES.forEach(({ rel, sizes, href }) => {
      const link = document.createElement("link");
      link.rel = rel;
      if (sizes !== undefined) link.setAttribute("sizes", sizes);
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  // Preload images if provided
  React.useEffect(() => {
    if (!preloadImages || typeof document === "undefined") return;
    preloadImages.forEach(src => {
      if (!document.head.querySelector(`link[rel='preload'][href='${src}']`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.setAttribute("as", "image");
        link.href = src;
        document.head.appendChild(link);
      }
    });
  }, [preloadImages]);

  // Canonical — убираем параметры page/sort/utm
  React.useEffect(() => {
    let canonicalTag = document.querySelector("link[rel='canonical']");
    const canonicalHref = url.replace(/\?(page|sort|utm_.*?)=[^&]+(&|$)/g, "");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      (canonicalTag as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    (canonicalTag as HTMLLinkElement).href = canonicalHref.endsWith("?") ? canonicalHref.slice(0, -1) : canonicalHref;
  }, [url]);

  // Schema.org в <head> – поддержка Article, Tour, Product, Offer, BreadcrumbList
  React.useEffect(() => {
    // Удаляем предыдущую схему при SPA переходах
    const toRemove = Array.from(document.head.querySelectorAll('script[type="application/ld+json"].lov-schema-org'));
    toRemove.forEach((el) => el.remove());
    let pageSchema = schema;
    // If schema wasn't provided, формируем основу для разных страниц
    if (!schema && typeof window !== "undefined") {
      if (location.pathname.startsWith("/blog/")) {
        pageSchema = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "mainEntityOfPage": window.location.href,
          "image": absoluteUrl(image || "/favicon.ico"),
          "author": { "@type": "Person", "name": "Мария (Maria)" },
          "publisher": { "@type": "Organization", "name": "Calabria Explorer" },
          "datePublished": new Date().toISOString().slice(0, 10),
          "inLanguage": language,
        });
      } else if (location.pathname.startsWith("/tours/")) {
        pageSchema = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": title,
          "description": description,
          "image": absoluteUrl(image || "/favicon.ico"),
          "inLanguage": language,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        });
      } else {
        // BreadcrumbList
        const pathChunks = location.pathname.split("/").filter(Boolean);
        if (pathChunks.length > 0) {
          const items = pathChunks.map((part, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": decodeURIComponent(part),
            "item": `${origin}/` + pathChunks.slice(0, i + 1).join("/")
          }));
          pageSchema = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items,
          });
        } else {
          pageSchema = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Calabria Explorer",
            "url": origin,
            "description": description,
            "inLanguage": language,
            "image": absoluteUrl("/favicon.ico"),
            "publisher": {
              "@type": "Organization",
              "name": "Calabria Explorer",
            }
          });
        }
      }
    }
    // Удаляем предыдущую схему при SPA переходах
    Array.from(document.head.querySelectorAll('script[type="application/ld+json"].lov-schema-org')).forEach((el) => el.remove());
    if (pageSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.className = "lov-schema-org";
      script.innerHTML = pageSchema;
      document.head.appendChild(script);
    }
  }, [schema, location.pathname, title, description, image, language]);

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
    // Robots: не индексируем, если есть noIndex или есть параметры пагинации
    let robotsTag = document.querySelector("meta[name='robots']");
    const isPaginated = /\b(page|sort|utm_)\b/i.test(location.search);
    const robotsCnt = noIndex || isPaginated ? "noindex, nofollow" : "index, follow";
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      (robotsTag as HTMLMetaElement).name = "robots";
      document.head.appendChild(robotsTag);
    }
    (robotsTag as HTMLMetaElement).content = robotsCnt;
  }, [title, description, noIndex, location.search]);

  // OG / Twitter / hreflang и theme-color
  React.useEffect(() => {
    const head = document.head;

    const setMetaTag = (name: string, content: string, propType: "name" | "property" = "property") => {
      const selector = propType === "property" ? `meta[property='${name}']` : `meta[name='${name}']`;
      let tag = head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        (tag as any)[propType] = name;
        head.appendChild(tag);
      }
      (tag as HTMLMetaElement).setAttribute("content", content);
    };

    const cut = (s?: string, max = 200) => s ? String(s).slice(0, max) : "";

    const imageUrl = image
      ? absoluteUrl(image)
      : absoluteUrl("/favicon.ico");
    // Размеры для og:image
    setMetaTag("og:image:width", "1200");
    setMetaTag("og:image:height", "630");

    setMetaTag("og:title", cut(title || "Calabria Explorer", 60));
    setMetaTag("og:description", cut(description || "Travel in Calabria, Italy: Tours, guides, relocation support.", 160));
    setMetaTag("og:type", type || "website");
    setMetaTag("og:url", url);
    setMetaTag("og:image", imageUrl);
    setMetaTag("og:site_name", "Calabria Explorer");
    setMetaTag("og:locale", language === "ru" ? "ru_RU" : "en_US");
    setMetaTag("og:locale:alternate", language === "ru" ? "en_US" : "ru_RU");

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", cut(title || "Calabria Explorer", 60), "name");
    setMetaTag("twitter:description", cut(description || "Travel in Calabria, Italy: Tours, guides, relocation support.", 160), "name");
    setMetaTag("twitter:image", imageUrl, "name");
    setMetaTag("twitter:site", "@calabriaexplorer", "name");

    // theme-color
    const theme = document.querySelector("meta[name='theme-color']") as HTMLMetaElement;
    if (!theme) {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = "#0077B6";
      head.appendChild(meta);
    } else {
      theme.content = "#0077B6";
    }

    // hreflang/alternate
    Array.from(document.querySelectorAll("link[rel='alternate']")).forEach(l => l.remove());

    const locales = [
      { code: "ru", hreflang: "ru", url: `${origin}${location.pathname.replace(/^\/en/, "")}` },
      { code: "en", hreflang: "en", url: `${origin}/en${location.pathname.replace(/^\/en/, "")}` }
    ];
    locales.forEach(loc => {
      if (loc.code === language) return;
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = loc.hreflang;
      link.href = loc.url;
      head.appendChild(link);
    });
    const linkX = document.createElement("link");
    linkX.rel = "alternate";
    linkX.hreflang = "x-default";
    linkX.href = url;
    head.appendChild(linkX);

    // robots (ещё раз для безопасности)
    let robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      (robotsTag as HTMLMetaElement).name = "robots";
      document.head.appendChild(robotsTag);
    }
    (robotsTag as HTMLMetaElement).content = noIndex ? "noindex, nofollow" : "index, follow";

    return () => {
      Array.from(document.querySelectorAll("link[rel='alternate']")).forEach(l => l.remove());
    };
  }, [title, description, url, image, type, language, noIndex, location.pathname]);

  return null;
};
export default SEOHead;
