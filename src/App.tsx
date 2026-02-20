"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ViajesTecnicos from './pages/ViajesTecnicos';
import Corporativo from './pages/Corporativo';
import Incentivos from './pages/Incentivos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/viajes-tecnicos" element={<ViajesTecnicos />} />
        <Route path="/corporativo" element={<Corporativo />} />
        <Route path="/incentivos" element={<Incentivos />} />
      </Routes>
    </Router>
  );
}

export default App;