
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import Gallery from "@/components/ui/Gallery";
import LeCastellaArticleRu from "@/components/blog/LeCastellaArticleRu";
import LeCastellaArticleEn from "@/components/blog/LeCastellaArticleEn";
import AboutAuthor from "@/components/blog/AboutAuthor";

const images = [
  { src: "/lovable-uploads/5017e784-dec8-4499-8f82-348763675b74.png", alt: "Le Castella viewed from the sea on a sunny day" },
  { src: "/lovable-uploads/983c5de3-371e-4bdd-bd27-13f478e30883.png", alt: "View to the bay through fortress wall, Le Castella" },
  { src: "/lovable-uploads/1f2e3a9f-dedd-4ded-b39a-148576576dd1.png", alt: "Main tower and walls of Le Castella over the water" },
  { src: "/lovable-uploads/eed4c824-a79a-4730-acdc-6be806f81b10.png", alt: "Inner yard inside Le Castella fortress" },
  { src: "/lovable-uploads/79df50d2-3369-4c16-95c7-feea9d6a33cb.png", alt: "View of Le Castella from the coast" },
  { src: "/lovable-uploads/2bb74b2d-d0a8-447c-a492-62a92d6e2945.png", alt: "Entrance stairs and walls in Le Castella" },
];

const LeCastellaPost: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout
      title={language === "ru"
        ? "🏰 Le Castella: Тайны крепости на Ионическом море"
        : "🏰 Le Castella: Secrets of the Ionian Sea Fortress"
      }
      description={language === "ru"
        ? "История, легенды и достопримечательности знаменитой крепости Le Castella и Ионического побережья Калабрии"
        : "History, legends and attractions of the famous Le Castella fortress and Calabria’s Ionian coast"
      }
    >
      <section className="w-full min-h-[calc(100vh-250px)] bg-white pb-8">
        <div className="max-w-2xl mx-auto pt-3">
          <button
            onClick={() => navigate("/blog")}
            className="mb-6 text-sm text-calabria-blue hover:underline"
          >
            {language === "ru" ? "← Назад к блогу" : "← Back to blog"}
          </button>

          {/* Hero блок с красивой голубой подложкой и акцентным заголовком */}
          <div
            className={`
              mb-7 w-full
              rounded-2xl shadow-lg
              flex flex-col items-center
              px-0 py-0
              transition
              animate-fade-in
              glass-gradient
              group
              relative
              overflow-hidden
              backdrop-blur-md
            `}
            style={{
              position: "relative",
              minHeight: 320,
              background: "none",
              border: "none",
              boxShadow: "0 8px 36px 0 #88c8f444, 0 2px 10px 0 #7ebff533",
            }}
          >
            {/* Слой фоновой фотографии */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/5017e784-dec8-4499-8f82-348763675b74.png')",
                opacity: 0.17,
                zIndex: 1,
              }}
              aria-hidden="true"
            />
            {/* Голубой прозрачный overlay */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(112deg, #5ec9faaf 18%, #e7f9fff2 100%)",
                opacity: 0.88,
                zIndex: 2,
              }}
              aria-hidden="true"
            />
            {/* Контент поверх */}
            <div className="relative z-10 w-full flex flex-col items-center px-6 py-10">
              <h3
                className="text-2xl sm:text-3xl font-extrabold font-serif mb-5 flex items-center justify-center gap-2 whitespace-pre-line"
                style={{
                  color: "#eafaff",
                  textShadow: "0 3px 16px #107fb699, 0 1px 2px #000a, 0 6px 30px #219edb44", letterSpacing: "0.5px",
                }}>
                <span role="img" aria-hidden="true">✨</span>
                {language === "ru"
                  ? "РАСКРОЙТЕ ТАЙНЫ LE CASTELLA!"
                  : "UNLOCK LE CASTELLA'S SECRETS!"
                }
                <span role="img" aria-hidden="true">✨</span>
              </h3>
              <ul className="w-full max-w-md text-lg md:text-xl mb-5 mt-1 space-y-3 text-center sm:text-left flex flex-col gap-2 font-sans"
                style={{
                  color: "#dcf4ff",
                  textShadow: "0 1px 10px #219adb55, 0 1px 2px #138ddc88",
                  fontWeight: 500,
                  textRendering: "optimizeLegibility"
                }}>
                <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
                  <span role="img" aria-hidden="true">🌊</span>
                  <span>
                    {language === "ru"
                      ? "Вдохновиться морскими пейзажами и историей?"
                      : "Craving Ionian scenery and fortress legends?"
                    }
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
                  <span role="img" aria-hidden="true">🏝️</span>
                  <span>
                    {language === "ru"
                      ? "Мечтаете о необычном приключении?"
                      : "Dreaming of a unique adventure?"
                    }
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
                  <span role="img" aria-hidden="true">🍤</span>
                  <span>
                    {language === "ru"
                      ? "Хотите открыть гастрономические секреты Калабрии?"
                      : "Want to discover Calabria’s culinary secrets?"
                    }
                  </span>
                </li>
              </ul>
              <div className="mt-1 mb-1 w-full flex justify-center">
                <span className="
                  inline-block rounded-lg bg-[#43bdee]/90 px-7 py-2 
                  text-lg font-bold text-white shadow hover:scale-105 transition-transform
                  hover:shadow-lg flex items-center gap-2"
                  style={{
                    textShadow: "0 2px 7px #18aadb99, 0 0 1px #fff"
                  }}>
                  <span role="img" aria-hidden="true">👉</span>
                  {language === "ru"
                    ? "ЗАДАЙТЕ ВОПРОС — ПОЛУЧИТЕ СОВЕТ ДЛЯ СВОЕГО ПУТЕШЕСТВИЯ!"
                    : "ASK A QUESTION — GET A FREE PERSONALIZED TIP!"
                  }
                </span>
              </div>
              <p className="mt-4 text-base sm:text-lg font-medium text-center"
                style={{
                  color: "#eafaff",
                  textShadow: "0 1px 10px #21a1df88, 0 1px 2px #218dda",
                }}>
                {language === "ru"
                  ? "Секретные локации • Экспертные советы • Аутентичные впечатления"
                  : "Hidden spots • Local advice • Authentic experiences"
                }
              </p>
            </div>
          </div>

          {/* Галерея */}
          <Gallery images={images} />

          {/* Основной текст статьи */}
          <div className="rounded-2xl bg-white/90 shadow-lg px-4 py-6 mb-6 border border-blue-300">
            <h2 className="text-3xl mb-2 text-calabria-terracotta font-serif font-bold text-center animate-fade-in">
              {language === "ru"
                ? "🏰 Le Castella: Тайны крепости на Ионическом море"
                : "🏰 Le Castella: Secrets of the Ionian Sea Fortress"}
            </h2>
            <p className="text-center text-gray-700 mb-5 animate-fade-in">
              {language === "ru"
                ? "Погрузитесь в атмосферу древней Калабрии — история, легенды и бирюзовое море ждут вас!"
                : "Travel through time on Calabria’s coast — history, legends, and turquoise seas await!"}
            </p>
            <hr className="border-t-2 border-blue-200 my-4 w-16 mx-auto" />
            <div className="prose max-w-full mx-auto pt-2 pb-4 text-[1.04rem] text-gray-800">
              {language === "ru" ? <LeCastellaArticleRu /> : <LeCastellaArticleEn />}
            </div>
          </div>

          {/* Call-to-action */}
          <div className="bg-gradient-to-r from-calabria-blue/90 to-calabria-terracotta/80 rounded-xl shadow-lg p-6 mt-8 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 text-center drop-shadow">
              {language === "ru"
                ? "Получите индивидуальный маршрут по Калабрии!"
                : "Get Your Exclusive Calabria Itinerary!"}
            </h3>
            <p className="text-center text-white/90 mb-2">
              {language === "ru"
                ? "Напишите нам — консультация бесплатно:"
                : "Write to us for a free consultation:"}
            </p>
            <a
              href="mailto:mariamarinaciro@gmail.com"
              className="block mx-auto w-max px-6 py-3 rounded-lg font-bold shadow transition-all bg-white text-calabria-terracotta hover:bg-calabria-terracotta hover:text-white ring-2 ring-white ring-offset-2 hover:ring-terracotta focus:ring-terracotta"
            >
              mariamarinaciro@gmail.com
            </a>
          </div>
          <AboutAuthor />
        </div>
      </section>
    </Layout>
  );
};

export default LeCastellaPost;
