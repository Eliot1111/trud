const mapUrl = "https://yandex.ru/maps/org/5915057857";
const mapWidgetUrl =
  "https://yandex.ru/map-widget/v1/?ll=49.137649%2C55.796623&mode=search&oid=5915057857&ol=biz&z=17";

export function ContactsSection() {
  return (
    <section className="section contacts-section">
      <div className="contacts-section__content">
        <h2>Контакты</h2>
        <p>
          Заходите за кофе, свежей выпечкой и небольшими вещами для дома.
          Мы рядом с тихими улицами Вахитовского района.
        </p>

        <div className="contact-card">
          <div className="contact-card__row">
            <span>Адрес</span>
            <strong>Большая Красная ул., 59, Вахитовский район, Казань</strong>
          </div>
          <div className="contact-card__row">
            <span>Часы</span>
            <strong>Ежедневно, 08:00–21:00</strong>
          </div>
          <div className="contact-card__row">
            <span>Как нас найти</span>
            <strong>Ориентируйтесь на тёплую витрину, полки с предметами и запах выпечки.</strong>
          </div>
        </div>

        <a className="contacts-section__map-button" href={mapUrl} target="_blank" rel="noreferrer">
          Открыть в Яндекс Картах
        </a>
      </div>

      <div className="contacts-section__visual">
        <div
          className="soft-map"
          aria-label="Карта с точкой Труд на Большой Красной, 59"
        >
          <iframe
            className="soft-map__frame"
            src={mapWidgetUrl}
            title="Труд на Яндекс Картах"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
