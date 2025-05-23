
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { CalendarCheck, MapPin, Users, FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();
  const [audienceType, setAudienceType] = useState<"tourist" | "relocator" | null>(null);

  const handleAudienceSelect = (type: "tourist" | "relocator") => {
    setAudienceType(type);
    toast({
      title: type === "tourist" ? t("tourist.title") : t("relocator.title"),
      description: type === "tourist" 
        ? "Discover the beauty and experiences of Calabria" 
        : "Start your journey to living in beautiful Calabria",
      duration: 3000,
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  return (
    <Layout colorScheme={audienceType || "default"}>
      {/* Hero Section */}
      <section className="relative">
        <AspectRatio ratio={16/9} className="max-h-[70vh]">
          <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                {t("hero.title")}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful Calabrian coastline" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </section>

      {/* Audience Selection */}
      {!audienceType && (
        <section className="py-16 bg-[#F5F0E6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-bold">
              {t("audience.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tourist Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Tourist enjoying Calabria"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-[#0077B6]">{t("tourist.title")}</h3>
                  <p className="text-gray-600 mb-6">
                    {t("tourist.description")}
                  </p>
                  <Button 
                    className="w-full bg-[#0077B6] hover:bg-[#005f92]" 
                    onClick={() => handleAudienceSelect("tourist")}
                  >
                    {t("tourist.button")}
                  </Button>
                </div>
              </div>

              {/* Relocator Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Living in Calabria"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-[#E2725B]">{t("relocator.title")}</h3>
                  <p className="text-gray-600 mb-6">
                    {t("relocator.description")}
                  </p>
                  <Button 
                    className="w-full bg-[#E2725B] hover:bg-[#c95a45]" 
                    onClick={() => handleAudienceSelect("relocator")}
                  >
                    {t("relocator.button")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audience-Specific Content */}
      {audienceType === "tourist" && (
        <section className="py-12 bg-[#F8FBFE] border-t-4 border-[#0077B6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#0077B6]">{t("tourist.section.title")}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <MapPin size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("tourist.explore.title")}</h3>
                <p className="text-gray-600">{t("tourist.explore.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <CalendarCheck size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("tourist.calendar.title")}</h3>
                <p className="text-gray-600">{t("tourist.calendar.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FileText size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("tourist.itineraries.title")}</h3>
                <p className="text-gray-600">{t("tourist.itineraries.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("tourist.secrets.title")}</h3>
                <p className="text-gray-600">{t("tourist.secrets.description")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-[#0077B6] hover:bg-[#005f92]">
                {t("tourist.plan")}
              </Button>
            </div>
          </div>
        </section>
      )}

      {audienceType === "relocator" && (
        <section className="py-12 bg-[#FDF8F6] border-t-4 border-[#E2725B]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#E2725B]">{t("relocator.section.title")}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FileText size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("relocator.guide.title")}</h3>
                <p className="text-gray-600">{t("relocator.guide.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <MapPin size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("relocator.estate.title")}</h3>
                <p className="text-gray-600">{t("relocator.estate.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("relocator.forum.title")}</h3>
                <p className="text-gray-600">{t("relocator.forum.description")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <CalendarCheck size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">{t("relocator.calculator.title")}</h3>
                <p className="text-gray-600">{t("relocator.calculator.description")}</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-[#E2725B] hover:bg-[#c95a45]">
                {t("relocator.begin")}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Calabria Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-bold">{t("why.title")}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#0077B6]">300+</div>
              <p className="text-gray-600">{t("why.sunny")}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#E2725B]">€1</div>
              <p className="text-gray-600">{t("why.espresso")}</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#0077B6]">800km</div>
              <p className="text-gray-600">{t("why.coastline")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* User-Generated Content */}
      <section className="py-16 bg-[#F5F0E6]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-2 font-bold">{t("social.title")}</h2>
          <p className="text-center text-gray-600 mb-8">{t("social.description")}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria landscape"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria landscape"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria beach"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria mountains"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
