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
    <main className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#E4002B]/20 overflow-x-hidden">

      {/* 상단 레드 라인 */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />

      {/* 뒤로가기 */}
      <Link
        href="/"
        className="fixed top-6 left-6 md:left-12 text-[9px] tracking-[0.4em] text-white/20 hover:text-white transition-all uppercase font-black z-50 flex items-center gap-2"
      >
        <span className="text-[#E4002B]">←</span> BACK
      </Link>

      <div className="max-w-lg mx-auto px-6 py-28">

        {/* 헤더 */}
        <header className="text-center mb-20 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-6 bg-[#E4002B]" />
            <img src="/T1logo.png" alt="T1" className="w-4 h-4 object-contain opacity-50" />
            <div className="h-[1px] w-6 bg-[#E4002B]" />
          </div>
          <h2 className="text-[10px] tracking-[0.7em] text-white/20 uppercase font-black">Dialogue Fragments</h2>
          <p className="text-white/15 text-[10px] italic tracking-wider">"어느 날, 우리가 나누었던 조각들."</p>
        </header>

        {/* 대화 그룹 */}
        <div className="space-y-20">
          {dialogues.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">

              {/* 날짜 */}
              <div className="flex items-center gap-3 sticky top-6 z-10">
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-[9px] font-black text-[#E4002B] tracking-[0.3em] italic bg-[#030303] px-3 py-1 border border-[#E4002B]/20">
                  {group.date}
                </span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>

              {/* 메시지들 */}
              <div className="space-y-4">
                {group.messages.map((msg, msgIdx) => (
                  <div key={msgIdx} className={`flex flex-col ${msg.side === 'right' ? 'items-end' : 'items-start'}`}>

                    {/* 발신자 이름 */}
                    <span className={`text-[9px] font-black tracking-[0.3em] uppercase mb-1.5 ${msg.side === 'right' ? 'text-[#E4002B]/50' : 'text-white/20'}`}>
                      {msg.sender}
                    </span>

                    {/* 버블 */}
                    <div className={`max-w-[82%] px-4 py-3 text-[13px] leading-relaxed break-keep tracking-tight ${
                      msg.side === 'right'
                        ? 'bg-[#E4002B]/10 border border-[#E4002B]/25 text-white/80 rounded-2xl rounded-tr-none'
                        : 'bg-white/[0.04] border border-white/8 text-white/55 rounded-2xl rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 푸터 */}
        <footer className="pt-32 pb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-white/5" />
            <div className="w-1 h-1 bg-[#E4002B]/40 rotate-45" />
            <div className="h-[1px] w-6 bg-white/5" />
          </div>
          <p className="text-[9px] text-white/10 tracking-[0.5em] uppercase italic font-black">To be continued with you.</p>
        </footer>
      </div>
    </main>
  );
}
