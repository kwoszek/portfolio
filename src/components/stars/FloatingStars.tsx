import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 40;

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, 
          y: Math.random() * 100,
          size: Math.random() * 2 + 1.4,
          duration: Math.random() * 20 + 20, 
          delay: Math.random() * -20, 
          opacity: Math.random() * 0.4 + 0.2, 
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div 
      className="pointer-events-none absolute inset-x-0 top-0 h-[150vh] overflow-hidden" 
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, black 60vh, transparent 120vh)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 60vh, transparent 120vh)',
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-neutral-500 animate-float"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}rem`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          *
        </div>
      ))}
    </div>
  );
};
