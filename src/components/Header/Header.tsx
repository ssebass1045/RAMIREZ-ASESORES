'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/equipo', label: 'Equipo' },
    { href: '/blog', label: 'Blog' },
    { href: '/preguntas-frecuentes', label: 'FAQ' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Ramírez y Asesores SAS"
              width={180}
              height={60}
              priority
            />
          </Link>

          {/* Menú Desktop */}
          <div className={styles.navMenu}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botón CTA Desktop */}
          <div className={styles.ctaDesktop}>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar Asesoría
            </Link>
          </div>

          {/* Menú Mobile */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Menú Mobile Desplegable */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contacto" 
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Asesoría
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;