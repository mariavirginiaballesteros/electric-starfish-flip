"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trophy, Heart, Users2, Sparkles, ArrowRight, Lightbulb, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Incentivos = () => {
  const pillars = [
    {
      title: "Reconocimiento de Elite",
      desc: "Transformamos el logro individual en una celebración colectiva que refuerza el sentido de pertenencia.",
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Aprendizaje Exponencial",
      desc: "Integramos dinámicas de crecimiento personal y profesional en entornos que inspiran nuevas perspectivas.",
      icon: Lightbulb,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Impulso y Momentum",
      desc: "Diseñamos el catalizador emocional que su equipo necesita para superar los próximos grandes desafíos.",
      icon: Rocket,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section con Imagen de Fondo Premium */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=90&w=2000" 
              alt="Luxury Incentive Destination" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6 text-sm font-bold backdrop-blur-sm">
                <Trophy size={16} />
                VIAJES DE INCENTIVO
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                El premio es el viaje. <br />
                <span className="text-amber-400">El activo es el equipo.</span>
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                Diseñamos experiencias de alto impacto emocional que no solo reconocen el éxito, sino que lo multiplican a través de la inspiración y el aprendizaje.
              </p>
              <Link to="/contacto">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-10 h-14 shadow-lg shadow-amber-500/20 transition-all hover:scale-105">
                  Diseñar una Experiencia
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">
                  Más que un destino, <br />
                  <span className="text-gray-400">un motor de crecimiento.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    En Coovaeco entendemos que el verdadero motor de una empresa es su gente. Un viaje de incentivo no es un gasto, es una inversión estratégica en la cultura y el futuro de su organización.
                  </p>
                  <p>
                    Nuestras experiencias están diseñadas para romper la rutina y conectar a las personas con su propósito. Combinamos destinos exclusivos con dinámicas que fomentan la cohesión, el liderazgo y el deseo de seguir alcanzando la excelencia.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Curaduría de Experiencias</p>
                    <p className="text-sm text-gray-500">Momentos únicos diseñados para perdurar en la memoria.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522158634235-47a056dc41fa?auto=format&fit=crop&q=90&w=1200" 
                    alt="Premium Team Experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Impacto que trasciende el viaje</h2>
              <p className="text-gray-500 text-lg">
                Nuestra metodología se basa en tres pilares fundamentales para garantizar el retorno de su inversión en capital humano.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <div key={i} className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-amber-500/30 hover:shadow-xl transition-all duration-500">
                  <div className={`w-16 h-16 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <p.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Trust Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Resultados que impulsan su negocio.</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-5xl font-black text-amber-400 mb-2">95%</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Fidelización</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-amber-400 mb-2">+20%</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Productividad</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-amber-400 mb-2">100%</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Personalizado</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-amber-400 mb-2">76</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Años de Experiencia</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=90&w=1200" 
                  alt="Team Building Success" 
                  className="w-full h-full object-cover"
                />
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