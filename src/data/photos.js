export const photos = {
  pastry: {
    src: new URL("../../photos/XXXL (1).webp", import.meta.url).href,
    alt: "Витрина с булочками, слойками и сладкой выпечкой",
  },
  flowersCounter: {
    src: new URL("../../photos/XXXL (2).webp", import.meta.url).href,
    alt: "Большой букет цветов на деревянной стойке кофейни",
  },
  shelfBlue: {
    src: new URL("../../photos/XXXL (3).webp", import.meta.url).href,
    alt: "Полка с предметами интерьера рядом с голубой плиткой",
  },
  objectsShelf: {
    src: new URL("../../photos/XXXL (4).webp", import.meta.url).href,
    alt: "Полки с небольшими авторскими предметами и декором",
  },
  homeObjects: {
    src: new URL("../../photos/XXXL (5).webp", import.meta.url).href,
    alt: "Тепло подсвеченные полки с посудой, украшениями и текстилем",
  },
  plateDetail: {
    src: new URL("../../photos/XXXL (6).webp", import.meta.url).href,
    alt: "Фирменная тарелка на деревянной полке",
  },
  sunflowerRoomSmall: {
    src: new URL("../../photos/XXXL (7).webp", import.meta.url).href,
    alt: "Интерьер кофейни с подсолнухами на деревянном столе",
  },
  sunflowerRoom: {
    src: new URL("../../photos/XXXL.webp", import.meta.url).href,
    alt: "Интерьер с полками, посудой и букетом подсолнухов",
  },
};

export const heroGallery = [
  { ...photos.pastry, id: "pastry" },
  { ...photos.flowersCounter, id: "flowersCounter" },
  { ...photos.sunflowerRoomSmall, id: "sunflowerRoomSmall" },
  { ...photos.plateDetail, id: "plateDetail" },
];

export const aboutPhotos = [photos.sunflowerRoom, photos.homeObjects, photos.shelfBlue];
