"use client";

import React from 'react';
import TripCard from './TripCard';

const trips = [
  {
    title: "INMERSIÓN AL FUTURO: China",
    slogan: "Capturando el mañana para liderar hoy.",
    image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&q=80&w=800",
    purpose: "Esta expedición técnica no es solo un recorrido; es una herramienta de precisión diseñada para el Productor 4.0.",
    highlights: [
      "Beijing: Centros de I+D y escala productiva.",
      "Hangzhou: E-commerce y logística aplicada.",
      "Shanghai: Networking con líderes tecnológicos.",
      "Estambul: Mercados estratégicos Oriente-Occidente."
    ],
    tag: "INMERSIÓN AL FUTURO: China"
  },
  {
    title: "MISIÓN AGROTECH: EE.UU.",
    slogan: "Donde el dato se convierte en el activo principal.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
    purpose: "Una inmersión profunda en el corazón de la agricultura de precisión para entender la rentabilidad por hectárea.",
    highlights: [
      "Visitas a centros líderes (Bayer, Corteva).",
      "Farm Progress Show: IA y digitalización.",
      "Networking exclusivo con productores 4.0.",
      "Análisis de rentabilidad basada en datos."
    ],
    tag: "MISIÓN AGROTECH: EE.UU."
  }
];

const TripsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Experiencias de Vanguardia</h2>
          <p className="text-gray-600">Cada viaje es una misión estratégica diseñada para transformar tu visión del negocio.</p>
        </div>
        
        <div className="space-y-12">
          {trips.map((trip, i) => (
            <TripCard key={i} {...trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;