interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 px-4 py-4 sm:px-6 sm:py-6 ${className ?? ""}`}>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">МеталлСтрой</div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <a
            href="#portfolio"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm"
          >
            Работы
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm"
          >
            Заявка
          </a>
          <a
            href="tel:+375445978999"
            className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm font-bold"
          >
            +375 (44) 597-89-99
          </a>
        </nav>
      </div>
    </header>
  );
}