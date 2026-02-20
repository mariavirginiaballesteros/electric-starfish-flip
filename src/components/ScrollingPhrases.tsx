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
    <section className="relative py-24 bg-primary overflow-hidden border-y border-white/5">
      {/* Fondo Tecnológico: Rejilla y Scanlines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
      </div>

      {/* Contenedor de Animación */}
      <div className="relative flex whitespace-nowrap animate-scroll-fast hover:[animation-play-state:paused] cursor-default">
        {[...phrases, ...phrases].map((phrase, i) => (
          <div key={i} className="flex items-center mx-12 group">
            {/* Indicador de Datos */}
            <div className="flex flex-col mr-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] font-mono text-secondary leading-none">DATA_STREAM</span>
              <span className="text-[10px] font-mono text-white/40 leading-none">0x{i.toString(16).padStart(2, '0')}</span>
            </div>

            {/* Frase con Efecto Tech */}
            <span className="text-4xl lg:text-6xl font-black text-white/10 uppercase tracking-tighter transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {phrase}
            </span>

            {/* Separador Tecnológico */}
            <div className="flex items-center mx-12">
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50"></div>
              <div className="w-4 h-4 border border-secondary rotate-45 mx-4 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-secondary animate-pulse"></div>
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay de desenfoque en los bordes para sensación de velocidad */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-primary to-transparent z-10"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 25s linear infinite;
        }
        @keyframes pulse-tech {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}} />
    </section>
  );
};

export default ScrollingPhrases;