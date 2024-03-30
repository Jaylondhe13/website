import React from 'react';
import './Gallery.css'; // Import CSS for styling

const Gallery = ({ images }) => {
    return (
        <div className="gallery-container">
            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={image.id}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
