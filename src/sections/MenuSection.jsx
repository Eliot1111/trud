import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { photos } from "../data/photos.js";
import { menuCategories } from "../data/menuItems.js";

export function MenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const activeCategory = useMemo(
    () => menuCategories.find((category) => category.id === activeCategoryId),
    [activeCategoryId],
  );

  return (
    <section className="section menu-section">
      <div className="menu-section__intro">
        <h2>Меню как витрина</h2>
        <p>
          Небольшой набор любимого: кофе, слоёная выпечка, завтраки и сезонные
          вещи, которые хочется забрать с собой в тёплый день.
        </p>
      </div>

      <div className="menu-section__layout">
        <div className="menu-board">
          <div className="menu-board__tabs" role="tablist" aria-label="Категории меню">
            {menuCategories.map((category) => (
              <button
                className="menu-board__tab"
                data-active={category.id === activeCategoryId}
                key={category.id}
                type="button"
                role="tab"
                aria-selected={category.id === activeCategoryId}
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="menu-board__content"
              key={activeCategory.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="menu-board__note">{activeCategory.note}</p>
              <div className="menu-board__items">
                {activeCategory.items.map((item, index) => (
                  <article className="menu-item" key={item.name}>
                    <span className="menu-item__number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <strong>{item.price}</strong>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <figure className="menu-section__vitrine">
          <img src={photos.pastry.src} alt={photos.pastry.alt} />
        </figure>
      </div>
    </section>
  );
}
