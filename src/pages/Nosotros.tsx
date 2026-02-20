"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-primary mb-8">Nuestra Historia</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Nacimos hace 76 años en el corazón del movimiento cooperativo argentino. Desde entonces, hemos evolucionado para convertirnos en el socio estratégico de quienes lideran el campo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Innovación y Tecnología"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-accent-yellow pl-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Misión</h3>
                  <p className="text-gray-600">Facilitar el acceso al conocimiento global y la innovación para potenciar la competitividad de nuestros clientes.</p>
                </div>
                <div className="border-l-4 border-secondary pl-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Visión</h3>
                  <p className="text-gray-600">Ser el puente indiscutido entre el talento local y la vanguardia tecnológica mundial.</p>
                </div>
                <div className="border-l-4 border-primary pl-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Valores</h3>
                  <p className="text-gray-600">Confianza, transparencia, excelencia técnica y compromiso con el desarrollo sostenible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;