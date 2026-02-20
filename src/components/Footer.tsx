"use client";

import React from 'react';
import { Globe, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Globe className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-primary">COOVAECO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Líderes en la gestión de experiencias técnicas y corporativas para el sector agroindustrial.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-secondary transition-colors">Viajes Técnicos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Corporativos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Incentivos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Próximas Salidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Mail size={16} /> info@coovaeco.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +54 11 4321-0000</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Buenos Aires, Argentina</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2024 Coovaeco Turismo. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-primary">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default Footer;