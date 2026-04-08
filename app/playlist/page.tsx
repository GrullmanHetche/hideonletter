"use client";

import Link from 'next/link'

const trackList = [
  { id: "#1", title: "리턴매치", artist: "이승윤", desc: "Legends Never Die와 이어지는 비장한 에너지. 상혁의 서사를 여는 첫 곡." },
  { id: "#2", title: "Chance!", artist: "페퍼톤스", desc: "기승전결을 뒤엎을 격한 반전의 하이라이트. 기회를 저버리지 않는 상혁의 청량함." },
  { id: "#3", title: "정면돌파", artist: "신인류", desc: "경기를 앞둔 상혁의 비장한 선언." },
  { id: "#4", title: "심해", artist: "청요일", desc: "눅눅하고 축축한 불안 속, 유현의 실낱같은 희망." },
  { id: "#5", title: "반복되는 모든 게 날 괴롭게 해요", artist: "박소은", desc: "유현의 괴로운 일상과 잔잔한 고백." },
  { id: "#6", title: "철의 삶", artist: "정우", desc: "절망과 희망을 함께 안겨주는 유현의 테마." },
  { id: "#7", title: "어리고 부끄럽고 바보 같은", artist: "Xdinary Heroes", desc: "상혁이 유현에게 해주고 싶은 이야기. 두 사람의 연결고리." },
  { id: "#8", title: "애인발견!!!", artist: "자우림", desc: "서예실에서 만난 상혁에게 유현이 천천히 빠져들기 시작한 순간." },
  { id: "#9", title: "Telltale Sign", artist: "에로틱웜즈익스히비션", desc: "사랑에 빠졌을 때 일어나는 특별한 설렘의 시작." },
  { id: "#10", title: "너는 아니?", artist: "MACOMMA", desc: "고요한 방에서 상혁을 그리워하며 쌓아올린 유현의 마음." },
  { id: "#11", title: "커튼콜", artist: "수은", desc: "서로를 향한 더 깊어진 갈망과 사랑의 열망." },
  { id: "#12", title: "Peach Sand", artist: "릴리 잇 머신", desc: "첫 고백, 첫 데이트, 둘이 함께하는 모든 '처음'의 두근거림." },
  { id: "#13", title: "SORA", artist: "최소나", desc: "혼란한 세상 속에서 서로의 구원이 되어주는 두 사람." },
  { id: "#14", title: "STAY WITH ME", artist: "자우림", desc: "나의 유일한 구원에게 외치는 핍진한 사랑 노래." },
  { id: "#15", title: "데네브", artist: "페퍼톤스", desc: "청춘 드라마의 한 장면처럼, 우리의 마지막을 장식할 피날레." },
];

export default function PlaylistPage() {
  return (
    <div className="min-h-screen bg-[#000000] py-32 px-6 flex flex-col items-center selection:bg-[#e2002b]/30 font-sans text-white">
      
      {/* 헤더 */}
      <div className="max-w-5xl w-full mb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#555555]">
            SOUND ARCHIVE: THE NARRATIVE
          </p>
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4 italic">
          Playlist<span className="text-[#e2002b] block md:inline-block md:ml-2">.</span>
        </h1>
        <p className="text-[10px] text-[#444444] font-medium tracking-[0.5em] uppercase">
          Tracing the story of SangHyeok & YuHyeon
        </p>
      </div>

      {/* 애플 뮤직 임베드용 플레이어 */}
      <div className="w-full max-w-[660px] overflow-hidden rounded-[2rem] border border-[#1a1a1a] shadow-[0_30px_100px_rgba(226,0,43,0.08)] bg-[#111111] mb-24">
        <iframe 
          allow="autoplay *; encrypted-media *;" 
          frameBorder="0" 
          height="450" 
          style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }} 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/kr/playlist/fake/pl.u-EdAVkrVTaZEMgky"
        ></iframe>
      </div>

      {/* 트랙 리스트 & 곡 설명 (추가된 부분) */}
      <div className="w-full max-w-[660px] space-y-12 mb-32">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#e2002b]">Track Commentary</h2>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]"></div>
        </div>

        <div className="grid gap-10">
          {trackList.map((track) => (
            <div key={track.id} className="group relative pl-8 border-l border-[#1a1a1a] hover:border-[#e2002b] transition-colors duration-500">
              <span className="absolute left-[-1px] top-0 w-[1px] h-0 bg-[#e2002b] group-hover:h-full transition-all duration-500"></span>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] font-black text-[#333333] group-hover:text-[#e2002b] transition-colors">{track.id}</span>
                  <h3 className="text-[15px] font-bold tracking-tight text-[#eeeeee]">{track.title}</h3>
                  <span className="text-[11px] text-[#444444] font-medium">— {track.artist}</span>
                </div>
                <p className="text-[12px] leading-relaxed text-[#666666] font-light break-keep">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 메인으로 돌아가기 버튼 */}
      <div className="mt-8">
        <Link 
          href="/" 
          className="text-[10px] font-black text-[#333333] hover:text-[#e2002b] tracking-[0.4em] uppercase transition-all duration-300 border-b border-transparent hover:border-[#e2002b] pb-2"
        >
          Back to Archive
        </Link>
      </div>

    </div>
  );
}
