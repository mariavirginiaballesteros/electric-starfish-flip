"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Briefcase, BarChart3, Globe2 } from 'lucide-react';

const Corporativos = () => {
  const services = [
    { title: "Gestión de Cuentas", icon: Briefcase, desc: "Optimización de presupuestos y reportes detallados de inversión en viajes." },
    { title: "Benchmarking Global", icon: Globe2, desc: "Visitas a empresas líderes del sector para comparar procesos y tecnologías." },
    { title: "Eventos y Congresos", icon: BarChart3, desc: "Logística integral para la participación en los eventos más importantes del mundo." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent-yellow mb-8">
                  <Building2 size={32} />
                </div>
                <h1 className="text-5xl font-bold text-primary mb-6">Soluciones Corporativas</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Acompañamos a empresas y cooperativas en su expansión y profesionalización a través de una gestión de viajes estratégica y eficiente.
                </p>
                <div className="h-1 w-24 bg-accent-yellow mb-12"></div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {services.map((s, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary transition-colors">
                    <div className="flex gap-6">
                      <div className="text-secondary"><s.icon size={28} /></div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                        <p className="text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporativos;