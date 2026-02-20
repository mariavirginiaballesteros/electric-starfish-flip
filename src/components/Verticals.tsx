"use client";

import React from 'react';
import { Cpu, Building2, Trophy } from 'lucide-react';

const verticals = [
  {
    title: "Viajes Técnicos",
    subtitle: "Inmersión Agrotech",
    description: "Programas 100% enfocados en la vanguardia tecnológica global.",
    icon: Cpu
  },
  {
    title: "Corporativos",
    subtitle: "Benchmarking Real",
    description: "Soluciones integrales para empresas y cooperativas líderes.",
    icon: Building2
  },
  {
    title: "Incentivos",
    subtitle: "Experiencias Elite",
    description: "Diseñados para motivar y fidelizar fuerzas de ventas.",
    icon: Trophy
  }
];

const Verticals = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 narrative-bar">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 dot-green">Viajar con Propósito</h2>
          <p className="text-narrative-subtitle">Tres ejes estratégicos de transformación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {verticals.map((v, i) => (
            <div key={i} className="group">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-1 bg-accent-yellow group-hover:w-20 transition-all duration-500"></div>
                <v.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-secondary text-xs font-bold tracking-widest uppercase mb-4">{v.subtitle}</p>
              <p className="text-gray-500 leading-relaxed font-light">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;