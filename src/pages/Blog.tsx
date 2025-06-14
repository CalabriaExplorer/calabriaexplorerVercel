
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

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
        <li><strong>Crotone-Sant'Anna Airport (CRV)</strong> — прямые рейсы из Рима, Милана, Дюссельдорфа</li>
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
        <p className="mt-2"><strong>📩 Свяжитесь со мной:</strong><br />
          <a href="mailto:mariamarinaciro@gmail.com" className="text-blue-600 underline">mariamarinaciro@gmail.com</a>
          — получите <strong>бесплатную консультацию</strong>!
        </p>
      </div>
      <p className="text-center text-lg font-bold mt-8">🌞 До встречи в Калабрии — земле солнца, вина и настоящих эмоций!</p>
    </div>
  ),
  en: (
    <div className="prose max-w-full sm:mx-auto px-2 py-2">
      <h2 className="text-2xl font-bold text-[#8B0000]">🍇 Hidden Gems of Italian Wine!</h2>
      <h3 className="text-lg font-bold text-[#4B0082]">Calabria — Where Wine & History Dance in a Flavor Fiesta! 🎉</h3>
      <p>
        Discover Calabria — a land where every day becomes a <strong>culinary adventure</strong>! 🌊⛰️<br />
        Between turquoise seas and green hills, wines with character are born: ✨ <strong>170+ native grape varieties</strong>, including legendary <em>Gaglioppo</em> — served to Olympic gods according to myths!
      </p>
      <h4 className="font-bold mt-4">🍷 Why Calabria is a Wine Lover's Must?</h4>
      <p>🏛️ <strong>History in every glass</strong>: Taste <em>Ciro</em> — wine steeped in legends with rich flavor and deep tannins.</p>
      <h4 className="font-bold mt-4">🏆 Top Wineries:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="https://www.librandi.it" className="text-[#8B0000] underline">Librandi</a> 🌿</li>
        <li><a href="https://www.ippolito1845.it" className="text-[#8B0000] underline">Ippolito 1845</a> 🍇</li>
        <li><a href="https://www.tenutaiuzzolini.kr.it" className="text-[#8B0000] underline">Luzzolini</a> 🏺</li>
        <li><a href="https://zito.it" className="text-[#8B0000] underline">Zito</a> 🌞</li>
      </ul>
      <p>🎉 Not just tastings—true celebrations of flavor & culture!</p>
      <h4 className="font-bold mt-4">📍 Where & When to Go?</h4>
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
        <li><strong>Crotone-Sant'Anna Airport (CRV)</strong>: Direct flights from Rome, Milan, Dusseldorf</li>
        <li><strong>Lamezia Terme (SUF)</strong>: Perfect for car rentals 🚗 or private transfers</li>
      </ul>
      <h4 className="font-bold mt-4">🛏️ Accommodation:</h4>
      <p>Boutique hotels, seaside villas, mountain retreats—find your perfect stay!</p>
      <h4 className="font-bold mt-4">💡 Pro Tips:</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Combine wine tours with beach time & ancient city explorations!</li>
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
          I'll create your <strong>personalized itinerary</strong>:<br />
          • Family winery tastings 🍷<br />
          • Seaside dinners 🌅<br />
          • Ancient city tours 🏛️<br />
          • Secret beaches 🏝️<br />
          — all for an unforgettable journey!
        </p>
        <p className="mt-2">
          <strong>📩 Contact Me:</strong><br />
          <a href="mailto:mariamarinaciro@gmail.com" className="text-blue-600 underline">mariamarinaciro@gmail.com</a>
          — get a <strong>FREE consultation</strong>!
        </p>
      </div>
      <p className="text-center text-lg font-bold mt-8">🌞 See you in Calabria—land of sun, wine, and pure emotion!</p>
    </div>
  ),
};

const Blog: React.FC = () => {
  const { language, t } = useLanguage();
  return (
    <Layout title={t("blog.title")} description={t("blog.description")}>
      <section className="w-full min-h-[calc(100vh-250px)] bg-white pb-8">
        <div className="max-w-2xl mx-auto pt-3">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-center">{t("blog.title")}</h1>
          <p className="mb-4 text-gray-600 text-center">{t("blog.description")}</p>
          {article[language]}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
