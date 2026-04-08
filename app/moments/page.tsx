"use client";
import Link from 'next/link';

// 유현님과 혁님의 설레는 대화 데이터
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
      { side: "left", sender: "혁", text: "카메라입니까? 저에게 주시는 선물인가요...?"},
      { side: "right", sender: "현", text: "그렇습니다. 벚꽃을 예쁘게 한 컷 담아 주시면 더 좋을 것 같네요. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" }
    ]
  },
  {
    date: "2026.04.06",
    messages: [
      { side: "left", sender: "혁", text: "과음하셨습니까? 시간이 좀 흘렀는데 지금은 좀 어떠신지요. 물을 많이 드시고 푹 쉬시길 바랍니다."},
      { side: "right", sender: "현", text: "아이고 두야..."},
      { side: "left", sender: "혁", text: "숙취가 심하신가요. 꿀물이나 초코우유를 마시면 도움이 될 거라 생각합니다... 추가로 선물해 주신 카메라를 배송시켰습니다. 이걸로 세상의 멋진 부분을 담아낼 수 있으면 좋겠습니다. 감사합니다."},
    ]
  },
  {
    date: "2026.04.07",
    messages: [
      { side: "right", sender: "현", text: "이커 씨는 무슨 계절을 제일 좋아하세요?"},
      { side: "left", sender: "혁", text: "저는 겨울이 좋습니다. 시즌이 마무리되는 시기이기도 하고, 월드 챔피언십도 그때 시작되기 때문입니다. 가장 중요한 계절이라고 할 수 있습니다."},
      { side: "right", sender: "현", text: "헉, 저도요. 진짜 워커 홀릭이시구나."},
      { side: "right", sender: "현", text: "저는 그냥... 눈이 좋고, 생일이 좋아서 겨울을 좋아해요."},
      { side: "left", sender: "혁", text: "12월 17일이 생일이셨으니, 그쯤이면 한겨울이군요. 운이 좋다면 생일에 눈도 볼 수 있으시겠네요. 부럽군요."}
    ]
  }
];

export default function MomentsPage() {
  return (
    <main className="min-h-screen bg-black text-stone-300 font-sans p-6 md:p-24 selection:bg-[#e2002b]/20 overflow-x-hidden">
      {/* 뒤로가기 버튼 */}
      <Link 
        href="/" 
        className="fixed top-8 left-6 md:left-24 text-[10px] tracking-[0.4em] text-stone-800 hover:text-white transition-all uppercase font-black z-50 bg-black/50 backdrop-blur-sm p-2"
      >
        ← BACK
      </Link>

      <div className="max-w-xl mx-auto space-y-24 py-20">
        <header className="text-center space-y-4">
          <h2 className="text-[11px] tracking-[0.8em] text-stone-700 uppercase font-bold">Dialogue Fragments</h2>
          <p className="text-stone-500 text-[10px] italic">"어느 날, 우리가 나누었던 조각들."</p>
        </header>

        <div className="space-y-32">
          {dialogues.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-12 relative">
              {/* 날짜 표시 */}
              <div className="sticky top-20 z-10 py-2">
                <span className="text-[10px] font-black text-[#e2002b] tracking-[0.2em] bg-black pr-4 italic">{group.date}</span>
              </div>

              <div className="space-y-10">
                {group.messages.map((msg, msgIdx) => (
                  <div key={msgIdx} className={`flex flex-col ${msg.side === 'right' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] px-5 py-4 text-[14px] leading-relaxed break-keep tracking-tight transition-all duration-500 hover:border-[#e2002b]/40 shadow-xl ${
                      msg.side === 'right' 
                      ? 'bg-[#0a0a0a] border border-stone-900 text-stone-200 rounded-2xl rounded-tr-none' 
                      : 'bg-[#111] border border-[#1a1a1a] text-stone-400 rounded-2xl rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="mt-2 text-[9px] text-stone-800 tracking-widest uppercase font-bold px-1">
                      {msg.sender}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="pt-40 pb-10 text-center">
          <p className="text-[10px] text-stone-900 tracking-[0.5em] uppercase italic font-bold">To be continued with you.</p>
        </footer>
      </div>

      {/* 노이즈 효과 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
}
