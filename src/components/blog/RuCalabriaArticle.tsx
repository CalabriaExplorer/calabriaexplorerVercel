import React from "react";

const RuCalabriaArticle = () => (
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
    {/* Refined “Секреты Калабрии” block - Seabreeze Mist style */}
    <div
      className={`
        mt-8 mb-7 w-full
        rounded-2xl
        shadow-lg
        flex flex-col items-center
        px-6 py-10
        transition
        animate-fade-in
        glass-gradient
        seabreeze-mist-block
        group
        relative
        overflow-hidden
        backdrop-blur-md
      `}
      style={{
        background:
          "linear-gradient(90deg, rgba(214,234,255,0.72) 0%, rgba(224,247,250,0.56) 42%, rgba(250,243,227,0.48) 100%)",
        border: "1.5px solid #e3f2fd",
        boxShadow: "0 10px 40px 0 #b2c4d926, 0 2px 10px 0 #9de0fc33",
      }}
    >
      {/* Эффект волн и пузырьков внизу блока */}
      <svg
        viewBox="0 0 600 42"
        className="absolute left-0 bottom-0 w-full h-12 pointer-events-none"
        style={{
          zIndex: 2,
        }}
      >
        <path
          d="M0 30 Q 75 37 150 28 T 300 34 T 450 28 T 600 30 V42 H0Z"
          fill="#d6eaffCC"
        />
        {/* Пузырьки */}
        <circle cx="80" cy="33" r="4" fill="#b3e2fc88" />
        <circle cx="370" cy="38" r="2.5" fill="#ade6f4AA" />
        <circle cx="310" cy="34" r="2" fill="#c9f2ffBB" />
        <circle cx="530" cy="32" r="3.5" fill="#c9e9fd7a" />
        {/* Волны-эмодзи */}
        <text x="35" y="40" fontSize="18">🌊</text>
        <text x="540" y="41" fontSize="18">🌊</text>
      </svg>
      {/* Акцентные эмодзи снежинки или волны наверху */}
      <div className="absolute top-8 left-9 z-10 text-xl select-none pointer-events-none opacity-80">
        <span role="img" aria-label="sparkle">❄️</span>
      </div>
      <div className="absolute top-10 right-12 z-10 text-xl select-none pointer-events-none opacity-80">
        <span role="img" aria-label="bubbles">💧</span>
      </div>
      <div className="absolute bottom-16 right-7 z-10 text-lg select-none pointer-events-none opacity-75">
        <span role="img" aria-label="bubbles">🫧</span>
      </div>
      {/* Анимация плавного "покачивания" блока при hover */}
      <style>
        {`
          .seabreeze-mist-block {
            will-change: transform;
            transition: transform 0.32s cubic-bezier(.22,.78,.27,.96);
          }
          .seabreeze-mist-block:hover,
          .seabreeze-mist-block:focus-within,
          .seabreeze-mist-block:active {
            transform: translateY(-7px) scale(1.015) rotate(-0.7deg);
            box-shadow: 0 16px 42px 0 #9de0fc52, 0 6px 24px 0 #acd7faaa;
          }
        `}
      </style>
      <h3 className="text-center w-full text-2xl sm:text-3xl font-extrabold font-serif mb-5 text-calabria-blue flex items-center justify-center gap-2 tracking-wide drop-shadow-lg">
        <span className="text-2xl sm:text-3xl animate-pulse">✨</span>
        РАСКРОЙТЕ СЕКРЕТЫ КАЛАБРИИ!
        <span className="text-2xl sm:text-3xl animate-pulse">✨</span>
      </h3>
      <ul className="w-full max-w-md text-lg md:text-xl mb-5 mt-1 space-y-3 text-center sm:text-left flex flex-col gap-2 font-sans">
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🌊</span>
          <span>Хотите попробовать самые свежие морепродукты?</span>
        </li>
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🏝️</span>
          <span>Мечтаете об уединённых пляжах?</span>
        </li>
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🍤</span>
          <span>Ищете нетуристические места?</span>
        </li>
      </ul>
      <div className="mt-1 mb-1 w-full flex justify-center">
        <span className="
          inline-block rounded-lg bg-calabria-blue px-6 py-2
          text-lg font-bold text-white shadow-md hover:scale-105 transition-transform
          animate-scale-in
        ">
          👉 ЗАДАЙТЕ ВОПРОС → ПОЛУЧИТЕ БЕСПЛАТНЫЙ ПЕРСОНАЛЬНЫЙ СОВЕТ!
        </span>
      </div>
      <p className="mt-4 text-base sm:text-lg text-calabria-blue/80 font-medium text-center">
        Местные секреты &bull; Потаённые уголки &bull; Рекомендации под ваш запрос
      </p>
    </div>
    <p className="text-center text-lg font-bold mt-8">🌞 До встречи в Калабрии — земле солнца, вина и настоящих эмоций!</p>
  </div>
);

export default RuCalabriaArticle;
