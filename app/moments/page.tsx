"use client";
import Link from 'next/link';

const dialogues = [
  {
    date: "2026.04.11",
    messages: [
      { side: "right", sender: "현", text: "(사진) 펭... 이커."},
      { side: "left", sender: "혁", text: "귀엽네요." },
      { side: "left", sender: "혁", text: "유현 씨도 동물을 하나 정하면 좋을 것 같은데요." },
      { side: "left", sender: "혁", text: "그럼 제가 부를 수 있을 것 같습니다." },
      { side: "left", sender: "혁", text: "생각할 수도 있고요." },
      { side: "right", sender: "현", text: "원숭이? 어떠신가요." },
      { side: "left", sender: "혁", text: "이유가 있나요? 특이한데요." },
      { side: "right", sender: "현", text: "별다른 이유는 없구... 원숭이 띠예요." },
      { side: "left", sender: "혁", text: "아아." },
      { side: "right", sender: "현", text: "아니면 너구리." },
      { side: "left", sender: "혁", text: "그럼 전 쥐로 했어도 됐네요." },
      { side: "left", sender: "혁", text: "너구리는 닮아서인가요?" },
      { side: "right", sender: "현", text: "고등학교 때 별명이 너구리였습니다. 너굴현. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" },
      { side: "left", sender: "혁", text: "귀여우니까 너구리로 하죠." },
      { side: "right", sender: "현", text: "근데 이커 씨… 이커 씨? 티원 페 씨. 암튼 이커 씨는 고양이 아닌가요." },
      { side: "left", sender: "혁", text: "그냥 상혁 씨라고 해도 되는데요." }
    ]
  },
  {
    date: "2026.04.11",
    messages: [
      { side: "left", sender: "혁", text: "우리혁이라는 말이 제일 좋습니다." },
      { side: "right", sender: "현", text: "마이혁. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎."},
      { side: "right", sender: "현", text: "저는 사석에서 마이혁이라는 단어를 꽤 즐겨 쓰는 편인데요. 어느 날 친구가 그럼 경기 지면 유어혁이냐고 물은 적이 있습니다."},
      { side: "right", sender: "현", text: "그래서… 너무 큰 실수를 했다면 솔직히 한 20분 정도는 유어혁으로 부른다고 대답해 줬습니다…"},
      { side: "left", sender: "혁", text: "아......" },
      { side: "left", sender: "혁", text: "유어혁......" },
      { side: "left", sender: "혁", text: "조금 슬픈 단어네요." },
      { side: "right", sender: "현", text: "......"},
      { side: "right", sender: "현", text: "그래도 대부분의 시간은 마이혁이라고 부릅니다… 허락은 안 받았지만요."},
      { side: "left", sender: "혁", text: "괜찮습니다. 마이혁도 꽤 자주 나와요." },
      { side: "right", sender: "현", text: "흠. 그러면 저는 NVRAM혁이라고 부르겠습니다."},
      { side: "left", sender: "혁", text: "...무슨 의미인가요?" },
      { side: "right", sender: "현", text: "비밀입니다."},
      { side: "left", sender: "혁", text: "뭔가 컴퓨터에서 엄청 중요한 것 같습니다." },
      { side: "right", sender: "현", text: "NVRAM은 비휘발성 메모리인데 속도도 빠른 친구예요."},
      { side: "left", sender: "혁", text: "모스부호인가요?" },
      { side: "right", sender: "현", text: "음..."},
      { side: "right", sender: "현", text: "보통 사람들은 머릿속에서 금방 잊히는 일반 램 같은 존재지만, 이커 씨는 엔브이램처럼 제가 잠시 셧다운 되더라도 다시 눈을 떴을 때 기억나는 존재라는 뜻이에요."},
      { side: "right", sender: "현", text: "컴퓨터의 날짜, 시간, 부팅 순서를 정하는 데가 엔브이램… 이거든요. 그런데 막상 말하고 보니까 그게 뭔데, **아 << 이거 같네."},
      { side: "left", sender: "혁", text: "아, 이해했습니다." },
      { side: "left", sender: "혁", text: "감사합니다." },
      { side: "left", sender: "혁", text: "좋은데요. 그런 존재라면......되고 싶습니다." },
      { side: "right", sender: "현", text: "조금 부끄럽네요. 숨겠습니다."}
    ]
  },
  {
    date: "2026.04.12",
    messages: [
      { side: "right", sender: "현", text: "(사진) 예상치 못하게 꽃놀이도 했습니다. 그런데 너무 오르막이라 올라가다 눈물이 났어요." },
      { side: "left", sender: "혁", text: "예뻐요." },
      { side: "left", sender: "혁", text: "벚꽃을 저렇게 담고 있는 것도 좋네요." },
      { side: "left", sender: "혁", text: "카메라가 아니라 현 씨가 들고 있는 게...네." },
      { side: "right", sender: "현", text: "헤헤." },
      { side: "right", sender: "현", text: "저 운모도 봤어요." },
      { side: "left", sender: "혁", text: "진짜요?" },
      { side: "left", sender: "혁", text: "어쩌다가?" },
      { side: "right", sender: "현", text: "박물관에 있던데요?" },
      { side: "right", sender: "현", text: "사진도 찍어 왔어요. 보실래요?" },
      { side: "left", sender: "혁", text: "네." },
      { side: "left", sender: "혁", text: "강화도라는 이야기 못 들었는데, 이상하다." },
      { side: "right", sender: "현", text: "(사진) 운모(real)" },
      { side: "left", sender: "혁", text: "아." },
      { side: "left", sender: "혁", text: "！Σ(×_×;)！" },
      { side: "right", sender: "현", text: "(ᵔe.eᵔ)" },
      { side: "left", sender: "혁", text: "속았네요." },
      { side: "right", sender: "현", text: "이건 눈이 빠진 건가요?" },
      { side: "left", sender: "혁", text: "네." },
    ]
  },
  {
    date: "2026.04.15",
    messages: [
      { side: "left", sender: "혁", text: "책......" },
      { side: "left", sender: "혁", text: "가끔요." },
      { side: "right", sender: "현", text: "흠." },
      { side: "left", sender: "혁", text: "정말 눈을 돌리고 싶을 때." },
      { side: "right", sender: "현", text: "눈을 돌리고 싶을 때... 그렇구나. 상혁 씨에게 책은 그런 의미군요." },
      { side: "right", sender: "현", text: "흠. 책이 무겁지는 않으세요? 아무래도 읽으시는 책은 부피가 조금 있을 것 같아서요." },
      { side: "left", sender: "혁", text: "그래서 들고 다니기보다는 이북을 선호하기도 합니다." },
      { side: "left", sender: "혁", text: "근데 스크린은 또 오래 보면 집중이 잘 안 되더군요." },
      { side: "left", sender: "혁", text: "역시 책은 아날로그가 좋은 것 같기도 하지만..." },
      { side: "left", sender: "혁", text: "어쩔 수 없죠." },
      { side: "right", sender: "현", text: "(링크) 별거 아니지만 요긴하게 쓰실 것 같아서 준비했어요. 화이트랑 블랙 중에 고민을 엄청 했는데 막상 구매를 누르니까 화이트는 품절이더라고요. (〃∇〃) >" },
      { side: "right", sender: "현", text: "(링크) 이건 넣고 다니실 파우치예요. 뭔가 안 어울리는 것 같기도 하지만... 그러게 누가 탄생화가 딸기인 날에 태어나라고 했나 귀엽게" },
      { side: "right", sender: "현", text: "정말 눈을 돌리고 싶을 때 제 생각도 가끔 해 주세요. 저는 그걸로 충분합니다." },
      { side: "left", sender: "혁", text: "쓸 때마다 생각나겠네요." },
      { side: "left", sender: "혁", text: "감사합니다. 오면 바로 써볼게요." },
      { side: "right", sender: "현", text: "헤헤. 괜찮으신 것 같다면 다행입니다. 너무 어렵지 않은 책... 중에 마음에 드시는 게 있다면 저도 소개해 주세요." },
    ]
  },
  {
    date: "2026.04.16",
    messages: [
      { side: "left", sender: "혁", text: "날이 따스해서 졸고 있었어요." },
      { side: "right", sender: "현", text: "귀엽다. 꾸벅꾸벅 조는 고양이네요." },
      { side: "right", sender: "현", text: "햇살 맞으면서 조는 모습을 생각하니까 깨물고 싶습니다." },
      { side: "right", sender: "현", text: "앙. 🐱" },
      { side: "left", sender: "혁", text: "깨무는 건가요?" },
      { side: "left", sender: "혁", text: "！Σ(×_×;)！" },
      { side: "left", sender: "혁", text: "아프지 않게 해주세요." },
      { side: "right", sender: "현", text: "완전 아프게 할 겁니다." },
      { side: "right", sender: "현", text: "송곳니를 갈아서...더보기" },
      { side: "left", sender: "혁", text: "봐주시면 안 될까요?" },
      { side: "left", sender: "혁", text: "졸았더니 벌을 받는 것 같기도..." },
      { side: "right", sender: "현", text: "... 저는 나름대로 애정 표현을 한 거긴 한데." },
      { side: "right", sender: "현", text: "그럼 안 깨물겠습니다. 대신 노려보기." },
      { side: "left", sender: "혁", text: "노려보기요?" },
      { side: "left", sender: "혁", text: "눈싸움을 하는 것 같습니다." },
      { side: "right", sender: "현", type: "eyes" },
      { side: "left", sender: "혁", type: "eyes" },
      { side: "right", sender: "현", text: "귀여워..." },
      { side: "right", sender: "현", text: "X.X" },
      { side: "left", sender: "혁", text: "이겼군요." },
      { side: "left", sender: "혁", text: "아깝습니다." },
      { side: "right", sender: "현", text: "이기는 거 엄청 좋아하시지 않나요." },
      { side: "right", sender: "현", text: "그런데 저는 지는 이커 씨도 좋습니다." },
      { side: "left", sender: "혁", text: "그래도요. 현 씨도 이기고 싶을 수 있잖아요." },
      { side: "right", sender: "현", text: "이커 씨한테 지는 거면 영광이죠." },
    ]
  },
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
                    <div className={`mt-1 w-[2px] shrink-0 ${msg.type === 'eyes' ? 'h-16' : 'h-4'} ${msg.side === 'left' ? 'bg-[#E4002B]/60' : 'bg-[#C89B3C]/50'}`} />

                    {/* 발신자 태그 */}
                    <span className={`text-[10px] font-black shrink-0 mt-0.5 w-6 ${msg.side === 'left' ? 'text-[#E4002B]/80' : 'text-[#C89B3C]/70'}`}>
                      {msg.sender}
                    </span>

                    {/* 구분자 */}
                    <span className="text-white/10 text-[10px] mt-0.5 shrink-0">│</span>

                    {/* 눈 이모지 특수 처리 */}
                    {msg.type === 'eyes' ? (
                      <p className="text-5xl leading-none py-1">👀</p>
                    ) : (
                      <p className={`text-[13px] leading-relaxed break-keep tracking-tight ${msg.side === 'left' ? 'text-white/50' : 'text-white/70'} group-hover:text-white/90 transition-colors duration-200`}>
                        {msg.text}
                      </p>
                    )}
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
