import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Route, Users, Calculator, Home, Instagram, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/ui/optimized-image";

const Index = () => {
  const [selectedAudience, setSelectedAudience] = useState<"tourist" | "relocator" | null>(null);
  const { t, language } = useLanguage();

  // Calabria images for the social gallery
  const calabriaImages = [
    {
      src: "/lovable-uploads/9bfe8180-86f4-40c8-8fdf-aa965d9be96b.png",
      alt: "Осенний лес в Калабрии с деревянными ступеньками"
    },
    {
      src: "/lovable-uploads/f22f9e69-8576-48b3-b798-a05bba1e9d41.png", 
      alt: "Средневековый замок на побережье Калабрии"
    },
    {
      src: "/lovable-uploads/e5c600ba-1e0e-4e1f-a9cf-219223e213dd.png",
      alt: "Горный городок в Калабрии с древним мостом"
    },
    {
      src: "/lovable-uploads/6cd2d603-fa70-4f33-82a1-9155ab825253.png",
      alt: "Кайтсерфинг на побережье Калабрии"
    }
  ];

  // Guide content based on language
  const guideContent = {
    en: {
      title: "Helpful Guides",
      guides: [
        {
          title: "🏡 10 Steps to Your Italian Dream Home",
          description: "Complete no-stress guide before apartment hunting in Italy",
          link: "/guides/ten-steps"
        },
        {
          title: "📋 Relocation Documents",
          description: "Coming soon - complete list of documents and procedures",
          link: null
        }
      ]
    },
    ru: {
      title: "Полезные гайды",
      guides: [
        {
          title: "🏡 10 шагов перед поиском квартиры в Италии",
          description: "Полный чек-лист для подготовки к покупке недвижимости в Италии",
          link: "/guides/ten-steps"
        },
        {
          title: "📋 Документы для переезда",
          description: "Скоро появится - полный список документов и процедур",
          link: null
        }
      ]
    }
  };

  const currentGuideContent = guideContent[language];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {t("audience.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedAudience === "tourist" ? "ring-2 ring-[#0077B6]" : ""
              }`}
              onClick={() => setSelectedAudience("tourist")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-[#0077B6]">
                  {t("tourist.title")}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("tourist.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/tours">
                  <Button className="bg-[#0077B6] hover:bg-[#005A8A] text-white">
                    {t("tourist.button")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedAudience === "relocator" ? "ring-2 ring-[#E2725B]" : ""
              }`}
              onClick={() => setSelectedAudience("relocator")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E2725B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-[#E2725B]">
                  {t("relocator.title")}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("relocator.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-[#E2725B] hover:bg-[#C85A42] text-white">
                  {t("relocator.button")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tourist Section */}
      {selectedAudience === "tourist" && (
        <section className="py-16 bg-[#F8FBFE]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#0077B6]">
              {t("tourist.section.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.explore.title")}</CardTitle>
                  <CardDescription>{t("tourist.explore.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.calendar.title")}</CardTitle>
                  <CardDescription>{t("tourist.calendar.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Route className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.itineraries.title")}</CardTitle>
                  <CardDescription>{t("tourist.itineraries.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.secrets.title")}</CardTitle>
                  <CardDescription>{t("tourist.secrets.description")}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            {/* Featured Tours */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold text-center mb-8 text-[#0077B6]">
                Популярные экскурсии
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Link to="/tours/melissa">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-[#0077B6]">🎨 Экскурсия "МЕЛИССА"</CardTitle>
                      <CardDescription>
                        Город Овидия, муралов и пчел. Откройте уникальную галерею под открытым небом!
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                
                <Link to="/tours/umbriatico">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-[#0077B6]">🏰 Умбриатико</CardTitle>
                      <CardDescription>
                        Средневековый городок с захватывающими видами на Ионическое море
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/tours">
                <Button size="lg" className="bg-[#0077B6] hover:bg-[#005A8A] text-white">
                  {t("tourist.plan")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Relocator Section */}
      {selectedAudience === "relocator" && (
        <section className="py-16 bg-[#FDF8F6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#E2725B]">
              {t("relocator.section.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Route className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.guide.title")}</CardTitle>
                  <CardDescription>{t("relocator.guide.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Home className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.estate.title")}</CardTitle>
                  <CardDescription>{t("relocator.estate.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.forum.title")}</CardTitle>
                  <CardDescription>{t("relocator.forum.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calculator className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.calculator.title")}</CardTitle>
                  <CardDescription>{t("relocator.calculator.description")}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            {/* Featured Guides */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold text-center mb-8 text-[#E2725B]">
                {currentGuideContent.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {currentGuideContent.guides.map((guide, index) => (
                  <div key={index}>
                    {guide.link ? (
                      <Link to={guide.link}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardHeader>
                            <CardTitle className="text-[#E2725B]">{guide.title}</CardTitle>
                            <CardDescription>
                              {guide.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    ) : (
                      <Card className="hover:shadow-lg transition-shadow opacity-50">
                        <CardHeader>
                          <CardTitle className="text-gray-500">{guide.title}</CardTitle>
                          <CardDescription className="text-gray-400">
                            {guide.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-[#E2725B] hover:bg-[#C85A42] text-white">
                {t("relocator.begin")}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Calabria Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">{t("why.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">{t("why.sunny")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">€1.20</div>
              <p className="text-gray-600">{t("why.espresso")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">800km</div>
              <p className="text-gray-600">{t("why.coastline")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">{t("social.title")}</h2>
          <p className="text-gray-600 mb-8">{t("social.description")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {calabriaImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a 
              href="https://www.instagram.com/maria_nedvizimost_calabria?igsh=b3h1aHBzeWhpeG4z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#005A8A] font-medium"
            >
              <Instagram className="w-5 h-5" />
              #MyCalabria
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
