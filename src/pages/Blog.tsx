import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const articleTitles = {
  ru: "🍇 Неизвестные вина Италии!",
  en: "🍇 Hidden Gems of Italian Wine!",
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
              <a
                href="/blog/hidden-gems-of-italian-wine"
                className="block text-xl font-bold text-[#8B0000] underline hover:text-[#4B0082] transition-colors duration-200 py-4 text-center"
              >
                {articleTitles[language]}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
