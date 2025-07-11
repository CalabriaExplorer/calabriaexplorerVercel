import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, Users, MapPin, Euro, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/components/ui/optimized-image";

const Umbriatico = () => {
  const { language } = useLanguage();

  const tourContent = {
    en: {
      title: "Umbriatico: Town on the Edge of Time",
      subtitle: "Medieval village with stunning Ionian Sea views",
      description: "Take an unforgettable excursion in Calabria to the medieval village of Umbriatico, perched high above the Ionian Sea. This isn't a wine tour, but panoramic views and Byzantine art await—book your tour to step back in time.",
      heroImage: "/lovable-uploads/bbf53f58-00ce-4565-9b79-54cce8d12868.png",
      highlights: [
        "Explore narrow medieval streets and ancient stone houses",
        "Visit hidden chapels with original Byzantine frescoes",
        "Enjoy panoramic views of the Ionian coastline",
        "Learn about the village's fascinating history and legends",
        "Experience authentic Calabrian mountain culture"
      ],
      details: "Details",
      duration: "3-4 hours",
      price: "€50 per person",
      meetingPoint: "Umbriatico village square",
      groupSize: "Small groups (max 8 people)",
      includes: "What's included:",
      includesList: [
        "Professional English-speaking guide",
        "Access to private chapels and historical sites",
        "Traditional Calabrian snack tasting",
        "Photography assistance at scenic viewpoints"
      ],
      bookNow: "Book on WhatsApp",
      contact: "Contact Guide"
    },
    ru: {
      title: "Средневековый Умбриатико",
      subtitle: "Деревня на краю времени с видами на Ионическое море",
      description: "Отправьтесь на незабываемую экскурсию в Калабрии в средневековый Умбриатико, который возвышается над Ионическим морем. Это не винный тур, но панорамы и византийское искусство впечатлят вас — закажите экскурсию и окунитесь в прошлое.",
      heroImage: "/lovable-uploads/bbf53f58-00ce-4565-9b79-54cce8d12868.png",
      highlights: [
        "Исследуйте узкие средневековые улочки и древние каменные дома",
        "Посетите скрытые часовни с оригинальными византийскими фресками",
        "Наслаждайтесь панорамными видами на Ионическое побережье",
        "Узнайте увлекательную историю и легенды деревни",
        "Почувствуйте подлинную калабрийскую горную культуру"
      ],
      details: "Детали",
      duration: "3-4 часа",
      price: "€50 с человека",
      meetingPoint: "Площадь деревни Умбриатико",
      groupSize: "Малые группы (макс. 8 человек)",
      includes: "Что включено:",
      includesList: [
        "Профессиональный русскоговорящий гид",
        "Доступ к частным часовням и историческим местам",
        "Дегустация традиционных калабрийских закусок",
        "Помощь с фотографированием в живописных местах"
      ],
      bookNow: "Заказать экскурсию через Telegram",
      contact: "Связаться с гидом"
    }
  };

  const content = tourContent[language];

  const handleBooking = () => {
    if (language === "ru") {
      window.open("https://t.me/+393446935576", "_blank");
    } else {
      window.open("https://wa.me/393446935576", "_blank");
    }
  };

  return (
    <Layout
      colorScheme="tourist"
      title={`${content.title} - Calabria Explorer`}
      description={content.description}
      heroImage={content.heroImage}
      preloadImages={[content.heroImage]}
    >
      {/* Hero Section */}
      <section className="relative">
        <AspectRatio ratio={16 / 9} className="w-full">
          <OptimizedImage
            src={content.heroImage}
            alt={content.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="relative h-full flex items-end p-8">
            <div className="text-white max-w-4xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {content.subtitle}
              </p>
            </div>
          </div>
        </AspectRatio>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                      {language === "en" ? "About the Tour" : "О экскурсии"}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {content.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">
                      {language === "en" ? "Tour Highlights" : "Основные моменты"}
                    </h3>
                    <ul className="space-y-2">
                      {content.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#0077B6] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">
                      {content.includes}
                    </h3>
                    <ul className="space-y-2">
                      {content.includesList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-gray-800 mb-4">
                    {content.details}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#0077B6]" />
                      <span className="text-gray-600">{content.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-[#0077B6]" />
                      <span className="text-gray-600">{content.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#0077B6]" />
                      <span className="text-gray-600">{content.groupSize}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0077B6] mt-0.5" />
                      <span className="text-gray-600">{content.meetingPoint}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleBooking}
                    className="w-full bg-gradient-to-r from-[#0077B6] to-[#00A9E6] hover:from-[#005A8A] hover:to-[#0077B6] text-white py-3 text-lg font-semibold"
                    aria-label={
                      language === "ru"
                        ? "Заказать экскурсию через Telegram"
                        : "Book via WhatsApp"
                    }
                  >
                    {language === "ru" ? (
                      <>
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        {content.bookNow}
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687z"/>
                        </svg>
                        {content.bookNow}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="p-6">
                <CardContent>
                  <h3 className="font-serif text-lg font-bold text-gray-800 mb-4">
                    {content.contact}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#0077B6]" />
                      <a href="mailto:mariamarinaciro@gmail.com" className="text-gray-600 hover:text-[#0077B6]">
                        mariamarinaciro@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#0077B6]" />
                      <span className="text-gray-600">+39 344 6935576</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Umbriatico;
