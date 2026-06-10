export type ExchangeItem = {
  id: string;
  kind: "movie" | "song";
  /** movie = together(가운데), song = from 한쪽 */
  from?: "sh" | "yh";
  title: string;
  artist?: string;         // song
  year?: string;           // movie
  date?: string;           // 본/추천한 날 (선택)
  note: string;
  linkedTo?: { href: string; label: string };
};

export const exchanges: ExchangeItem[] = [
  {
    id: "leon",
    kind: "movie",
    title: "레옹",
    year: "Léon · 1994",
    note: "함께 본 첫 영화. 끝나고 한참을 말없이 걸었다. 이 영화로 받은 글 커미션이 전시실에 있다.",
    linkedTo: { href: "/commission", label: "받은 글 보기 →" },
  },
  {
    id: "laufey",
    kind: "song",
    from: "sh",
    title: "I Wish You Love",
    artist: "Laufey",
    note: "상혁이 보내온 곡. 정말 눈을 돌리고 싶을 때 듣는다고 했다. 제목의 뜻은 묻지 않았다.",
  },
  {
    id: "lover",
    kind: "song",
    from: "yh",
    title: "Lover",
    artist: "Taylor Swift",
    note: "유현이 보낸 곡. 설명은 없었다. 제목만으로 충분하다고 생각했기 때문이다.",
  },
];

export const songSearch = (t: ExchangeItem) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${t.artist ?? ""} ${t.title}`)}`;
