import { zodiacData } from '../data/fortunes';
import styles from './ZodiacGrid.module.css';

interface ZodiacGridProps {
  onSelect: (id: string) => void;
  selectedId: string | null;
}

const ZodiacGrid = ({ onSelect, selectedId }: ZodiacGridProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>자신의 띠를 선택하세요</h2>
      <div className={styles.grid}>
        {zodiacData.map((item) => (
          <button
            key={item.id}
            className={`${styles.zodiacButton} ${selectedId === item.id ? styles.selected : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <span className={styles.hanja}>{item.hanja}</span>
            <span className={styles.name}>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZodiacGrid;
