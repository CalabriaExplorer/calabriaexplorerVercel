
import React from "react";
import ExcursionCard from "./ExcursionCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface Excursion {
  id: string;
  title: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  price: number;
  duration: {
    en: string;
    ru: string;
  };
  image: string;
  groupSize?: {
    en: string;
    ru: string;
  };
  location?: {
    en: string;
    ru: string;
  };
}

const ExcursionGrid: React.FC = () => {
  const { language } = useLanguage();

  const excursions: Excursion[] = [
    {
      id: "melissa",
      title: {
        en: "MELISSA Art Tour",
        ru: "Экскурсия МЕЛИССА"
      },
      description: {
        en: "City of Ovid, murals and bees. Discover a unique open-air gallery in this charming Calabrian town!",
        ru: "Город Овидия, муралов и пчел. Откройте уникальную галерею под открытым небом!"
      },
      price: 45,
      duration: {
        en: "3 hours",
        ru: "3 часа"
      },
      image: "/lovable-uploads/2ca0f4d4-ee1c-4971-94d5-c9a8219e9c36.png",
      groupSize: {
        en: "Small groups",
        ru: "Малые группы"
      },
      location: {
        en: "Melissa",
        ru: "Мелисса"
      }
    },
    {
      id: "pallagorio",
      title: {
        en: "Vercino & Pallagorio Heritage",
        ru: "Верцино и Паллагорио"
      },
      description: {
        en: "Discover Byzantine caves with ancient frescoes, traditional honey tasting, and Albanian-Calabrian cultural heritage.",
        ru: "Откройте византийские пещеры с древними фресками, дегустацию меда и албано-калабрийское культурное наследие."
      },
      price: 85,
      duration: {
        en: "8 hours",
        ru: "8 часов"
      },
      image: "/lovable-uploads/a7a13b83-eb08-4c06-94da-a9b7574bfd65.png",
      groupSize: {
        en: "Small groups",
        ru: "Малые группы"
      },
      location: {
        en: "Vercino & Pallagorio",
        ru: "Верцино и Паллагорио"
      }
    },
    {
      id: "umbriatico",
      title: {
        en: "Umbriatico: Town on the Edge of Time",
        ru: "Средневековый Умбриатико"
      },
      description: {
        en: "Medieval town with breathtaking views of the Ionian Sea and ancient Byzantine frescoes in hidden chapels.",
        ru: "Средневековый городок с захватывающими видами на Ионическое море и древними византийскими фресками."
      },
      price: 50,
      duration: {
        en: "3-4 hours",
        ru: "3-4 часа"
      },
      image: "/lovable-uploads/bbf53f58-00ce-4565-9b79-54cce8d12868.png",
      groupSize: {
        en: "Small groups",
        ru: "Малые группы"
      },
      location: {
        en: "Umbriatico",
        ru: "Умбриатико"
      }
    }
  ];

  // Temporary hide Umbriatico excursion for 20 days (until 2025-06-23)
  const hideUmbriaticoUntil = new Date('2025-06-23');
  const currentDate = new Date();
  
  const visibleExcursions = excursions.filter(excursion => {
    if (excursion.id === 'umbriatico' && currentDate < hideUmbriaticoUntil) {
      return false;
    }
    return true;
  });

  return (
    <div className="excursion-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visibleExcursions.map((excursion, index) => (
          <div 
            key={excursion.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ExcursionCard
              id={excursion.id}
              title={excursion.title[language]}
              description={excursion.description[language]}
              price={excursion.price}
              duration={excursion.duration[language]}
              image={excursion.image}
              groupSize={excursion.groupSize?.[language]}
              location={excursion.location?.[language]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcursionGrid;
