
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Melissa = () => {
  const { language, t } = useLanguage();
  const [videoError, setVideoError] = useState(false);

  const tourContent = {
    en: {
      title: "Melissa Discovery Tour: Ovid's Murals & Bees Adventure! 🎨🐝",
      subtitle: "Open-Air Art Party",
      intro: "Dive into Calabria's coolest street gallery! See jaw-dropping murals, hear wild artist stories, uncover city myths. Why Melissa? Because art bees love it here!",
      highlights: [
        {
          title: "Open-Air Art Party",
          description: "Dive into Calabria's coolest street gallery! See jaw-dropping murals, hear wild artist stories, uncover city myths. Why Melissa? Because art bees love it here!"
        },
        {
          title: "Treccani's Time Machine 📸",
          description: "Get up close with Ernesto's epic photos - Instagram from the past! Meet the faces that shaped Melissa's spicy character."
        },
        {
          title: "Snack & Snap Breaks 🍯",
          description: "3 hours of fun: Street art safari, Photo exhibition time travel, Local tastings (art makes you hungry!)"
        }
      ],
      details: {
        format: "3 hours of fun walking tour",
        includes: [
          "Street art safari",
          "Photo exhibition time travel", 
          "Local tastings (art makes you hungry!)"
        ]
      },
      whyChoose: [
        "🎨 Unique open-air street art gallery experience",
        "📸 Historic photo exhibition by Ernesto Treccani",
        "🍯 Local honey and bee-themed discoveries"
      ],
      bookNow: "Book Your Art Adventure",
      contactGuide: "Contact Guide",
      videoTitle: "Melissa in Motion"
    },
    ru: {
      title: "Обзорная экскурсия по городу МЕЛИССА – город Овидия, муралов и пчел",
      subtitle: "Интерактивный вернисаж муралов",
      intro: "Откройте уникальную галерею под открытым небом: лучшие работы калабрийских художников, истории создания, городские мифы и легенды. Узнайте, почему Мелисса — центр уличного искусства региона.",
      highlights: [
        {
          title: "Интерактивный вернисаж муралов",
          description: "Откройте уникальную галерею под открытым небом: лучшие работы калабрийских художников, истории создания, городские мифы и легенды. Узнайте, почему Мелисса — центр уличного искусства региона."
        },
        {
          title: "Фотовыставка Эрнесто Траккани",
          description: "Постоянная экспозиция итальянского фотографа. Документальные снимки — живая история Мелиссы: лица и события, сформировавшие характер города."
        },
        {
          title: "Фотопаузы и дегустация",
          description: "Продолжительность: 3 часа. Маршрут: Обзорная прогулка, муралы Калабрии, выставка Траккани."
        }
      ],
      details: {
        format: "Пешая прогулка 3 часа",
        includes: [
          "Обзорная прогулка",
          "Муралы Калабрии",
          "Выставка Траккани"
        ]
      },
      whyChoose: [
        "🎨 Уникальная галерея уличного искусства под открытым небом",
        "📸 Историческая фотовыставка Эрнесто Траккани",
        "🍯 Местные деликатесы и открытия, связанные с пчелами"
      ],
      bookNow: "Забронировать арт-приключение",
      contactGuide: "Связаться с гидом",
      videoTitle: "Мелисса в движении"
    }
  };

  const content = tourContent[language];

  return (
    <Layout
      colorScheme="tourist"
      title={`${content.title} - Calabria Explorer`}
      description={content.intro}
      image="/lovable-uploads/2ca0f4d4-ee1c-4971-94d5-c9a8219e9c36.png"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#E2725B] to-[#D4511E] text-white py-16">
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
                <span>3 {language === "en" ? "hours" : "часа"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span>{language === "en" ? "Street art" : "Уличное искусство"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{language === "en" ? "Photo exhibition" : "Фотовыставка"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">{content.videoTitle}</h2>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
              {!videoError ? (
                <iframe
                  src="https://www.youtube.com/embed/chi9TJxMCg8"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Melissa Video"
                  className="w-full h-full"
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#E2725B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      {language === "en" ? "Video loading..." : "Загрузка видео..."}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <a 
                        href="https://youtu.be/chi9TJxMCg8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#E2725B] hover:underline"
                      >
                        {language === "en" 
                          ? "Watch on YouTube" 
                          : "Смотреть на YouTube"
                        }
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-[#FDF8F6]">
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
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#E2725B]">
            {language === "en" ? "Tour Highlights" : "Основные моменты экскурсии"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-[#E2725B]">
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

      {/* Practical Details */}
      <section className="py-16 bg-[#FDF8F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#E2725B]">
              {language === "en" ? "Practical Details" : "Практическая информация"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {language === "en" ? "Tour Format" : "Формат экскурсии"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{content.details.format}</p>
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
                        <span className="text-[#E2725B] font-bold">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === "en" ? "Why Choose This Tour?" : "Почему выбрать эту экскурсию?"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {content.whyChoose.map((reason, index) => (
                    <p key={index} className="text-gray-600">{reason}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-[#E2725B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">
              {content.bookNow}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === "en" 
                ? "Ready for an artistic adventure through Melissa? Contact us to plan your mural discovery:"
                : "Готовы к художественному приключению в Мелиссе? Свяжитесь с нами, чтобы спланировать ваше открытие муралов:"
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:mariamarinaciro@gmail.com" className="hover:text-blue-200">
                  mariamarinaciro@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5" />
                <span>+39 344 6935576</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#E2725B] hover:bg-gray-100">
                {content.bookNow}
              </Button>
              <Link to="/tours">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#E2725B]">
                  {language === "en" ? "View All Tours" : "Все экскурсии"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Melissa;
