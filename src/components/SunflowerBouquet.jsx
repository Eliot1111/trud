import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const flowers = [
  { x: 50, y: 14, size: 0.94, rotate: -14, stem: -22, length: 190 },
  { x: 36, y: 24, size: 0.76, rotate: 15, stem: -34, length: 158 },
  { x: 68, y: 27, size: 0.72, rotate: -2, stem: 22, length: 162 },
  { x: 28, y: 41, size: 0.66, rotate: -20, stem: -44, length: 130 },
  { x: 75, y: 43, size: 0.7, rotate: 20, stem: 42, length: 134 },
  { x: 52, y: 38, size: 0.8, rotate: 6, stem: 0, length: 142 },
];

const petals = Array.from({ length: 18 }, (_, index) => index);

function Sunflower({ flower }) {
  return (
    <span
      className="sunflower-bouquet__flower"
      style={{
        "--flower-x": `${flower.x}%`,
        "--flower-y": `${flower.y}%`,
        "--flower-size": flower.size,
        "--flower-rotate": `${flower.rotate}deg`,
      }}
    >
      {petals.map((petal) => (
        <span
          className="sunflower-bouquet__petal"
          style={{ "--petal": petal }}
          key={petal}
        />
      ))}
      <span className="sunflower-bouquet__center" />
    </span>
  );
}

export function SunflowerBouquet() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 70, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 70, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className="sunflower-bouquet"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      style={{ rotateX, rotateY }}
      animate={{ y: [0, -13, 0], rotate: [-1.4, 1.6, -1.4] }}
      transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="sunflower-bouquet__shadow" />
      {flowers.map((flower, index) => (
        <span
          className="sunflower-bouquet__stem"
          style={{
            "--stem-left": `${flower.x}%`,
            "--stem-angle": `${flower.stem}deg`,
            "--stem-length": `${flower.length}px`,
          }}
          key={`stem-${index}`}
        />
      ))}
      {flowers.map((flower, index) => (
        <Sunflower flower={flower} key={`flower-${index}`} />
      ))}
      <span className="sunflower-bouquet__vase" />
    </motion.div>
  );
}
