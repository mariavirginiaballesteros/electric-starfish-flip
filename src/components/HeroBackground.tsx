"use client";

import React, { useState, useEffect } from 'react';

const images = [
  {
    // Drone sobrevolando cultivo (Tecnología aérea)
    url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=2000",
    alt: "Monitoreo de cultivos con Drones"
  },
  {
    // Tablet y análisis de datos en el campo (Agricultura de precisión)
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000",
    alt: "Gestión de Datos y Agricultura Digital"
  },
  {
    // Operador de drone en campo (Robótica)
    url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=2000",
    alt: "Tecnología de Drones en Acción"
  },
  {
    // Maquinaria moderna/Cosechadora (Tecnología de fierros)
    url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=2000",
    alt: "Maquinaria Agrícola de Alta Tecnología"
  },
  {
    // Concepto Agrotech/Invernadero inteligente (Innovación)
    url: "https://images.unsplash.com/photo-1574943320219-55edeb7035ce?auto=format&fit=crop&q=80&w=2000",
    alt: "Innovación y Robótica en Agro"
  }
];

const HeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>
      ))}
      {/* Overlay potente para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}} />
    </div>
  );
};

export default HeroBackground;