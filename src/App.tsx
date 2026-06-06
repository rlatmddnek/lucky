import { useState } from 'react';
import Header from './components/Header';
import ZodiacGrid from './components/ZodiacGrid';
import FortuneCard from './components/FortuneCard';
import { zodiacData, type FortuneData } from './data/fortunes';
import './styles/global.css';

function App() {
  const [selectedFortune, setSelectedFortune] = useState<FortuneData | null>(null);

  const handleSelectZodiac = (id: string) => {
    const fortune = zodiacData.find((item) => item.id === id) || null;
    setSelectedFortune(fortune);
    
    // 선택 시 카드 위치로 스크롤 이동
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <>
      <Header />
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ZodiacGrid onSelect={handleSelectZodiac} selectedId={selectedFortune?.id || null} />
        <FortuneCard fortune={selectedFortune} />
      </main>
      <footer style={{ padding: '4rem 1rem 2rem', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
        <p>© 2026 운수대통. 모든 권리는 보호받습니다.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>본 운세는 참고용이며, 당신의 운명은 스스로의 노력으로 개척하는 것입니다.</p>
      </footer>
    </>
  );
}

export default App;
