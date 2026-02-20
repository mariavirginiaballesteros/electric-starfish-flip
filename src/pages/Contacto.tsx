"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("¡Mensaje enviado con éxito! Nos contactaremos pronto.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h1 className="text-5xl font-bold text-primary mb-8">Hablemos de tu próximo paso</h1>
                <p className="text-xl text-gray-600 mb-12">
                  Estamos listos para diseñar la experiencia que tu empresa necesita. Completa el formulario y un especialista se pondrá en contacto.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-accent-yellow/10 rounded-full flex items-center justify-center text-accent-yellow">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-lg font-bold text-primary">info@coovaeco.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="text-lg font-bold text-primary">+54 11 4321-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Oficina Central</p>
                      <p className="text-lg font-bold text-primary">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nombre</label>
                      <Input placeholder="Tu nombre" required className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Empresa</label>
                      <Input placeholder="Nombre de tu empresa" className="bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Corporativo</label>
                    <Input type="email" placeholder="email@empresa.com" required className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Mensaje</label>
                    <Textarea placeholder="¿En qué podemos ayudarte?" className="min-h-[150px] bg-white" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl text-lg font-bold group">
                    Enviar Mensaje
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;