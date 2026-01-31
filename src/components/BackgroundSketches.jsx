"use client";

import React, { useState } from "react";
import "../Styles/BackgroundSketches.css";

import apple from "../assets/sketches/d1.png";
import banana from "../assets/sketches/d2.png";
import salad from "../assets/sketches/d3.png";
import water from "../assets/sketches/d4.png";
import dumbbell from "../assets/sketches/d5.png";
import avocado from "../assets/sketches/d6.png";
import apple1 from "../assets/sketches/d7.png";
import banana1 from "../assets/sketches/d8.png";
import salad1 from "../assets/sketches/d9.png";
import water1 from "../assets/sketches/d10.png";
import dumbbell1 from "../assets/sketches/d11.png";
import avocado1 from "../assets/sketches/d12.png";

const images = [apple, banana, salad, water, dumbbell, avocado,apple1, banana1, salad1, water1, dumbbell1, avocado1];

function generateSketches(count) {
  return Array.from({ length: count }).map(() => ({
    src: images[Math.floor(Math.random() * images.length)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));
}

const BackgroundSketches = ({ count = 15 }) => {
  const [sketches] = useState(() => generateSketches(count));

  return (
    <div className="background-sketch-container">
      {sketches.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt="health sketch"
          className="background-sketch"
          style={{
            top: item.top,
            left: item.left,
            transform: item.rotate
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSketches;
