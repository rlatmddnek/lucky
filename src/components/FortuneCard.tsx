import { useMemo } from 'react';
import type { FortuneData } from '../data/fortunes';
import styles from './FortuneCard.module.css';
import { Palette, Hash, Compass, Quote, CheckCircle2 } from 'lucide-react';
import LottoGenerator from './LottoGenerator';

interface FortuneCardProps {
  fortune: FortuneData | null;
}

const FortuneCard = ({ fortune }: FortuneCardProps) => {
  const mission = useMemo(() => {
    if (!fortune) return null;
    const randomIndex = Math.floor(Math.random() * fortune.luckyMissions.length);
    return fortune.luckyMissions[randomIndex];
  }, [fortune]);

  if (!fortune) return null;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.topPattern}></div>
        
        <div className={styles.header}>
          <span className={styles.emoji}>{fortune.emoji}</span>
          <h2 className={styles.name}>{fortune.name}의 오늘의 운세</h2>
        </div>

        <div className={styles.mainFortune}>
          <p>{fortune.fortune}</p>
        </div>

        <div className={styles.missionBox}>
          <div className={styles.missionTitle}>
            <CheckCircle2 size={18} className={styles.missionIcon} />
            <span>오늘의 행운 미션</span>
          </div>
          <p className={styles.missionText}>{mission}</p>
          <p className={styles.missionNote}>* 미션을 완료하면 행운이 더 커집니다!</p>
        </div>

        <div className={styles.advice}>
          <Quote size={20} className={styles.icon} />
          <p>{fortune.advice}</p>
        </div>

        <div className={styles.luckyElements}>
          <div className={styles.element}>
            <Palette size={24} className={styles.elementIcon} />
            <span className={styles.elementLabel}>행운의 색상</span>
            <span className={styles.elementValue}>{fortune.luckyColor}</span>
          </div>
          <div className={styles.element}>
            <Hash size={24} className={styles.elementIcon} />
            <span className={styles.elementLabel}>행운의 숫자</span>
            <span className={styles.elementValue}>{fortune.luckyNumber}</span>
          </div>
          <div className={styles.element}>
            <Compass size={24} className={styles.elementIcon} />
            <span className={styles.elementLabel}>행운의 방위</span>
            <span className={styles.elementValue}>{fortune.luckyDirection}</span>
          </div>
        </div>

        <LottoGenerator seedId={fortune.id} />

        <div className={styles.bottomPattern}></div>
      </div>
    </div>
  );
};

export default FortuneCard;
