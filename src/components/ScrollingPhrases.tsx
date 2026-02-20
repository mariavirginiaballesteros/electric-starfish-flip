"use client";

import React from 'react';

const phrases = [
  "El futuro se siembra hoy con propósito.",
  "Habitamos el lugar donde la confianza se encuentra con el hambre de innovación.",
  "La verdadera vanguardia es aquella que vuelve a casa para transformarse en progreso.",
  "Gestionar experiencias y cuidar es lo que mejor sabemos hacer.",
  "Invertir en conocimiento es la única forma de liderar el mercado."
];

const ScrollingPhrases = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...phrases, ...phrases].map((phrase, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-3xl lg:text-5xl font-bold text-white/20 uppercase tracking-widest">
              {phrase}
            </span>
            <div className="w-3 h-3 rounded-full bg-secondary mx-8"></div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />
    </section>
  );
};

export default ScrollingPhrases;