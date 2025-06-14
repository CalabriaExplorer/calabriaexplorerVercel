
import React from "react";

const DogLifeArticleRu = () => (
  <div className="prose max-w-full sm:mx-auto px-2 py-2">
    <h2 className="text-2xl font-bold text-[#2196F3] mb-2">🐶 Жизнь собачника в Италии: балконы, гавкоты и сиеста</h2>
    <h3 className="text-lg font-semibold text-[#2579c5] mb-2">Когда поводок важнее паспорта, а ветеринар спит с 13:00 до 16:00</h3>
    <p>
      <strong>Собаки на балконе в Италии</strong><br />
      Вы думали, что жизнь собачника — это просто прогулки и кормёжка? В Италии всё гораздо веселее. Пока хозяева пашут на работе, их четвероногие друзья сидят на балконах и устраивают настоящие «балконные дебаты». Да-да, даже наш молчаливый алабай, который обычно ведёт себя как босс мафии, вдруг начал перегавкиваться с соседскими таксами и шпицами. Видимо, скука — лучший мотиватор для собачьих сплетен. 🐾
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🎯 Поводок — святое</h4>
    <p>
      Забавно, что тут все собаки — от крохотных йорков до огромных догов — гуляют на поводках. Не потому, что итальянцы такие законопослушные, а потому что так проще избежать «случайных» разборок. Учитывая, что в любой момент можно нарваться на настоящего босса Ндрангеты, все стараются не создавать сложных собачьих ситуаций. Поводок — это как невидимый забор, который спасает вам нервы, шерсть на одежде и, возможно, здоровье. 😅
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🍖 Корм: дешевле пасты, дороже пиццы</h4>
    <p>
      Про корм: хороший профессиональный корм стоит примерно 2 евро за килограмм. Мешок на 20 кг — около 40 евро. Не дешево, но и не космос. Главное — не перепутать с тем, что продают в супермаркете, если хотите, чтобы ваш пес не ходил с выражением «я вас всех ненавижу». 🐶💔
    </p>
    <div className="my-3 px-3 py-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 shadow-sm">
      <span className="font-bold">⚠️ Совет бывалого:</span> Ищите корм с пометкой "<strong>super premium</strong>" — итальянские ветеринары говорят, что это как пармезан для собак.
    </div>
    <h4 className="font-bold mt-4 text-[#2982c6]">🏥 Ветеринары и святая сиеста</h4>
    <p>
      Ветеринары — отдельная история. В маленьких городках Италии ветеринарные клиники закрываются на сиесту, и найти круглосуточную помощь — задача из разряда «почти невозможна». Хотите экстренную помощь в три часа дня? Готовьтесь звонить в соседний город и молиться святому Антонию. 🙏
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">💩 Уборка: где можно, а где нельзя</h4>
    <p>
      Уборка за собаками? На центральных улицах — чистота, как в музее. Но стоит свернуть в парки или леса — и тут начинается свобода. Люди спокойно игнорируют собачьи какашки, потому что пикники устраивают на пляже, а в лесу все расслабляются. Итальянцы — народ страстный, но уборка за собаками — не их конёк. 🐴
    </p>
    <h4 className="font-bold mt-4 text-[#2982c6]">🐾 Итоги собачной жизни в Италии:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Балконные дебаты вместо дог-парков</li>
      <li>Поводок = страховка от мафиозных разборок</li>
      <li>Корм дороже пасты, но дешевле вина</li>
      <li>Ветеринарная помощь только по расписанию сиесты</li>
      <li>Уборка — только в туристических зонах</li>
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
      {/* translucent blue overlay */}
      <div className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(120deg, #30a0e099 0%, #cbeafd88 100%)",
          opacity: 0.90, zIndex: 1
        }} aria-hidden="true" />
      {/* content */}
      <div className="relative z-10 w-full flex flex-col items-center px-6 py-7">
        <h3 className="w-full text-center text-2xl font-extrabold font-serif mb-2 flex items-center justify-center gap-2"
          style={{
            color: "#e7f5fd",
            textShadow: "0 3px 16px #218dda99,0 1px 2px #000a"
          }}>
          <span role="img" aria-hidden="true">🐾</span>
          Добро пожаловать в клуб собачников Калабрии!
        </h3>
        <p className="text-base font-medium text-center mb-2" style={{ color: "#eafaff", textShadow: "0 1px 10px #21a1df88" }}>
          Если вы готовы к этому симбиозу хаоса и итальянского шарма — присоединяйтесь!
        </p>
      </div>
    </div>
    <p className="text-center text-lg font-bold mt-8">P.S. А ваш пёс уже учит итальянские ругательства? 😉</p>
  </div>
);

export default DogLifeArticleRu;
