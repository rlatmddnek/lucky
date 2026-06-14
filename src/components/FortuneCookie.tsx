import { useState, useMemo } from 'react';
import { fortuneCookieMessages } from '../data/fortunes';
import styles from './FortuneCookie.module.css';
import { Sparkles, RefreshCw } from 'lucide-react';

const FortuneCookie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const message = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * fortuneCookieMessages.length);
    return fortuneCookieMessages[randomIndex];
  }, [isOpen]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleReset = () => {
    setIsSpinning(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsSpinning(false);
    }, 600);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>포춘 쿠키를 열어보세요</h2>
      <p className={styles.subtitle}>오늘 당신에게 전하는 짧은 행운의 메시지</p>

      <div className={`${styles.cookieWrapper} ${isOpen ? styles.open : ''}`} onClick={handleOpen}>
        <div className={styles.cookie}>
          {!isOpen ? (
            <div className={styles.cookieClosed}>🥠</div>
          ) : (
            <div className={styles.cookieOpened}>
              <div className={styles.paper}>
                <p className={styles.message}>{message}</p>
              </div>
              <div className={styles.cookieHalf}>🥐</div>
              <div className={styles.cookieHalf}>🥐</div>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <button className={styles.resetButton} onClick={handleReset} disabled={isSpinning}>
          <RefreshCw size={18} className={isSpinning ? styles.spinning : ''} />
          다시 열어보기
        </button>
      )}

      <div className={styles.decoration}>
        <Sparkles size={24} className={styles.sparkle1} />
        <Sparkles size={16} className={styles.sparkle2} />
      </div>
    </div>
  );
};

export default FortuneCookie;
