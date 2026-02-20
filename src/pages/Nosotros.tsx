"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutHistory from '@/components/AboutHistory';
import AboutValues from '@/components/AboutValues';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <AboutHistory />
        <AboutValues />
        
        {/* Sección de Cierre Potente */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">¿Listo para ser parte de la vanguardia?</h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto mb-12">
              Únase a las cientos de empresas y productores que ya están transformando su realidad con el respaldo de Coovaeco.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-secondary/90 transition-all">
                Contactar con un Asesor
              </a>
              <a href="/viajes-tecnicos" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Explorar Destinos
              </a>
            </div>
          </div>
          
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Nosotros;