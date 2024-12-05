"use client";

import { useEffect, useState } from "react";

const createFireFly = () => {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
  };
};

function FireFliesBackground() {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodically = () => {
      const newFireFly = createFireFly();
      setFireFlies((prevFireFlies) => [
        ...prevFireFlies.slice(-14),
        newFireFly,
      ]);
    };

    const interval = setInterval(addFireFlyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
      {fireFlies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full bg-accent w-[10px] h-[10px] bg-firefly-radial"
          style={{
            top: firefly.top,
            left: firefly.left,
            animation: `move ${firefly.animationDuration} infinite alternate`,
            filter: "blur(4px)",
          }}
        ></div>
      ))}
    </div>
  );
}

export default FireFliesBackground;
