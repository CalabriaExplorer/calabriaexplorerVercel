
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import DogLifeArticleRu from "@/components/blog/DogLifeArticleRu";
import DogLifeArticleEn from "@/components/blog/DogLifeArticleEn";
import Gallery from "@/components/ui/Gallery";

const images = [
  {
    src: "/lovable-uploads/16ff2818-f3e1-4600-a8bc-0efb17efb214.png",
    alt: "Алабай сидит на кухне спиной к камере / Alabai sitting in kitchen, back to camera",
  },
  {
    src: "/lovable-uploads/88b0e934-cb39-44f9-9289-8ca7e133e9fa.png",
    alt: "Большая собака спит на диване / Big dog sleeping on a sofa",
  },
  {
    src: "/lovable-uploads/a589b74c-4f14-45f8-b248-cde4147d12d2.png",
    alt: "Собака смотрит с балкона ночью / Dog looking from balcony at night",
  },
  {
    src: "/lovable-uploads/cad2b489-3412-4fb0-9c09-4169c3bed7bb.png",
    alt: "Маленькая собака на террасе рядом с креслом / Small dog on terrace near chair",
  }
];

const dogBlogTitles = {
  ru: "🐶 Жизнь собачника в Италии: балконы, гавкоты и сиеста",
  en: "🐶 Dog Owner Life in Italy: Balconies, Barkfests & Siestas"
};

const dogBlogDescriptions = {
  ru: "Веселые истории о жизни с собаками на юге Италии: балконные дебаты, ветеринарная сиеста и приключения хвостатых.",
  en: "Funny stories about life with dogs in southern Italy: balcony debates, vet siestas, and furry adventures."
};

const DogLifePost = () => {
  const { language } = useLanguage();

  return (
    <Layout
      title={dogBlogTitles[language]}
      description={dogBlogDescriptions[language]}
    >
      <article className="max-w-2xl mx-auto pt-6 pb-8 px-1 md:px-0">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-center">{dogBlogTitles[language]}</h1>
        <p className="mb-4 text-gray-600 text-center">{dogBlogDescriptions[language]}</p>
        <Gallery images={images} />
        {language === "ru" ? <DogLifeArticleRu /> : <DogLifeArticleEn />}
      </article>
    </Layout>
  );
};

export default DogLifePost;
