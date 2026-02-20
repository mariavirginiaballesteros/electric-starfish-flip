"use client";

import React from 'react';
import { Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface TripCardProps {
  title: string;
  slogan: string;
  image: string;
  purpose: string;
  highlights: string[];
  tag: string;
}

const TripCard = ({ title, slogan, image, purpose, highlights, tag }: TripCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row group">
      <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-xs shadow-lg">
          {tag}
        </div>
      </div>
      
      <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-secondary font-bold uppercase tracking-wider text-xs">{slogan}</p>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-secondary pl-4 bg-gray-50 py-4 rounded-r-xl">
          "{purpose}"
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-secondary/10 p-1 rounded">
                <Zap size={14} className="text-secondary" />
              </div>
              <span className="text-sm text-gray-700 font-medium">{h}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex gap-4 text-gray-400 text-xs font-bold">
            <span className="flex items-center gap-1"><Calendar size={16} /> 2025</span>
            <span className="flex items-center gap-1"><MapPin size={16} /> GLOBAL</span>
          </div>
          <Link to="/contacto">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold shadow-md">
              Ver Itinerario
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;