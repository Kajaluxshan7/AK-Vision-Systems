import { useState } from "react";

function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <h3 className="gallery-title">{title}</h3>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image)}
            />
            <div className="gallery-overlay">
              <span className="gallery-icon">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-caption">
              <h4>{selectedImage.alt}</h4>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
