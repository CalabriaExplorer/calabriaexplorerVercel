
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const articleTitles = {
  ru: "🍇 Неизвестные вина Италии!",
  en: "🍇 Hidden Gems of Italian Wine!",
};
const leCastellaTitles = {
  ru: "🏰 Le Castella: Тайны крепости на Ионическом море",
  en: "🏰 Le Castella: Secrets of the Ionian Sea Fortress"
};
const dogLifeTitles = {
  ru: "🐶 Жизнь собачника в Италии: балконы, гавкоты и сиеста",
  en: "🐶 Dog Owner Life in Italy: Balconies, Barkfests & Siestas"
};
const waterOrSwampJuiceTitles = {
  ru: "🌊 ВОДА ИЛИ ЖИДКАЯ ГАДОСТЬ?",
  en: "🌊 WATER OR SWAMP JUICE?"
};

const Blog: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <Layout title={t("blog.title")} description={t("blog.description")}>
      <section className="w-full min-h-[calc(100vh-250px)] bg-white pb-8">
        <div className="max-w-2xl mx-auto pt-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-center">{t("blog.title")}</h1>
          <p className="mb-4 text-gray-600 text-center">{t("blog.description")}</p>
          <ul>
            <li>
              <Link
                to="/blog/water-or-swamp-juice"
                className="block text-xl font-bold text-[#2981F2] underline hover:text-[#3d2eff] transition-colors duration-200 py-4 text-center"
              >
                {waterOrSwampJuiceTitles[language]}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/hidden-gems-of-italian-wine"
                className="block text-xl font-bold text-[#8B0000] underline hover:text-[#4B0082] transition-colors duration-200 py-4 text-center"
              >
                {articleTitles[language]}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/le-castella"
                className="block text-xl font-bold text-[#205f98] underline hover:text-[#125a98] transition-colors duration-200 py-4 text-center"
              >
                {leCastellaTitles[language]}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/dog-life-in-italy"
                className="block text-xl font-bold text-[#2196F3] underline hover:text-[#176b9b] transition-colors duration-200 py-4 text-center"
              >
                {dogLifeTitles[language]}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
