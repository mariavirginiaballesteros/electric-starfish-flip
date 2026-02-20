"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-48">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/30 mb-8 backdrop-blur-md animate-fade-in relative overflow-hidden hover:bg-accent-yellow/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:border-accent-yellow/50 group cursor-default">
            {/* Efecto de brillo que pasa periódicamente */}
            <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine z-0"></div>
            
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-yellow"></span>
            </span>
            <span className="relative z-10">INTELIGENCIA EN MOVIMIENTO</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 text-balance leading-[1.1]">
            No cruzamos fronteras para ver el mundo. <br />
            <span className="text-secondary">Las cruzamos para traer el </span>
            <span className="text-accent-yellow underline decoration-accent-yellow/30 underline-offset-8">futuro del campo</span>.
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl">
            Transformamos 76 años de confianza en la inteligencia que exige el agrobusiness moderno. 
            Diseñamos experiencias donde el conocimiento técnico se convierte en rentabilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10 h-16 text-lg group w-full sm:w-auto">
              Explorar Viajes con Propósito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full px-10 h-16 text-lg w-full sm:w-auto hover:text-white font-medium">
              Nuestra Metodología
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 4s infinite linear;
        }
      `}} />
    </section>
  );
};

export default Hero;