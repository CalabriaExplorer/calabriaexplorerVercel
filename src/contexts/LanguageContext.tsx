/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from "react";
import enExtra from "../../public/locales/en.json" assert { type: "json" };
import ruExtra from "../../public/locales/ru.json" assert { type: "json" };

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  switchLanguage: (language: Language, currentPath?: string) => string;
  t: (key: string) => string;
}

const baseTranslations = {
  en: {
    // Home
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "tours": "Tours",

    // Hero
    "hero.title": "Calabria Explorer – real stories and local tours",
    "hero.subtitle": "Discover Italy's hidden gem - pristine beaches, rich culture, and authentic living",

    // Audience Selection
    "audience.title": "How would you like to experience Calabria?",
    "tourist.title": "Explore as a Tourist",
    "tourist.description": "Discover beautiful beaches, historical sites, local cuisine, and authentic experiences.",
    "tourist.button": "Start Exploring",
    "relocator.title": "Relocate Here",
    "relocator.description": "Everything you need to know about moving to and living in this affordable Mediterranean paradise.",
    "relocator.button": "Plan Your Move",

    // Tourist Section
    "tourist.section.title": "Discover Calabria",
    "tourist.explore.title": "Explore Map",
    "tourist.explore.description": "Find beaches, historical sites, and hidden gems",
    "tourist.calendar.title": "Event Calendar",
    "tourist.calendar.description": "Discover local festivals and cultural events",
    "tourist.itineraries.title": "Guided Tours",
    "tourist.itineraries.description": "Pre-planned routes and expert-guided experiences",
    "tourist.secrets.title": "Local Secrets",
    "tourist.secrets.description": "Stories and tips from Calabrian residents",
    "tourist.plan": "Explore Our Tours",

    // Relocator Section
    "relocator.section.title": "Relocate to Calabria",
    "relocator.guide.title": "Relocation Guide",
    "relocator.guide.description": "Step-by-step checklist for your move",
    "relocator.estate.title": "Real Estate",
    "relocator.estate.description": "Find your new home in Calabria",
    "relocator.forum.title": "Expat Forum",
    "relocator.forum.description": "Connect with others who've made the move",
    "relocator.calculator.title": "Cost Calculator",
    "relocator.calculator.description": "Plan your budget for Calabrian living",
    "relocator.begin": "Begin Your Relocation Journey",

    // Why Calabria
    "why.title": "Why Calabria?",
    "why.sunny": "Sunny days per year",
    "why.espresso": "Average price for an espresso",
    "why.coastline": "Of pristine coastline",

    // Social
    "social.title": "#MyCalabria",
    "social.description": "See Calabria through the eyes of visitors and locals",

    // Blog
    "blog.title": "Blog",
    "blog.description": "Articles and tips for travelers and lovers of Calabria.",

    // Footer
    "footer.description": "Discover Italy's hidden gem - pristine beaches, rich culture, and authentic living",
    "footer.quicklinks": "Quick Links",
    "footer.tourist": "Tourist Guide",
    "footer.relocation": "Relocation",
    "footer.connect": "Connect With Us",
    "footer.copyright": "All rights reserved.",
    "aboutAuthor.title": "About the Author",
    "aboutAuthor.text": "Maria has lived in Calabria for over 10 years. She is a licensed guide offering personal tours."
  },
  ru: {
    // Home
    "home": "Главная",
    "about": "О нас",
    "contact": "Контакты",
    "tours": "Экскурсии",

    // Hero
    "hero.title": "Calabria Explorer – реальные истории и авторские туры",
    "hero.subtitle": "Откройте для себя скрытую жемчужину Италии - нетронутые пляжи, богатую культуру и аутентичную жизнь",

    // Audience Selection
    "audience.title": "Как бы вы хотели узнать Калабрию?",
    "tourist.title": "Изучить как Турист",
    "tourist.description": "Откройте для себя прекрасные пляжи, исторические места, местную кухню и аутентичные впечатления.",
    "tourist.button": "Начать Исследование",
    "relocator.title": "Переехать Сюда",
    "relocator.description": "Всё, что нужно знать о переезде и жизни в этом доступном средиземноморском раю.",
    "relocator.button": "Планировать Переезд",

    // Tourist Section
    "tourist.section.title": "Откройте для себя Калабрию",
    "tourist.explore.title": "Карта Исследования",
    "tourist.explore.description": "Найдите пляжи, исторические места и скрытые жемчужины",
    "tourist.calendar.title": "Календарь Событий",
    "tourist.calendar.description": "Откройте для себя местные фестивали и культурные мероприятия",
    "tourist.itineraries.title": "Экскурсии с Гидом",
    "tourist.itineraries.description": "Заранее спланированные маршруты и экспертные туры",
    "tourist.secrets.title": "Местные Секреты",
    "tourist.secrets.description": "Истории и советы от жителей Калабрии",
    "tourist.plan": "Посмотреть Наши Экскурсии",

    // Relocator Section
    "relocator.section.title": "Переехать в Калабрию",
    "relocator.guide.title": "Руководство по Переезду",
    "relocator.guide.description": "Пошаговый контрольный список для вашего переезда",
    "relocator.estate.title": "Недвижимость",
    "relocator.estate.description": "Найдите свой новый дом в Калабрии",
    "relocator.forum.title": "Форум Экспатов",
    "relocator.forum.description": "Общайтесь с другими, кто уже переехал",
    "relocator.calculator.title": "Калькулятор Расходов",
    "relocator.calculator.description": "Планируйте свой бюджет для жизни в Калабрии",
    "relocator.begin": "Начать Ваш Путь к Переезду",

    // Why Calabria
    "why.title": "Почему Калабрия?",
    "why.sunny": "Солнечных дней в году",
    "why.espresso": "Средняя цена за эспрессо",
    "why.coastline": "Нетронутой береговой линии",

    // Social
    "social.title": "#МояКалабрия",
    "social.description": "Увидите Калабрию глазами посетителей и местных жителей",

    // Blog
    "blog.title": "Блог",
    "blog.description": "Статьи и советы для путешественников и любителей Калабрии.",

    // Footer
    "footer.description": "Откройте для себя скрытую жемчужину Италии - нетронутые пляжи, богатую культуру и аутентичную жизнь",
    "footer.quicklinks": "Быстрые Ссылки",
    "footer.tourist": "Туристический Гид",
    "footer.relocation": "Переезд",
    "footer.connect": "Свяжитесь с Нами",
    "footer.copyright": "Все права защищены.",
    "aboutAuthor.title": "Об авторе",
    "aboutAuthor.text": "Мария живёт в Калабрии и с энтузиазмом делится её красотой с путешественниками. Она организует авторские туры, наполненные локальным колоритом, гастрономией и историями из жизни южной Италии."
  }
};

const translations = {
  en: { ...baseTranslations.en, ...(enExtra as Record<string, string>) },
  ru: { ...baseTranslations.ru, ...(ruExtra as Record<string, string>) },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const readLanguageCookie = (): Language | null => {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("preferred-language="));
  if (!raw) return null;
  const value = raw.split("=")[1];
  return value === "ru" || value === "en" ? value : null;
};

const getLanguageFromUrl = (): Language | null => {
  if (typeof window === "undefined") return null;

  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  if (firstSegment === "ru" || firstSegment === "en") {
    return firstSegment;
  }

  return null;
};

const getInitialLanguage = (): Language => {
  // Priority: URL prefix → cookie → localStorage → Accept-Language
  const urlLanguage = getLanguageFromUrl();
  if (urlLanguage) return urlLanguage;

  if (typeof window !== "undefined") {
    const cookieLanguage = readLanguageCookie();
    if (cookieLanguage) {
      return cookieLanguage;
    }

    const saved = window.localStorage.getItem("preferred-language");
    if (saved === "ru" || saved === "en") {
      return saved;
    }

    const browserLanguages = window.navigator.languages?.length
      ? window.navigator.languages
      : [window.navigator.language];
    const hasRussian = browserLanguages.some((lang) => lang.toLowerCase().startsWith("ru"));
    if (hasRussian) {
      return "ru";
    }
  }

  return "en";
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const persistLanguage = useCallback((nextLanguage: Language) => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("preferred-language", nextLanguage);
    document.cookie = `preferred-language=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  const switchLanguage = useCallback((nextLanguage: Language, currentPath?: string) => {
    const path = currentPath ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const noPrefixPath = path.replace(/^\/(en|ru)(?=\/|$)/, "") || "/";
    const normalizedPath = noPrefixPath.startsWith("/") ? noPrefixPath : `/${noPrefixPath}`;
    return `/${nextLanguage}${normalizedPath === "/" ? "" : normalizedPath}`;
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
    if (typeof window !== "undefined") {
      const nextPath = switchLanguage(nextLanguage, window.location.pathname);
      window.history.replaceState({}, "", `${nextPath}${window.location.search}${window.location.hash}`);
    }
  }, [persistLanguage, switchLanguage]);

  useEffect(() => {
    const urlLanguage = getLanguageFromUrl();
    if (urlLanguage && urlLanguage !== language) {
      setLanguageState(urlLanguage);
      persistLanguage(urlLanguage);
      return;
    }

    persistLanguage(language);
  }, [language, persistLanguage]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
