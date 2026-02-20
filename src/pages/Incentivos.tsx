"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trophy, Heart, Users2, Sparkles } from 'lucide-react';

const Incentivos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="bg-amber-600 py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 mb-6 text-sm font-bold">
              <Trophy size={16} />
              FIDELIZACIÓN Y TALENTO
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Viajes de Incentivos</h1>
            <p className="text-xl text-amber-50 max-w-2xl leading-relaxed">
              Creamos experiencias memorables que fortalecen el compromiso. Diseñamos momentos que inspiran a sus equipos y consolidan sus vínculos comerciales.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                <Heart className="text-amber-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Impacto Emocional</h3>
                <p className="text-gray-600">Experiencias diseñadas para perdurar en la memoria de su equipo.</p>
              </div>
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                <Users2 className="text-amber-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Team Building</h3>
                <p className="text-gray-600">Actividades que fomentan la cohesión y el liderazgo colaborativo.</p>
              </div>
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                <Sparkles className="text-amber-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Exclusividad</h3>
                <p className="text-gray-600">Destinos y servicios premium seleccionados con el máximo detalle.</p>
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