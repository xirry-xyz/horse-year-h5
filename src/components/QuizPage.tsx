import { useState } from 'react';
import type { Question } from '../data/characters';

interface QuizPageProps {
  questions: Question[];
  onComplete: (answers: number[]) => void;
}

export default function QuizPage({ questions, onComplete }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  const total = questions.length;
  const current = questions[currentIndex];
  const progress = ((currentIndex) / total) * 100;

  const handleSelect = (optionIndex: number) => {
    if (transitioning) return;

    const newAnswers = [...answers, optionIndex];
    setTransitioning(true);

    if (currentIndex < total - 1) {
      setTimeout(() => {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setTransitioning(false);
      }, 400);
    } else {
      setTimeout(() => {
        onComplete(newAnswers);
      }, 400);
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col items-center px-6 py-8"
      style={{
        background: 'radial-gradient(ellipse at center, #3d1520 0%, #1a0a0a 60%, #0d0505 100%)',
      }}
    >
      {/* Progress bar */}
      <div className="w-full max-w-sm mx-auto mb-2">
        <div className="h-1 bg-ink/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #d4a853, #f0d68a)',
            }}
          />
        </div>
      </div>

      {/* Question counter */}
      <div className="text-center mb-8">
        <span className="text-gold/60 text-sm tracking-wider">
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Question content with fade transition */}
      <div
        className={`flex-1 flex flex-col justify-center max-w-sm mx-auto w-full transition-all duration-300 ${
          transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Question text */}
        <div className="mb-10 text-center">
          <h2
            className="text-2xl font-bold text-paper leading-relaxed"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          >
            {current.text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option.value)}
              className="w-full text-left px-6 py-5 rounded-xl border border-gold/20 bg-ink/40 text-paper/90 transition-all duration-200 hover:border-gold/60 hover:bg-ink/70 hover:shadow-[0_0_20px_rgba(212,168,83,0.1)] active:scale-[0.98]"
              style={{ fontFamily: '"Noto Serif SC", serif' }}
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center text-xs text-gold/60 mt-0.5">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base leading-relaxed">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom decorative */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i <= currentIndex ? 'bg-gold' : 'bg-gold/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
