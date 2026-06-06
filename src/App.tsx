import { useState } from 'react';
import Header from './components/Header';
import ZodiacGrid from './components/ZodiacGrid';
import FortuneCard from './components/FortuneCard';
import BirthInput from './components/BirthInput';
import { zodiacData, type FortuneData } from './data/fortunes';
import './styles/global.css';

function App() {
  const [selectedFortune, setSelectedFortune] = useState<FortuneData | null>(null);

  const calculateZodiac = (year: number) => {
    // (연도 % 12)의 결과에 따른 띠 매핑
    // 0: 원숭이, 1: 닭, 2: 개, 3: 돼지, 4: 쥐, 5: 소, 6: 호랑이, 7: 토끼, 8: 용, 9: 뱀, 10: 말, 11: 양
    const zodiacIndices: Record<number, string> = {
      0: 'monkey', 1: 'rooster', 2: 'dog', 3: 'pig',
      4: 'rat', 5: 'ox', 6: 'tiger', 7: 'rabbit',
      8: 'dragon', 9: 'snake', 10: 'horse', 11: 'sheep'
    };
    
    const index = year % 12;
    return zodiacIndices[index];
  };

  const handleBirthSubmit = (year: number, month: number, day: number, time: string) => {
    console.log(`Birth Info: ${year}-${month}-${day} Time: ${time}`);
    const zodiacId = calculateZodiac(year);
    handleSelectZodiac(zodiacId);
  };

  const handleSelectZodiac = (id: string) => {
    const fortune = zodiacData.find((item) => item.id === id) || null;
    setSelectedFortune(fortune);
    
    // 선택 시 카드 위치로 스크롤 이동
    setTimeout(() => {
      const cardElement = document.getElementById('fortune-result');
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <Header />
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '5rem' }}>
        <BirthInput onCalculate={handleBirthSubmit} />
        
        <div style={{ margin: '2rem 0', color: 'var(--color-gold)', opacity: 0.5 }}>
          <span>또는 띠를 직접 선택하세요</span>
        </div>

        <ZodiacGrid onSelect={handleSelectZodiac} selectedId={selectedFortune?.id || null} />
        
        <div id="fortune-result" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <FortuneCard fortune={selectedFortune} />
        </div>
      </main>
      <footer style={{ padding: '4rem 1rem 2rem', color: '#666', fontSize: '0.9rem', textAlign: 'center', background: 'rgba(0,0,0,0.3)' }}>
        <p>© 2026 운수대통. 모든 권리는 보호받습니다.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>본 운세는 참고용이며, 당신의 운명은 스스로의 노력으로 개척하는 것입니다.</p>
      </footer>
    </>
  );
}

export default App;
