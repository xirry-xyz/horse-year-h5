import { useRef, useState } from 'react';
import type { CharacterData } from '../data/characters';
import ShareImage from './ShareImage';

interface ResultPageProps {
  name: string;
  character: CharacterData;
  onRestart: () => void;
}

export default function ResultPage({ name, character, onRestart }: ResultPageProps) {
  const shareRef = useRef<HTMLDivElement>(null);
  const [shareImageUrl, setShareImageUrl] = useState<string | null>(null);

  const handleSave = async () => {
    if (!shareRef.current) return;
    try {
      const html2canvas = (await import('html2canvas-pro')).default;
      const canvas = await html2canvas(shareRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#1a0a0a',
      });
      setShareImageUrl(canvas.toDataURL('image/png'));
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

      <div className="flex flex-col items-center px-5" style={{ minHeight: '100dvh' }}>
        {/* Top decorative corners */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/30" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/30" />

        {/* Ink wash decorative background */}
        <div
          className="absolute top-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(139,26,43,0.4) 0%, transparent 50%)',
          }}
        />

        {/* Flexible top spacer */}
        <div className="flex-[2]" />

        {/* Title */}
        <div className="animate-fade-in text-center">
          <span className="text-gold/50 text-xs tracking-[0.4em]">—— 2026 马年 ——</span>
        </div>

        <div className="flex-[0.5]" />

        <h2
          className="text-lg font-bold text-gradient-gold tracking-wider animate-fade-in"
          style={{ fontFamily: '"Noto Serif SC", serif', animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          {name} 的马年代表字
        </h2>

        <div className="flex-[1]" />

        {/* Main character display */}
        <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
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
            className="relative text-[120px] leading-none font-black animate-float"
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

        <div className="flex-[0.5]" />

        {/* Category badge */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-bold tracking-widest"
            style={{
              background: 'linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))',
              border: '1px solid rgba(212,168,83,0.3)',
              color: '#d4a853',
            }}
          >
            {character.categoryLabel}
          </span>
        </div>

        <div className="flex-[1]" />

        {/* Description */}
        <p
          className="text-paper/80 text-center text-sm leading-relaxed max-w-xs animate-fade-in"
          style={{ fontFamily: '"Noto Serif SC", serif', animationDelay: '0.7s', animationFillMode: 'backwards' }}
        >
          {character.description}
        </p>

        <div className="flex-[1]" />

        {/* Lucky info row - compact inline */}
        <div
          className="flex items-center gap-6 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full"
              style={{
                backgroundColor: character.luckyColor,
                boxShadow: `0 0 8px ${character.luckyColor}40`,
              }}
            />
            <span className="text-paper/60 text-xs">幸运色 {character.luckyColorName}</span>
          </div>
          <div className="w-px h-3 bg-gold/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-paper/60 text-xs">幸运数字</span>
            <span className="text-gold font-bold text-sm">{character.luckyNumber}</span>
          </div>
        </div>

        <div className="flex-[1]" />

        {/* Blessing */}
        <div
          className="w-full max-w-xs text-center animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.4))' }} />
            <span className="text-gold/40 text-[10px] tracking-widest shrink-0">马年祝福</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(212,168,83,0.4))' }} />
          </div>
          <p
            className="text-lg font-bold text-gradient-gold tracking-wider"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          >
            {character.blessing}
          </p>
        </div>

        <div className="flex-[1.5]" />

        {/* Buttons */}
        <div className="w-full max-w-xs space-y-2.5">
          <button
            onClick={handleSave}
            className="w-full py-3.5 rounded-xl font-bold text-base tracking-widest transition-all duration-300 active:scale-[0.98]"
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
            className="w-full py-3.5 rounded-xl font-bold text-sm tracking-widest border border-gold/30 text-gold/70 transition-all duration-300 hover:border-gold/50 hover:text-gold active:scale-[0.98]"
            style={{
              background: 'rgba(44, 24, 16, 0.6)',
              fontFamily: '"Noto Serif SC", serif',
            }}
          >
            再测一次
          </button>
        </div>

        <div className="flex-[1]" />

        {/* Bottom decorative */}
        <div className="flex items-center gap-3 pb-4">
          <div className="w-6 h-px bg-gold/20" />
          <span className="text-gold/20 text-xs tracking-widest">2026 丙午马年</span>
          <div className="w-6 h-px bg-gold/20" />
        </div>
      </div>

      {/* Full-screen overlay for long-press saving */}
      {shareImageUrl && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80"
          onClick={() => setShareImageUrl(null)}
        >
          <p
            className="text-paper/80 text-sm mb-4 tracking-wider"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          >
            长按图片保存到相册
          </p>
          <img
            src={shareImageUrl}
            alt="分享图"
            className="w-[80vw] max-w-[375px] rounded-lg shadow-2xl"
          />
          <p className="text-paper/40 text-xs mt-4">点击任意处关闭</p>
        </div>
      )}
    </div>
  );
}
