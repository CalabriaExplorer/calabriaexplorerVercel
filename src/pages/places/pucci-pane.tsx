import React from "react";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/ui/Gallery";
import useTranslation from "@/hooks/use-translation";

const images = [
  { src: "/images/pucci-pane/IMG_6556.jpeg", alt: "Pucci Pane" },
  { src: "/images/pucci-pane/IMG_6557.jpeg", alt: "Pucci Pane" },
  { src: "/images/pucci-pane/IMG_6558.jpeg", alt: "Pucci Pane" },
  { src: "/images/pucci-pane/IMG_6559.jpeg", alt: "Pucci Pane" },
  { src: "/images/pucci-pane/IMG_6560.jpeg", alt: "Pucci Pane" },
];

const PucciPanePage: React.FC = () => {
  const { language, t } = useTranslation();

  return (
    <Layout title={t("pucci.title")} description={t("pucci.description")}>
      <article className="max-w-2xl mx-auto py-6 px-2 space-y-4">
        <h1 className="text-3xl font-serif font-bold text-center">
          {t("pucci.title")}
        </h1>
        <Gallery images={images} />
        <p>{t("pucci.description")}</p>
        <p>
          <strong>{language === "ru" ? "Телефон:" : "Phone:"}</strong> {t("pucci.phone")}
        </p>
        <p>
          <strong>{language === "ru" ? "Часы работы:" : "Hours:"}</strong> {t("pucci.hours")}
        </p>
        <div className="text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=39.367667,17.122746&travelmode=walking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t("pucci.route")}
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default PucciPanePage;
