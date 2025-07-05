import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the route changes
  }, [location]);
  
  useEffect(() => {
    gsap.to(
      '.page',
      { 
        opacity: 1, delay:0.5, duration: 2, ease: 'power4.out'
     }
    );
  }, [location]);

  return children || <Outlet />;
};

export default PageTransition;
