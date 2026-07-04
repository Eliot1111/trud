export function PhotoFrame({ photo, className = "", index = 0 }) {
  return (
    <figure className={`photo-frame ${className}`} data-index={index}>
      <img src={photo.src} alt={photo.alt} />
    </figure>
  );
}
