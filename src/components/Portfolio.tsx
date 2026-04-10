import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Навес для автомобиля",
    category: "Навесы",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/f88855c5-14f4-4b94-9aca-44f64560501b.jpg",
  },
  {
    id: 2,
    title: "Кованые ворота",
    category: "Ворота",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/757e5859-8964-43ea-9947-e8789cc006bb.jpg",
  },
  {
    id: 3,
    title: "Беседка из металла",
    category: "Беседки",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/040131c1-c52e-4c60-8908-d3b76f506a04.jpg",
  },
  {
    id: 4,
    title: "Козырёк над входом",
    category: "Козырьки",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/056ce445-cebd-4c18-b0af-74d32a6aa641.jpg",
  },
  {
    id: 5,
    title: "Металлическая лестница",
    category: "Лестницы",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/b6b3ec14-e38a-4d93-a519-caec595e7677.jpg",
  },
  {
    id: 6,
    title: "Забор с коваными элементами",
    category: "Заборы",
    image: "https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/c7234044-0041-4805-be8d-020628a4c873.jpg",
  },
];

const categories = ["Все", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">Выполненные объекты</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">Наши работы</h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm uppercase tracking-wide border transition-colors duration-200 ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                  {project.category}
                </p>
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
