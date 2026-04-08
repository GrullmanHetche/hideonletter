"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showSecret, setShowSecret] = useState(false);
  const [pass, setPass] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#E4002B] selection:text-white flex flex-col overflow-x-hidden">

      {/* 배경 — 얇은 레드 글로우 라인 (T1 공홈 느낌) */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-[#E4002B] opacity-60 z-50" />
      <div className="fixed inset-0 pointer-events-none">
        {/* 대각선 레드 액센트 라인 */}
        <div className="absolute top-0 right-0 w-[1px] h-[45vh] bg-gradient-to-b from-[#E4002B] to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-[1px] h-[30vh] bg-gradient-to-t from-[#E4002B] to-transparent opacity-20" />
      </div>

      {/* 네비게이션 */}
      <nav className="relative z-40 px-8 md:px-16 pt-8 pb-6 flex justify-between items-center w-full border-b border-white/5">
        <div className="flex flex-col">
          <span className="text-[11px] tracking-[0.55em] font-black text-[#E4002B] uppercase">HIDEONLETTER</span>
          <span className="text-[9px] tracking-[0.3em] text-white/20 uppercase mt-0.5">Official Archive</span>
        </div>
        <div className="flex items-center space-x-8 text-[9px] tracking-[0.35em] text-white/30 uppercase font-bold">
          <Link href="/profile" className="hover:text-white transition-colors duration-200 hover:tracking-[0.4em]">Profile</Link>
          <Link href="/playlist" className="hover:text-white transition-colors duration-200 hover:tracking-[0.4em]">Playlist</Link>
          <Link href="/schedule" className="hover:text-[#E4002B] transition-colors duration-200">Schedule</Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-24 max-w-5xl">

        {/* 섹션 레이블 */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-[2px] bg-[#E4002B]" />
          <span className="text-[9px] tracking-[0.55em] text-[#E4002B] uppercase font-black">Introduction</span>
        </div>

        {/* 메인 타이틀 — 훨씬 굵고 임팩트 있게 */}
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-[-0.03em] leading-[1.05] break-keep mb-10">
          다정한 무지 속에<br />
          <span className="text-white/50 font-extralight italic">머무는 기록.</span>
        </h1>

        {/* 서브 텍스트 */}
        <p className="max-w-md text-[13px] leading-[1.9] text-white/35 break-keep mb-16 font-light border-l-2 border-[#E4002B]/40 pl-5">
          성공의 뒷면에는 항상 실패의 형태가 남아있습니다. 그것을 고치려 하지 않고, 그저 곁에 머무는 것만으로 충분했던 어느 계절의 기록입니다.
        </p>

        {/* CTA 버튼들 */}
        <div className="flex flex-col space-y-5">

          {/* Read the Narrative — 메인 CTA */}
          <Link href="/archive" className="group flex items-center gap-5 w-fit">
            <div className="flex items-center justify-center w-9 h-9 border border-[#E4002B] bg-[#E4002B]/10 group-hover:bg-[#E4002B] transition-all duration-300">
              <span className="text-[#E4002B] group-hover:text-white text-xs font-black transition-colors">→</span>
            </div>
            <span className="text-white text-[11px] tracking-[0.35em] uppercase font-black group-hover:text-[#E4002B] transition-colors duration-200">Read the Narrative</span>
          </Link>

          {/* View the Moments */}
          <Link href="/moments" className="group flex items-center gap-5 w-fit">
            <div className="flex items-center justify-center w-9 h-9 border border-white/10 group-hover:border-white/40 transition-all duration-300">
              <span className="text-white/20 group-hover:text-white text-xs font-black transition-colors">→</span>
            </div>
            <span className="text-white/30 text-[11px] tracking-[0.35em] uppercase font-bold group-hover:text-white transition-colors duration-200">View the Moments</span>
          </Link>

          {/* Private Message */}
          <div
            onClick={() => setShowSecret(true)}
            className="group flex items-center gap-5 w-fit cursor-pointer pt-4"
          >
            <div className="flex items-center justify-center w-9 h-9 border border-white/5 group-hover:border-white/20 transition-all duration-300">
              <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">💌</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/20 text-[9px] tracking-[0.45em] font-black uppercase group-hover:text-white transition-colors duration-200">Private Message</span>
              <span className="text-white/10 text-[9px] tracking-widest font-light group-hover:text-white/30 transition-colors">내 속마음이 알고 싶어?</span>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {showSecret && (
        <div className="fixed inset-0 bg-[#030303]/98 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
          {/* 모달 테두리 라인 */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#E4002B]" />

          <div className="max-w-lg w-full p-10 relative border border-white/5">
            {/* 모달 코너 장식 */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E4002B]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E4002B]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E4002B]/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E4002B]/40" />

            <button
              onClick={() => { setShowSecret(false); setIsUnlocked(false); setPass(""); }}
              className="absolute top-4 right-4 text-white/20 hover:text-white text-[9px] tracking-[0.4em] uppercase font-black transition-colors"
            >
              [ EXIT ]
            </button>

            {!isUnlocked ? (
              <div className="flex flex-col items-center space-y-8 py-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-[2px] bg-[#E4002B]" />
                  <p className="text-[9px] text-[#E4002B] tracking-[0.5em] uppercase font-black italic">Input the master key</p>
                  <div className="w-4 h-[2px] bg-[#E4002B]" />
                </div>
                <input
                  type="password"
                  maxLength={4}
                  className="bg-transparent border-b-2 border-white/10 focus:border-[#E4002B] text-center py-4 outline-none transition-colors tracking-[1em] text-2xl w-48 text-white font-black"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    if (e.target.value === "0409") setIsUnlocked(true);
                  }}
                  autoFocus
                />
                <p className="text-[9px] text-white/10 tracking-widest uppercase">Hint: Today's date</p>
              </div>
            ) : (
              <div className="space-y-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="h-[2px] w-10 bg-[#E4002B]" />
                <div className="text-[14px] leading-loose text-white/60 font-light break-keep">
                  "져도 지인짜 괜찮아요, 마이혁! <br /><br />
                  무슨 일이 있어도 이커 씨 편인 사람이 있다는 걸 기억해 ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎ "
                </div>
                <div className="text-right pt-8">
                  <p className="text-[9px] text-white/20 tracking-[0.3em] italic uppercase">— Logged by Yu-Hyun —</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 푸터 */}
      <footer className="relative px-8 md:px-16 py-7 flex justify-between items-center border-t border-white/5 text-[9px] tracking-[0.35em] text-white/15 uppercase">
        <div>© 2026 HIDEONLETTER.</div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-[1px] bg-[#E4002B]/40" />
          <span className="text-white/20 tracking-[0.3em] text-[10px] font-bold">S.H.Lee & Y.H.Lee</span>
        </div>
      </footer>

    </main>
  );
}
