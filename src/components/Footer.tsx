"use client";

import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/coovaeco-color.png" alt="Coovaeco" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              76 años liderando la gestión de experiencias técnicas y corporativas para el sector agroindustrial global.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link to="/viajes-tecnicos" className="hover:text-secondary transition-colors">Viajes Técnicos</Link></li>
              <li><Link to="/corporativos" className="hover:text-secondary transition-colors">Corporativos</Link></li>
              <li><Link to="/incentivos" className="hover:text-secondary transition-colors">Incentivos</Link></li>
              <li><Link to="/nosotros" className="hover:text-secondary transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex items-center gap-3"><Mail size={18} className="text-secondary" /> info@coovaeco.com</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-secondary" /> +54 11 4321-0000</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-secondary" /> Buenos Aires, Argentina</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">© 2024 Coovaeco Turismo. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-gray-400 font-medium">
            <a href="#" className="hover:text-primary">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;