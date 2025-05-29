
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const MobileLanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={toggleLanguage}
        size="sm"
        className="rounded-full w-12 h-12 p-0 bg-[#0077B6] hover:bg-[#005A8A] text-white shadow-lg"
        aria-label={`Switch to ${language === "en" ? "Russian" : "English"}`}
      >
        <div className="flex flex-col items-center text-xs">
          <Globe className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">
            {language === "en" ? "RU" : "EN"}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default MobileLanguageToggle;
