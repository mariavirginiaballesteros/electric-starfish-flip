"use client";

import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-primary">COOVAECO</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Viajes Técnicos</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Corporativos</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Incentivos</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Nosotros</a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Contacto
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <a href="#" className="block text-base font-medium text-gray-600">Viajes Técnicos</a>
          <a href="#" className="block text-base font-medium text-gray-600">Corporativos</a>
          <a href="#" className="block text-base font-medium text-gray-600">Incentivos</a>
          <Button className="w-full bg-primary text-white rounded-full">Contacto</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;