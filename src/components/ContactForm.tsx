import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/6b1e62dc-bc70-404e-9d9b-782fd9f07174", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">Бесплатный выезд на замер</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Оставьте заявку — перезвоним за 15 минут
        </h2>
        <p className="text-neutral-600 mb-10">
          Замерщик приедет в удобное время, сделает точный расчёт и ответит на все вопросы. Бесплатно и без обязательств.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Заявка принята!</h3>
            <p className="text-neutral-600">Мы перезвоним вам в течение 15 минут</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm uppercase tracking-wide underline text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Отправить ещё
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
            {status === "error" && (
              <p className="text-red-600 text-sm">Ошибка отправки. Попробуйте ещё раз или позвоните нам.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white px-8 py-3 uppercase tracking-wide text-sm font-bold hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2 w-full md:w-fit"
            >
              {status === "loading" ? (
                <>
                  <Icon name="Loader2" size={16} className="animate-spin" />
                  Отправляем...
                </>
              ) : (
                "Получить бесплатный расчёт"
              )}
            </button>
            <p className="text-xs text-neutral-400">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        )}
      </div>
    </section>
  );
}
