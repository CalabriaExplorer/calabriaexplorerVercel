
import React, { useState } from "react";
const ContactLeadForm: React.FC = () => {
  const [sended, setSended] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSended(true);
    setTimeout(() => setSended(false), 5500);
  };
  return (
    <form
      className="max-w-md w-full mx-auto bg-white/70 rounded-xl shadow px-8 pt-6 pb-7 mb-4 border border-gray-200 space-y-4 mt-6"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <h3 className="text-lg font-bold mb-1">Связаться с нами / Get in touch</h3>
      <input
        type="text"
        name="name"
        required
        placeholder="Ваше имя (name)"
        className="input input-bordered w-full border px-3 py-2 rounded mb-1"
      />
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="E-mail"
        className="input input-bordered w-full border px-3 py-2 rounded mb-1"
      />
      <textarea
        name="message"
        required
        placeholder="Ваш вопрос / Your message"
        className="textarea textarea-bordered w-full border px-3 py-2 rounded mb-1"
        rows={3}
      />
      <button
        type="submit"
        className="bg-calabria-terracotta hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        disabled={sended}
      >
        {sended ? "Спасибо, отправлено!" : "Отправить / Send"}
      </button>
      {sended && <div className="text-green-700 mt-2">Заявка отправлена! Thanks for your request.</div>}
    </form>
  );
};
export default ContactLeadForm;
