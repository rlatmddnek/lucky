import { useState, useEffect } from 'react';
import styles from './LottoGenerator.module.css';
import { Sparkles, RefreshCw } from 'lucide-react';

interface LottoGeneratorProps {
  seedId: string; // 운세 ID 등을 시드로 사용하여 기운을 담음
}

const LottoGenerator = ({ seedId }: LottoGeneratorProps) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  const generateNumbers = () => {
    setIsSpinning(true);
    
    // 신비로운 연출을 위해 약간의 지연 시간을 둠
    setTimeout(() => {
      const newNumbers: number[] = [];
      while (newNumbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!newNumbers.includes(num)) {
          newNumbers.push(num);
        }
      }
      setNumbers(newNumbers.sort((a, b) => a - b));
      setIsSpinning(false);
    }, 800);
  };

  // seedId가 변경될 때(다른 띠 선택 시) 자동으로 번호 생성
  useEffect(() => {
    generateNumbers();
  }, [seedId]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Sparkles size={20} className={styles.sparkleIcon} />
        <h3 className={styles.title}>오늘의 행운 번호</h3>
      </div>
      
      <div className={`${styles.numberDisplay} ${isSpinning ? styles.spinning : ''}`}>
        {numbers.length > 0 ? (
          numbers.map((num, idx) => (
            <div key={idx} className={styles.ball} data-color={Math.floor((num - 1) / 10)}>
              {num}
            </div>
          ))
        ) : (
          <p className={styles.placeholder}>기운을 모으는 중...</p>
        )}
      </div>

      <button 
        className={styles.refreshButton} 
        onClick={generateNumbers}
        disabled={isSpinning}
      >
        <RefreshCw size={16} className={isSpinning ? styles.spinIcon : ''} />
        다른 기운 받기
      </button>
      
      <p className={styles.disclaimer}>※ 행운의 번호는 재미로만 참고해 주세요.</p>
    </div>
  );
};

export default LottoGenerator;
