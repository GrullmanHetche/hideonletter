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
    kind: "art",
    file: "/ynm.png",
    title: "독백",
    subtitle: "그림 커미션",
    note: "상혁의 독백. 말하지 않는 사람의 말이 여기 있다.",
    ratio: "3/4",
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
