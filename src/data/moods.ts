export interface FoodRecommendation {
  food: string;
  reason: string;
}

export type WeatherCondition = 'Clear' | 'Rain' | 'default';

export interface MoodFoodMap {
  [moodId: string]: {
    [weather in WeatherCondition]?: FoodRecommendation[];
  } & { default: FoodRecommendation[] };
}

export const foodMap: MoodFoodMap = {
  'happy': {
    'Clear': [
      { food: '디저트 카페', reason: '맑은 날씨와 행복한 기분엔 달콤한 디저트가 최고죠!' },
      { food: '파스타', reason: '기분 좋은 날, 예쁜 식당에서 맛있는 파스타 어때요?' },
      { food: '조각 케이크', reason: '축하할 일이라도 있나요? 달콤한 케이크로 행복을 더하세요.' }
    ],
    'Rain': [
      { food: '벨기에 와플', reason: '비 오는 날의 행복을 달콤하게 채워보세요.' },
      { food: '따뜻한 라떼', reason: '빗소리를 들으며 부드러운 라떼 한 잔의 여유를 즐겨보세요.' }
    ],
    'default': [
      { food: '마카롱', reason: '기분 좋은 하루를 더 상큼하게 만들어줄 거예요.' },
      { food: '샌드위치', reason: '가벼운 마음으로 즐기는 신선한 한 끼!' }
    ]
  },
  'excited': {
    'Clear': [
      { food: '패밀리 레스토랑', reason: '신나는 기분 그대로! 다양한 맛이 있는 뷔페나 레스토랑 어때요?' },
      { food: '바비큐', reason: '에너지 넘치는 날, 야외에서 즐기는 고기 파티!' }
    ],
    'default': [
      { food: '피자', reason: '기분 좋은 에너지를 한 입 가득 채워보세요!' },
      { food: '햄버거 세트', reason: '오늘 같은 날은 칼로리 걱정 말고 신나게 즐기세요!' }
    ]
  },
  'party': {
    'default': [
      { food: '치킨', reason: '특별한 날, 축하 파티엔 역시 치킨이 빠질 수 없죠!' },
      { food: '족발', reason: '다 같이 모여 즐겁게 나눠 먹기 좋은 최고의 메뉴!' },
      { food: '피맥', reason: '즐거운 분위기를 돋워줄 피자와 맥주 조합!' }
    ]
  },
  'cool': {
    'Clear': [
      { food: '루프탑 바', reason: '자신감 넘치는 날, 멋진 전망과 함께 분위기를 즐겨보세요.' },
      { food: '와인 바', reason: '멋진 나를 위해 분위기 있는 곳에서 와인 한 잔 어때요?' }
    ],
    'default': [
      { food: '수제버거', reason: '특별한 나를 위한 든든하고 멋진 한 끼!' },
      { food: '스테이크', reason: '성공적인 하루를 자축하는 고급스러운 선택!' }
    ]
  },
  'peaceful': {
    'default': [
      { food: '찻집', reason: '평온한 마음을 더 깊게 해줄 따뜻한 차 한 잔 어떨까요?' },
      { food: '비빔밥', reason: '정갈한 채소들로 속도 마음도 편안하게 채워보세요.' }
    ],
    'Clear': [
      { food: '사찰 음식', reason: '정갈한 음식으로 몸과 마음의 평화를 더해보세요.' },
      { food: '샐러드 볼', reason: '맑은 정신을 유지해줄 건강하고 가벼운 식사.' }
    ]
  },
  'thinking': {
    'default': [
      { food: '초밥', reason: '깔끔한 초밥과 함께 생각을 정리해보는 건 어떨까요?' },
      { food: '라멘', reason: '혼자만의 시간을 가지며 따뜻한 국물 요리를 즐겨보세요.' }
    ],
    'Rain': [
      { food: '베트남 쌀국수', reason: '따뜻한 국물과 함께 복잡한 마음을 차분히 가라앉히세요.' },
      { food: '우동', reason: '김이 모락모락 나는 우동과 함께 생각을 정리해보세요.' }
    ]
  },
  'tired': {
    'default': [
      { food: '에스프레소 카페', reason: '피곤할 땐 진한 커피 한 잔으로 에너지를 충전하세요.' },
      { food: '삼계탕', reason: '지친 몸에 기운을 불어넣어 줄 든든한 보양식!' },
      { food: '장어 덮밥', reason: '오늘 하루 고생한 나를 위한 특별한 에너지 충전.' }
    ],
    'Clear': [
      { food: '브런치 빈', reason: '맑은 공기와 가벼운 브런치로 생기를 되찾으세요.' },
      { food: '시원한 냉면', reason: '피로를 날려버릴 시원하고 깔끔한 맛!' }
    ]
  },
  'energy': {
    'default': [
      { food: '매운 갈비찜', reason: '의욕 충만한 날, 화끈한 매운맛으로 에너지를 발산해보세요!' },
      { food: '낙지 볶음', reason: '힘이 불끈 솟아나는 매콤한 스태미나 음식!' }
    ]
  },
  'sad': {
    'Rain': [
      { food: '해물파전', reason: '비 오는 날의 우울함을 고소한 파전이 달래줄 거예요.' },
      { food: '칼국수', reason: '뜨끈한 국물로 마음의 온도를 높여보세요.' }
    ],
    'Clear': [
      { food: '젤라또', reason: '맑은 하늘 아래 달콤한 아이스크림으로 기운을 내보세요.' },
      { food: '도넛', reason: '당 충전으로 우울한 기분을 날려버리세요!' }
    ],
    'default': [
      { food: '매운 떡볶이', reason: '화끈한 매운맛으로 슬픔을 날려버리세요!' },
      { food: '초콜릿 디저트', reason: '우울할 땐 역시 달콤한 초콜릿이 약입니다.' }
    ]
  },
  'stormy': {
    'default': [
      { food: '삼겹살', reason: '기운 없을 땐 고기 앞으로! 든든한 삼겹살로 위로받으세요.' },
      { food: '돈가스', reason: '바삭한 식감으로 기분 전환을 시도해보세요.' },
      { food: '부대찌개', reason: '여럿이서 북적북적하게 먹으며 스트레스를 푸세요.' }
    ]
  },
  'sick': {
    'default': [
      { food: '본죽', reason: '몸이 안 좋을 땐 따뜻하고 소화 잘 되는 죽이 최고입니다.' },
      { food: '전복죽', reason: '영양 가득한 전복죽으로 건강을 회복하세요.' },
      { food: '쌀죽', reason: '자극적이지 않은 음식으로 위를 보호해 주세요.' }
    ]
  },
  'fire': {
    'Clear': [
      { food: '스테이크 하우스', reason: '불타는 열정엔 그에 걸맞는 고기 요리가 제격입니다.' },
      { food: '양꼬치', reason: '열정적인 대화와 함께 즐기기 좋은 최고의 메뉴!' }
    ],
    'default': [
      { food: '마라탕', reason: '뜨거운 열정을 더 뜨겁게 만들어줄 화끈한 맛!' },
      { food: '닭발', reason: '스트레스를 날려버릴 화끈한 매운맛의 끝판왕!' }
    ]
  },
  'default': {
    'default': [
      { food: '비빔밥', reason: '영양 가득한 한 끼로 기분 전환을 해보세요.' },
      { food: '김치찌개', reason: '한국인의 소울푸드로 든든하게 채워보세요.' }
    ]
  }
};
