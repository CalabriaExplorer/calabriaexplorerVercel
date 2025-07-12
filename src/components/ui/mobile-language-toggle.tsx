
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

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Language toggle clicked, current language:', language);
    
    const newLanguage = language === "en" ? "ru" : "en";
    console.log('Switching to language:', newLanguage);
    setLanguage(newLanguage);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] md:hidden">
      <Button
        onClick={handleLanguageToggle}
        size="sm"
        className="rounded-full w-14 h-14 p-0 bg-[#0077B6] hover:bg-[#005A8A] text-white shadow-2xl border-2 border-white"
        aria-label={`Switch to ${language === "en" ? "Russian" : "English"}`}
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          touchAction: 'manipulation'
        }}
      >
        <div className="flex flex-col items-center text-xs">
          <Globe className="w-5 h-5 mb-0.5" aria-hidden="true" />
          <span className="text-[11px] font-bold leading-none">
            {language === "en" ? "RU" : "EN"}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default MobileLanguageToggle;
