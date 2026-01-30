import { forwardRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import type { CharacterData } from '../data/characters';

interface ShareImageProps {
  name: string;
  character: CharacterData;
}

const ShareImage = forwardRef<HTMLDivElement, ShareImageProps>(({ name, character }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: 375,
        height: 660,
        background: 'radial-gradient(ellipse at top, #3d1520 0%, #1a0a0a 50%, #0d0505 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 24px 24px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Noto Serif SC", "PingFang SC", serif',
        color: '#f5e6d3',
      }}
    >
      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: '2px solid rgba(212,168,83,0.3)', borderLeft: '2px solid rgba(212,168,83,0.3)' }} />
      <div style={{ position: 'absolute', top: 10, right: 10, width: 20, height: 20, borderTop: '2px solid rgba(212,168,83,0.3)', borderRight: '2px solid rgba(212,168,83,0.3)' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 10, width: 20, height: 20, borderBottom: '2px solid rgba(212,168,83,0.3)', borderLeft: '2px solid rgba(212,168,83,0.3)' }} />
      <div style={{ position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: '2px solid rgba(212,168,83,0.3)', borderRight: '2px solid rgba(212,168,83,0.3)' }} />

      {/* Ink wash background effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 200,
          opacity: 0.15,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(139,26,43,0.5) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Year tag */}
      <div style={{ fontSize: 10, letterSpacing: '0.4em', color: 'rgba(212,168,83,0.5)', marginBottom: 6 }}>
        —— 2026 马年 ——
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, #d4a853, #f0d68a, #d4a853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 12,
        }}
      >
        {name} 的马年代表字
      </div>

      {/* Main character */}
      <div
        style={{
          fontSize: 100,
          fontWeight: 900,
          lineHeight: 1,
          background: 'linear-gradient(180deg, #f0d68a 0%, #d4a853 40%, #b8860b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 8,
          filter: 'drop-shadow(0 0 20px rgba(212,168,83,0.3))',
        }}
      >
        {character.char}
      </div>

      {/* Category badge */}
      <div
        style={{
          display: 'inline-block',
          padding: '3px 14px',
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          background: 'rgba(212,168,83,0.1)',
          border: '1px solid rgba(212,168,83,0.3)',
          color: '#d4a853',
          marginBottom: 14,
        }}
      >
        {character.categoryLabel}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 12,
          lineHeight: 1.8,
          color: 'rgba(245,230,211,0.75)',
          textAlign: 'center',
          maxWidth: 280,
          marginBottom: 14,
        }}
      >
        {character.description}
      </div>

      {/* Lucky info row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: character.luckyColor,
              boxShadow: `0 0 6px ${character.luckyColor}60`,
            }}
          />
          <span style={{ fontSize: 10, color: 'rgba(245,230,211,0.6)' }}>幸运色 {character.luckyColorName}</span>
        </div>
        <div style={{ width: 1, height: 10, background: 'rgba(212,168,83,0.2)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontSize: 10, color: 'rgba(245,230,211,0.6)' }}>幸运数字</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#d4a853' }}>{character.luckyNumber}</span>
        </div>
      </div>

      {/* Blessing with decorative lines */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, width: 260 }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.4))' }} />
        <span style={{ fontSize: 9, color: 'rgba(212,168,83,0.4)', letterSpacing: '0.2em' }}>马年祝福</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(212,168,83,0.4))' }} />
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '0.15em',
          background: 'linear-gradient(135deg, #d4a853, #f0d68a, #d4a853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 20,
        }}
      >
        {character.blessing}
      </div>

      {/* Divider */}
      <div
        style={{
          width: 160,
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.3), transparent)',
          marginBottom: 18,
        }}
      />

      {/* Footer: QR code + info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: '#ffffff',
            borderRadius: 6,
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <QRCodeSVG
            value="https://horse-year-h5.vercel.app"
            size={48}
            bgColor="#ffffff"
            fgColor="#1a0a0a"
            level="M"
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'rgba(212,168,83,0.7)', letterSpacing: '0.05em', marginBottom: 4 }}>
            扫码测测你的马年代表字
          </div>
          <div style={{ fontSize: 10, color: 'rgba(212,168,83,0.35)', marginBottom: 2 }}>
            2026 丙午马年
          </div>
          <div style={{ fontSize: 9, color: 'rgba(245,230,211,0.3)' }}>
            小红书 @x1rry
          </div>
        </div>
      </div>
    </div>
  );
});

ShareImage.displayName = 'ShareImage';

export default ShareImage;
