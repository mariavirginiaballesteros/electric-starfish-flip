"use client";

import React from 'react';
import { Cpu, Building2, Trophy, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const verticals = [
  {
    title: "Inmersión Tecnológica",
    subtitle: "VIAJES TÉCNICOS",
    description: "Acceso privilegiado a los ecosistemas donde se define el futuro del agro. Decodificamos la innovación en origen para aplicarla en tu campo.",
    icon: Cpu,
    gradient: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
    iconColor: "text-blue-600"
  },
  {
    title: "Gestión Estratégica",
    subtitle: "CORPORATIVO",
    description: "Logística de precisión y benchmarking global. Optimizamos cada recurso para transformar viajes de negocios en activos de crecimiento empresarial.",
    icon: Building2,
    gradient: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-500/20",
    iconColor: "text-emerald-600"
  },
  {
    title: "Capital Humano",
    subtitle: "INCENTIVOS",
    description: "Experiencias de alto impacto emocional diseñadas para fidelizar talento y fortalecer vínculos comerciales que perduran en el tiempo.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20",
    iconColor: "text-amber-600"
  }
];

const Verticals = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Nuestra Propuesta de Valor</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Arquitectura de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Experiencias Globales</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-secondary/30 pl-6">
              No organizamos simples traslados. Estructuramos plataformas de conocimiento y relacionamiento que potencian la competitividad de tu empresa.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Elemento decorativo o botón secundario si fuera necesario */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <Card key={i} className="group relative bg-white border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${v.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-8 flex justify-between items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${v.iconColor}`}>
                    <v.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-gray-300 group-hover:text-gray-400 transition-colors">0{i + 1}</span>
                </div>
                
                <span className={`text-xs font-bold tracking-widest uppercase mb-3 block bg-clip-text text-transparent bg-gradient-to-r ${v.gradient}`}>
                  {v.subtitle}
                </span>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-gray-600 transition-all">
                  {v.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                  {v.description}
                </p>

                <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Saber más</span>
                  <ArrowUpRight size={16} className="text-secondary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;