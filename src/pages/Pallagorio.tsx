
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Users, Camera, Mail, Phone, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/ui/optimized-image";

const Pallagorio = () => {
  const { language, t } = useLanguage();
  const [videoError, setVideoError] = useState(false);

  const tourContent = {
    en: {
      title: "Vercino and Pallagorio: The Mysteries & Albanian Heritage",
      subtitle: "Cultural Heritage Tour",
      intro: "Embark on an unforgettable excursion in Calabria that leads from Vercino's frescoed caves to Pallagorio's Albanian heritage. It's not a wine tour, but local flavors and honey tastings await—book your tour to discover these living traditions.",
      highlights: [
        {
          title: "Vercino Caves",
          description: "Descend into mysterious Byzantine caves adorned with ancient frescoes. These historic underground chambers reveal centuries of religious art and spiritual significance in the heart of medieval Calabria.",
          image: "lovable-uploads/c2c23b51-173c-4a9c-8157-d52e550a63ac.png"
        },
        {
          title: "Apiary Visit & Honey Tasting",
          description: "Experience the traditional art of beekeeping and savor the aromatic flavors of local honey varieties including thyme, orange, and chestnut - each telling the story of Calabria's diverse landscape."
        },
        {
          title: "Giuseppe Lapietra's Workshop",
          description: "Uncover the fascinating secrets of Calabrian & Albanian \"magic\" (traditions, folklore), preserved for centuries. Dive into unique culture over lunch featuring authentic 15th-century dishes.",
          image: "lovable-uploads/0885b9d9-1c10-4b4b-9eaa-af4ead64256e.png"
        }
      ],
      details: {
        format: "Walking Tour, 8 hours",
        includes: [
          "Vercino Caves (Byzantine frescoed caves)",
          "Apiary Visit (Honey Tasting)",
          "Giuseppe Lapietra's Workshop in Pallagorio (Albanian-Calabrian traditions)"
        ]
      },
      whyChoose: [
        "🏛️ Unique Byzantine cave exploration with ancient frescoes",
        "🍯 Traditional honey tasting experience with local varieties",
        "🇦🇱 Authentic Albanian-Calabrian cultural immersion"
      ],
      bookNow: "Book your unforgettable journey into Calabria's heart today!",
      contactGuide: "Contact Guide",
      videoTitle: "Pallagorio Heritage",
      seoTags: "#CalabriaTours #Vercino #Pallagorio #AlbanianHeritage #ByzantineCaves #ItalianFoodTour #HoneyTasting #UniqueItalyTours #WalkingToursItaly #CulturalHeritage"
    },
    ru: {
      title: "Верцино и Паллагорио: Тайны и Албанское наследие",
      subtitle: "Тур культурного наследия",
      intro: "Отправьтесь на незабываемую экскурсию в Калабрии: от гротов Верцино с фресками до албанских корней Паллагорио. Это не винный тур, но местные вкусы и дегустация меда удивят вас. Закажите экскурсию и откройте вековые традиции.",
      highlights: [
        {
          title: "Гроты Верцино",
          description: "Спуститесь в таинственные византийские пещеры с древними фресками. Эти исторические подземные камеры раскрывают столетия религиозного искусства и духовного значения в сердце средневековой Калабрии.",
          image: "lovable-uploads/c2c23b51-173c-4a9c-8157-d52e550a63ac.png"
        },
        {
          title: "Посещение пасеки и дегустация меда",
          description: "Познакомьтесь с традиционным искусством пчеловодства и насладитесь ароматными вкусами местных сортов меда: тимьян, апельсин и каштан - каждый рассказывает историю разнообразного ландшафта Калабрии."
        },
        {
          title: "Мастерская Джузеппе Лапьетры",
          description: "Раскройте удивительные секреты калабрийской и албанской \"магии\" (традиции, фольклор), пронесенные через века. Погрузитесь в уникальную культуру за обедом с блюдами по рецептам XV века.",
          image: "lovable-uploads/0885b9d9-1c10-4b4b-9eaa-af4ead64256e.png"
        }
      ],
      details: {
        format: "Пешеходная экскурсия, 8 часов",
        includes: [
          "Гроты Верцино (византийские пещеры с фресками)",
          "Пасека (дегустация меда)",
          "Мастерская Джузеппе Лапьетры в Паллагорио (албанско-калабрийские традиции)"
        ]
      },
      whyChoose: [
        "🏛️ Уникальное исследование византийских пещер с древними фресками",
        "🍯 Традиционная дегустация меда с местными сортами",
        "🇦🇱 Аутентичное погружение в албано-калабрийскую культуру"
      ],
      bookNow: "Забронируйте незабываемое путешествие вглубь истории и культуры Калабрии!",
      contactGuide: "Связаться с гидом",
      videoTitle: "Наследие Паллагорио",
      seoTags: "#ЭкскурсииКалабрия #Верцино #Паллагорио #АлбанскоеНаследие #ВизантийскиеПещеры #ГастрономическийТурИталия #МедоваяДегустация #НеобычныеЭкскурсииИталия #ПешеходныеТуры"
    }
  };

  const content = tourContent[language];

  return (
    <Layout
      colorScheme="tourist"
      title={`${content.title} - Calabria Explorer`}
      description={content.intro}
      preloadImages={["/lovable-uploads/a7a13b83-eb08-4c06-94da-a9b7574bfd65.png"]}
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
                <span>8 {language === "en" ? "hours" : "часов"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                <span>{language === "en" ? "Byzantine caves" : "Византийские пещеры"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{language === "en" ? "Cultural heritage" : "Культурное наследие"}</span>
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
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E2725B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    {language === "en" ? "Video coming soon..." : "Видео скоро появится..."}
                  </p>
                </div>
              </div>
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
                {highlight.image && (
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <OptimizedImage
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
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

      {/* SEO Tags Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 leading-relaxed">
              {content.seoTags}
            </p>
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
                ? "Ready for a cultural adventure through Vercino and Pallagorio? Contact us to plan your heritage discovery:"
                : "Готовы к культурному приключению в Верчино и Паллагорио? Свяжитесь с нами, чтобы спланировать ваше открытие наследия:"
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
                {language === "en" ? "Book Now" : "Забронировать"}
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

export default Pallagorio;
