import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import MobileLanguageToggle from "@/components/ui/mobile-language-toggle";
import MobileMenu from "@/components/ui/mobile-menu";
import SEOHead from "@/components/SEOHead";

interface LayoutProps {
  children: React.ReactNode;
  colorScheme?: "tourist" | "relocator" | "default";
  title?: string;
  description?: string;
  image?: string;
  preloadImages?: string[];
}

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.5 4.5c-2.5 0-4.5 2-4.5 4.5v6c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-2h-3v2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V9c0-1.7 1.3-3 3-3s3 1.3 3 3v3h3V9c0-2.5-2-4.5-4.5-4.5z" />
    <circle cx="6.5" cy="14.5" r="2.5" />
  </svg>
);

const Layout = ({ children, colorScheme = "default", title, description, image, preloadImages }: LayoutProps) => {
  const { language, setLanguage, t } = useLanguage();
  
  // Update page title and description for SEO
  useEffect(() => {
    if (title) {
      document.title = `${title} - Calabria Explorer`;
    }
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update lang attribute
    document.documentElement.lang = language;
  }, [title, description, language]);
  
  const headerAccentColor = 
    colorScheme === "tourist" ? "border-[#0077B6]" :
    colorScheme === "relocator" ? "border-[#E2725B]" : "border-gray-200";

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  // Language-specific social media links
  const getSocialMediaLinks = () => {
    if (language === "en") {
      return [
        {
          href: "https://www.instagram.com/maria_nedvizimost_calabria?igsh=b3h1aHBzeWhpeG4z",
          icon: Instagram,
          label: "Follow us on Instagram"
        },
        {
          href: "https://www.threads.com/@maria_nedvizimost_calabria",
          icon: ThreadsIcon,
          label: "Threads"
        }
      ];
    } else {
      return [
        {
          href: "https://www.instagram.com/maria_nedvizimost_calabria?igsh=b3h1aHBzeWhpeG4z",
          icon: Instagram,
          label: "Подписывайтесь в Instagram"
        },
        {
          href: "https://www.threads.com/@maria_nedvizimost_calabria",
          icon: ThreadsIcon,
          label: "Threads"
        },
        {
          href: "https://t.me/s/CiroMarinaVibe",
          icon: ({ className }: { className?: string }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={className}
              aria-hidden="true"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.368 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          ),
          label: "Telegram"
        },
        {
          href: "https://vk.com/id880471081",
          icon: ({ className }: { className?: string }) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.033-.734-.734-1.135-.734-.734 0-.867.133-.867.867v1.135c0 .4-.133.734-1.2.734-2.263 0-4.792-1.385-6.579-3.959C4.04 9.441 2.655 6.846 2.655 6.312c0-.4.133-.734.867-.734h1.744c.6 0 .734.267.934.867.934 2.797 2.463 5.26 3.096 5.26.233 0 .333-.1.333-.667V9.775c-.067-1.2-.7-1.135-.7-1.5 0-.267.2-.534.534-.534h2.73c.467 0 .667.267.667.734v3.262c0 .467.2.667.334.667.233 0 .466-.133.933-.6 1.467-1.467 2.53-3.762 2.53-3.762.133-.334.4-.667.934-.667h1.744c.8 0 .667.4.534.934-.4 1.334-2.263 4.265-2.263 4.265-.2.333-.267.467 0 .8.2.267.8.8 1.2 1.267.734.734 1.267 1.334 1.4 1.734.134.666-.266.866-.866.866z" />
            </svg>
          ),
          label: "Следите в ВК"
        },
        {
          href: "https://dzen.ru/id/66f27f02053e7469931f7e54",
          icon: ({ className }: { className?: string }) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.196-.41-.307-.67-.307-.495 0-.896.401-.896.896 0 .495.401.896.896.896s.896-.401.896-.896c0-.26-.111-.501-.226-.589zM12 18.72c-3.708 0-6.72-3.012-6.72-6.72S8.292 5.28 12 5.28s6.72 3.012 6.72 6.72-3.012 6.72-6.72 6.72zm0-11.52c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.68c-1.591 0-2.88-1.289-2.88-2.88S10.409 9.12 12 9.12s2.88 1.289 2.88 2.88-1.289 2.88-2.88 2.88z" />
            </svg>
          ),
          label: "Читайте в Дзен"
        }
      ];
    }
  };

  // Определяем canonical и hreflang URL без query-параметра ?lang=
  const canonicalUrl = typeof window !== "undefined"
    ? `${window.location.origin}${window.location.pathname}`
    : undefined;
  const languagePath = typeof window !== "undefined" ? window.location.pathname.replace(/^\/(en|ru)(?=\/|$)/, "") || "/" : "/";
  const alternateUrls = {
    en: `/en${languagePath === "/" ? "" : languagePath}`,
    ru: `/ru${languagePath === "/" ? "" : languagePath}`,
    xDefault: "/",
  };

  // Schema.org: по title и pathname определяем тип schema
  const isBlogPost = title && /blog/i.test(title) && typeof window !== "undefined" && window.location.pathname.startsWith("/blog/");
  const isTour = typeof window !== "undefined" && window.location.pathname.startsWith("/tours/");
  const schema = React.useMemo(() => {
    if (typeof window === "undefined") return undefined;
    if (window.location.pathname === "/") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Calabria Explorer",
        "url": window.location.origin,
        "description": description || "Travel in Calabria, Italy: Tours, guides, relocation support.",
        "inLanguage": language,
        "image": window.location.origin + (image || "/favicon.ico"),
        "publisher": {
          "@type": "Organization",
          "name": "Calabria Explorer"
        }
      });
    }
    if (isBlogPost) {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "mainEntityOfPage": window.location.href,
        "image": window.location.origin + (image || "/favicon.ico"),
        "author": { "@type": "Person", "name": "Мария (Maria)" },
        "publisher": { "@type": "Organization", "name": "Calabria Explorer" },
        "datePublished": new Date().toISOString().slice(0, 10),
        "inLanguage": language
      });
    }
    if (isTour) {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": title,
        "description": description,
        "image": window.location.origin + (image || "/favicon.ico"),
        "inLanguage": language,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      });
    }
    // BreadcrumbList для остального
    const pathChunks = window.location.pathname
      .split("/")
      .filter(Boolean);
    if (pathChunks.length > 0) {
      const items = pathChunks.map((part, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": decodeURIComponent(part),
        "item": window.location.origin + "/" + pathChunks.slice(0, i + 1).join("/")
      }));
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
      });
    }
    return undefined;
  }, [title, description, image, language, isBlogPost, isTour]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title={title || "Calabria Explorer"}
        description={description || "Travel in Calabria, Italy: Tours, guides, relocation support."}
        canonical={canonicalUrl}
        alternateUrls={alternateUrls}
        image={image}
        schema={schema}
        preloadImages={preloadImages}
      />
      {/* Header/Navigation */}
      <header className={`bg-white border-b ${headerAccentColor} sticky top-0 z-10`} role="banner">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" aria-label="Calabria Explorer Home">
            <MapPin className={colorScheme === "relocator" ? "text-[#E2725B]" : "text-[#0077B6]"} aria-hidden="true" />
            <h1 className="text-xl md:text-2xl font-bold font-serif">Calabria Explorer</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList role="navigation" aria-label="Main navigation">
              <NavigationMenuItem className="px-2">
                <Link to="/" className="font-medium" aria-label="Home page">{t("home")}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Link to="/tours" className="font-medium" aria-label="Tours and excursions">{t("tours")}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Link to="#about" className="font-medium" aria-label="About Calabria">{t("about")}</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Link to="/blog" className="font-medium" aria-label={language === "en" ? "Blog" : "Блог"}>
                  {language === "en" ? "Blog" : "Блог"}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleLanguage}
                  aria-label={`Switch to ${language === "en" ? "Russian" : "English"}`}
                >
                  {language === "en" ? "EN | RU" : "RU | EN"}
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow" role="main">
        {children}
      </main>

      {/* Mobile Language Toggle */}
      <MobileLanguageToggle />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Calabria Explorer</h3>
              <p className="text-gray-300 mb-4">{t("footer.description")}</p>
              <address className="text-gray-300 not-italic">
                <p>Calabria, Italy</p>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <a href="mailto:mariamarinaciro@gmail.com" className="text-blue-400 hover:text-blue-300">
                    mariamarinaciro@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>+39 344 6935576</span>
                  <a 
                    href="https://wa.me/393446935576" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-400 hover:text-green-300 ml-2"
                    aria-label="Contact via WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687z"/>
                    </svg>
                  </a>
                  <a 
                      href="https://t.me/+393446935576"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300"
                    aria-label="Contact via Telegram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </address>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t("footer.quicklinks")}</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white">{t("home")}</Link>
                  </li>
                  <li>
                    <Link to="/tours" className="text-gray-300 hover:text-white">{t("tours")}</Link>
                  </li>
                  <li>
                    <Link to="/guides/ten-steps" className="text-gray-300 hover:text-white">{t("footer.tourist")}</Link>
                  </li>
                  <li>
                    <Link to="#relocation" className="text-gray-300 hover:text-white">{t("footer.relocation")}</Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-gray-300 hover:text-white">
                      {language === "en" ? "Blog" : "Блог"}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t("footer.connect")}</h4>
              <div className="flex space-x-4 mb-4" role="group" aria-label="Social media links">
                {getSocialMediaLinks().map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white" 
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                {language === "en" 
                  ? "Follow us on social media for updates about beautiful Calabria!" 
                  : "Подписывайтесь на наши социальные сети для новостей о прекрасной Калабрии!"
                }
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Calabria Explorer. {t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
