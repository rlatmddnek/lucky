import { useState } from 'react';
import styles from './BirthInput.module.css';
import { Calendar, Clock } from 'lucide-react';

interface BirthInputProps {
  onCalculate: (year: number, month: number, day: number, time: string) => void;
}

const BirthInput = ({ onCalculate }: BirthInputProps) => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('1');
  const [day, setDay] = useState<string>('1');
  const [time, setTime] = useState<string>('unknown');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!year || isNaN(Number(year))) {
      alert('태어난 연도를 올바르게 입력해 주세요.');
      return;
    }
    onCalculate(Number(year), Number(month), Number(day), time);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>사주 정보를 입력하세요</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Calendar size={18} className={styles.icon} />
            생년월일
          </label>
          <div className={styles.dateInputs}>
            <input
              type="number"
              placeholder="연도 (YYYY)"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={styles.yearInput}
              min="1900"
              max="2026"
            />
            <select value={month} onChange={(e) => setMonth(e.target.value)} className={styles.select}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>{m}월</option>
              ))}
            </select>
            <select value={day} onChange={(e) => setDay(e.target.value)} className={styles.select}>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}일</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Clock size={18} className={styles.icon} />
            태어난 시간
          </label>
          <select value={time} onChange={(e) => setTime(e.target.value)} className={styles.fullSelect}>
            <option value="unknown">모름</option>
            <option value="0">자시 (23:30 ~ 01:29)</option>
            <option value="1">축시 (01:30 ~ 03:29)</option>
            <option value="2">인시 (03:30 ~ 05:29)</option>
            <option value="3">묘시 (05:30 ~ 07:29)</option>
            <option value="4">진시 (07:30 ~ 09:29)</option>
            <option value="5">사시 (09:30 ~ 11:29)</option>
            <option value="6">오시 (11:30 ~ 13:29)</option>
            <option value="7">미시 (13:30 ~ 15:29)</option>
            <option value="8">신시 (15:30 ~ 17:29)</option>
            <option value="9">유시 (17:30 ~ 19:29)</option>
            <option value="10">술시 (19:30 ~ 21:29)</option>
            <option value="11">해시 (21:30 ~ 23:29)</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          운세 결과 보기
        </button>
      </form>
    </section>
  );
};

export default BirthInput;
