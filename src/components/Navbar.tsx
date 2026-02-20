"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Viajes Técnicos", path: "/viajes-tecnicos" },
    { name: "Corporativos", path: "/corporativos" },
    { name: "Incentivos", path: "/incentivos" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/coovaeco-color.png" 
              alt="Coovaeco Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-secondary",
                  location.pathname === link.path ? "text-primary border-b-2 border-secondary" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold shadow-md hover:shadow-lg transition-all">
                Contacto
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-bold py-2",
                location.pathname === link.path ? "text-secondary" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary text-white rounded-full h-12 text-lg font-bold mt-4">Contacto</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;