import React, { useEffect, useState } from "react";
import gsap from 'gsap';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      gsap.to('.custom-cursor', {
        opacity:0.26,
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };
    const updatePosition1 = () => {
        gsap.to('.custom-cursor', {
          opacity:0,
          duration: 0.5,
          ease: 'power2.out'
        });
    };
  


    
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseout", updatePosition1);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseout", updatePosition1);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: position.x, top: position.y, zIndex: 1, opacity: 0 }} />;
};

export default CustomCursor;
