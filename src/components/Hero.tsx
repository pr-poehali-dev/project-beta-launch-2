import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/2a9fab82-bc06-433c-984a-66928da177d5.jpg"
          alt="Навес из металла"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[5]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Краснодар и Краснодарский край</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          НАВЕСЫ<br />И МЕТАЛЛО-<br />КОНСТРУКЦИИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Изготовим и установим любые металлоконструкции под ключ — от навеса для авто до промышленных сооружений
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Бесплатный расчёт
        </a>
      </div>
    </div>
  );
}