
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: "en" | "ru") => {
    console.log('Mobile menu language change:', newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-white">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col space-y-4 mt-6">
            <Link 
              to="/" 
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link 
              to="/tours" 
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t("tours")}
            </Link>
            <Link 
              to="#about" 
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link 
              to="#contact" 
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4" />
                <span className="font-medium">Language / Язык</span>
              </div>
              
              <RadioGroup
                value={language}
                onValueChange={handleLanguageChange}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="en" id="en" />
                  <label htmlFor="en" className="text-sm font-medium cursor-pointer">
                    English
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ru" id="ru" />
                  <label htmlFor="ru" className="text-sm font-medium cursor-pointer">
                    Русский
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
