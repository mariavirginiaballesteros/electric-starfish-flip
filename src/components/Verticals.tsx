"use client";

import React from 'react';
import { Cpu, Building2, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const verticals = [
  {
    title: "Viajes Técnicos",
    description: "Programas de inmersión 100% enfocados en la vanguardia tecnológica y agrotech global.",
    icon: Cpu,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Viajes Corporativos",
    description: "Soluciones integrales para empresas y cooperativas que buscan benchmarking real y estratégico.",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Viajes de Incentivo",
    description: "Experiencias diseñadas para motivar y fidelizar fuerzas de ventas y productores clave.",
    icon: Trophy,
    color: "bg-amber-50 text-amber-600"
  }
];

const Verticals = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Viajar con Propósito</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tres ejes estratégicos diseñados para potenciar la productividad y el liderazgo de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-2">
                <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <v.icon size={28} />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </CardContent>
              <div className="h-1.5 w-0 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;