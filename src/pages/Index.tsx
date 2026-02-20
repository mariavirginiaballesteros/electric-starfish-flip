"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Verticals from '@/components/Verticals';
import ScrollingPhrases from '@/components/ScrollingPhrases';
import TripsSection from '@/components/TripsSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Verticals />
        <ScrollingPhrases />
        <TripsSection />
        <Features />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;