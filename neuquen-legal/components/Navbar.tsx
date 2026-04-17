'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center text-on-primary">
        <Link href="/" className="text-2xl font-headline italic">Neuquén Legal</Link>
        <div className="space-x-8 font-headline">
          <Link href="#expertise">Áreas de Especialización</Link>
          <Link href="#contact" className="bg-tertiary-fixed text-on-tertiary-fixed px-6 py-2 uppercase text-xs tracking-widest">Consultas</Link>
        </div>
      </div>
    </motion.nav>
  );
}