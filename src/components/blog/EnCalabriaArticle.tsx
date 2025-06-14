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
    {/* Seabreeze Mist block — обновлённый стиль подложки и текста */}
    <div
      className={`
        mt-8 mb-7 w-full
        rounded-2xl
        shadow-lg
        flex flex-col items-center
        px-0 py-0
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
        position: "relative",
        minHeight: 340,
        background: "none",
        border: "none",
        boxShadow: "0 8px 36px 0 #88c8f444, 0 2px 10px 0 #7ebff533",
      }}
    >
      {/* Photo background layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/6d3b6b08-c072-43d0-9bb7-4a32452ce1e1.png')",
          opacity: 0.12,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* translucent blue overlay */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(120deg, #41b2e9cc 0%, #cbeafd77 100%)",
          opacity: 0.86,
          zIndex: 2,
        }}
        aria-hidden="true"
      />
      {/* content */}
      <div className="relative z-10 w-full flex flex-col items-center px-6 py-10">
        <h3
          className="w-full text-center text-2xl sm:text-3xl font-extrabold font-serif mb-5 flex items-center justify-center gap-2 whitespace-pre-line"
          style={{
            color: "#f6fcff",
            textShadow: "0 3px 16px #218dda99, 0 1px 2px #000a, 0 6px 30px #219edb44",
            letterSpacing: "0.5px",
          }}>
          <span role="img" aria-hidden="true">✨</span>
          UNLOCK CALABRIA'S SECRETS!
          <span role="img" aria-hidden="true">✨</span>
        </h3>
        <ul className="w-full max-w-md text-lg md:text-xl mb-5 mt-1 space-y-3 text-center sm:text-left flex flex-col gap-2 font-sans"
          style={{
            color: "#eafaff",
            textShadow: "0 1px 10px #21a1df55, 0 1px 2px #218dda88",
            fontWeight: 500,
            textRendering: "optimizeLegibility"
          }}>
          <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
            <span role="img" aria-hidden="true">🌊</span>
            <span>Craving Calabria's freshest seafood?</span>
          </li>
          <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
            <span role="img" aria-hidden="true">🏝️</span>
            <span>Dreaming of secluded beaches?</span>
          </li>
          <li className="flex items-center gap-3 justify-center sm:justify-start leading-relaxed">
            <span role="img" aria-hidden="true">🍤</span>
            <span>Want to discover hidden gems?</span>
          </li>
        </ul>
        <div className="mt-1 mb-1 w-full flex justify-center">
          <span className="
            inline-block rounded-lg bg-[#3fa5cd]/80 px-7 py-2
            text-lg font-bold text-white shadow hover:scale-105 transition-transform
            hover:shadow-lg flex items-center gap-2"
            style={{
              textShadow: "0 2px 7px #18aadb99, 0 0 1px #fff"
            }}>
            <span role="img" aria-hidden="true">👉</span>
            ASK A QUESTION → GET A FREE PERSONALIZED TIP!
          </span>
        </div>
        <p className="mt-4 text-base sm:text-lg font-medium text-center"
          style={{
            color: "#eafaff",
            textShadow: "0 1px 10px #21a1df66, 0 1px 2px #218dda",
          }}>
          Local secrets • Hidden spots • Recommendations tailored for you
        </p>
      </div>
    </div>
    <p className="text-center text-lg font-bold mt-8">🌞 See you in Calabria—land of sun, wine, and pure emotion!</p>
  </div>
);

export default EnCalabriaArticle;
