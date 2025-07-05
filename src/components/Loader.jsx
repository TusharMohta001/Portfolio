import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate loading completion and start animation
    
  let interval = setInterval(() => {
    setCount((prev) => {
      if (prev >= 100) {
        gsap.to(loaderRef.current, {
          duration: 1,
          ease: "power1.inOut",
          y:-2000,
          delay:0.5,
          onComplete: onComplete,
        });
        clearInterval(interval);
        return 100;
      }
      return prev + Math.floor(Math.random() * 2.5) + 1;;
    });
  }, 50); // 5000ms / 100 = 50ms per increment

  return () => clearInterval(interval);
  }, [onComplete]);

 


  
return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50"
    >
        <div className="flex flex-col items-center justify-center animate-pulse ">
            <h1 className="text-white text-[3vh] select-none"> Welcome To My Portfolio</h1>
        </div>
        <h1 id="loading" className=" absolute bottom-0 right-[40px] text-white text-[100px]">{count}%</h1>
    </div>
  );
};

export default Loader;
