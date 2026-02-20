"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      {/* Fondo con rejilla técnica */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/30 mb-8 text-sm font-bold backdrop-blur-sm">
          <ShieldCheck size={18} />
          RESPALDO Y TRAYECTORIA
        </div>
        <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
          UN SIGLO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent-yellow">DE EVOLUCIÓN.</span>
        </h1>
        <p className="text-xl lg:text-2xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
          No somos solo una agencia; somos el brazo estratégico de la innovación agroindustrial, nacidos del corazón del movimiento cooperativo.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;