import { BrandLogo } from "./BrandLogo.jsx";

export function SectionNav({ sections, activeId, onSelect }) {
  return (
    <header className="site-header">
      <button
        className="site-header__brand"
        type="button"
        aria-label="На главную"
        onClick={() => onSelect("home")}
      >
        <BrandLogo variant="nav" />
      </button>

      <nav className="site-nav" aria-label="Основные разделы">
        {sections.map((section) => (
          <button
            className="site-nav__item"
            data-active={section.id === activeId}
            data-section={section.id}
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <a
        className="site-header__map-link"
        href="https://yandex.ru/maps/org/5915057857"
        target="_blank"
        rel="noreferrer"
      >
        Казань
      </a>
    </header>
  );
}
