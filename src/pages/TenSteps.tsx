import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Home, MapPin, Heart, Clock, Users, Languages, Camera, Plane, Building2, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const TenSteps = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "10 Steps to Your Italian Dream Home: No Stress Guide! 🏡🇮🇹",
      subtitle: "Your complete checklist before apartment hunting in Italy",
      intro: "Ready to find your perfect Italian home? Follow this stress-free guide to make the right choice!",
      steps: [
        {
          number: "1️⃣",
          title: "Region Roulette",
          description: "Italy's 20 regions = 20 different planets! Each with unique climate, food and secret dialects. Pro tip: they're teenagers (~160 years young!)",
          icon: MapPin
        },
        {
          number: "2️⃣", 
          title: "Beach vs Mountain Smackdown",
          description: "🏖️ Beach life: eternal flip-flops, sunset Aperols\n⛰️ Mountain vibe: fireplace cuddles, mushroom hunts",
          icon: Mountain
        },
        {
          number: "3️⃣",
          title: "Home Goals",
          description: "Permanent nest? Airbnb goldmine? Or winter escape pod? Your mission picks your mansion!",
          icon: Home
        },
        {
          number: "4️⃣",
          title: "Transport Tango",
          description: "Check:\n✈️ Airport proximity (espresso distance test)\n🚂 Train links (for spontaneous gelato runs)\n🚗 Winter road access (snow tires optional!)",
          icon: Plane
        },
        {
          number: "5️⃣",
          title: "Neighbourhood Sherlock",
          description: "Need hospital in 15min? Organic cheese shop? Google Map stalk first, then boot-test!",
          icon: Building2
        },
        {
          number: "6️⃣",
          title: "Vibe Check",
          description: "Sicily: \"Domani, domani!\" 😴\nLombardy: \"Efficiency o'clock!\" ⏰\nPick your tempo!",
          icon: Clock
        },
        {
          number: "7️⃣",
          title: "Expat Tribe Hunt",
          description: "Want English-speaking buddies? Or full Italian immersion? Choose your adventure!",
          icon: Users
        },
        {
          number: "8️⃣",
          title: "Dialect Decoder",
          description: "Warning: In Calabria, \"oggi\" (today) might get you confused stares! Pack a phrasebook 😉",
          icon: Languages
        },
        {
          number: "9️⃣",
          title: "Winter Spy Mission",
          description: "Visit off-season! See real Italy without tourist makeup.",
          icon: Camera
        },
        {
          number: "🔟",
          title: "Heart Over View",
          description: "Does this place give you morning joy butterflies? 🦋 That's your home!",
          icon: Heart
        }
      ],
      videoTitle: "Complete Italian Home Guide",
      backToGuides: "Back to Guides",
      relocationSection: "Relocation Guides",
      showVideo: false
    },
    ru: {
      title: "10 шагов перед поиском квартиры в Италии. Чек-лист",
      subtitle: "Полный гайд для успешного переезда в Италию",
      intro: "Готовы найти свой идеальный дом в Италии? Следуйте этому проверенному плану!",
      steps: [
        {
          number: "1️⃣",
          title: "Определитесь с регионом",
          description: "Италия — 20 регионов с разным климатом, кухней и диалектами. Подсказка: им всего ~160 лет 🙂",
          icon: MapPin
        },
        {
          number: "2️⃣",
          title: "Горы или море?",
          description: "В горах: камин, тишина, грибные сезоны. У моря: закаты, туристы, сандалии круглый год.",
          icon: Mountain
        },
        {
          number: "3️⃣",
          title: "Цель покупки",
          description: "Для себя? Аренда? ПМЖ или сезонный переезд? Цель определит тип объекта.",
          icon: Home
        },
        {
          number: "4️⃣",
          title: "Логистика",
          description: "Проверьте:\n✈️ Ближайшие аэропорты\n🚄 Ж/д сообщение\n🚘 Доступность зимой",
          icon: Plane
        },
        {
          number: "5️⃣",
          title: "Инфраструктура",
          description: "Нужны ли: больница в 15 мин, супермаркет с фермерскими продуктами? Исследуйте через Google Maps (лучше лично).",
          icon: Building2
        },
        {
          number: "6️⃣",
          title: "Ритм жизни",
          description: "Сицилия = \"domani\", Ломбардия = \"эффективность до 17:00\". Ваш выбор?",
          icon: Clock
        },
        {
          number: "7️⃣",
          title: "Сообщества",
          description: "Есть ли экспат-сообщества? Русскоязычные? Это плюс для адаптации, но минус для полной интеграции.",
          icon: Users
        },
        {
          number: "8️⃣",
          title: "Язык",
          description: "Диалекты различаются радикально! В Калабрии \"oggi\" (сегодня) могут не понять 😄",
          icon: Languages
        },
        {
          number: "9️⃣",
          title: "Поездка зимой",
          description: "Увидите реальную жизнь без туристов.",
          icon: Camera
        },
        {
          number: "🔟",
          title: "Влюбитесь в место",
          description: "Дом — это ощущения. Хотите ли здесь просыпаться?",
          icon: Heart
        }
      ],
      videoTitle: "Полный гайд по переезду в Италию",
      backToGuides: "Назад к гайдам",
      relocationSection: "Гайды по переезду",
      showVideo: true
    }
  };

  const currentContent = content[language];

  return (
    <Layout 
      colorScheme="relocator"
      title={`${currentContent.title} - Calabria Explorer`}
      description={currentContent.intro}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#E2725B] to-[#D4511E] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wide mb-4 opacity-80">
              {currentContent.relocationSection}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {currentContent.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - Only for Russian */}
      {currentContent.showVideo && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">{currentContent.videoTitle}</h2>
            <div className="max-w-4xl mx-auto">
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/GR7e4QVM8As"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="10 Steps Italian Home Guide"
                  className="w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </section>
      )}

      {/* Introduction */}
      <section className="py-12 bg-[#FDF8F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
              {currentContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {currentContent.steps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E2725B] rounded-full flex items-center justify-center text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif text-[#E2725B] flex items-center gap-2">
                        <span className="text-2xl">{step.number}</span>
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line ml-16">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-16 bg-[#FDF8F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/">
              <Button size="lg" className="bg-[#E2725B] hover:bg-[#D4511E] text-white">
                {currentContent.backToGuides}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TenSteps;
