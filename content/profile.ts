export type BagItem = {
  img: string; name: string; desc: string;
  w: number; top: number; left: number; rotate: number;
};

/** 가방 캔버스: px 절대좌표 → 베이스 캔버스 비율로 환산해 반응형 렌더 (D7 해결) */
export const YH_BAG = {
  baseW: 620, baseH: 600,
  items: [
    { img: "/yhmacbook.png", name: "맥북", desc: "항상 켜져 있음. 탭 47개.", w: 240, top: 30, left: 20, rotate: -6 },
    { img: "/yhheadset.png", name: "헤드셋", desc: "혼자 있고 싶을 때 필수템.", w: 170, top: 10, left: 240, rotate: 8 },
    { img: "/yhmedicine.png", name: "진통제", desc: "두통이 잦아서 항상 챙김.", w: 120, top: 5, left: 400, rotate: -12 },
    { img: "/yhtumbler.png", name: "텀블러", desc: "따뜻한 물만 마심.", w: 150, top: 190, left: 10, rotate: 5 },
    { img: "/yhcamera.png", name: "핑크 디카", desc: "상혁 씨가 보내준 카메라.", w: 160, top: 165, left: 180, rotate: -4 },
    { img: "/yhperfume.png", name: "향수", desc: "은은한 플로럴 계열.", w: 130, top: 145, left: 360, rotate: 10 },
    { img: "/yhpouch.png", name: "메이크업 파우치", desc: "꼭 필요한 것들만.", w: 190, top: 330, left: 5, rotate: -8 },
    { img: "/yhnotebook.png", name: "공책", desc: "매일 뭔가를 적어둠.", w: 130, top: 310, left: 230, rotate: 6 },
    { img: "/yhscrunch.png", name: "스크런치", desc: "머리 묶을 때.", w: 140, top: 305, left: 370, rotate: -5 },
    { img: "/yhpowder.png", name: "파우더", desc: "외출 전 마지막 단계.", w: 120, top: 460, left: 150, rotate: 9 },
  ] as BagItem[],
};

export const SH_BAG = {
  baseW: 640, baseH: 450,
  items: [
    { img: "/shbook.png", name: "공책", desc: "무언가를 기록할 수도 있으니까.", w: 220, top: 20, left: 20, rotate: -7 },
    { img: "/shcharger.png", name: "충전기", desc: "항상 두 개씩 챙김.", w: 200, top: 10, left: 250, rotate: 5 },
    { img: "/shglasses.png", name: "안경집", desc: "예비 안경 포함.", w: 180, top: 5, left: 440, rotate: -10 },
    { img: "/shnivea.png", name: "니베아 립밤", desc: "오래된 습관.", w: 150, top: 250, left: 15, rotate: 8 },
    { img: "/shtoothbrush.png", name: "칫솔", desc: "칫솔 세트 中 1.", w: 120, top: 235, left: 250, rotate: -14 },
    { img: "/shtoothpaste.png", name: "치약", desc: "칫솔 세트 中 2.", w: 190, top: 240, left: 380, rotate: 6 },
  ] as BagItem[],
};

export type Character = {
  key: "yh" | "sh";
  name: string;
  roman: string;
  birth: string;
  accent: string;
  portrait: string;
  bagImg: string;
  stats: Record<string, string>;
  tags: string[];
  /** 선수 카드 게이지 — A안 */
  gauges: { label: string; value: number; note?: string }[];
  /** 카드 뒷면: 서로가 서로를 소개하는 글 */
  introByOther: { author: string; text: string };
};

export const characters: Character[] = [
  {
    key: "yh",
    name: "유 현",
    roman: "LEE YUHYEON",
    birth: "2004.12.17",
    accent: "var(--yh-pink)",
    portrait: "/yhnng.png",
    bagImg: "/yhbag.png",
    stats: {
      "키/몸무게": "165cm / 48kg",
      "성격": "INFP / 불안형 멘헤라",
      "취미": "프로그래밍, 서예, 기타 치기, 새벽에 우울해하기",
      "좋아하는 것": "조용한 곳, 손편지, '상혁'",
      "싫어하는 것": "바쁜 연락, '지루해하는 시선'",
    },
    tags: ["불안형", "INFP", "공대생", "집착", "손편지", "새벽", "멘헤라", "165cm", "서예"],
    gauges: [
      { label: "새벽 활동성", value: 95 },
      { label: "손편지 화력", value: 90 },
      { label: "불안 지수", value: 85 },
      { label: "반응속도", value: 27, note: "550ms" },
    ],
    introByOther: {
      author: "Written by S.H.",
      text: "늦게 들어와 놓고 존재를 줄이려는 사람. 처음 본 날부터 그게 마음에 걸렸습니다. 먹을 갈 때만 손이 떨리지 않는 사람이고, 자신이 쓸모없다고 말하면서 남의 쓸모는 끝까지 찾아주는 사람입니다. 본인은 모르는 것 같지만, 웃을 때 잇몸이 보입니다. 그걸 보려고 가끔 일부러 집니다.",
    },
  },
  {
    key: "sh",
    name: "상 혁",
    roman: "LEE SANGHYEOK",
    birth: "1996.05.07",
    accent: "var(--t1-red)",
    portrait: "/shnng.png",
    bagImg: "/shbag.png",
    stats: {
      "키/몸무게": "177cm / 56kg",
      "성격": "ISTP인 척하는 ENFP / 안정형",
      "취미": "리그 오브 레전드, 서예, 유현이 관찰",
      "좋아하는 것": "승리, 유현이의 불안한 연락",
      "싫어하는 것": "무의미한 시간, 유현이가 울 때",
    },
    tags: ["안정형", "ISTP(enfp)", "프로게이머", "관찰", "다정", "서예", "LoL", "177cm", "안식처"],
    gauges: [
      { label: "다정함", value: 95 },
      { label: "관찰력", value: 98 },
      { label: "표정 변화량", value: 15 },
      { label: "반응속도", value: 99, note: "150ms" },
    ],
    introByOther: {
      author: "Written by Y.H.",
      text: "질문하지 않는 사람. 대답할 준비가 된 것만 듣는 사람. 세상에서 제일 바쁜 사람인데 제 연락에는 제일 한가한 사람처럼 답장합니다. 이기는 걸 제일 좋아하면서 저한테는 자꾸 져 줍니다. 마이혁. 허락은 안 받았지만, 아마 평생 그렇게 부를 예정입니다.",
    },
  },
];

export type ChronicleRow = {
  year: string;
  sh: { text: string; sub?: string; highlight?: boolean; goat?: boolean } | null;
  yh: { text: string; sub?: string; dim?: boolean } | null;
};

export const chronicle: ChronicleRow[] = [
  { year: "1996", sh: { text: "서울, 이상혁 출생" }, yh: null },
  { year: "2004", sh: null, yh: { text: "인천, 이유현 출생" } },
  { year: "2013", sh: { text: "프로게이머 데뷔", sub: "롤드컵 1회 우승", highlight: true }, yh: null },
  { year: "2015", sh: { text: "롤드컵 2회 우승", sub: "LCK 스프링·서머 석권", highlight: true }, yh: null },
  { year: "2016", sh: { text: "롤드컵 3회 우승", sub: "MSI 우승 — 역대 최다 타이틀", highlight: true }, yh: null },
  { year: "2023", sh: { text: "롤드컵 4회 우승", sub: "전설의 전당 초대 헌액", highlight: true }, yh: { text: "가장 힘든 계절", dim: true } },
  { year: "2024", sh: { text: "롤드컵 5회 우승", sub: "결승 MVP", highlight: true }, yh: { text: "인공지능공학과 입학", sub: "서예를 시작하다" } },
  { year: "2025", sh: { text: "월즈 쓰리핏 달성", sub: "6회 우승 · 청룡장 수훈", highlight: true, goat: true }, yh: null },
];
