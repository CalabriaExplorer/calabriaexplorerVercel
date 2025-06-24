import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone, Wine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const SenatoreVini = () => {
  const { language } = useLanguage();

  const tourContent = {
    en: {
      title: "Senatore Vini Wine Tasting",
      subtitle: "Historic Wine Cellar Tour & Tasting",
      intro: "Experience one of the finest wine tours in Calabria inside the historic Senatore Vini cellar. This excursion in Calabria reveals time-honored methods passed down for generations—book your tour and savor the region's heritage.",
      heroImage: "/lovable-uploads/d310f5fa-3d93-4307-b982-9e2ff5b15586.png",
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
      whatsappBook: "Заказать экскурсию через WhatsApp",
      telegramBook: "Заказать экскурсию через Telegram"
    },
    ru: {
      title: "Дегустация Senatore Vini",
      subtitle: "Исторический тур с дегустацией",
      intro: "Познакомьтесь с одним из лучших винных туров Калабрии в историческом погребе Senatore Vini. Эта экскурсия в Калабрии раскрывает вековые традиции виноделия—закажите экскурсию и откройте наследие региона.",
      heroImage: "/lovable-uploads/d310f5fa-3d93-4307-b982-9e2ff5b15586.png",
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
      whatsappBook: "Заказать экскурсию через WhatsApp",
      telegramBook: "Заказать экскурсию через Telegram"
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
      heroImage={content.heroImage}
      preloadImages={[content.heroImage]}
    >
      {/* Hero Section */}
      <section
        className="relative text-white py-16"
        style={{
          backgroundImage: `url(${content.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 bg-black bg-opacity-50 py-16 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {content.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{content.details.duration}</span></div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{language === "en" ? "Max 8 people" : "Макс. 8 человек"}</span></div>
              <div className="flex items-center gap-2"><Wine className="w-4 h-4" /><span>{language === "en" ? "Wine tasting" : "Дегустация вин"}</span></div>
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
                  src={content.heroImage}
                  alt={content.title}
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform cursor-zoom-in"
                />
              </AspectRatio>
            </div>
            <div className="space-y-4">
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/25dc2f21-31f0-4475-a614-6b9b16b01057.png"
                  alt={language === "en" ? "Wine cellar interior" : "Интерьер винного погреба"}
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform cursor-zoom-in"
                />
              </AspectRatio>
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/bbf53f58-00ce-4565-9b79-54cce8d12868.png"
                  alt={language === "en" ? "Wine tasting setup" : "Сервировка дегустации"}
                  loading="lazy"
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
            <p className="text-lg leading-relaxed text-gray-700 mb-8">{content.intro}</p>
          </
