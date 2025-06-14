import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import ExcursionGrid from "@/components/tour/ExcursionGrid";
import { Link } from "react-router-dom";

const Tours = () => {
  const { language, t } = useLanguage();

  const tourContent = {
    en: {
      title: "Discover Calabria Tours",
      subtitle: "Authentic experiences in Italy's hidden gem",
      intro: "Explore the authentic beauty of Calabria through our carefully curated tours. From medieval hilltop towns to artistic villages, each excursion reveals the soul of this magnificent region.",
      featuredTitle: "Featured Tours",
      allToursTitle: "All Available Tours",
      bookNow: "Book Your Adventure",
      contactGuide: "Contact Guide"
    },
    ru: {
      title: "Экскурсии по Калабрии",
      subtitle: "Аутентичные впечатления в скрытой жемчужине Италии",
      intro: "Откройте для себя подлинную красоту Калабрии через наши тщательно подобранные экскурсии. От средневековых городов на холмах до художественных деревень - каждая экскурсия раскрывает душу этого великолепного региона.",
      featuredTitle: "Рекомендуемые экскурсии",
      allToursTitle: "Все доступные экскурсии",
      bookNow: "Забронировать приключение",
      contactGuide: "Связаться с гидом"
    }
  };

  const content = tourContent[language];

  return (
    <Layout 
      colorScheme="tourist"
      title={`${content.title} - Calabria Explorer`}
      description={content.intro}
    >
      {/* Hero Section UPDATED */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2196F3 0%, #21a1df 35%, #19adde 100%)"
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{
                color: "#fff",
                textShadow: "0 2px 14px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12)"
              }}
            >
              {content.title}
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{
                color: "#fff",
                textShadow: "0 1px 7px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.08)"
              }}
            >
              {content.subtitle}
            </p>
            <p
              className="text-lg mb-8 max-w-3xl mx-auto"
              style={{
                color: "#fff",
                textShadow: "0 1px 4px rgba(0,0,0,0.15)"
              }}
            >
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              {content.allToursTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0077B6] to-[#00A9E6] mx-auto rounded-full" />
          </div>
          
          <ExcursionGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#0077B6] to-[#00A9E6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">
              {content.bookNow}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === "en" 
                ? "Ready to explore the authentic side of Calabria? Contact us to plan your perfect adventure:"
                : "Готовы исследовать аутентичную сторону Калабрии? Свяжитесь с нами, чтобы спланировать ваше идеальное приключение:"
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
                  className="text-green-300 hover:text-green-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/393446935576" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
