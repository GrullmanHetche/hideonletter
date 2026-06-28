export type EventItem = {
  type: "match" | "rtmsi" | "personal" | "holiday" | "exam";
  label: string;
  sub?: string;
  result?: "W" | "L";
  score?: string;
  venue?: string;
};

export type Season = { label: string; from: string; to: string };  // from/to = YYYY-MM-DD, to 포함

export const SEASONS: Season[] = [
  { label: "MSI 2026", from: "2026-06-29", to: "2026-07-12" },
];

export const EVENTS: Record<string, EventItem[]> = {

  // ─ 기념일
  "2026-06-06": [
    { type: "holiday", label: "현충일" },
  ],

  // ─ LCK 정규시즌 2R 잔여 (상대·결과 미정)
  "2026-06-02": [
    { type: "match", label: "T1 LCK 2R", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-06-05": [
    { type: "match", label: "T1 LCK 2R", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],

  // ─ 유현 기말고사
  "2026-06-08": [
    { type: "exam", label: "선형대수 시험", sub: "기말고사" },
  ],
  "2026-06-10": [
    { type: "exam", label: "통계학 · 현대시읽기", sub: "기말고사" },
  ],
  "2026-06-11": [
    { type: "exam", label: "자료구조 시험", sub: "기말고사" },
  ],
  "2026-06-12": [
    { type: "exam", label: "종강 · 종강총회 🎉", sub: "기말고사 마지막 날" },
    { type: "rtmsi", label: "Road to MSI 3R", sub: "1시드 결정전 (1위 vs 2위)", venue: "원주 DB프로미 아레나" },
  ],
  "2026-06-13": [
    { type: "rtmsi", label: "Road to MSI 4R", sub: "3위 vs 2R 승자", venue: "원주 DB프로미 아레나" },
  ],
  "2026-06-14": [
    { type: "rtmsi", label: "Road to MSI 최종전", sub: "MSI 2시드 결정", venue: "원주 DB프로미 아레나" },
  ],

  // ─ Road to MSI 1~2R (롤파크, 날짜 미정 → 6/9~10 예상)
  "2026-06-09": [
    { type: "rtmsi", label: "Road to MSI 1~2R", sub: "5위 vs 6위 → 4위 vs 승자", venue: "치지직 롤파크" },
  ],
};
