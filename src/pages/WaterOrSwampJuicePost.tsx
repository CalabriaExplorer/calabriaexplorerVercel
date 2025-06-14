import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import Gallery from "@/components/ui/Gallery";

const articleImages = [
  {
    src: "/lovable-uploads/e23f8b3b-f1dc-4a17-a7fe-cd2896aaea08.png",
    alt_ru: "Кристально чистая вода и галька на пляже Калабрии",
    alt_en: "Crystal clear water and pebbles on a Calabrian beach",
  },
  {
    src: "/lovable-uploads/5932a9cb-86cb-4fbc-a3af-c1a63738d965.png",
    alt_ru: "Галька, море и небо с облаками на пляже Калабрии",
    alt_en: "Pebbles, sea and sky with clouds on Calabria's beach",
  },
  {
    src: "/lovable-uploads/890e6bee-280e-4cef-aff9-ef043e6972ce.png",
    alt_ru: "Дайвер в чистой воде у живописных холмов Калабрии",
    alt_en: "Diver in clean water with scenic Calabria hills",
  },
];

const SCHEMA_ORG = (lang: "ru" | "en") =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline":
      lang === "ru"
        ? "🌊 ВОДА ИЛИ ЖИДКАЯ ГАДОСТЬ?"
        : "🌊 WATER OR SWAMP JUICE?",
    "description":
      lang === "ru"
        ? "Жёсткий гид по морям: как отличить курорт от лужи, где вода пахнет борщом и канализацией. Мемный обзор."
        : "A brutal guide to seas: how to spot a beach vs. an algae swamp. Meme-based survival tips.",
    "mainEntityOfPage":
      typeof window !== "undefined"
        ? window.location.href
        : "https://calabria-explorer.lovable.app/blog/water-or-swamp-juice",
    "image": articleImages.map((img) =>
      typeof window !== "undefined"
        ? window.location.origin + img.src
        : "https://calabria-explorer.lovable.app" + img.src
    ),
    "author": { "@type": "Person", "name": "Мария (Maria)" },
    "publisher": { "@type": "Organization", "name": "Calabria Explorer" },
    "datePublished": "2024-06-14",
    "inLanguage": lang,
  });

const getGalleryImages = (lang: "ru" | "en") =>
  articleImages.map(img => ({
    src: img.src,
    alt: lang === "ru" ? img.alt_ru : img.alt_en
  }));

const article = {
  ru: (
    <div className="prose max-w-full px-2 py-2">
      {/* Галерея фото ТОЛЬКО в начале */}
      <Gallery images={getGalleryImages("ru")} />
      <h2 className="text-2xl font-bold text-[#0077B6] mb-2">🌊 ВОДА ИЛИ ЖИДКАЯ ГАДОСТЬ?</h2>
      <p className="mb-2 font-semibold">Жёсткий гид по выживанию в морях, которые пахнут как лук из борща</p>
      <p className="mb-2">От Черного моря до Бали: как отличить курорт от болота</p>
      <p className="italic text-calabria-terracotta">Мем: Когда ныряешь за экзотикой, а получаешь суп из тины</p>
      <div className="font-bold bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
        ⚠️ ПРЕДУПРЕЖДЕНИЕ: Если вы любите воду, пахнущую как носки после марафона — эта статья вызовет у вас истерику.
      </div>
      {/* УДАЛЕНО: отображение картинок articleImages в основном тексте */}

      <p>
        Родилась я у моря супа под названием Черное море — там, где вода имеет стойкий аромат "бабушкин погреб после потопа". Выросла у Баренцева, где плавать = экстремальный спорт "выживи минуту без гипотермии". А потом мне захотелось экзотики: Огненная Земля (спойлер: огня нет, есть ледяной пинок под дых), Бали (где "райская вода" иногда пахнет как аквариум ленивца), и Персидский залив — единственное место, где вода не напоминает "туалет после фестиваля острой пищи".
      </p>
      <h4 className="font-bold mt-5">🔥 ЗАПАХ: ТЕСТ НА ИДИОТА</h4>
      <ul>
        <li>Нормально: Соль + йод + ветер = аромат "я на море, блин!"</li>
        <li>Гадость: Болото + тина + ностальгия по канализации 90-х</li>
        <li className="italic text-gray-700">"Пахнет приключениями!" — сказал наивный турист перед кишечной инфекцией</li>
      </ul>
      <h4 className="font-bold mt-5">👀 ПРОЗРАЧНОСТЬ: ИЛЛЮЗИЯ VS РЕАЛЬНОСТЬ</h4>
      <ul>
        <li>🔍 Идеал: Видишь камушек на дне? Поздравляю, это не галлюцинация!</li>
        <li>💩 Реальность: Мутная жижа, где внезапное касание ноги — это 50% водоросли, 50% чья-то конечность</li>
      </ul>
      <div className="font-semibold text-calabria-blue">ХУК: Если не видишь своих пальцев под водой — ты не ныряешь, ты участвуешь в квесте "найди инфекцию"</div>
      <h4 className="font-bold mt-5">⚖️ ПЛОТНОСТЬ: ТЕСТ НА СОЛЕНОСТЬ</h4>
      <ul>
        <li>🟢 Мертвое море — Лежишь как пробка. Даже если не умеешь плавать. Идеально для инстаграма!</li>
        <li>🔴 Черное море — Плывешь? Поздравляю! Ты только что проглотил 3 литра бактериального коктейля 🦠</li>
      </ul>
      <div className="italic text-calabria-terracotta">Мем-совет: Если вода держит хуже, чем твои обещания на Новый год — беги!</div>
      <h4 className="font-bold mt-5">🎨 ЦВЕТ: ИНСТРУКЦИЯ ДЛЯ ДАЛЬТОНИКОВ</h4>
      <ul>
        <li>✅ ГОЛУБОЙ = Можно нырять</li>
        <li>⚠️ БИРЮЗОВЫЙ = Осторожно, могут быть медузы!</li>
        <li>❌ ЗЕЛЕНЫЙ = Беги, глупец! Это не море, это бульон из водорослей!</li>
      </ul>
      <h4 className="font-bold mt-5">🐡 РЫБЫ И МЕДУЗЫ: РУССКАЯ РУЛЕТКА</h4>
      <ul>
        <li>🐟 Рыбки для педикюра: Мило, пока не понял, что это те же рыбы, что едят трупы</li>
        <li>👻 Медузы: "Ой, какая прелесть!" → 5 мин спустя → "МАТЬ, ОНО ЖЖЕТСЯ!"</li>
        <li>💀 Скаты/акулы: Экстрим для тех, кто считает жизнь скучной</li>
      </ul>
      <div className="font-semibold text-calabria-blue">Хук: Хочешь острых ощущений? Плавайте там, где местные не купаются. Спойлер: они не дураки.</div>
      <h4 className="font-bold mt-5">🔥 ЖЕСТКАЯ ИСТИНА</h4>
      <ul>
        <li>95% "райских бухт" — ловушка для туристов, где:</li>
        <li>Вода = суп из планктона 🥣</li>
        <li>Запах = смесь тины и отчаяния</li>
        <li>Ощущения = "зачем я это сделал?"</li>
      </ul>
      <div className="bg-sky-50 p-4 rounded-md my-4">
        Настоящая вода не нуждается в фильтрах для фото. Она кристальна, как слёзы рекламного менеджера в отпуске.
      </div>
      <p className="mt-3">P.S. Если после прочтения вы всё ещё хотите в Черное море — мне вас жаль. Или вы мазохист? 😈</p>
    </div>
  ),
  en: (
    <div className="prose max-w-full px-2 py-2">
      {/* Галерея фото */}
      <Gallery images={getGalleryImages("en")} />
      <h2 className="text-2xl font-bold text-[#0077B6] mb-2">🌊 WATER OR SWAMP JUICE?</h2>
      <p className="mb-2 font-semibold">A Brutal Guide to Seas That Smell Like Borscht Leftovers</p>
      <p className="mb-2">From Black Sea to Bali: How to Spot a Toxic Puddle</p>
      <p className="italic text-calabria-terracotta">Meme: When you dive for exotic but get algae soup</p>
      <div className="font-bold bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
        ⚠️ WARNING: If you enjoy water smelling like gym socks - this article will trigger you.
      </div>

      {articleImages.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt_en}
          className="my-4 rounded-md shadow-md border"
        />
      ))}

      <p>
        Born near the sea soup called Black Sea - where water has the eternal aroma of "grandma's flooded basement". Raised near Barents Sea where swimming = extreme sport "survive 1 minute without hypothermia". Then I wanted exotic: Tierra del Fuego (spoiler: no fire, just icy kick in the guts), Bali (where "paradise water" sometimes smells like a sloth's aquarium), and Persian Gulf - the only place where water doesn't resemble "toilet after spicy food festival".
      </p>
      <h4 className="font-bold mt-5">🔥 SMELL: IDIOT TEST</h4>
      <ul>
        <li>Normal: Salt + iodine + wind = "I'm at the sea, damn!"</li>
        <li>Swamp juice: Algae + mud + nostalgia for 90s sewage</li>
        <li className="italic text-gray-700">"Smells like adventure!" - said naive tourist before gut infection</li>
      </ul>
      <h4 className="font-bold mt-5">👀 CLARITY: ILLUSION VS REALITY</h4>
      <ul>
        <li>🔍 Ideal: See pebbles at the bottom? Congrats, not hallucinating!</li>
        <li>💩 Reality: Murky broth where sudden leg touch = 50% seaweed, 50% someone's limb</li>
      </ul>
      <div className="font-semibold text-calabria-blue">HOOK: Can't see your fingers underwater? You're not swimming, you're playing "find the infection" quest</div>
      <h4 className="font-bold mt-5">⚖️ DENSITY: SALINITY CHECK</h4>
      <ul>
        <li>🟢 Dead Sea: Float like a cork. Even if you can't swim. Instagram gold!</li>
        <li>🔴 Black Sea: Swimming? Congrats! You just swallowed 3L of bacterial cocktail 🦠</li>
      </ul>
      <div className="italic text-calabria-terracotta">Meme tip: If water supports you worse than your New Year resolutions - RUN!</div>
      <h4 className="font-bold mt-5">🎨 COLOR: GUIDE FOR COLORBLIND</h4>
      <ul>
        <li>✅ BLUE = Safe to dive</li>
        <li>⚠️ TURQUOISE = Beware of jellyfish!</li>
        <li>❌ GREEN = Run, fool! This isn't sea, it's algae soup!</li>
      </ul>
      <h4 className="font-bold mt-5">🐡 FISH & JELLYFISH: AQUATIC ROULETTE</h4>
      <ul>
        <li>🐟 Pedicure fish: Cute until you realize they eat corpses</li>
        <li>👻 Jellyfish: "Aww so graceful!" → 5 min later → "HOLY HELL IT BURNS!"</li>
        <li>💀 Rays/sharks: For those who find life too boring</li>
      </ul>
      <div className="font-semibold text-calabria-blue">Hook: Want thrill? Swim where locals don't. Spoiler: they're not stupid.</div>
      <h4 className="font-bold mt-5">🔥 BRUTAL TRUTH</h4>
      <ul>
        <li>95% of "paradise coves" are tourist traps where:</li>
        <li>Water = plankton soup 🥣</li>
        <li>Smell = despair with algae notes</li>
        <li>Experience = "why did I do this?"</li>
      </ul>
      <div className="bg-sky-50 p-4 rounded-md my-4">
        Real water needs no Instagram filters. It's crystal clear like tears of marketing manager on vacation.
      </div>
      <p className="mt-3">
        P.S. If after this you still want Black Sea - I pity you. Or are you a masochist? 😈
      </p>
    </div>
  ),
};

const title_ru = "🌊 ВОДА ИЛИ ЖИДКАЯ ГАДОСТЬ?";
const title_en = "🌊 WATER OR SWAMP JUICE?";
const desc_ru =
  "Жёсткий гид по выживанию в морях, которые пахнут как борщ и канализация, мемный обзор от Черного моря до Бали.";
const desc_en =
  "A brutal guide to seas, from Black Sea to Bali. Meme-based test: is it a resort or a swamp?";

const WaterOrSwampJuicePost: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout
      title={language === "ru" ? title_ru : title_en}
      description={language === "ru" ? desc_ru : desc_en}
    >
      <SEOHead
        title={language === "ru" ? title_ru : title_en}
        description={language === "ru" ? desc_ru : desc_en}
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/blog/water-or-swamp-juice"
            : "https://calabria-explorer.lovable.app/blog/water-or-swamp-juice"
        }
        type="article"
        image={
          typeof window !== "undefined"
            ? window.location.origin + articleImages[0].src
            : "https://calabria-explorer.lovable.app" + articleImages[0].src
        }
        schema={SCHEMA_ORG(language)}
      />
      <section className="w-full min-h-[calc(100vh-250px)] bg-white pb-8">
        <div className="max-w-2xl mx-auto pt-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mb-6 text-sm text-calabria-blue hover:underline"
          >
            {language === "ru"
              ? "← Назад к блогу"
              : "← Back to blog"}
          </button>
          {article[language]}
        </div>
      </section>
    </Layout>
  );
};

export default WaterOrSwampJuicePost;

// Файл превышает рекомендуемый размер. После проверки изменений могу предложить разделить статью и галерею на отдельные компоненты для лучшей поддержки и простоты работы.
