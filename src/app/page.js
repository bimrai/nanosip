"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [waterIntake, setWaterIntake] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState("/assets/level1.png");

  const hydrationLevels = [
    { limit: 0, src: "/assets/level1.png" },
    { limit: 250, src: "/assets/level2.png" },
    { limit: 500, src: "/assets/level3.png" },
    { limit: 1000, src: "/assets/level4.png" },
    { limit: 1500, src: "/assets/level5.png" },
    { limit: 2000, src: "/assets/level6.png" },
  ];

  const clickSound = new Audio("/assets/button.wav");
  const iconChangeSound = new Audio("/assets/powerup.wav");

  const addWater = (amount) => {
    clickSound.play();

    setWaterIntake((prev) => {
      const newIntake = prev + amount;

      const newImage = hydrationLevels.reduce((prev, curr) =>
        newIntake >= curr.limit ? curr : prev
      ).src;

      if (newImage !== currentImageSrc) {
        iconChangeSound.play();
      }

      setCurrentImageSrc(newImage);
      return newIntake;
    });
  };

  return (
    <div className="container">
      <h1 className="title">NanoSip</h1>
      <div className="hydrated-icon">
        <Image
          className="nanodrop"
          src={currentImageSrc}
          alt="NanoSip Logo"
          width={300}
          height={300}
        />
        <p className="intake-text">{waterIntake}ml</p> {/* Display intake */}
      </div>

      <div className="container-box">
        {[50, 100, 150, 250].map((amount) => (
          <div key={amount} className="image-button" onClick={() => addWater(amount)}>
            <p className="button-text">{amount}ml</p>
            <Image className="buttons" src="/assets/options.png" width={200} height={200} alt={`${amount}ml`} />
          </div>
        ))}
      </div>
    </div>
  );
}
