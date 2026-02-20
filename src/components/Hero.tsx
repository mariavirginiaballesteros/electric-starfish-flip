"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-48">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30 mb-8 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-yellow"></span>
            </span>
            INTELIGENCIA EN MOVIMIENTO
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 text-balance leading-[1.1]">
            No cruzamos fronteras para ver el mundo. <br />
            <span className="text-secondary">Las cruzamos para traer el </span>
            <span className="text-accent-yellow underline decoration-accent-yellow/30 underline-offset-8">futuro del campo a nuestro suelo</span>.
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl">
            Transformamos 76 años de confianza en la inteligencia que exige el agrobusiness moderno. 
            Diseñamos experiencias donde el conocimiento técnico se convierte en rentabilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link to="/viajes-tecnicos" className="w-full sm:w-auto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10 h-16 text-lg group w-full">
                Explorar Viajes
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/nosotros" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full px-10 h-16 text-lg w-full">
                Nuestra Metodología
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;