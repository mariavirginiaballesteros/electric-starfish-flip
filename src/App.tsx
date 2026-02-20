"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ViajesTecnicos from './pages/ViajesTecnicos';
import Corporativo from './pages/Corporativo';
import Incentivos from './pages/Incentivos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/viajes-tecnicos" element={<ViajesTecnicos />} />
        <Route path="/corporativo" element={<Corporativo />} />
        <Route path="/incentivos" element={<Incentivos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;