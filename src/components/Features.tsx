"use client";

import React from 'react';
import { CheckCircle2, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Curaduría Técnica",
    description: "Programas sin distracciones enfocados exclusivamente en el sector agropecuario y su evolución.",
    icon: CheckCircle2
  },
  {
    title: "Networking de Elite",
    description: "Conexión directa con los decisores en los centros de innovación global más importantes.",
    icon: Users
  },
  {
    title: "Respaldo y Seguridad",
    description: "La garantía de una cooperativa líder con un siglo de trayectoria impecable.",
    icon: ShieldCheck
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Por qué Coovaeco es tu socio estratégico</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              No somos una agencia de viajes tradicional. Somos facilitadores de conocimiento y puentes hacia la innovación global.
            </p>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{f.title}</h4>
                    <p className="text-blue-100/70">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Contenedor de Frase de Marca */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/5 to-white/5 border border-white/10 flex flex-col items-center justify-center p-12 relative overflow-hidden group">
              {/* Elementos decorativos de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-yellow/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
              
              {/* Frase de Marca */}
              <div className="relative z-10 space-y-4">
                <span className="text-secondary font-mono text-sm tracking-[0.3em] block mb-4 opacity-60">BRAND_MANIFESTO</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter italic">
                  EL <span className="text-secondary">CONOCIMIENTO</span> ES LA ÚNICA VENTAJA <span className="text-accent-yellow">COMPETITIVA</span> REAL.
                </h3>
                <div className="h-1 w-24 bg-secondary mt-8 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>

              {/* Decoración técnica */}
              <div className="absolute top-8 left-8 font-mono text-[10px] text-white/20 space-y-1">
                <p>SYS_STATUS: ACTIVE</p>
                <p>LOC: GLOBAL_NETWORK</p>
              </div>
            </div>

            {/* Badge de Trayectoria Actualizado */}
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hidden md:block transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-primary font-black text-5xl leading-none">100</p>
              <p className="text-primary/80 font-bold text-sm uppercase tracking-widest mt-2">Años de Historia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;