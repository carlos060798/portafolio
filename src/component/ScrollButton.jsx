import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Maneja el evento de desplazamiento
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Agrega un listener al evento de desplazamiento al montar el componente
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Elimina el listener al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Maneja el evento de clic del botón de scroll
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <Button
        className={`scroll-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        variant="outline"
        size="2xl"
        rounded-circle 
      >
      <h3> <i class="bi bi-arrow-up-square-fill bi-2xl"></i> </h3> 
      </Button>
    );
  };
  
  export default ScrollButton;