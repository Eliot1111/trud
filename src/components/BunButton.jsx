const seeds = Array.from({ length: 9 }, (_, index) => index);

export function BunButton({ onClick }) {
  return (
    <button className="bun-button" type="button" onClick={onClick}>
      <span className="bun-button__bun" aria-hidden="true">
        {seeds.map((seed) => (
          <span className="bun-button__seed" data-seed={seed} key={seed} />
        ))}
      </span>
      <span className="bun-button__label">Меню</span>
    </button>
  );
}
