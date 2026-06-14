export interface FortuneData {
  id: string;
  name: string;
  hanja: string;
  emoji: string;
  zodiac: string;
  fortune: string;
  advice: string;
  luckyColor: string;
  luckyNumber: number;
  luckyDirection: string;
  luckyMissions: string[];
}

export const fortuneCookieMessages = [
  "오늘 당신에게 행운이 찾아올 거예요.",
  "작은 기쁨이 큰 행복으로 이어집니다.",
  "당신의 노력이 곧 결실을 맺을 것입니다.",
  "새로운 인연이 기다리고 있습니다.",
  "자신을 믿으세요. 당신은 충분히 잘하고 있습니다.",
  "뜻밖의 소식이 기쁨을 가져다줄 것입니다.",
  "포기하지 마세요. 성공이 코앞에 있습니다.",
  "오늘은 웃음이 끊이지 않는 하루가 될 거예요.",
  "가장 밝은 별은 당신 안에 있습니다.",
  "모든 일이 순조롭게 풀릴 것입니다.",
  "지금 하는 고민은 곧 해결될 문제입니다.",
  "소중한 사람에게 연락 한 통 해보세요.",
  "당신의 미소가 주변을 밝게 만듭니다.",
  "오늘은 평소보다 조금 더 과감해져도 좋습니다.",
  "하늘을 한 번 올려다보세요. 마음이 편안해질 거예요.",
  "작은 선행이 큰 복이 되어 돌아옵니다.",
  "오늘은 당신이 주인공인 날입니다.",
  "천천히 가도 괜찮습니다. 방향이 중요하니까요.",
  "원하는 것을 향해 한 걸음 더 나아가세요.",
  "당신은 생각보다 훨씬 더 강한 사람입니다."
];

export const zodiacData: FortuneData[] = [
  {
    id: 'rat',
    name: '쥐띠',
    hanja: '子',
    emoji: '🐭',
    zodiac: '자',
    fortune: '오늘은 작은 일에도 기쁨을 느끼게 될 것입니다. 주변 사람들과의 화합이 좋습니다.',
    advice: '성급한 판단보다는 한 발 물러서서 관찰하는 지혜가 필요합니다.',
    luckyColor: '하얀색',
    luckyNumber: 1,
    luckyDirection: '북쪽',
    luckyMissions: [
      "파란색 필기구 사용하기",
      "주변 사람에게 먼저 인사하기",
      "오늘의 점심 메뉴 양보하기"
    ],
  },
  {
    id: 'ox',
    name: '소띠',
    hanja: '丑',
    emoji: '🐮',
    zodiac: '축',
    fortune: '꾸준한 노력이 결실을 맺는 하루입니다. 정직하게 행동하면 큰 보답이 있을 것입니다.',
    advice: '주위의 조언을 귀담아들으면 뜻밖의 기회를 잡을 수 있습니다.',
    luckyColor: '노란색',
    luckyNumber: 5,
    luckyDirection: '북동쪽',
    luckyMissions: [
      "거울 보며 5초간 웃기",
      "책 한 페이지 끝까지 읽기",
      "따뜻한 물 한 잔 마시기"
    ],
  },
  {
    id: 'tiger',
    name: '호랑이띠',
    hanja: '寅',
    emoji: '🐯',
    zodiac: '인',
    fortune: '활기가 넘치는 하루입니다. 새로운 도전을 하기에 아주 좋은 시기입니다.',
    advice: '자신감을 가지되 독단적인 행동은 삼가야 합니다.',
    luckyColor: '초록색',
    luckyNumber: 3,
    luckyDirection: '동쪽',
    luckyMissions: [
      "기지개 크게 켜기",
      "새로운 노래 한 곡 듣기",
      "자신 있는 일 한 가지 완수하기"
    ],
  },
  {
    id: 'rabbit',
    name: '토끼띠',
    hanja: '卯',
    emoji: '🐰',
    zodiac: '묘',
    fortune: '평화롭고 안정적인 하루가 예상됩니다. 예술적인 감각이 빛을 발할 것입니다.',
    advice: '섬세한 감수성을 발휘하여 주변을 따뜻하게 보살펴보세요.',
    luckyColor: '연두색',
    luckyNumber: 4,
    luckyDirection: '동쪽',
    luckyMissions: [
      "식물에게 물 주기",
      "예쁜 사진 한 장 찍기",
      "누군가에게 칭찬 한 마디 하기"
    ],
  },
  {
    id: 'dragon',
    name: '용띠',
    hanja: '辰',
    emoji: '🐲',
    zodiac: '진',
    fortune: '강한 에너지가 분출되는 날입니다. 리더십을 발휘하여 일을 주도해 보세요.',
    advice: '너무 과한 욕심은 화를 부를 수 있으니 적절한 조절이 필요합니다.',
    luckyColor: '청색',
    luckyNumber: 5,
    luckyDirection: '동남쪽',
    luckyMissions: [
      "계단으로 1층 올라가기",
      "오늘의 할 일 목록 작성하기",
      "스스로에게 선물 주기"
    ],
  },
  {
    id: 'snake',
    name: '뱀띠',
    hanja: '巳',
    emoji: '🐍',
    zodiac: '사',
    fortune: '직관력이 예리해지는 날입니다. 중요한 결정을 내리기에 적합한 시기입니다.',
    advice: '냉철한 분석을 통해 실수를 줄이는 것이 관건입니다.',
    luckyColor: '보라색',
    luckyNumber: 2,
    luckyDirection: '남동쪽',
    luckyMissions: [
      "주머니 속 동전 확인하기",
      "심호흡 3번 하기",
      "필요 없는 물건 정리하기"
    ],
  },
  {
    id: 'horse',
    name: '말띠',
    hanja: '午',
    emoji: '🐴',
    zodiac: '오',
    fortune: '시원하게 뻗어 나가는 운세입니다. 여행이나 이동수가 있어 활동량이 많아집니다.',
    advice: '열정을 불태우되 체력 안배에도 신경을 써야 합니다.',
    luckyColor: '빨간색',
    luckyNumber: 7,
    luckyDirection: '남쪽',
    luckyMissions: [
      "창문 열고 환기하기",
      "가벼운 산책 10분 하기",
      "오늘 입은 옷 정리하기"
    ],
  },
  {
    id: 'sheep',
    name: '양띠',
    hanja: '未',
    emoji: '🐑',
    zodiac: '미',
    fortune: '온화하고 부드러운 기운이 감도는 날입니다. 대인관계에서 이득이 생깁니다.',
    advice: '양보하는 미덕을 발휘하면 더 큰 결과로 돌아올 것입니다.',
    luckyColor: '베이지색',
    luckyNumber: 8,
    luckyDirection: '남서쪽',
    luckyMissions: [
      "부드러운 천 만져보기",
      "가족에게 안부 묻기",
      "차 한 잔의 여유 즐기기"
    ],
  },
  {
    id: 'monkey',
    name: '원숭이띠',
    hanja: '申',
    emoji: '🐵',
    zodiac: '신',
    fortune: '재치가 번뜩이는 하루입니다. 복잡한 문제도 쉽게 해결할 수 있는 날입니다.',
    advice: '지나친 장난은 오해를 부를 수 있으니 진중함도 잊지 마세요.',
    luckyColor: '금색',
    luckyNumber: 9,
    luckyDirection: '서남쪽',
    luckyMissions: [
      "재미있는 농담 하나 하기",
      "두뇌 게임 한 판 하기",
      "주변 정리정돈 하기"
    ],
  },
  {
    id: 'rooster',
    name: '닭띠',
    hanja: '酉',
    emoji: '🐔',
    zodiac: '유',
    fortune: '계획했던 일들이 착착 진행되는 날입니다. 성실함이 최고의 무기가 됩니다.',
    advice: '정확한 시간을 지키고 약속을 이행하는 자세가 중요합니다.',
    luckyColor: '은색',
    luckyNumber: 10,
    luckyDirection: '서쪽',
    luckyMissions: [
      "알람 소리 바꿔보기",
      "약속 장소에 5분 일찍 도착하기",
      "오늘 하루 감사한 일 기록하기"
    ],
  },
  {
    id: 'dog',
    name: '개띠',
    hanja: '戌',
    emoji: '🐶',
    zodiac: '술',
    fortune: '충실한 노력에 대한 보상이 따르는 날입니다. 신뢰를 얻어 일이 잘 풀립니다.',
    advice: '의리를 지키는 모습이 주변 사람들에게 깊은 인상을 줄 것입니다.',
    luckyColor: '갈색',
    luckyNumber: 5,
    luckyDirection: '서북쪽',
    luckyMissions: [
      "반려동물과 시간 보내기 (없다면 영상 보기)",
      "신발 가지런히 놓기",
      "친구에게 응원 메시지 보내기"
    ],
  },
  {
    id: 'pig',
    name: '돼지띠',
    hanja: '亥',
    emoji: '🐷',
    zodiac: '해',
    fortune: '재물운이 상승하는 기분 좋은 하루입니다. 풍요로운 마음으로 지낼 수 있습니다.',
    advice: '베푸는 기쁨을 느껴보세요. 나중에 더 큰 복으로 돌아올 것입니다.',
    luckyColor: '검정색',
    luckyNumber: 6,
    luckyDirection: '북서쪽',
    luckyMissions: [
      "저금통에 동전 넣기",
      "맛있는 간식 하나 먹기",
      "스스로를 칭찬해주기"
    ],
  },
];
