import React, { useState } from "react";
import "../Styles/ModernSlider.css";

const images = [
    { src: "/Images/img.webp", caption: "Classic Living" },
    { src: "/Images/img.webp", caption: "Royal Bedroom" },
    { src: "/Images/img.webp", caption: "Nature Home" },
    { src: "/Images/img.webp", caption: "Luxury Lounge" },
    { src: "/Images/img.webp", caption: "Modern Interior" },
];

export default function ModernSlider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <div className="ourWork">
                <h1>Our <span>Work</span></h1>
            </div>
            <button className="arrow left" onClick={prevSlide}>
                ❮
            </button>

            <div className="slider">
                {images.map((img, i) => {
                    let position = "hidden";

                    const left2 = (index - 2 + images.length) % images.length;
                    const left1 = (index - 1 + images.length) % images.length;
                    const right1 = (index + 1) % images.length;
                    const right2 = (index + 2) % images.length;

                    if (i === index) position = "center";
                    else if (i === left1) position = "left1";
                    else if (i === right1) position = "right1";
                    else if (i === left2) position = "left2";
                    else if (i === right2) position = "right2";

                    return (
                        <div key={i} className={`slide ${position}`}>
                            <img src={img.src} alt={img.caption} />
                            {position === "center" && <p className="caption">{img.caption}</p>}
                        </div>
                    );
                })}
            </div>

            <button className="arrow right" onClick={nextSlide}>
                ❯
            </button>
        </div>
    );
}
