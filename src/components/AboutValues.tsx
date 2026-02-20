"use client";

import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const values = [
  {
    title: "Misión",
    desc: "Potenciar la rentabilidad y el conocimiento del sector agroindustrial mediante experiencias de inmersión técnica de elite.",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Visión",
    desc: "Ser el referente global en la decodificación de tendencias tecnológicas para el mercado latinoamericano.",
    icon: Eye,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "Valores",
    desc: "Integridad cooperativa, excelencia técnica, innovación constante y seguridad jurídica en cada operación.",
    icon: Award,
    color: "text-accent-yellow",
    bg: "bg-accent-yellow/10"
  }
];

const AboutValues = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className={`w-16 h-16 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <v.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;