import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutAuthor: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="about-author mt-8 bg-gray-50 p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-2">{t("aboutAuthor.title")}</h2>
      <p>{t("aboutAuthor.text")}</p>
    </section>
  );
};

export default AboutAuthor;
