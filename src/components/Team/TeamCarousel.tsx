"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TeamCarousel.module.css";

// Datos del equipo (los mismos que en la página de equipo)
const teamMembers = [
  {
    id: "ra-3000",
    nombre: "RA-3000",
    cargo: "Asistente Virtual Inteligente",
    email: "gestionhumana@ramirezasesores.co",
    imagen: "/agenteia.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
    destacado: true,
    esIA: true,
  },
  {
    id: "nestor-ramirez",
    nombre: "Néstor Augusto Ramírez Ospina",
    cargo: "CEO",
    email: "gerencia@ramirezasesores.co",
    imagen: "/team/nestor-ramirez.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
    destacado: true,
  },
  {
    id: "viviana-vargas",
    nombre: "Viviana María Vargas Franco",
    cargo: "Coordinadora Administrativa y Gestión Humana",
    email: "gestionhumana@ramirezasesores.co",
    imagen: "/team/viviana-vargas.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "maria-callejas",
    nombre: "María Fernanda Callejas Saldarriaga",
    cargo: "Auditora y Revisora Fiscal",
    email: "revisoria@ramirezasesores.co",
    imagen: "/team/maria-callejas.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "paula-montoya",
    nombre: "Paula Andrea Montoya Álvarez",
    cargo: "Coordinadora Contable",
    email: "coordinadora@ramirezasesores.co",
    imagen: "/team/paula-montoya.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "viviana-piedrahita",
    nombre: "Viviana María Piedrahita Zapata",
    cargo: "Analista Contable",
    email: "analista@ramirezasesores.co",
    imagen: "/team/viviana-piedrahita.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "yulian-gomez",
    nombre: "Yulián Andrés Gómez Garzón",
    cargo: "Líder Contable",
    email: "contabilidad@ramirezasesores.co",
    imagen: "/team/yulian-gomez.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "ana-estrada",
    nombre: "Ana María Estrada Arroyave",
    cargo: "Asistente Contable Junior",
    email: "contabilidad@ramirezasesores.co",
    imagen: "/team/ana-estrada.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
  {
    id: "katerine-jaramillo",
    nombre: "Katerine Jaramillo Duque",
    cargo: "Asistente Administrativa",
    email: "administracion@ramirezasesores.co",
    imagen: "/team/katerine-jaramillo.png",
    especialidades: [],
    experiencia: "",
    formacion: "",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calcular cuántos miembros mostrar según el ancho de pantalla
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Actualizar visibleCount en resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, visibleCount]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = teamMembers.length - visibleCount;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = teamMembers.length - visibleCount;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manejar touch events para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      goToNext();
    } else {
      goToPrev();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Calcular transformación para el carrusel
  const getTransform = () => {
    const itemWidth = 100 / visibleCount;
    return `translateX(-${currentIndex * itemWidth}%)`;
  };

  return (
    <div className={styles.teamCarousel}>
      {/* Encabezado del carrusel */}
      <div className={styles.carouselHeader}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>
            Nuestro <span className={styles.highlight}>Equipo</span> de Expertos
          </h2>
          <p className={styles.subtitle}>
            Profesionales altamente calificados con años de experiencia
          </p>
        </div>

        <div className={styles.headerControls}>
          <button
            className={styles.autoPlayButton}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={
              isAutoPlaying ? "Pausar carrusel" : "Reproducir carrusel"
            }
          >
            {isAutoPlaying ? "⏸️" : "▶️"}
          </button>

          <div className={styles.navigationButtons}>
            <button
              className={styles.navButton}
              onClick={goToPrev}
              aria-label="Miembros anteriores"
            >
              ←
            </button>
            <button
              className={styles.navButton}
              onClick={goToNext}
              aria-label="Siguientes miembros"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor del carrusel */}
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carouselTrack}
          style={{ transform: getTransform() }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={styles.carouselItem}
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div
                className={`card ${styles.teamCard} ${member.esIA ? styles.iaCard : ""}`}
              >
                {/* Imagen del miembro */}
                <div className={styles.memberImage}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.imagen}
                      alt={member.nombre}
                      width={200}
                      height={200}
                      className={styles.image}
                      priority={index < 3}
                    />

                    {/* Overlay de la imagen */}
                    <div className={styles.imageOverlay}>
                      <div className={styles.socialLinks}>
                        <a
                          href={`mailto:${member.email}`}
                          className={styles.socialLink}
                          title="Enviar correo"
                        >
                          <span className={styles.socialIcon}>📧</span>
                        </a>
                        <Link
                          href="/contacto"
                          className={styles.contactButton}
                          title="Contactar"
                        >
                          <span className={styles.socialIcon}>💬</span>
                        </Link>
                      </div>
                    </div>

                    {/* Badge para miembros destacados */}
                    {member.destacado && !member.esIA && (
                      <div className={styles.badgeDestacado}>
                        <span>⭐ Líder</span>
                      </div>
                    )}

                    {/* Badge especial para IA */}
                    {member.esIA && (
                      <div className={styles.badgeIA}>
                        <span>🤖</span>
                        <span>AGENTE IA</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Información del miembro */}
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.nombre}</h3>
                  <p className={styles.memberPosition}>{member.cargo}</p>

                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📧</span>
                      <a
                        href={`mailto:${member.email}`}
                        className={styles.contactLink}
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>💼</span>
                      <Link href="/contacto" className={styles.contactLink}>
                        Contactar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores y controles */}
      <div className={styles.carouselFooter}>
        <div className={styles.indicators}>
          {Array.from({ length: teamMembers.length - visibleCount + 1 }).map(
            (_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ),
          )}
        </div>

        <div className={styles.counter}>
          <span className={styles.currentSlide}>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className={styles.totalSlides}>
            / {String(teamMembers.length - visibleCount + 1).padStart(2, "0")}
          </span>
        </div>

        <Link href="/equipo" className={styles.viewAllButton}>
          Ver Todo el Equipo →
        </Link>
      </div>

      {/* Estado del auto-play */}
      <div className={styles.autoPlayStatus}>
        <div
          className={`${styles.statusIndicator} ${isAutoPlaying ? styles.playing : ""}`}
        >
          <span className={styles.statusText}>
            {isAutoPlaying ? "Auto-play activado" : "Auto-play pausado"}
          </span>
          <div className={styles.statusIcon}>{isAutoPlaying ? "▶" : "⏸"}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
