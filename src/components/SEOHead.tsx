import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Locale = "en" | "ru";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  locale?: Locale;
  alternateUrls?: {
    en: string;
    ru: string;
    xDefault?: string;
  };
  type?: string;
  canonical?: string;
  noIndex?: boolean;
  schema?: string;
  preloadImages?: string[];
}

const SITE_URL = "https://calabriaexplorer.vercel.app";

const toAbsoluteUrl = (value?: string) => {
  if (!value) return SITE_URL;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

const ensureMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const ensureLink = (selector: string, rel: string, href: string, hreflang?: string) => {
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
  if (hreflang) link.hreflang = hreflang;
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image,
  url,
  locale,
  alternateUrls,
  type = "website",
  canonical,
  noIndex = false,
  schema,
  preloadImages,
}) => {
  const { language } = useLanguage();
  const resolvedLocale: Locale = locale ?? language;

  React.useEffect(() => {
    if (typeof document === "undefined") return;

    const resolvedPath =
      url ??
      canonical ??
      (typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/");

    const canonicalUrl = toAbsoluteUrl(canonical ?? resolvedPath);
    const pageUrl = toAbsoluteUrl(url ?? resolvedPath);
    const ogImage = toAbsoluteUrl(image ?? "/favicon.ico");

    document.documentElement.lang = resolvedLocale;
    document.title = title;

    ensureMeta("meta[name='description']", "name", "description", description);
    ensureMeta("meta[name='robots']", "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    ensureLink("link[rel='canonical']", "canonical", canonicalUrl);

    ensureMeta("meta[property='og:title']", "property", "og:title", title);
    ensureMeta("meta[property='og:description']", "property", "og:description", description);
    ensureMeta("meta[property='og:type']", "property", "og:type", type);
    ensureMeta("meta[property='og:url']", "property", "og:url", pageUrl);
    ensureMeta("meta[property='og:image']", "property", "og:image", ogImage);
    ensureMeta("meta[property='og:site_name']", "property", "og:site_name", "Calabria Explorer");
    ensureMeta("meta[property='og:locale']", "property", "og:locale", resolvedLocale === "ru" ? "ru_RU" : "en_US");

    ensureMeta("meta[name='twitter:card']", "name", "twitter:card", "summary_large_image");
    ensureMeta("meta[name='twitter:title']", "name", "twitter:title", title);
    ensureMeta("meta[name='twitter:description']", "name", "twitter:description", description);
    ensureMeta("meta[name='twitter:image']", "name", "twitter:image", ogImage);

    if (preloadImages?.length) {
      preloadImages.forEach((src) => {
        const href = toAbsoluteUrl(src);
        let link = document.head.querySelector(`link[rel='preload'][href='${href}']`) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = href;
          document.head.appendChild(link);
        }
      });
    }

    Array.from(document.head.querySelectorAll("script[type='application/ld+json'][data-seo-head='1']")).forEach((el) => el.remove());
    if (schema) {
      const schemaTag = document.createElement("script");
      schemaTag.type = "application/ld+json";
      schemaTag.dataset.seoHead = "1";
      schemaTag.text = schema;
      document.head.appendChild(schemaTag);
    }

    const localized = alternateUrls ?? {
      en: resolvedPath.replace(/^\/ru(?=\/|$)/, "/en"),
      ru: resolvedPath.replace(/^\/en(?=\/|$)/, "/ru"),
      xDefault: "/",
    };

    ensureLink("link[rel='alternate'][hreflang='en']", "alternate", toAbsoluteUrl(localized.en), "en");
    ensureLink("link[rel='alternate'][hreflang='ru']", "alternate", toAbsoluteUrl(localized.ru), "ru");
    ensureLink(
      "link[rel='alternate'][hreflang='x-default']",
      "alternate",
      toAbsoluteUrl(localized.xDefault ?? localized.en),
      "x-default",
    );
  }, [title, description, image, url, canonical, resolvedLocale, noIndex, alternateUrls, type, schema, preloadImages]);

  return null;
};

export default SEOHead;
