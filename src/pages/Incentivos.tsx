"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trophy, Star, Heart, Sparkles } from 'lucide-react';

const Incentivos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-primary">
            <img 
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-20"
              alt="Incentivos"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Trophy className="mx-auto text-accent-yellow mb-8" size={64} />
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Viajes de Incentivo</h1>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto font-light">
              Premiamos el esfuerzo con experiencias que trascienden lo convencional y fortalecen el sentido de pertenencia.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-yellow/10 rounded-full flex items-center justify-center text-accent-yellow mx-auto mb-6">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Exclusividad</h3>
                <p className="text-gray-600">Acceso a lugares y experiencias que no están en los catálogos turísticos tradicionales.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Emoción</h3>
                <p className="text-gray-600">Diseñamos momentos que conectan emocionalmente al colaborador con la marca.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Magia</h3>
                <p className="text-gray-600">Cuidamos cada detalle para que el viaje sea una historia digna de ser contada.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Incentivos;