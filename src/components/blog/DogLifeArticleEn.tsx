
import React from "react";

const DogLifeArticleEn = () => (
  <div className="prose max-w-full sm:mx-auto px-2 py-2">
    <h2 className="text-2xl font-bold text-[#2196F3] mb-2">Dog Owner Life in Italy: Balconies, Barkfests &amp; Siestas</h2>
    <h3 className="text-lg font-semibold text-[#2579c5] mb-2">Where leashes are sacred and vets vanish after lunch</h3>
    <p>
      <strong>Dogs on balcony in Italy</strong><br />
      Think dog ownership is just walks and feeding? In Italy, it's a whole comedy show. While owners are at work, their four-legged friends hold "balcony debates" across neighborhoods. Even our usually silent Alabai suddenly barks back at neighbor's dachshunds and Pomeranians. Apparently boredom is the best motivator for canine gossip.
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🎯 The Sacred Leash Law</h4>
    <p>
      Fun fact: All dogs here — from tiny Yorkies to giant Great Danes — walk on leashes. Not because Italians are law-abiding, but because it prevents "accidental" showdowns. A leash is like an invisible fence saving your nerves and clothes from fur. See official rules on the <a href="https://www.salute.gov.it/portale/home.html" target="_blank" rel="noopener">Italian Ministry of Health</a> website.
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🍖 Dog Food: Cheaper Than Pasta?</h4>
    <p>
      About food: Good professional dog food costs around €2 per kilo. A 20kg bag is about €40. Just don't confuse it with supermarket brands — unless you want your dog to give you the "I hate you all" look.
    </p>
    <div className="my-3 px-3 py-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 shadow-sm">
      <span className="font-bold">⚠️ Pro tip:</span> Look for "<strong>super premium</strong>" labels — Italian vets say it's like parmesan for dogs.
    </div>
    <h4 className="font-bold mt-4 text-[#2982c6]">🏥 Vets &amp; The Holy Siesta</h4>
    <p>
      Vets are a chapter of their own. In small Italian towns, clinics close for siesta. Finding 24/7 help? Mission impossible. Need emergency care at 3 PM? Prepare to call clinics in neighboring towns and pray to Saint Anthony. 🙏
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">💩 The Scoop on Poop</h4>
    <p>
      Cleaning up after dogs? Main streets are museum-clean. But venture into parks or woods — freedom reigns! People calmly ignore dog poop because picnics happen on beaches, and forests are for relaxing. Italians are passionate, but poop-scooping isn't their forte. 🐴
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🐾 Italian Dog Life Summary:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Balcony barkfests instead of dog parks</li>
      <li>Leash = insurance against mafia encounters</li>
      <li>Food pricier than pasta but cheaper than wine</li>
      <li>Vet availability = siesta schedule</li>
      <li>Cleanup only in tourist zones</li>
    </ul>
    <div
      className="
        mt-8 mb-6 w-full rounded-2xl shadow-lg flex flex-col items-center px-0 py-0
        transition animate-fade-in
        relative overflow-hidden backdrop-blur-md"
      style={{
        minHeight: 200,
        background: "none",
        border: "none",
        boxShadow: "0 8px 36px 0 #88c8f444, 0 2px 10px 0 #7ebff533"
      }}>
      <div className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(120deg, #30a0e099 0%, #cbeafd88 100%)",
          opacity: 0.90, zIndex: 1
        }} aria-hidden="true" />
      <div className="relative z-10 w-full flex flex-col items-center px-6 py-7">
        <h3 className="w-full text-center text-2xl font-extrabold font-serif mb-2 flex items-center justify-center gap-2"
          style={{
            color: "#e7f5fd",
            textShadow: "0 3px 16px #218dda99,0 1px 2px #000a"
          }}>
          <span role="img" aria-hidden="true">🐾</span>
          Welcome to Calabria's dog owner club!
        </h3>
        <p className="text-base font-medium text-center mb-2" style={{ color: "#eafaff", textShadow: "0 1px 10px #21a1df88" }}>
          If you're ready for this chaos-meets-charm combo — join us!
        </p>
      </div>
    </div>
    <p className="text-center text-lg font-bold mt-8">P.S. Is your dog learning Italian swear words yet? 😉</p>
  </div>
);

export default DogLifeArticleEn;
