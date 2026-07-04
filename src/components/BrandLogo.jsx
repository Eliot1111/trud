const logoLetters = [
  { value: "Т", tone: "coffee" },
  { value: "р", tone: "caramel" },
  { value: "у", tone: "cocoa" },
  { value: "д", tone: "sun" },
];

export function BrandLogo({ variant = "hero" }) {
  return (
    <span className={`brand-logo brand-logo--${variant}`} aria-label="Труд">
      <span className="brand-logo__letters" aria-hidden="true">
        {logoLetters.map((letter, index) => (
          <span
            className={`brand-logo__letter brand-logo__letter--${letter.tone}`}
            data-index={index}
            key={letter.value}
          >
            {letter.value}
          </span>
        ))}
      </span>
      <span className="brand-logo__underline" aria-hidden="true" />
    </span>
  );
}
