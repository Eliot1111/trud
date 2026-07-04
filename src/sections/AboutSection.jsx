import { motion } from "framer-motion";
import { PhotoFrame } from "../components/PhotoFrame.jsx";
import { aboutPhotos } from "../data/photos.js";

export function AboutSection() {
  return (
    <section className="section about-section">
      <div className="about-section__text">
        <h2>О нас</h2>
        <div className="about-section__body">
          <p>
            «Труд» — это пекарня-кофейня на Большой Красной, где хочется
            задержаться подольше. Мы печём, варим кофе, собираем красивые
            детали вокруг себя и создаём место, в которое приятно возвращаться.
          </p>
          <p>
            Помимо кофе и выпечки, у нас можно найти предметы интерьера: уютные
            детали для дома, красивые вещи и небольшие акценты, которые делают
            пространство теплее.
          </p>
        </div>

        <div className="about-section__signature" aria-label="Особенности Труд">
          <span>кофе</span>
          <span>выпечка</span>
          <span>предметы</span>
          <span>дом</span>
        </div>
      </div>

      <div className="about-section__media">
        {aboutPhotos.map((photo, index) => (
          <motion.div
            className={`about-section__photo-wrap about-section__photo-wrap--${index + 1}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12 + index * 0.08 }}
            key={photo.src}
          >
            <PhotoFrame photo={photo} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
