"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-4xl narrative-bar">
          <div className="mb-6">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase">
              Estrategia Narrativa 2026
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-4 leading-none dot-green">
            COOVAECO
          </h1>
          
          <h2 className="text-xl lg:text-3xl text-white/90 font-light tracking-[0.15em] mb-12 uppercase leading-tight">
            Hacia una nueva forma de comunicar <br className="hidden md:block" /> los viajes técnicos
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/viajes-tecnicos" className="w-full sm:w-auto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-12 h-16 text-lg group w-full">
                EXPLORAR EXPEDICIONES
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-12 h-16 text-lg w-full tracking-widest">
                CONTACTO
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element from the slide */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:block">
        <div className="text-right">
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase">Innovación • Liderazgo • Futuro</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;