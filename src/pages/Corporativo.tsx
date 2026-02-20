"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Target, Globe, BarChart3 } from 'lucide-react';

const Corporativo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="bg-emerald-900 py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6 text-sm font-bold">
              <Building2 size={16} />
              GESTIÓN EMPRESARIAL
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Viajes Corporativos</h1>
            <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed">
              Logística de precisión para empresas que no se detienen. Optimizamos sus viajes de negocios para que cada kilómetro recorrido sea una inversión en crecimiento.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <Target className="text-emerald-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Benchmarking Global</h3>
                <p className="text-gray-600">Analizamos las mejores prácticas de la industria en tiempo real.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <Globe className="text-emerald-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Red de Contactos</h3>
                <p className="text-gray-600">Acceso a ferias, congresos y centros de negocios internacionales.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <BarChart3 className="text-emerald-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Optimización de Costos</h3>
                <p className="text-gray-600">Gestión eficiente de presupuestos corporativos con tarifas exclusivas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporativo;