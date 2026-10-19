import React, { useEffect } from "react";

// Fullscreen image viewer. `index` is the open image (null = closed).
function Lightbox({ images, index, onChange, onClose }) {
  const open = index !== null && index !== undefined;
  const count = images.length;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open, index, count, onChange, onClose]);

  if (!open) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <img className="lightbox__image" src={images[index]} alt="" onClick={(e) => e.stopPropagation()} />
      <button type="button" className="lightbox__button lightbox__close" aria-label="Close" onClick={onClose}>
        <i className="fas fa-times" />
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox__button lightbox__prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + count) % count);
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            type="button"
            className="lightbox__button lightbox__next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % count);
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
          <p className="lightbox__counter">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>
  );
}

export default Lightbox;
