import { motion } from "framer-motion";
import { BrandLogo } from "../components/BrandLogo.jsx";
import { BunButton } from "../components/BunButton.jsx";
import { PhotoFrame } from "../components/PhotoFrame.jsx";
import { SunflowerBouquet } from "../components/SunflowerBouquet.jsx";
import { heroGallery } from "../data/photos.js";

export function HomeSection({ onMenuClick }) {
  return (
    <section className="section home-section">
      <div className="home-section__copy">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <BrandLogo variant="hero" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          Труд — пекарня-кофейня в сердце Казани
        </motion.h1>

        <motion.p
          className="home-section__lead"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          Место, где пахнет свежей выпечкой, кофе и тёплым утром. Заходите за
          булочкой, чашкой кофе и маленькой радостью на Большой Красной.
        </motion.p>

        <motion.div
          className="home-section__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36 }}
        >
          <BunButton onClick={onMenuClick} />
          <address>
            Большая Красная ул., 59
            <span>Вахитовский район, Казань</span>
          </address>
        </motion.div>
      </div>

      <motion.div
        className="home-section__gallery"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroGallery.map((photo, index) => (
          <PhotoFrame
            photo={photo}
            className={`home-section__photo home-section__photo--${index + 1}`}
            index={index}
            key={photo.id}
          />
        ))}
        <SunflowerBouquet />
      </motion.div>
    </section>
  );
}
