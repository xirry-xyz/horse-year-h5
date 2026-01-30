import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import NameInput from './components/NameInput';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { characters, questions } from './data/characters';
import { getCharacterIndex } from './utils/hash';

type Screen = 'splash' | 'name' | 'quiz' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<number[]>([]);

  const characterIndex = getCharacterIndex(name, answers);
  const character = characters[characterIndex];

  const handleSplashComplete = () => setScreen('name');
  const handleNameSubmit = (n: string) => {
    setName(n);
    setScreen('quiz');
  };
  const handleQuizComplete = (a: number[]) => {
    setAnswers(a);
    setScreen('result');
  };
  const handleRestart = () => {
    setName('');
    setAnswers([]);
    setScreen('name');
  };

  return (
    <div className="w-full h-full flex justify-center bg-[#0d0505]">
      <div className="w-full max-w-md h-full relative">
        {screen === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
        {screen === 'name' && <NameInput onSubmit={handleNameSubmit} />}
        {screen === 'quiz' && (
          <QuizPage questions={questions} onComplete={handleQuizComplete} />
        )}
        {screen === 'result' && (
          <ResultPage name={name} character={character} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}

export default App;
