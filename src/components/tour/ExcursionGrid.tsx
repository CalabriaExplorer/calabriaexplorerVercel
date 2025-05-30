
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
      image: "/lovable-uploads/25dc2f21-31f0-4475-a614-6b9b16b01057.png",
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
      id: "umbriatico",
      title: {
        en: "Umbriatico Medieval",
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
    },
    {
      id: "senatore-vini",
      title: {
        en: "Senatore Vini Wine Tasting",
        ru: "Дегустация Senatore Vini"
      },
      description: {
        en: "Historic wine cellar tour with tasting of 5 local wine varieties and stories of traditional winemaking.",
        ru: "Дегустация вин в историческом погребе с рассказом о традициях виноделия."
      },
      price: 55,
      duration: {
        en: "2.5 hours",
        ru: "2.5 часа"
      },
      image: "/lovable-uploads/d310f5fa-3d93-4307-b982-9e2ff5b15586.png",
      groupSize: {
        en: "Max 8 people",
        ru: "Макс. 8 человек"
      },
      location: {
        en: "Piazza del Vino",
        ru: "Пьяцца дель Вино"
      }
    }
  ];

  return (
    <div className="excursion-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {excursions.map((excursion, index) => (
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
