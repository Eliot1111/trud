import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SectionNav } from "./components/SectionNav.jsx";
import { HomeSection } from "./sections/HomeSection.jsx";
import { MenuSection } from "./sections/MenuSection.jsx";
import { AboutSection } from "./sections/AboutSection.jsx";
import { ContactsSection } from "./sections/ContactsSection.jsx";

const sectionViews = [
  { id: "home", label: "Главная", Component: HomeSection },
  { id: "menu", label: "Меню", Component: MenuSection },
  { id: "about", label: "О нас", Component: AboutSection },
  { id: "contacts", label: "Контакты", Component: ContactsSection },
];

const getSectionFromHash = () => {
  const hashId = window.location.hash.replace("#", "");
  return sectionViews.some((section) => section.id === hashId) ? hashId : "home";
};

const screenVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 34 : -34,
    filter: "blur(14px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -34 : 34,
    filter: "blur(14px)",
  }),
};

export default function App() {
  const [activeId, setActiveId] = useState(getSectionFromHash);
  const [direction, setDirection] = useState(1);
  const lastSwitch = useRef(0);
  const touchStart = useRef(null);

  const activeIndex = useMemo(
    () => sectionViews.findIndex((section) => section.id === activeId),
    [activeId],
  );

  const activeSection = sectionViews[activeIndex];
  const ActiveComponent = activeSection.Component;

  const goTo = useCallback(
    (id) => {
      const nextIndex = sectionViews.findIndex((section) => section.id === id);

      if (nextIndex === -1 || nextIndex === activeIndex) {
        return;
      }

      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveId(id);

      if (window.location.hash !== `#${id}`) {
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    [activeIndex],
  );

  const stepSection = useCallback(
    (step) => {
      const nextIndex = Math.max(0, Math.min(sectionViews.length - 1, activeIndex + step));
      goTo(sectionViews[nextIndex].id);
    },
    [activeIndex, goTo],
  );

  const handleWheel = useCallback(
    (event) => {
      const now = Date.now();

      if (Math.abs(event.deltaY) < 48 || now - lastSwitch.current < 780) {
        return;
      }

      lastSwitch.current = now;
      stepSection(event.deltaY > 0 ? 1 : -1);
    },
    [stepSection],
  );

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) {
      return;
    }

    const delta = touchStart.current - event.changedTouches[0].clientY;
    touchStart.current = null;

    if (Math.abs(delta) > 54) {
      stepSection(delta > 0 ? 1 : -1);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hashId = getSectionFromHash();
      const nextIndex = sectionViews.findIndex((section) => section.id === hashId);

      if (nextIndex !== -1 && hashId !== activeId) {
        setDirection(nextIndex > activeIndex ? 1 : -1);
        setActiveId(hashId);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeId, activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        stepSection(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        stepSection(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stepSection]);

  return (
    <div className={`app app--${activeId}`}>
      <SectionNav
        activeId={activeId}
        sections={sectionViews}
        onSelect={goTo}
      />

      <main
        className="stage"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeId}
            className="stage__screen"
            custom={direction}
            variants={screenVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActiveComponent onMenuClick={() => goTo("menu")} />
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="section-dots" aria-label="Разделы страницы">
        {sectionViews.map((section) => (
          <button
            className="section-dot"
            data-active={section.id === activeId}
            key={section.id}
            type="button"
            aria-label={section.label}
            onClick={() => goTo(section.id)}
          />
        ))}
      </div>
    </div>
  );
}
