import React from "react";

const EnCalabriaArticle = () => (
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
    {/* Refined “Unlock Calabria’s secrets” block - Wave & Sand style */}
    <div
      className={`
        mt-8 mb-7 w-full
        rounded-2xl
        shadow-xl
        flex flex-col items-center
        px-6 py-10
        transition
        animate-fade-in
        glass-gradient
        wave-sand-block
        group
        relative
        overflow-hidden
      `}
      style={{
        background: "linear-gradient(90deg, #d6eaff 0%, #e0f7fa 45%, #faf3e3 100%)",
        border: "1.5px solid #e0e4ea33",
        boxShadow: "0 10px 40px 0 #b2c4d933, 0 2px 10px 0 #e4e9f3aa",
      }}
    >
      {/* морская волна (внизу) */}
      <svg
        viewBox="0 0 600 50"
        className="absolute left-0 bottom-0 w-full h-12 pointer-events-none"
        style={{
          zIndex: 2,
        }}
      >
        <path
          d="M0 20 Q 100 50 200 25 T 400 30 T 600 20 V50 H0Z"
          fill="#e0f7fa"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0 20 Q 100 50 200 25 T 400 30 T 600 20 V50 H0Z;
              M0 22 Q 110 42 210 28 T 390 37 T 600 24 V50 H0Z;
              M0 20 Q 100 50 200 25 T 400 30 T 600 20 V50 H0Z
            "
          />
        </path>
      </svg>
      {/* иконки-звёзды и ракушки */}
      <div className="absolute top-7 left-8 z-10 text-2xl select-none pointer-events-none">
        <span role="img" aria-label="starfish">🌟</span>
      </div>
      <div className="absolute top-12 right-14 z-10 text-2xl select-none pointer-events-none">
        <span role="img" aria-label="shell">🐚</span>
      </div>
      <div className="absolute bottom-12 right-8 z-10 text-xl select-none pointer-events-none">
        <span role="img" aria-label="shell">🐚</span>
      </div>
      {/* анимация "плавает" при hover */}
      <style>
        {`
          .wave-sand-block {
            will-change: transform;
            transition: transform 0.25s cubic-bezier(.36,.68,.53,.97);
          }
          .wave-sand-block:hover,
          .wave-sand-block:focus-within,
          .wave-sand-block:active {
            transform: translateY(-6px) scale(1.02) rotate(-1deg);
            box-shadow: 0 16px 42px 0 #b2c4d944, 0 5px 18px 0 #e4e9f3bb;
          }
        `}
      </style>
      <h3 className="text-center w-full text-2xl sm:text-3xl font-extrabold font-serif mb-5 text-calabria-blue flex items-center justify-center gap-2 tracking-wide drop-shadow-lg">
        <span className="text-2xl sm:text-3xl animate-pulse">✨</span>
        UNLOCK CALABRIA&apos;S SECRETS!
        <span className="text-2xl sm:text-3xl animate-pulse">✨</span>
      </h3>
      <ul className="w-full max-w-md text-lg md:text-xl mb-5 mt-1 space-y-3 text-center sm:text-left flex flex-col gap-2 font-sans">
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🌊</span>
          <span>Craving Calabria&apos;s freshest seafood?</span>
        </li>
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🏝️</span>
          <span>Dreaming of secluded beaches?</span>
        </li>
        <li className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-2xl">🍤</span>
          <span>Want to discover hidden gems?</span>
        </li>
      </ul>
      <div className="mt-1 mb-1 w-full flex justify-center">
        <span className="
          inline-block rounded-lg bg-calabria-blue px-6 py-2
          text-lg font-bold text-white shadow-md hover:scale-105 transition-transform
          animate-scale-in
        ">
          👉 ASK A QUESTION → GET A FREE PERSONALIZED TIP!
        </span>
      </div>
      <p className="mt-4 text-base sm:text-lg text-calabria-blue/80 font-medium text-center">
        Local secrets &bull; Hidden spots &bull; Recommendations tailored for you
      </p>
    </div>
    <p className="text-center text-lg font-bold mt-8">🌞 See you in Calabria—land of sun, wine, and pure emotion!</p>
  </div>
);

export default EnCalabriaArticle;
