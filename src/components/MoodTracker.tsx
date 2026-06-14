import React, { useState, useEffect } from 'react';
import { 
  Smile, Star, Music, Glasses, Heart, Brain, Moon, Zap, Frown, 
  CloudLightning, Thermometer, Flame, MapPin, Utensils, Search, ExternalLink 
} from 'lucide-react';
import { foodMap, type FoodRecommendation, type WeatherCondition } from '../data/moods';
import styles from './MoodTracker.module.css';

const moodsList = [
  { id: 'happy', icon: <Smile />, label: '행복', color: '#f59e0b' },
  { id: 'excited', icon: <Star />, label: '신남', color: '#ef4444' },
  { id: 'party', icon: <Music />, label: '즐거움', color: '#ec4899' },
  { id: 'cool', icon: <Glasses />, label: '자신감', color: '#6366f1' },
  { id: 'peaceful', icon: <Heart />, label: '평온', color: '#10b981' },
  { id: 'thinking', icon: <Brain />, label: '고민', color: '#8b5cf6' },
  { id: 'tired', icon: <Moon />, label: '피곤', color: '#64748b' },
  { id: 'energy', icon: <Zap />, label: '의욕', color: '#facc15' },
  { id: 'sad', icon: <Frown />, label: '슬픔', color: '#3b82f6' },
  { id: 'stormy', icon: <CloudLightning />, label: '우울', color: '#1e293b' },
  { id: 'sick', icon: <Thermometer />, label: '아픔', color: '#f97316' },
  { id: 'fire', icon: <Flame />, label: '열정', color: '#dc2626' }
];

const MoodTracker = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [weather, setWeather] = useState({ condition: 'loading', temp: '', city: '위치 파악 중...' });
  const [recommendation, setRecommendation] = useState<FoodRecommendation | null>(null);

  useEffect(() => {
    const fetchContext = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(`https://wttr.in/${latitude},${longitude}?format=j1`);
            const data = await res.json();
            const condition = data.current_condition[0].weatherDesc[0].value;
            const temp = data.current_condition[0].temp_C;
            const city = data.nearest_area[0].areaName[0].value;
            setWeather({ condition, temp, city });
          } catch (e) {
            setWeather({ condition: 'Clear', temp: '20', city: '서울' });
          }
        }, () => {
          setWeather({ condition: 'Clear', temp: '20', city: '서울' });
        });
      }
    };
    fetchContext();
  }, []);

  const getRandomRecommend = (id: string) => {
    if (!id) return null;
    const cond: WeatherCondition = weather.condition.includes('Rain') 
      ? 'Rain' 
      : (weather.condition.includes('Clear') || weather.condition.includes('Sunny') ? 'Clear' : 'default');
    
    const moodRecommends = foodMap[id] || foodMap['default'];
    const options = moodRecommends[cond] || moodRecommends['default'] || foodMap['default']['default'];
    return options[Math.floor(Math.random() * options.length)];
  };

  const handleMoodClick = (id: string) => {
    setSelectedId(id);
    setRecommendation(getRandomRecommend(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>오늘의 기분은 어떠신가요?</h2>
        
        <div className={styles.weatherContext}>
          <MapPin size={14} className={styles.inlineIcon} /> {weather.city} | {weather.condition === 'loading' ? '날씨 정보 로딩 중...' : `${weather.condition}, ${weather.temp}°C`}
        </div>

        <div className={styles.moodSelector}>
          {moodsList.map((m, idx) => (
            <div 
              key={m.id} 
              className={`${styles.moodChip} ${selectedId === m.id ? styles.selected : ''}`}
              onClick={() => handleMoodClick(m.id)}
              style={{ color: m.color, '--index': idx } as React.CSSProperties}
            >
              <div className={styles.moodIcon}>{m.icon}</div>
              <span className={styles.moodLabel}>{m.label}</span>
            </div>
          ))}
        </div>

        {recommendation && (
          <div className={styles.recommendationBox} key={recommendation.food}>
            <div className={styles.recommendTitle}>
              <Utensils size={18} /> 오늘 기분에는 이런 음식 어때요?
            </div>
            <div className={styles.recommendFood}>{recommendation.food}</div>
            <div className={styles.recommendReason}>{recommendation.reason}</div>
            <a 
              href={`https://map.naver.com/v5/search/${encodeURIComponent(recommendation.food)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.storeSearchBtn}
            >
              <Search size={14} /> 근처 맛집 찾기 <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
