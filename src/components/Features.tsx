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
    description: "La garantía de una cooperativa líder con 76 años de trayectoria impecable.",
    icon: ShieldCheck
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Por qué Coovaeco es tu socio estratégico</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              No somos una agencia de viajes tradicional. Somos facilitadores de conocimiento y puentes hacia la innovación global.
            </p>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-blue-100/70">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Innovación Agro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-primary font-bold text-4xl">76</p>
              <p className="text-primary/80 font-medium">Años de Trayectoria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;