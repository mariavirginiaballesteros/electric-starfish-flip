"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripsSection from '@/components/TripsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const ViajesTecnicos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section Rediseñado */}
        <section className="relative h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&q=90&w=2000" 
              alt="Innovation Hub Shanghai" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
             <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/30 mb-6 text-sm font-bold backdrop-blur-sm">
                  <Lightbulb size={16} />
                  INNOVACIÓN PURA
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Viajes Técnicos
                </h1>
                <p className="text-xl text-blue-100/90 max-w-2xl leading-relaxed mb-8">
                  Lideramos expediciones estratégicas a los epicentros de la innovación global. No diseñamos viajes; decodificamos el futuro del agro para convertirlo en rentabilidad inmediata para su empresa.
                </p>
            </div>
          </div>
        </section>

        <TripsSection />

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">¿Buscas una misión a medida?</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Desarrollamos itinerarios específicos para grupos de productores, cooperativas o instituciones que buscan resolver desafíos puntuales.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-10 h-14 shadow-lg transition-transform hover:scale-105">
                Consultar por Viajes Grupales
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViajesTecnicos;