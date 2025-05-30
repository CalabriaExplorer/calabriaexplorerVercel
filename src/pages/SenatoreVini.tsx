
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone, Wine, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const SenatoreVini = () => {
  const { language } = useLanguage();

  const tourContent = {
    en: {
      title: "Senatore Vini Wine Tasting",
      subtitle: "Historic Wine Cellar Tour & Tasting",
      intro: "Step into the enchanting world of Calabrian winemaking at the historic Senatore Vini cellar. Dating back to the 18th century, this family-owned winery has been crafting exceptional wines using traditional methods passed down through generations.",
      highlights: [
        {
          title: "Historic Wine Cellar",
          description: "Explore underground cellars carved from local stone, where wines age in perfect conditions surrounded by centuries of history."
        },
        {
          title: "Wine Tasting Experience",
          description: "Sample 5 carefully selected local wine varieties, each paired with artisanal cheeses and traditional Calabrian delicacies."
        },
        {
          title: "Winemaking Stories",
          description: "Learn about traditional Calabrian winemaking techniques and the fascinating stories behind each vintage from passionate local vintners."
        }
      ],
      details: {
        duration: "2.5 hours",
        meetingPoint: "Piazza del Vino, Main Entrance",
        price: "€55 per person",
        includes: [
          "Guided tour of historic wine cellars",
          "Tasting of 5 local wine varieties",
          "Traditional cheese and delicacy pairings",
          "Stories and history of Calabrian winemaking"
        ]
      },
      bookNow: "Book Wine Experience",
      whatsappBook: "Book in WhatsApp",
      telegramBook: "Забронировать в Telegram"
    },
    ru: {
      title: "Дегустация Senatore Vini",
      subtitle: "Исторический тур с дегустацией",
      intro: "Погрузитесь в очаровательный мир калабрийского виноделия в историческом погребе Senatore Vini. Эта семейная винодельня, датируемая XVIII веком, создает исключительные вина, используя традиционные методы, передаваемые из поколения в поколение.",
      highlights: [
        {
          title: "Исторический винный погреб",
          description: "Исследуйте подземные погреба, высеченные из местного камня, где вина выдерживаются в идеальных условиях в окружении вековой истории."
        },
        {
          title: "Дегустация вин",
          description: "Попробуйте 5 тщательно отобранных местных сортов вин в сочетании с ремесленными сырами и традиционными калабрийскими деликатесами."
        },
        {
          title: "Истории виноделия",
          description: "Узнайте о традиционных калабрийских техниках виноделия и увлекательных историях каждого винтажа от страстных местных виноделов."
        }
      ],
      details: {
        duration: "2.5 часа",
        meetingPoint: "Пьяцца дель Вино, главный вход",
        price: "€55 с человека",
        includes: [
          "Экскурсия по историческим винным погребам",
          "Дегустация 5 местных сортов вин",
          "Сочетания с традиционными сырами и деликатесами",
          "Истории и традиции калабрийского виноделия"
        ]
      },
      bookNow: "Забронировать дегустацию",
      whatsappBook: "Book in WhatsApp", 
      telegramBook: "Забронировать в Telegram"
    }
  };

  const content = tourContent[language];

  const handleBooking = () => {
    if (language === "ru") {
      window.open("https://t.me/393446935576", "_blank");
    } else {
      window.open("https://wa.me/393446935576", "_blank");
    }
  };

  return (
    <Layout 
      colorScheme="tourist"
      title={`${content.title} - Calabria Explorer`}
      description={content.intro}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0077B6] to-[#00A9E6] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {content.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{content.details.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{language === "en" ? "Max 8 people" : "Макс. 8 человек"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4" />
                <span>{language === "en" ? "Wine tasting" : "Дегустация вин"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/d310f5fa-3d93-4307-b982-9e2ff5b15586.png"
                  alt={content.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform cursor-zoom-in"
                />
              </AspectRatio>
            </div>
            <div className="space-y-4">
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/25dc2f21-31f0-4475-a614-6b9b16b01057.png"
                  alt={language === "en" ? "Wine cellar interior" : "Интерьер винного погреба"}
                  className="object-cover w-full h-full hover:scale-105 transition-transform cursor-zoom-in"
                />
              </AspectRatio>
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/bbf53f58-00ce-4565-9b79-54cce8d12868.png"
                  alt={language === "en" ? "Wine tasting setup" : "Сервировка дегустации"}
                  className="object-cover w-full h-full hover:scale-105 transition-transform cursor-zoom-in"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-[#F8FBFE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#0077B6]">
            {language === "en" ? "Experience Highlights" : "Основные моменты"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-[#0077B6]">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-[#F8FBFE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#0077B6]">
              {language === "en" ? "Tour Details" : "Детали экскурсии"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0077B6]" />
                    {language === "en" ? "Duration" : "Длительность"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{content.details.duration}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#0077B6]" />
                    {language === "en" ? "Meeting Point" : "Место встречи"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{content.details.meetingPoint}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Wine className="w-5 h-5 text-[#0077B6]" />
                    {language === "en" ? "Price" : "Цена"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg font-semibold">{content.details.price}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {language === "en" ? "Includes" : "Включено"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.details.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#0077B6] font-bold">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-[#0077B6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">
              {content.bookNow}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === "en" 
                ? "Ready to discover the finest wines of Calabria? Book your wine tasting experience now:"
                : "Готовы открыть для себя лучшие вина Калабрии? Забронируйте дегустацию прямо сейчас:"
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBooking}
                size="lg" 
                className="bg-white text-[#0077B6] hover:bg-gray-100 flex items-center gap-2"
              >
                {language === "ru" ? (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    {content.telegramBook}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687z"/>
                    </svg>
                    {content.whatsappBook}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SenatoreVini;
