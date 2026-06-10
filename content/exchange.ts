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
    note: "함께 본 첫 영화. 유현은 영화가 끝나고 한참을 말없이 걸었다. 이 영화로 받은 글 커미션이 전시실에 있다.",
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
  {
    id: "87dance",
    kind: "song",
    from: "sh",
    title: "87dance",
    artist: "beautiful complex",
    note: "상혁이 건넨 곡. 96년생이 87을 보내는 건 무슨 의미일까, 유현은 한참을 생각했다.",
  },
  {
    id: "hush",
    kind: "song",
    from: "yh",
    title: "Hush",
    artist: "도깨비 OST",
    note: "유현이 골라 보낸 도깨비 OST. 쓸쓸한 계절을 함께 건너자는 말은 끝내 적지 못했다.",
  },
];

export const songSearch = (t: ExchangeItem) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${t.artist ?? ""} ${t.title}`)}`;
