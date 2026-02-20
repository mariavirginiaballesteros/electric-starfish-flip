"use client";

import React from 'react';

const AboutHistory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Nuestra Esencia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent-yellow p-10 rounded-2xl shadow-xl hidden md:block">
              <p className="text-primary font-black text-6xl leading-none">100</p>
              <p className="text-primary/80 font-bold text-sm uppercase tracking-widest mt-2">Años de <br/>Confianza</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Nacidos en el campo, <br />
              <span className="text-gray-400">proyectados al mundo.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Coovaeco nació hace un siglo con una misión clara: ser el puente entre el productor y las oportunidades. Como parte fundamental del ecosistema cooperativo argentino, nuestra identidad está forjada en la transparencia y el compromiso mutuo.
              </p>
              <p>
                Hoy, esa misma esencia nos impulsa a liderar la transformación digital del agro. Entendemos que la competitividad ya no depende solo de la tierra, sino del conocimiento y la tecnología aplicada.
              </p>
              <p className="font-bold text-primary italic border-l-4 border-secondary pl-6">
                "Nuestra historia no es lo que hicimos, sino la base sólida sobre la que construimos el futuro de nuestros clientes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;