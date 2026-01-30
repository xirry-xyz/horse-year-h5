import { useRef } from 'react';
import type { CharacterData } from '../data/characters';
import ShareImage from './ShareImage';

interface ResultPageProps {
  name: string;
  character: CharacterData;
  onRestart: () => void;
}

export default function ResultPage({ name, character, onRestart }: ResultPageProps) {
  const shareRef = useRef<HTMLDivElement>(null);

  const handleSave = async () => {
    if (!shareRef.current) return;
    try {
      const html2canvas = (await import('html2canvas-pro')).default;
      const canvas = await html2canvas(shareRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#1a0a0a',
      });
      const link = document.createElement('a');
      link.download = `马年代表字_${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-y-auto"
      style={{
        background: 'radial-gradient(ellipse at top, #3d1520 0%, #1a0a0a 50%, #0d0505 100%)',
      }}
    >
      {/* Hidden share image for html2canvas */}
      <div className="fixed -left-[9999px] top-0">
        <ShareImage ref={shareRef} name={name} character={character} />
      </div>

      <div className="min-h-full flex flex-col items-center justify-center px-6 py-16">
        {/* Top decorative corners */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-gold/30" />
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-gold/30" />

        {/* Ink wash decorative background */}
        <div
          className="absolute top-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(139,26,43,0.4) 0%, transparent 50%)',
          }}
        />

        {/* Title */}
        <div className="mb-6 animate-fade-in">
          <div className="text-center">
            <span className="text-gold/50 text-xs tracking-[0.4em]">—— 2026 马年 ——</span>
          </div>
        </div>

        <h2
          className="text-2xl font-bold text-gradient-gold mb-10 tracking-wider animate-fade-in"
          style={{ fontFamily: '"Noto Serif SC", serif', animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          {name} 的马年代表字
        </h2>

        {/* Main character display */}
        <div className="relative mb-12 animate-fade-in-scale" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          {/* Glow background */}
          <div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, #d4a853 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
          {/* Character */}
          <div
            className="relative text-[160px] leading-none font-black animate-float"
            style={{
              fontFamily: '"Noto Serif SC", serif',
              background: 'linear-gradient(180deg, #f0d68a 0%, #d4a853 40%, #b8860b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(212,168,83,0.4)) drop-shadow(0 0 60px rgba(212,168,83,0.2))',
            }}
          >
            {character.char}
          </div>
        </div>

        {/* Category badge */}
        <div
          className="mb-10 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <span
            className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-widest"
            style={{
              background: 'linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))',
              border: '1px solid rgba(212,168,83,0.3)',
              color: '#d4a853',
            }}
          >
            {character.categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-paper/80 text-center text-lg leading-loose max-w-xs animate-fade-in"
          style={{ fontFamily: '"Noto Serif SC", serif', animationDelay: '0.7s', animationFillMode: 'backwards' }}
        >
          {character.description}
        </p>

        {/* Spacer */}
        <div className="h-10" />

        {/* Lucky info cards */}
        <div
          className="w-full max-w-xs animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
        >
          <div className="grid grid-cols-2 gap-5">
            {/* Lucky color */}
            <div className="flex flex-col items-center py-6 px-3 rounded-xl bg-ink/40 border border-gold/10">
              <span className="text-gold/50 text-xs mb-3 tracking-wider">幸运色</span>
              <div
                className="w-10 h-10 rounded-full mb-3 shadow-lg"
                style={{
                  backgroundColor: character.luckyColor,
                  boxShadow: `0 0 15px ${character.luckyColor}40`,
                }}
              />
              <span className="text-paper/70 text-sm">{character.luckyColorName}</span>
            </div>

            {/* Lucky number */}
            <div className="flex flex-col items-center py-6 px-3 rounded-xl bg-ink/40 border border-gold/10">
              <span className="text-gold/50 text-xs mb-3 tracking-wider">幸运数字</span>
              <div
                className="text-4xl font-black text-gradient-gold mb-1"
                style={{ fontFamily: '"Noto Serif SC", serif' }}
              >
                {character.luckyNumber}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-12" />

        {/* Blessing */}
        <div
          className="w-full max-w-xs text-center animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.4))' }} />
            <span className="text-gold/40 text-xs tracking-widest shrink-0">马年祝福</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(212,168,83,0.4))' }} />
          </div>
          <p
            className="text-2xl font-bold text-gradient-gold tracking-wider"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          >
            {character.blessing}
          </p>
        </div>

        {/* Spacer */}
        <div className="h-14" />

        {/* Divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Spacer */}
        <div className="h-10" />

        {/* Share section */}
        <div className="text-center">
          <p className="text-gold/60 text-sm mb-2 tracking-wider">测测你的马年代表字</p>
          <p className="text-gold/30 text-xs">长按保存图片分享给好友</p>
        </div>

        {/* Spacer */}
        <div className="h-8" />

        {/* Buttons */}
        <div className="w-full max-w-xs space-y-4">
          <button
            onClick={handleSave}
            className="w-full py-4 rounded-xl font-bold text-lg tracking-widest transition-all duration-300 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #f0d68a, #d4a853)',
              color: '#1a0a0a',
              boxShadow: '0 4px 20px rgba(212, 168, 83, 0.3)',
              fontFamily: '"Noto Serif SC", serif',
            }}
          >
            保存分享图
          </button>
          <button
            onClick={onRestart}
            className="w-full py-4 rounded-xl font-bold text-base tracking-widest border border-gold/30 text-gold/70 transition-all duration-300 hover:border-gold/50 hover:text-gold active:scale-[0.98]"
            style={{
              background: 'rgba(44, 24, 16, 0.6)',
              fontFamily: '"Noto Serif SC", serif',
            }}
          >
            再测一次
          </button>
        </div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Bottom decorative */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-gold/20" />
          <span className="text-gold/20 text-xs tracking-widest">2026 丙午马年</span>
          <div className="w-6 h-px bg-gold/20" />
        </div>
      </div>
    </div>
  );
}
