"use client";

import React, { useState, useEffect } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2000",
    alt: "Robot Agrícola Autónomo en Campo"
  },
  {
    url: "https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?auto=format&fit=crop&q=80&w=2000",
    alt: "Drones de Precisión sobre Cultivos"
  },
  {
    url: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000",
    alt: "Tecnología de Invernadero Inteligente"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    alt: "Brazo Robótico en Laboratorio Agro"
  },
  {
    url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=2000",
    alt: "Agricultura Digital y Maquinaria Moderna"
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
      {/* Overlay para asegurar legibilidad del texto */}
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