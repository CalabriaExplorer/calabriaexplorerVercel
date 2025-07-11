import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import Gallery from "@/components/ui/Gallery";
import RuCalabriaArticle from "@/components/blog/RuCalabriaArticle";
import EnCalabriaArticle from "@/components/blog/EnCalabriaArticle";
import AboutAuthor from "@/components/blog/AboutAuthor";

const articleImages = [
  {
    src: "/lovable-uploads/497b406a-25d6-4f17-8b1a-df0660c3fe36.png",
    alt: "Glass of red wine with Italian appetizers",
  },
  {
    src: "/lovable-uploads/33588efc-a39b-4ed5-8c08-0fb60a5397a1.png",
    alt: "Vintage Librandi Ciro wine bottles in a cellar",
  },
  {
    src: "/lovable-uploads/0224a811-8ae8-401b-b1e6-2eb428ee0aad.png",
    alt: "Two glasses of red wine on a table",
  },
  {
    src: "/lovable-uploads/af24501e-3335-46e3-a67b-df251f797c2b.png",
    alt: "Wine barrels in a wine-cellar",
  },
  {
    src: "/lovable-uploads/1a8e13da-53d3-4198-bfb4-5de152c119f3.png",
    alt: "Librandi Segno Ciro DOC and glasses of wine",
  },
];

const articleDescriptions = {
  ru: "Погрузитесь в атмосферу Калабрии — региона, где вино, история и солнце сливаются в идеальное путешествие!",
  en: "Immerse yourself in Calabria – where wine, history and sunshine blend into the perfect journey!",
};

const article = {
  ru: (
    <div className="prose max-w-full sm:mx-auto px-2 py-2">
      <h2 className="text-2xl font-bold text-[#8B0000]">🍇 Неизвестные вина Италии!</h2>
      <h3 className="text-lg font-bold text-[#4B0082]">Калабрия — земля, где вино и история сплетаются в праздник вкуса 🎉</h3>
      <p>
        Откройте для себя Калабрию — регион, где каждый день превращается в маленькое <strong>гастрономическое приключение</strong>! 🌊⛰️<br />
        Здесь, между бирюзовым морем и зелёными холмами, рождается вино с характером: ✨ <strong>более 170 автохтонных сортов винограда</strong>, включая легендарный <em>галиоппо</em> — сорт, который, по преданию, подавали олимпийским богам и героям античных мифов!
      </p>
      <h4 className="font-bold mt-4">🍷 Почему винный тур в Калабрию — это must-have для ценителей?</h4>
      <p>🏛️ <strong>История и мифы в каждом бокале</strong>: попробуйте <em>Чиро</em> — вино, овеянное легендами, с насыщенным вкусом и глубокими танинами.</p>
      <h4 className="font-bold mt-4">🏆 Лучшие винодельни региона:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="https://www.librandi.it" className="text-[#8B0000] underline">Librandi</a> 🌿</li>
        <li><a href="https://www.ippolito1845.it" className="text-[#8B0000] underline">Ippolito 1845</a> 🍇</li>
        <li><a href="https://www.tenutaiuzzolini.kr.it" className="text-[#8B0000] underline">Luzzolini</a> 🏺</li>
        <li><a href="https://zito.it" className="text-[#8B0000] underline">Zito</a> 🌞</li>
      </ul>
      <p>🎉 Все они предлагают не просто дегустации, а настоящий праздник вкуса и знакомства с культурой региона!</p>
      <h4 className="font-bold mt-4">📍 Где и когда отдыхать?</h4>
      <p><strong>Локации</strong>: Чиро, Чиро Марина, Локри, Стронголи (провинция Кротоне) — <strong>сердце винного туризма Калабрии</strong>! 💖</p>
      <h4 className="font-bold mt-4">⏰ Лучшее время для поездки:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Май – октябрь</strong>: пляжный сезон 🏖️, винные фестивали, экскурсии</li>
        <li><strong>Сентябрь</strong>: сбор урожая 🍇, дегустации, гастрономические туры</li>
        <li><strong>Зима</strong>: музеи 🏺, древние города, рождественские огни ✨, уютные вечера с бокалом вина</li>
      </ul>
      <h4 className="font-bold mt-4">✈️ Как добраться:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Crotone-Sant&apos;Anna Airport (CRV)</strong> — прямые рейсы из Рима, Милана, Дюссельдорфа</li>
        <li><strong>Lamezia Terme (SUF)</strong> — удобный вариант для аренды авто 🚗 или индивидуального трансфера</li>
      </ul>
      <h4 className="font-bold mt-4">🛏️ Проживание:</h4>
      <p>Уютные мини-отели, бутик-отели, виллы у моря или в горах — подберите жильё под свой стиль отдыха!</p>
      <h4 className="font-bold mt-4">💡 Практические советы:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Совмещайте винные туры с пляжным отдыхом и экскурсиями по античным городам!</li>
        <li>Пробуйте местные деликатесы: <em>ндуя</em> 🌶️, <em>сарделла</em>, свежие морепродукты 🐟</li>
        <li>Используйте <a href="https://mtvcalabria.it" className="text-[#8B0000] underline">mtvcalabria.it</a>, <a href="https://winalist.com" className="text-[#8B0000] underline">winalist.com</a>, <a href="https://turismo.reggiocal.it" className="text-[#8B0000] underline">turismo.reggiocal.it</a> для поиска экскурсий</li>
      </ul>
      <h4 className="font-bold mt-4">🌟 Особая атмосфера:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Пляжи Чиро Марины уже более 20 лет подряд получают <strong>Голубой флаг</strong> за чистоту! 🏆</li>
        <li>Горные деревни хранят древние языки (диалекты древнегреческого и албанского) 🏞️</li>
        <li>Местные жители встречают гостей, как старых друзей 🤗</li>
      </ul>
      <div className="bg-[#FFF8E1] p-4 rounded-lg my-4">
        <h3 className="font-bold mb-2">✨ Хотите почувствовать настоящую Калабрию?</h3>
        <p>
          <strong>Доверьте организацию отпуска тому, кто знает все секреты региона!</strong> 🗺️<br />
          Я помогу создать для вас <strong>персональный маршрут</strong>:<br />
          • Дегустации в семейных винодельнях 🍷<br />
          • Ужины на берегу моря 🌅<br />
          • Экскурсии по древним городам 🏛️<br />
          • Секретные пляжи 🏝️<br />
          — всё, чтобы ваше путешествие стало по-настоящему незабываемым!
        </p>
        <p className="mt-2">
          <strong>📩 Свяжитесь со мной:{" "}</strong>
          <a href="mailto:mariamarinaciro@gmail.com" className="text-blue-600 underline">
            mariamarinaciro@gmail.com
          </a>
          {" — получите бесплатную консультацию!"}
        </p>
      </div>
      <p className="text-center text-lg font-bold mt-8">🌞 До встречи в Калабрии — земле солнца, вина и настоящих эмоций!</p>
    </div>
  ),
  en: (
    <div className="prose max-w-full sm:mx-auto px-2 py-2">
      <h2 className="text-2xl font-bold text-[#8B0000]">🍇 Hidden Gems of Italian Wine!</h2>
      <h3 className="text-lg font-bold text-[#4B0082]">Calabria — Where Wine &amp; History Dance in a Flavor Fiesta! 🎉</h3>
      <p>
        Discover Calabria — a land where every day becomes a <strong>culinary adventure</strong>! 🌊⛰️<br />
        Between turquoise seas and green hills, wines with character are born: ✨ <strong>170+ native grape varieties</strong>, including legendary <em>Gaglioppo</em> — served to Olympic gods according to myths!
      </p>
      <h4 className="font-bold mt-4">🍷 Why Calabria is a Wine Lover&apos;s Must?</h4>
      <p>🏛️ <strong>History in every glass</strong>: Taste <em>Ciro</em> — wine steeped in legends with rich flavor and deep tannins.</p>
      <h4 className="font-bold mt-4">🏆 Top Wineries:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="https://www.librandi.it" className="text-[#8B0000] underline">Librandi</a> 🌿</li>
        <li><a href="https://www.ippolito1845.it" className="text-[#8B0000] underline">Ippolito 1845</a> 🍇</li>
        <li><a href="https://www.tenutaiuzzolini.kr.it" className="text-[#8B0000] underline">Luzzolini</a> 🏺</li>
        <li><a href="https://zito.it" className="text-[#8B0000] underline">Zito</a> 🌞</li>
      </ul>
      <p>🎉 Not just tastings—true celebrations of flavor &amp; culture!</p>
      <h4 className="font-bold mt-4">📍 Where &amp; When to Go?</h4>
      <p>
        <strong>Hotspots</strong>: Ciro, Ciro Marina, Locri, Strongoli (Crotone) — Calabria’s <strong>wine tourism heart</strong>! 💖
      </p>
      <h4 className="font-bold mt-4">⏰ Best Time:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>May–October</strong>: Beach season 🏖️, wine festivals, tours</li>
        <li><strong>September</strong>: Grape harvest 🍇, tastings, food tours</li>
        <li><strong>Winter</strong>: Museums 🏺, ancient towns, Christmas lights ✨, cozy wine evenings</li>
      </ul>
      <h4 className="font-bold mt-4">✈️ Getting Here:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Crotone-Sant&apos;Anna Airport (CRV)</strong>: Direct flights from Rome, Milan, Dusseldorf</li>
        <li><strong>Lamezia Terme (SUF)</strong>: Perfect for car rentals 🚗 or private transfers</li>
      </ul>
      <h4 className="font-bold mt-4">🛏️ Accommodation:</h4>
      <p>Boutique hotels, seaside villas, mountain retreats—find your perfect stay!</p>
      <h4 className="font-bold mt-4">💡 Pro Tips:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Combine wine tours with beach time &amp; ancient city explorations!</li>
        <li>Try local delicacies: <em>Nduja</em> 🌶️, <em>Sardella</em>, fresh seafood 🐟</li>
        <li>Use <a href="https://mtvcalabria.it" className="text-[#8B0000] underline">mtvcalabria.it</a>, <a href="https://winalist.com" className="text-[#8B0000] underline">winalist.com</a>, <a href="https://turismo.reggiocal.it" className="text-[#8B0000] underline">turismo.reggiocal.it</a> for tours</li>
      </ul>
      <h4 className="font-bold mt-4">🌟 Unique Atmosphere:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Ciro Marina beaches hold the <strong>Blue Flag</strong> for 20+ years! 🏆</li>
        <li>Mountain villages preserve ancient languages (Greek/Albanian dialects) 🏞️</li>
        <li>Locals welcome guests like old friends 🤗</li>
      </ul>
      <div className="bg-[#FFF8E1] p-4 rounded-lg my-4">
        <h3 className="font-bold mb-2">✨ Crave Authentic Calabria?</h3>
        <p>
          <strong>Let a local expert craft your dream trip!</strong> 🗺️<br />
          I&apos;ll create your <strong>personalized itinerary</strong>:<br />
          • Family winery tastings 🍷<br />
          • Seaside dinners 🌅<br />
          • Ancient city tours 🏛️<br />
          • Secret beaches 🏝️<br />
          — all for an unforgettable journey!
        </p>
        <p className="mt-2">
          <strong>📩 Contact Me:{" "}</strong>
          <a href="mailto:mariamarinaciro@gmail.com" className="text-blue-600 underline">
            mariamarinaciro@gmail.com
          </a>
          {" — get a FREE consultation!"}
        </p>
      </div>
      <p className="text-center text-lg font-bold mt-8">🌞 See you in Calabria—land of sun, wine, and pure emotion!</p>
    </div>
  ),
};

const SingleBlogPost: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <Layout
      title={language === "ru" ? "🍇 Неизвестные вина Италии!" : "🍇 Hidden Gems of Italian Wine!"}
      description={articleDescriptions[language]}
    >
      <section className="w-full min-h-[calc(100vh-250px)] bg-calabria-sand pb-8">
        <div className="max-w-2xl mx-auto pt-3">
          <button
            onClick={() => navigate("/blog")}
            className="mb-6 text-sm text-calabria-blue hover:underline"
          >
            {language === "ru" ? "← Назад к блогу" : "← Back to blog"}
          </button>
          
          {/* Галерея */}
          <Gallery images={articleImages} />

          {/* Акцентный текстовый блок */}
          <div className="rounded-2xl bg-white/90 shadow-lg px-4 py-6 mb-6 border border-calabria-terracotta">
            <h2 className="text-3xl mb-2 text-calabria-terracotta font-serif font-bold text-center animate-fade-in">
              {language === "ru"
                ? "🍇 Неизвестные вина Италии!"
                : "🍇 Hidden Gems of Italian Wine!"}
            </h2>
            <p className="text-center text-gray-700 mb-5 animate-fade-in">
              {language === "ru"
                ? "Погрузитесь в атмосферу Калабрии — региона, где вино, история и солнце сливаются в идеальное путешествие! "
                : "Immerse yourself in Calabria – where wine, history, and sunshine blend into the perfect journey!"}
            </p>
            <hr className="border-t-2 border-calabria-terracotta my-4 w-16 mx-auto" />
            <div className="prose max-w-full mx-auto pt-2 pb-4 text-[1.04rem] text-gray-800">
              {language === "ru" ? <RuCalabriaArticle /> : <EnCalabriaArticle />}
            </div>
          </div>

          {/* Call-to-action */}
          <div className="bg-gradient-to-r from-calabria-terracotta/90 to-calabria-blue/80 rounded-xl shadow-lg p-6 mt-8 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 text-center drop-shadow">
              {language === "ru"
                ? "Откройте свой авторский маршрут по Калабрии!"
                : "Get Your Exclusive Calabria Itinerary!"}
            </h3>
            <p className="text-center text-white/90 mb-2">
              {language === "ru"
                ? "Пишите на почту — получайте консультацию бесплатно:"
                : "Write to my email for a free consultation:"}
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

export default SingleBlogPost;
