"use client";

import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent-yellow transition-colors duration-300">
              <Globe className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-primary">COOVAECO</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent-yellow",
                  location.pathname === link.path ? "text-secondary font-bold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 border-b-2 border-accent-yellow">
                Contacto
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-600 hover:text-accent-yellow"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary text-white rounded-full">Contacto</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;