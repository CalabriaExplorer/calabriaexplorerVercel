import React from "react";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/ui/Gallery";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [
  { src: "/images/pucci-pane/IMG_6556.jpeg", alt: "Pucci Pane bakery front" },
  { src: "/images/pucci-pane/IMG_6557.jpeg", alt: "Pucci Pane interior" },
  { src: "/images/pucci-pane/IMG_6558.jpeg", alt: "Bread and pastries" },
  { src: "/images/pucci-pane/IMG_6559.jpeg", alt: "Display with products" },
  { src: "/images/pucci-pane/IMG_6560.jpeg", alt: "Fresh bakery goods" },
];

const descriptions = {
  ru: "Пекарня, свежие итальянские булочки и не только",
  en: "Bakery with fresh Italian pastries and more",
};

const PucciPane: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout title="Pucci Pane" description={descriptions[language]}> 
      <article className="max-w-2xl mx-auto py-6 px-2">
        <h1 className="text-3xl font-serif font-bold mb-4 text-center">Pucci Pane</h1>
        <Gallery images={images} />
        <p className="mb-6 text-center">{descriptions[language]}</p>
        <div className="text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=39.367667,17.122746"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {language === "ru" ? "Открыть в Google Maps" : "Open in Google Maps"}
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default PucciPane;
