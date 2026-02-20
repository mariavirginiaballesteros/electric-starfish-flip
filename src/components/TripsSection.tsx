"use client";

import React from 'react';
import TripCard from './TripCard';

const TripsSection = () => {
  const trips = [
    {
      title: "CHINA 2025",
      slogan: "INNOVACIÓN SIN LÍMITES",
      image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?auto=format&fit=crop&q=90&w=1200",
      purpose: "Una inmersión profunda en el ecosistema tecnológico más acelerado del mundo. Desde la robótica agrícola hasta las Smart Cities que definen el futuro.",
      highlights: [
        "Visitas a Huawei, DJI y Alibaba",
        "Zonas de demostración de Agri-Tech",
        "Infraestructura y Logística Global",
        "Encuentros con líderes de industria"
      ],
      tag: "INSCRIPCIÓN ABIERTA"
    }
  ];

  return (
    <section className="py-24 -mt-24 relative z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </section>
  );
};

export default TripsSection;