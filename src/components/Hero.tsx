"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Inteligencia en Movimiento
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-6 text-balance">
          No cruzamos fronteras para ver el mundo. <br />
          <span className="text-secondary">Las cruzamos para traer el futuro.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          Transformamos 76 años de confianza en la inteligencia que exige el agrobusiness moderno. 
          Diseñamos experiencias donde el conocimiento técnico se convierte en rentabilidad.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg group">
            Explorar Viajes con Propósito
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
            Nuestra Metodología
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;