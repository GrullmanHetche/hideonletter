export type Commission = {
  id: string;
  kind: "art" | "text";
  file: string;            // public/ 경로
  title: string;
  subtitle: string;
  note: string;            // 캡션 — 받은 맥락
  received?: string;       // 받은 날짜 (선택)
  linkedTo?: { href: string; label: string };
  /** art 전용: 액자 비율 */
  ratio?: string;
  /** 같은 작가의 연작 묶음 표시 (선택) */
  series?: string;
};

export const commissions: Commission[] = [
  {
    id: "holdinghyuk",
    kind: "art",
    file: "/holdinghyuk.jpg",
    title: "피규어를 든 사람",
    subtitle: "그림 커미션 · 흉상",
    note: "유현이 상혁의 피규어를 들고 있다. 들고 있는 쪽이 더 소중해 보이는 그림.",
    ratio: "3/4",
  },
  {
    id: "ynm",
    kind: "text",
    file: "/ynm.png",
    title: "독백",
    subtitle: "글 커미션 · 이상혁 시점",
    note: "상혁의 시점에서 쓰인 독백. 말하지 않는 사람의 말이 여기 있다.",
  },
  {
    id: "yhfull",
    kind: "art",
    file: "/yhfull.jpg",
    title: "한 판 꽉",
    subtitle: "그림 커미션 · 선화",
    note: "유현을 화면 가득 담은 선화. 여백 없이 꽉 찬 한 장.",
    ratio: "3/4",
  },
  {
    id: "childshyh",
    kind: "art",
    file: "/childshyh.gif",
    title: "손바닥 위의 상혁",
    subtitle: "그림 커미션 · 어린이날",
    note: "어린이날 기념. 어린이가 된 유현이 상혁을 손에 들고 있다. 움직이는 그림.",
    ratio: "1/1",
  },
  {
    id: "mirrorsy",
    kind: "art",
    file: "/mirrorsy.jpg",
    title: "방, 거울",
    subtitle: "그림 커미션 · 거울 연작",
    note: "방 안에서 둘이 함께 찍은 거울 셀카.",
    ratio: "3/4",
    series: "거울 연작",
  },
  {
    id: "snowsy",
    kind: "art",
    file: "/snowsy.jpg",
    title: "겨울, 거울",
    subtitle: "그림 커미션 · 거울 연작",
    note: "겨울날의 거울 셀카. 〈방, 거울〉과 같은 작가의 같은 손끝.",
    ratio: "3/4",
    series: "거울 연작",
  },
  {
    id: "yhsheet",
    kind: "art",
    file: "/yhsheet.jpg",
    title: "유현 설정 시트",
    subtitle: "그림 커미션 · 캐릭터 시트",
    note: "큰 처진 눈, 토끼 핀, 점 두 개. 유현을 이루는 것들을 한 장에 모아둔 설정화.",
  },
  {
    id: "yhbunny",
    kind: "art",
    file: "/yhbunny.jpg",
    title: "토끼 핀",
    subtitle: "그림 커미션 · 반신",
    note: "토끼 핀을 꽂은 유현의 반신. 인과 아웃 사이 쌍꺼풀까지 담겼다.",
  },
  {
    id: "pairexam",
    kind: "text",
    file: "/pairexam.pdf",
    title: "전국연합페어평가",
    subtitle: "글 커미션 · 모의고사 · @monzi_0_0",
    note: "상혁과 유현을 문제로 푸는 14문항짜리 페어고사. 정답과 해설, 둘의 한마디까지 붙어 있다.",
  },
  {
    id: "leon",
    kind: "text",
    file: "/leon.pdf",
    title: "레옹을 보고",
    subtitle: "글 커미션",
    note: "영화 〈레옹〉을 함께 본 뒤 받은 글. 같이 본 기록은 Exchange에도 남아 있다.",
    linkedTo: { href: "/exchange", label: "함께 본 기록 →" },
  },
  {
    id: "shnyhlove",
    kind: "text",
    file: "/shnyhlove.pdf",
    title: "외사랑과 짝사랑",
    subtitle: "글 커미션 · 조각글",
    note: "유현은 외사랑을, 상혁은 짝사랑을 한다. 같은 방향을 다르게 부르는 두 단어에 대하여.",
  },
];
