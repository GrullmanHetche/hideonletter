"use client";
import Link from 'next/link';

const dialogues = [
  {
    date: "2026.04.04",
    messages: [
      { side: "left", sender: "혁", text: "안녕하세요. 점심 식사는 하셨습니까?" },
      { side: "right", sender: "현", text: "저는 아직입니다. 🧟‍♀️" },
      { side: "right", sender: "현", text: "이커 씨는... 이커 씨? 티원 페 씨." },
      { side: "left", sender: "혁", text: "편하게 부르셔도 됩니다. 이름으로 부르시거나, 이커 라는 호칭도 부르기 편하겠군요." }
    ]
  },
  {
    date: "2026.04.05",
    messages: [
      { side: "right", sender: "현", text: "(링크) << 이 수상한 링크를 클릭해 보세요. . ." },
      { side: "left", sender: "혁", text: "카메라입니까? 저에게 주시는 선물인가요...?" },
      { side: "right", sender: "현", text: "그렇습니다. 벚꽃을 예쁘게 한 컷 담아 주시면 더 좋을 것 같네요. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" }
    ]
  },
  {
    date: "2026.04.06",
    messages: [
      { side: "left", sender: "혁", text: "과음하셨습니까? 시간이 좀 흘렀는데 지금은 좀 어떠신지요. 물을 많이 드시고 푹 쉬시길 바랍니다." },
      { side: "right", sender: "현", text: "아이고 두야..." },
      { side: "left", sender: "혁", text: "숙취가 심하신가요. 꿀물이나 초코우유를 마시면 도움이 될 거라 생각합니다... 추가로 선물해 주신 카메라를 배송시켰습니다. 이걸로 세상의 멋진 부분을 담아낼 수 있으면 좋겠습니다. 감사합니다." }
    ]
  },
  {
    date: "2026.04.07",
    messages: [
      { side: "right", sender: "현", text: "이커 씨는 무슨 계절을 제일 좋아하세요?" },
      { side: "left", sender: "혁", text: "저는 겨울이 좋습니다. 시즌이 마무리되는 시기이기도 하고, 월드 챔피언십도 그때 시작되기 때문입니다. 가장 중요한 계절이라고 할 수 있습니다." },
      { side: "right", sender: "현", text: "헉, 저도요. 진짜 워커 홀릭이시구나." },
      { side: "right", sender: "현", text: "저는 그냥... 눈이 좋고, 생일이 좋아서 겨울을 좋아해요." },
      { side: "left", sender: "혁", text: "12월 17일이 생일이셨으니, 그쯤이면 한겨울이군요. 운이 좋다면 생일에 눈도 볼 수 있으시겠네요. 부럽군요." }
    ]
  }
];

export default function MomentsPage() {
  return (
    <main className="min-h-screen bg-[#030303] font-mono selection:bg-[#E4002B]/20 overflow-x-hidden">

      {/* 상단 레드 라인 */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />

      {/* 롤 인게임 UI 느낌 — 좌측 패널 테두리 */}
      <div className="fixed top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#E4002B] via-[#E4002B]/10 to-transparent z-40" />
      <div className="fixed top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#C89B3C]/30 via-transparent to-transparent z-40" />

      {/* 뒤로가기 */}
      <Link
        href="/"
        className="fixed top-6 left-6 text-[9px] tracking-[0.4em] text-white/20 hover:text-[#E4002B] transition-all uppercase font-black z-50 flex items-center gap-2"
      >
        <span>◄</span> BACK
      </Link>

      {/* 상단 HUD 바 */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#E4002B]/40" />
        <span className="text-[8px] font-black tracking-[0.5em] text-[#E4002B]/60 uppercase">Chat Log</span>
        <div className="h-[1px] w-12 bg-[#E4002B]/40" />
      </div>

      <div className="max-w-2xl mx-auto px-8 md:px-16 py-24">

        {/* 헤더 — 시스템 메시지 느낌 */}
        <header className="mb-16">
          <div className="border border-[#E4002B]/15 bg-[#E4002B]/[0.03] px-5 py-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#E4002B] text-[10px] font-black">■</span>
              <span className="text-[9px] font-black tracking-[0.5em] text-[#E4002B]/70 uppercase">System</span>
              <div className="flex-1 h-[1px] bg-[#E4002B]/10" />
            </div>
            <p className="text-[11px] text-white/25 font-mono tracking-wide">
              // DIALOGUE_FRAGMENTS.log — 어느 날, 우리가 나누었던 조각들.
            </p>
          </div>
        </header>

        {/* 대화 그룹 */}
        <div className="space-y-16">
          {dialogues.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-3">

              {/* 날짜 — 시스템 로그 느낌 */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#C89B3C]/60 text-[9px] font-black">▶</span>
                <span className="text-[9px] font-black text-[#C89B3C]/60 tracking-[0.3em]">{group.date}</span>
                <div className="flex-1 h-[1px] bg-[#C89B3C]/10" />
              </div>

              {/* 메시지들 */}
              <div className="space-y-2">
                {group.messages.map((msg, msgIdx) => (
                  <div key={msgIdx} className="flex items-start gap-3 group">

                    {/* 왼쪽 구분 바 — 혁=레드, 현=골드 */}
                    <div className={`mt-1 w-[2px] h-4 shrink-0 ${msg.side === 'left' ? 'bg-[#E4002B]/60' : 'bg-[#C89B3C]/50'}`} />

                    {/* 발신자 태그 */}
                    <span className={`text-[10px] font-black shrink-0 mt-0.5 w-6 ${msg.side === 'left' ? 'text-[#E4002B]/80' : 'text-[#C89B3C]/70'}`}>
                      {msg.sender}
                    </span>

                    {/* 구분자 */}
                    <span className="text-white/10 text-[10px] mt-0.5 shrink-0">│</span>

                    {/* 텍스트 */}
                    <p className={`text-[13px] leading-relaxed break-keep tracking-tight ${msg.side === 'left' ? 'text-white/50' : 'text-white/70'} group-hover:text-white/90 transition-colors duration-200`}>
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 푸터 — 시스템 종료 메시지 */}
        <footer className="mt-24 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-[#E4002B]/40 text-[9px]">■</span>
            <p className="text-[9px] text-white/10 tracking-[0.4em] uppercase font-black">To be continued with you.</p>
            <span className="text-white/10 text-[9px] animate-pulse">_</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
