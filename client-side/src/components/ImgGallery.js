import React from 'react';
import "./style.scss";

const ImgGallery = ({ photos }) => {
    return (
        <div className="gallery_section">
            <div className="image_gallery">
                {photos.map((photo, key) => (
                    <div id={`im_${key + 1}`} key={key} className="image_wrapper">
                        <img
                            src={`${process.env.REACT_APP_BASE_URL}/Uploads/${photo}`}
                            alt={`photo${key + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="spects">
                <h1>Tiny home in Râșnov Romacril, Romania</h1>
                <p>4 guests. 2 bedrooms . 2 beds . 1 bath</p>
                <p>
                    <i className="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
                </p>
            </div>
        </div>
    )
}

export default ImgGallery;