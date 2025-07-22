// components/Navbar.tsx
'use client'
import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '#Home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.href.replace('#', ''));
        if (!el) return { id: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.href, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-8 sm:px-4 flex items-center justify-between h-16">
        {/* Logo or Brand */}
        <Link href="/" className="text-2xl font-stretch-expanded font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Portfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex font-bold gap-12">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`pb-1 ${
                ( activeSection === link.href ) ? "border-b-2 border-purple-600 text-purple-600 move-border grow-animated-border" : "border-b-2 border-transparent"
              }
              ` }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-8 animate-fade-in">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-lg hover:text-purple-300 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
