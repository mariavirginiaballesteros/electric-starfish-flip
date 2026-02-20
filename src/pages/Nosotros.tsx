"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutHistory from '@/components/AboutHistory';
import AboutValues from '@/components/AboutValues';
import { ShieldCheck, Globe, Zap, Lock } from 'lucide-react';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        
        {/* Sección de Seguridad y Respaldo (Nueva) */}
        <section className="py-20 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "100 Años", desc: "De trayectoria ininterrumpida" },
                { icon: Lock, title: "Seguridad", desc: "Respaldo jurídico total" },
                { icon: Globe, title: "Red Global", desc: "Presencia en 5 continentes" },
                { icon: Zap, title: "Innovación", desc: "Tecnología aplicada al agro" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutHistory />
        <AboutValues />
        
        {/* Call to Action Final Potente */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              EL FUTURO NO SE ESPERA, <br />
              <span className="text-secondary">SE CONSTRUYE CON NOSOTROS.</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-12">
              Únase a la red de líderes que están transformando la agroindustria global con el respaldo de un siglo de experiencia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contacto" className="px-10 py-4 bg-secondary text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-secondary/20">
                Hablar con un Experto
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;