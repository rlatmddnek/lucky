import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.ornament}></div>
      <h1 className={styles.title}>운수대통 (運數大通)</h1>
      <p className={styles.subtitle}>오늘의 운세를 확인하고 행운을 잡으세요</p>
      <div className={styles.ornament}></div>
    </header>
  );
};

export default Header;
