"use client";
import Link from 'next/link';

// 유현님과 혁님의 설레는 대화 데이터
const dialogues = [
  {
    date: "2025.04.04",
    messages: [
      { side: "left", sender: "혁", text: "안녕하세요. 점심 식사는 하셨습니까?" },
      { side: "right", sender: "현", text: "저는 아직입니다. 🧟‍♀️" },
      { side: "right", sender: "현", text: "이커 씨는... 이커 씨? 티원 페 씨." },
      { side: "left", sender: "혁", text: "편하게 부르셔도 됩니다. 이름으로 부르시거나, 이커 라는 호칭도 부르기 편하겠군요." }
    ]
  },
  {
    date: "2025.04.05",
    messages: [
      { side: "right", sender: "현", text: "(링크) << 이 수상한 링크를 클릭해 보세요. . ." },
      { side: "left", sender: "혁", text: "카메라입니까? 저에게 주시는 선물인가요...?"},
      { side: "right", sender: "현", text: "그렇습니다. 벚꽃을 예쁘게 한 컷 담아 주시면 더 좋을 것 같네요. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" }
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
