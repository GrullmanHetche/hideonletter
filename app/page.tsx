"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showSecret, setShowSecret] = useState(false);
  const [pass, setPass] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#E4002B] selection:text-white flex flex-col overflow-x-hidden">

      {/* ── 상단 레드 라인 ── */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />

      {/* ── 배경 장식 ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {/* 롤 마법진 — 오른쪽 하단 희미하게 */}
        <svg
          className="absolute bottom-[-120px] right-[-120px] opacity-[0.045] w-[600px] h-[600px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="190" stroke="#E4002B" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="185" stroke="#C89B3C" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="155" stroke="#E4002B" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="148" stroke="#C89B3C" strokeWidth="0.3" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="110" stroke="#E4002B" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="104" stroke="#C89B3C" strokeWidth="0.3" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="65" stroke="#E4002B" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="30" stroke="#C89B3C" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="8" stroke="#E4002B" strokeWidth="1" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 200 + Math.cos(angle) * 30;
            const y1 = 200 + Math.sin(angle) * 30;
            const x2 = 200 + Math.cos(angle) * 190;
            const y2 = 200 + Math.sin(angle) * 190;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E4002B" strokeWidth="0.4" />;
          })}
          <polygon
            points="200,45 262,78 310,145 310,255 262,322 200,355 138,322 90,255 90,145 138,78"
            stroke="#C89B3C"
            strokeWidth="0.4"
            fill="none"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 200 + Math.cos(angle) * 155;
            const cy = 200 + Math.sin(angle) * 155;
            return (
              <rect
                key={i}
                x={cx - 3}
                y={cy - 3}
                width="6"
                height="6"
                transform={`rotate(45 ${cx} ${cy})`}
                fill="#C89B3C"
                fillOpacity="0.9"
              />
            );
          })}
        </svg>

        {/* 왼쪽 수직 레드 라인 */}
        <div className="absolute top-0 left-[15%] w-[1px] h-[40vh] bg-gradient-to-b from-[#E4002B] to-transparent opacity-20" />
        {/* 오른쪽 골드 라인 */}
        <div
          className="absolute top-0 right-[8%] w-[1px] h-[55vh] bg-gradient-to-b from-[#C89B3C]/30 to-transparent"
          style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
        />
      </div>

      {/* ── 네비게이션 ── */}
      <nav className="relative z-40 px-8 md:px-16 pt-8 pb-6 flex justify-between items-center w-full border-b border-white/5">
        <div className="flex flex-col">
          <span className="text-[11px] tracking-[0.55em] font-black text-[#E4002B] uppercase">HIDEONLETTER</span>
          <span className="text-[9px] tracking-[0.3em] text-white/20 uppercase mt-0.5">Official Archive</span>
        </div>
        <div className="flex items-center space-x-8 text-[9px] tracking-[0.35em] text-white/30 uppercase font-bold">
          <Link href="/profile" className="hover:text-white transition-colors duration-200">Profile</Link>
          <Link href="/playlist" className="hover:text-white transition-colors duration-200">Playlist</Link>
          <Link href="/schedule" className="hover:text-[#E4002B] transition-colors duration-200">Schedule</Link>
        </div>
      </nav>

      {/* ── 메인 컨텐츠 ── */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-24 max-w-5xl relative z-10">

        {/* T1 로고 + 섹션 레이블 */}
        <div className="flex items-center gap-4 mb-10">
          <img
            src="/T1logo.png"
            alt="T1"
            className="w-7 h-7 object-contain opacity-90"
          />
          <div className="w-[1px] h-4 bg-white/15" />
          <div className="w-5 h-[2px] bg-[#E4002B]" />
          <span className="text-[9px] tracking-[0.55em] text-[#E4002B] uppercase font-black">Introduction</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-[-0.03em] leading-[1.05] break-keep mb-10">
          다정한 무지 속에<br />
          <span className="text-white/40 font-extralight italic">머무는 기록.</span>
        </h1>

        {/* 서브 텍스트 */}
        <p className="max-w-md text-[13px] leading-[1.9] text-white/35 break-keep mb-16 font-light border-l-2 border-[#E4002B]/40 pl-5">
          성공의 뒷면에는 항상 실패의 형태가 남아있습니다. 그것을 고치려 하지 않고, 그저 곁에 머무는 것만으로 충분했던 어느 계절의 기록입니다.
        </p>

        {/* CTA 버튼들 */}
        <div className="flex flex-col space-y-5">
          <Link href="/archive" className="group flex items-center gap-5 w-fit">
            <div className="flex items-center justify-center w-9 h-9 border border-[#E4002B] bg-[#E4002B]/10 group-hover:bg-[#E4002B] transition-all duration-300">
              <span className="text-[#E4002B] group-hover:text-white text-xs font-black transition-colors">→</span>
            </div>
            <span className="text-white text-[11px] tracking-[0.35em] uppercase font-black group-hover:text-[#E4002B] transition-colors duration-200">Read the Narrative</span>
          </Link>

          <Link href="/moments" className="group flex items-center gap-5 w-fit">
            <div className="flex items-center justify-center w-9 h-9 border border-white/10 group-hover:border-white/40 transition-all duration-300">
              <span className="text-white/20 group-hover:text-white text-xs font-black transition-colors">→</span>
            </div>
            <span className="text-white/30 text-[11px] tracking-[0.35em] uppercase font-bold group-hover:text-white transition-colors duration-200">View the Moments</span>
          </Link>

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

      {/* ── 모달 ── */}
      {showSecret && (
        <div className="fixed inset-0 bg-[#030303]/98 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E4002B]" />
          <div className="max-w-lg w-full p-10 relative border border-white/5">
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
                    if (e.target.value === "0507") setIsUnlocked(true);
                  }}
                  autoFocus
                />
                <p className="text-[9px] text-white/10 tracking-widest uppercase">Hint: Your Birthday</p>
              </div>
            ) : (
              <div className="space-y-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="h-[2px] w-10 bg-[#E4002B]" />
                <div className="text-[14px] leading-loose text-white/60 font-light break-keep">
                  "져도 괜찮아! 어떤 경기를 해도 이커 씨는 저한테 마이혁이에요. <br /><br />
                  오늘 진다고 모든 경기를 지는 건 아니니까요. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎ "
                </div>
                <div className="text-right pt-8">
                  <p className="text-[9px] text-white/20 tracking-[0.3em] italic uppercase">— Logged by Yu-Hyun —</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 푸터 ── */}
      <footer className="relative z-10 px-8 md:px-16 py-7 flex justify-between items-center border-t border-white/5 text-[9px] tracking-[0.35em] text-white/15 uppercase">
        <div className="flex items-center gap-3">
          <img src="/T1logo.png" alt="T1" className="w-4 h-4 object-contain opacity-20" />
          <span>© 2026 HIDEONLETTER.</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-[1px] bg-[#E4002B]/40" />
          <span className="text-white/20 tracking-[0.3em] text-[10px] font-bold">S.H.Lee & Y.H.Lee</span>
        </div>
      </footer>

    </main>
  );
}
