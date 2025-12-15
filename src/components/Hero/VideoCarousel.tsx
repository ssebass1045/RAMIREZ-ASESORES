'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './VideoCarousel.module.css';

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Lista de videos para el carrusel (5 videos sin descripciones)
  const videos = [
    {
      id: 1,
      src: '/videos/hero-video-1.mp4',
      title: ''
    },
    {
      id: 2,
      src: '/videos/hero-video-2.mp4',
      title: ''
    },
    {
      id: 3,
      src: '/videos/hero-video-3.mp4',
      title: ''
    },
    {
      id: 4,
      src: '/videos/hero-video-4.mp4',
      title: ''
    },
    {
      id: 5,
      src: '/videos/hero-video-5.mp4',
      title: ''
    }
  ];

  // Configurar intervalos para cambiar automáticamente
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, [isPlaying, videos.length]);

  // Pausar/reproducir video actual
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play().catch(console.error);
      } else {
        currentVideo.pause();
      }
    }
  }, [currentVideoIndex, isPlaying]);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(true);
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className={styles.videoCarousel}>
      {/* Contenedor principal del video */}
      <div className={styles.videoContainer}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`${styles.videoWrapper} ${
              index === currentVideoIndex ? styles.active : ''
            }`}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={video.src}
              className={styles.video}
              muted
              loop
              playsInline
              preload="metadata"
              onClick={handleVideoClick}
            />
            
            {/* Overlay minimalista (solo para hover) */}
            <div className={styles.videoOverlay}></div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className={styles.carouselControls}>
        <button
          className={styles.navButton}
          onClick={goToPrevVideo}
          aria-label="Video anterior"
        >
          ←
        </button>
        
        {/* Indicadores */}
        <div className={styles.indicators}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentVideoIndex ? styles.active : ''
              }`}
              onClick={() => goToVideo(index)}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          className={styles.navButton}
          onClick={goToNextVideo}
          aria-label="Siguiente video"
        >
          →
        </button>
      </div>

      {/* Contador y estado de reproducción eliminados */}
    </div>
  );
};

export default VideoCarousel;
