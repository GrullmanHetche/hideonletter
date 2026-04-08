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

      {/* ══════════════════════════════
          배경 장식
      ══════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        {/* ① 롤 마법진 — 오른쪽 하단, 훨씬 크고 선명하게 */}
        <svg
          className="absolute bottom-[-200px] right-[-200px] w-[900px] h-[900px] opacity-[0.09]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 동심원 레이어 */}
          <circle cx="200" cy="200" r="192" stroke="#E4002B" strokeWidth="1" />
          <circle cx="200" cy="200" r="186" stroke="#C89B3C" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="200" cy="200" r="170" stroke="#E4002B" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="155" stroke="#C89B3C" strokeWidth="0.4" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="138" stroke="#E4002B" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="130" stroke="#C89B3C" strokeWidth="0.3" strokeDasharray="3 6" />
          <circle cx="200" cy="200" r="110" stroke="#E4002B" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="88"  stroke="#C89B3C" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="65"  stroke="#E4002B" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="44"  stroke="#C89B3C" strokeWidth="0.5" strokeDasharray="2 3" />
          <circle cx="200" cy="200" r="26"  stroke="#E4002B" strokeWidth="1" />
          <circle cx="200" cy="200" r="10"  stroke="#C89B3C" strokeWidth="1.5" />

          {/* 방사형 라인 24개 */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 200 + Math.cos(angle) * 26;
            const y1 = 200 + Math.sin(angle) * 26;
            const x2 = 200 + Math.cos(angle) * 192;
            const y2 = 200 + Math.sin(angle) * 192;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E4002B" strokeWidth="0.3" opacity="0.7" />;
          })}

          {/* 12각형 룬 외곽 */}
          {(() => {
            const pts = Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30 - 90) * Math.PI / 180;
              return `${200 + Math.cos(a) * 170},${200 + Math.sin(a) * 170}`;
            }).join(' ');
            return <polygon points={pts} stroke="#C89B3C" strokeWidth="0.5" fill="none" />;
          })()}

          {/* 8각형 내부 룬 */}
          {(() => {
            const pts = Array.from({ length: 8 }).map((_, i) => {
              const a = (i * 45 - 22.5) * Math.PI / 180;
              return `${200 + Math.cos(a) * 110},${200 + Math.sin(a) * 110}`;
            }).join(' ');
            return <polygon points={pts} stroke="#E4002B" strokeWidth="0.5" fill="none" />;
          })()}

          {/* 6각형 중심 룬 */}
          {(() => {
            const pts = Array.from({ length: 6 }).map((_, i) => {
              const a = (i * 60 - 30) * Math.PI / 180;
              return `${200 + Math.cos(a) * 65},${200 + Math.sin(a) * 65}`;
            }).join(' ');
            return <polygon points={pts} stroke="#C89B3C" strokeWidth="0.7" fill="none" />;
          })()}

          {/* 골드 다이아몬드 마커 — 바깥 원 위 12개 */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const cx = 200 + Math.cos(angle) * 170;
            const cy = 200 + Math.sin(angle) * 170;
            return (
              <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8"
                transform={`rotate(45 ${cx} ${cy})`}
                fill="#C89B3C" fillOpacity="0.9" />
            );
          })}

          {/* 레드 마커 — 중간 원 위 8개 */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 200 + Math.cos(angle) * 110;
            const cy = 200 + Math.sin(angle) * 110;
            return (
              <circle key={i} cx={cx} cy={cy} r="3.5"
                fill="#E4002B" fillOpacity="0.9" />
            );
          })}

          {/* 중심 별 */}
          <circle cx="200" cy="200" r="4" fill="#C89B3C" fillOpacity="0.8" />
        </svg>

        {/* ② 작은 보조 마법진 — 왼쪽 상단 */}
        <svg
          className="absolute top-[-60px] left-[-60px] w-[280px] h-[280px] opacity-[0.04]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="92" stroke="#C89B3C" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="75" stroke="#E4002B" strokeWidth="0.5" strokeDasharray="4 5" />
          <circle cx="100" cy="100" r="55" stroke="#C89B3C" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="32" stroke="#E4002B" strokeWidth="0.5" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 100 + Math.cos(angle) * 32;
            const y1 = 100 + Math.sin(angle) * 32;
            const x2 = 100 + Math.cos(angle) * 92;
            const y2 = 100 + Math.sin(angle) * 92;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E4002B" strokeWidth="0.4" />;
          })}
        </svg>

        {/* ③ 수직 레드 라인들 */}
        <div className="absolute top-0 left-[13%] w-[1px] h-[50vh] bg-gradient-to-b from-[#E4002B] to-transparent opacity-25" />
        <div className="absolute top-0 left-[14%] w-[1px] h-[25vh] bg-gradient-to-b from-[#E4002B] to-transparent opacity-10" />

        {/* ④ 기울어진 골드 라인 */}
        <div
          className="absolute top-0 right-[7%] w-[1px] h-[60vh] bg-gradient-to-b from-[#C89B3C]/50 to-transparent"
          style={{ transform: 'rotate(6deg)', transformOrigin: 'top center' }}
        />
        <div
          className="absolute top-0 right-[9%] w-[1px] h-[35vh] bg-gradient-to-b from-[#C89B3C]/20 to-transparent"
          style={{ transform: 'rotate(6deg)', transformOrigin: 'top center' }}
        />

        {/* ⑤ 수평 스캔라인 느낌 (롤 HUD 감성) */}
        <div className="absolute top-[38%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E4002B]/8 to-transparent" />
        <div className="absolute top-[39%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/5 to-transparent" />
      </div>

      {/* ══════════════════════════════
          네비게이션
      ══════════════════════════════ */}
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

      {/* ══════════════════════════════
          메인 컨텐츠
      ══════════════════════════════ */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-24 max-w-5xl relative z-10">

        {/* T1 로고 — 크게 + 섹션 레이블 */}
        <div className="flex items-center gap-5 mb-12">
          <img
            src="/T1logo.png"
            alt="T1"
            className="w-14 h-14 object-contain opacity-95 drop-shadow-[0_0_12px_rgba(228,0,43,0.4)]"
          />
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-[2px] bg-[#E4002B]" />
              <span className="text-[9px] tracking-[0.55em] text-[#E4002B] uppercase font-black">Introduction</span>
            </div>
            <span className="text-[9px] tracking-[0.3em] text-[#C89B3C]/50 uppercase font-bold">S.H.Lee × Y.H.Lee</span>
          </div>
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

      {/* ══════════════════════════════
          모달
      ══════════════════════════════ */}
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
                  "져도 괜찮아! 무슨 경기 결과가 나와도 이커 씨는 마이혁이에요. <br /><br />
                  항상 응원하는 거 알죠? ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎ "
                </div>
                <div className="text-right pt-8">
                  <p className="text-[9px] text-white/20 tracking-[0.3em] italic uppercase">— Logged by Yu-Hyun —</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          푸터
      ══════════════════════════════ */}
      <footer className="relative z-10 px-8 md:px-16 py-7 flex justify-between items-center border-t border-white/5 text-[9px] tracking-[0.35em] text-white/15 uppercase">
        <div className="flex items-center gap-3">
          <img src="/T1logo.png" alt="T1" className="w-5 h-5 object-contain opacity-25" />
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
