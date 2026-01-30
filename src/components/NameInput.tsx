import { useState } from 'react';

interface NameInputProps {
  onSubmit: (name: string) => void;
}

export default function NameInput({ onSubmit }: NameInputProps) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      handleSubmit();
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center px-8 animate-fade-in"
      style={{
        background: 'radial-gradient(ellipse at center, #3d1520 0%, #1a0a0a 60%, #0d0505 100%)',
      }}
    >
      {/* Decorative frame corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/30" />

      {/* Decorative top element */}
      <div className="mb-12 flex flex-col items-center">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mb-4" />
        <div className="text-gold/50 text-xs tracking-[0.5em]">丙午年</div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mt-4" />
      </div>

      {/* Title */}
      <h1
        className="text-3xl font-bold text-gradient-gold mb-3"
        style={{ fontFamily: '"Noto Serif SC", serif' }}
      >
        请输入你的名字
      </h1>
      <p className="text-gold/60 text-sm mb-10 tracking-wider">
        让马年为你揭示专属代表字
      </p>

      {/* Input field */}
      <div className="w-full max-w-xs">
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入你的名字"
            maxLength={20}
            className="w-full px-5 py-4 bg-ink/60 border border-gold/40 rounded-lg text-paper text-center text-lg tracking-wider placeholder:text-paper/30 focus:outline-none focus:border-gold/80 focus:shadow-[0_0_20px_rgba(212,168,83,0.15)] transition-all duration-300"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          />
          {/* Decorative dots on input corners */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gold/50" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gold/50" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gold/50" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gold/50" />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="mt-8 w-full py-4 rounded-lg font-bold text-lg tracking-widest transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: name.trim()
              ? 'linear-gradient(135deg, #d4a853, #f0d68a, #d4a853)'
              : 'linear-gradient(135deg, #666, #888, #666)',
            color: name.trim() ? '#1a0a0a' : '#444',
            boxShadow: name.trim() ? '0 4px 20px rgba(212, 168, 83, 0.3)' : 'none',
            fontFamily: '"Noto Serif SC", serif',
          }}
        >
          开始测试
        </button>
      </div>

      {/* Bottom decorative */}
      <div className="mt-16 flex items-center gap-3">
        <div className="w-8 h-px bg-gold/30" />
        <div className="text-gold/30 text-xs">2026 · 马年</div>
        <div className="w-8 h-px bg-gold/30" />
      </div>
    </div>
  );
}
