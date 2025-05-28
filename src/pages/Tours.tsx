
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Tours = () => {
  const { language, t } = useLanguage();
  const [videoError, setVideoError] = useState(false);

  const tourContent = {
    en: {
      title: "Umbriatico: Town on the Edge of Time",
      subtitle: "Guided Walking Tour of Calabria's Hidden Gem",
      intro: "Step into a living tapestry of history as you wander the cobblestone streets of Umbriatico. Every stone here whispers secrets of its 1,000-year past, from its Byzantine origins to its enduring role in Calabria's cultural soul.",
      highlights: [
        {
          title: "The Chapel of Secrets",
          description: "Discover a 15th-century Byzantine fresco hidden in Umbriatico's ancient chapel. Unravel its symbolic mysteries and learn why this masterpiece remains a sacred treasure for locals."
        },
        {
          title: "Museum of Living Memories",
          description: "At the \"Story of a Town\" Museum, artifacts aren't just displayed—they speak. Each item, donated by Umbriatico's families, reveals intimate tales of daily life, traditions, and celebrations that define true Calabrian spirit."
        },
        {
          title: "Bridge Over Timeless Beauty",
          description: "Cross the iconic arched bridge spanning a dramatic gorge. Pause here to capture Instagram-worthy panoramas of mountains and valleys, or simply breathe in the crisp mountain air."
        }
      ],
      details: {
        format: "3–4 hour walking tour (comfortable shoes recommended)",
        includes: [
          "Guided visit to the \"Story of a Town\" Museum",
          "Exclusive access to the Byzantine fresco chapel", 
          "Optional post-tour Calabrian feast at Antonella's (local wines, cheeses, and cured meats)"
        ]
      },
      whyChoose: [
        "🧭 Deep cultural immersion with a focus on untold stories",
        "📸 Stunning photo opportunities at every turn",
        "🧀 Taste authentic Calabria with optional local delicacies"
      ],
      bookNow: "Book Your Journey Through Time",
      contactGuide: "Contact Guide",
      addTour: "Add New Tour",
      videoTitle: "Discover Umbriatico in Motion"
    },
    ru: {
      title: "Умбриатико: Город на краю пропасти",
      subtitle: "Обзорная прогулка по старому городу",
      intro: "Вы пройдёте по уютным улочкам Умбриатико, где каждый камень хранит память о тысячелетней истории. Узнаете о византийском прошлом этого места и его роли в культуре Калабрии.",
      highlights: [
        {
          title: "Церковь с византийской фреской XV века",
          description: "Мы посетим одну из главных жемчужин города - старинную церковь, где сохранилась уникальная византийская фреска XV века. Я расскажу о её символике и значении для местных жителей."
        },
        {
          title: "Музей «История одного города»",
          description: "В этом необычном музее каждый экспонат - не просто предмет, а часть личной истории семьи или рода. Все вещи были пожертвованы жителями Умбриатико, и через них вы узнаете о быте, традициях и праздниках настоящих калабрийцев."
        },
        {
          title: "Арочный мост через пропасть и виды на горы",
          description: "Мы выйдем на знаменитый арочный мост, перекинутый через живописную пропасть. Здесь открываются потрясающие виды на горы и долину - идеальное место для фотографий и короткого отдыха на свежем воздухе."
        }
      ],
      details: {
        format: "Пешая прогулка 3-4 часа (рекомендуется удобная обувь)",
        includes: [
          "Посещение Музея «История одного города»",
          "Эксклюзивный доступ к часовне с византийской фреской",
          "Возможность организации фуршета у Антонеллы (местные вина, сыры и деликатесы)"
        ]
      },
      whyChoose: [
        "🧭 Глубокое погружение в культуру с упором на неизвестные истории",
        "📸 Потрясающие возможности для фотографий на каждом шагу", 
        "🧀 Попробуйте аутентичную Калабрию с местными деликатесами"
      ],
      bookNow: "Забронировать",
      contactGuide: "Связаться с гидом",
      addTour: "Добавить экскурсию",
      videoTitle: "Умбриатико в движении"
    }
  };

  const content = tourContent[language];

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
                <span>3-4 {language === "en" ? "hours" : "часа"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{language === "en" ? "Small groups" : "Малые группы"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{language === "en" ? "Photo opportunities" : "Фотовозможности"}</span>
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
                  src="https://www.flickr.com/gp/140055029@N06/u21ZM195S0/player"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Umbriatico Video"
                  className="w-full h-full"
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      {language === "en" ? "Video loading..." : "Загрузка видео..."}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <a 
                        href="https://www.flickr.com/gp/140055029@N06/u21ZM195S0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#0077B6] hover:underline"
                      >
                        {language === "en" 
                          ? "Watch on Flickr" 
                          : "Смотреть на Flickr"
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
            {language === "en" ? "Tour Highlights" : "Основные моменты экскурсии"}
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

      {/* Photo Gallery Placeholder */}
      <section className="py-16 bg-[#F8FBFE]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {language === "en" ? "Gallery" : "Галерея"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6d3b6b08-c072-43d0-9bb7-4a32452ce1e1.png"
                alt="Umbriatico at night"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            {[1,2,3,4,5].map((index) => (
              <AspectRatio key={index} ratio={4/3} className="overflow-hidden rounded-lg bg-gray-200">
                <div className="flex items-center justify-center h-full">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
              </AspectRatio>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#0077B6]">
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
                        <span className="text-[#0077B6] font-bold">•</span>
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
      <section className="py-16 bg-[#0077B6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">
              {content.bookNow}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === "en" 
                ? "Ready to walk where history breathes? Contact us to plan your Umbriatico adventure:"
                : "Готовы прогуляться там, где дышит история? Свяжитесь с нами, чтобы спланировать ваше приключение в Умбриатико:"
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
                <a 
                  href="https://wa.me/393446935576" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-300 hover:text-green-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/393446935576" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-blue-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#0077B6] hover:bg-gray-100">
                {content.bookNow}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0077B6]">
                {content.contactGuide}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Button variant="outline" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white">
              {content.addTour}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
