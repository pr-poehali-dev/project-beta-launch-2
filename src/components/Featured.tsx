export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/d54c635e-7eba-4ac1-a3f4-3f4e33967090/files/c1751076-1885-4bcd-8136-064a44aacb8c.jpg"
          alt="Навес с кованными элементами"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Работаем в Краснодаре с 2010 года</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Проектируем, изготавливаем и монтируем навесы, ворота, заборы, козырьки, беседки и любые металлоконструкции — точно в срок и с гарантией.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-3xl font-bold text-neutral-900">500+</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">Готовых объектов</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">14 лет</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">На рынке</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">3 года</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">Гарантия</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">1 день</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">Выезд на замер</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Рассчитать стоимость
        </button>
      </div>
    </div>
  );
}