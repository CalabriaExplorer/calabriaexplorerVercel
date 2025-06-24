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
      window.open("https://t.me/393446935576", "_blank");
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
                    <ul className="space-velopers:nowrap.............
