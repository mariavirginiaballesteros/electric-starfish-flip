"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Target, Globe, BarChart3, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Corporativo = () => {
  const solutions = [
    {
      title: "Logística de Precisión",
      desc: "Gestionamos itinerarios complejos con la exactitud que su agenda demanda, optimizando tiempos y recursos.",
      icon: Zap,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Benchmarking Estratégico",
      desc: "Facilitamos el acceso a las mejores prácticas globales, transformando cada viaje en una oportunidad de aprendizaje corporativo.",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Alcance Global",
      desc: "Nuestra red internacional garantiza soporte y tarifas preferenciales en los principales centros de negocios del mundo.",
      icon: Globe,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Excelencia Corporativa" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6 text-sm font-bold backdrop-blur-sm">
                <Building2 size={16} />
                VIAJES CORPORATIVOS
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Donde la estrategia <br />
                <span className="text-emerald-400">encuentra el destino.</span>
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                No solo gestionamos traslados; diseñamos la infraestructura logística que permite a su empresa liderar en un mercado global sin fronteras.
              </p>
              <Link to="/contacto">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full px-10 h-14">
                  Hablar con un Especialista
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">
                  Su empresa no se detiene. <br />
                  <span className="text-gray-400">Nosotros tampoco.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    En el mundo corporativo actual, el tiempo es el activo más escaso. En Coovaeco, entendemos que un viaje de negocios exitoso es aquel que ocurre sin fricciones, permitiendo que su equipo se enfoque exclusivamente en sus objetivos.
                  </p>
                  <p>
                    Con más de 70 años de experiencia, hemos perfeccionado el arte de la logística corporativa, combinando tecnología de vanguardia con un servicio personalizado que anticipa cada necesidad.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Respaldo Institucional</p>
                    <p className="text-sm text-gray-500">Garantía de cumplimiento y seguridad en cada operación.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Equipo Corporativo Tecnológico" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Soluciones a la medida de su ambición</h2>
              <p className="text-gray-500 text-lg">
                Desarrollamos programas integrales que cubren todas las aristas de la movilidad empresarial moderna.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((s, i) => (
                <div key={i} className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500">
                  <div className={`w-16 h-16 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <s.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Eficiencia que se traduce en resultados.</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-5xl font-black text-emerald-400 mb-2">24/7</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Soporte Global</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-emerald-400 mb-2">+500</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Empresas Confían</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-emerald-400 mb-2">15%</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Ahorro Promedio</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-emerald-400 mb-2">100%</p>
                    <p className="text-blue-100/60 font-medium uppercase tracking-wider text-xs">Trazabilidad</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Networking Global" 
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

export default Corporativo;