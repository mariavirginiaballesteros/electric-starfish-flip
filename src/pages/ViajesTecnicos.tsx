"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripsSection from '@/components/TripsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';

const ViajesTecnicos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="bg-primary py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30 mb-6 text-sm font-bold">
              <Lightbulb size={16} />
              INNOVACIÓN PURA
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Viajes Técnicos</h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Lideramos expediciones estratégicas a los epicentros de la innovación global. No diseñamos viajes; decodificamos el futuro del agro para convertirlo en rentabilidad inmediata para su empresa.
            </p>
          </div>
        </section>

        <TripsSection />

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">¿Buscas una misión a medida?</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Desarrollamos itinerarios específicos para grupos de productores, cooperativas o instituciones que buscan resolver desafíos puntuales.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10">
              Consultar por Viajes Grupales
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViajesTecnicos;