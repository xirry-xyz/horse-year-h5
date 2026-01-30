import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const completeTimer = setTimeout(() => onComplete(), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'radial-gradient(ellipse at center, #3d1520 0%, #1a0a0a 60%, #0d0505 100%)',
      }}
    >
      {/* Decorative top corner */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />

      {/* Sparkle particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold-light animate-sparkle"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${1.5 + Math.random() * 1.5}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="animate-fade-in-scale text-center">
        <div
          className="text-8xl font-black tracking-widest text-gradient-gold animate-shimmer"
          style={{ fontFamily: '"Noto Serif SC", serif' }}
        >
          2026
        </div>
        <div
          className="mt-4 text-5xl font-bold text-gradient-gold"
          style={{ fontFamily: '"Noto Serif SC", serif' }}
        >
          马年
        </div>
      </div>

      <div
        className="mt-10 text-lg tracking-[0.3em] text-gold/80 animate-fade-in"
        style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
      >
        测测你的专属代表字
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-20 w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}
