"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showSecret, setShowSecret] = useState(false);
  const [pass, setPass] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="min-h-screen bg-black text-stone-400 font-sans selection:bg-stone-800 selection:text-white flex flex-col justify-between">
      <nav className="p-6 md:p-10 flex justify-between items-center z-50">
        <span className="text-xs tracking-[0.4em] font-black text-white uppercase">HIDEONLETTER</span>
        <div className="flex space-x-8 text-[10px] tracking-widest text-stone-600 uppercase font-medium">
          <Link href="/profile" className="hover:text-white transition-colors">Profile</Link>
          <Link href="/playlist" className="hover:text-white transition-colors">Playlist</Link>
          <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
        </div>
      </nav>

      <section className="px-8 md:px-20 max-w-4xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-[10px] tracking-[0.5em] text-stone-700 uppercase font-bold">Introduction</h2>
          <h1 className="text-white text-4xl md:text-6xl font-extralight tracking-tighter leading-tight break-keep">
            다정한 무지 속에 <br /> <span className="italic">머무는 기록.</span>
          </h1>
        </div>
        <div className="max-w-md space-y-6 text-[14px] leading-relaxed font-light text-stone-500 break-keep">
          <p>성공의 뒷면에는 항상 실패의 형태가 남아있습니다. 그것을 고치려 하지 않고, 그저 곁에 머무는 것만으로 충분했던 어느 계절의 기록입니다.</p>
          <p>우리는 서로의 이름을 모르던 때부터 이미 서로를 향해 걷고 있었습니다.</p>
          
          {/* ✅ 버튼 섹션: Narrative와 Moments */}
          <div className="pt-8 flex flex-col space-y-4">
            <Link href="/archive" className="group inline-flex items-center space-x-4 text-white text-xs tracking-widest uppercase font-bold w-fit">
              <span>Read the Narrative</span>
              <span className="w-8 h-[1px] bg-stone-700 group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
            </Link>
            
            <Link href="/moments" className="group inline-flex items-center space-x-4 text-stone-500 hover:text-white text-[10px] tracking-[0.3em] uppercase font-medium w-fit transition-all">
              <span>View the Moments</span>
              <span className="w-4 h-[1px] bg-stone-900 group-hover:w-8 group-hover:bg-[#e2002b] transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 💌 시크릿 섹션 */}
      <section className="px-8 md:px-20 py-20">
        <div 
          onClick={() => setShowSecret(true)}
          className="group cursor-pointer inline-flex flex-col items-start space-y-3"
        >
          <div className="flex items-center space-x-3 text-stone-800 group-hover:text-white transition-colors duration-500">
            <span className="text-xl">💌</span>
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase">Private Message</span>
          </div>
          <p className="text-[11px] text-stone-700 font-light tracking-widest group-hover:text-stone-400 transition-colors">
            내 속마음이 알고 싶어?
          </p>
        </div>

        {showSecret && (
          <div className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
            <div className="max-w-lg w-full p-10 relative">
              <button 
                onClick={() => { setShowSecret(false); setIsUnlocked(false); setPass(""); }}
                className="absolute top-0 right-0 text-stone-700 hover:text-white text-[10px] tracking-widest"
              >
                [ EXIT ]
              </button>

              {!isUnlocked ? (
                <div className="flex flex-col items-center space-y-8 py-20">
                  <p className="text-[10px] text-stone-700 tracking-[0.5em] uppercase italic">Input the master key</p>
                  <input 
                    type="password"
                    maxLength={4}
                    className="bg-transparent border-b border-stone-900 text-center py-4 outline-none focus:border-white transition-colors tracking-[1em] text-2xl w-48 text-white font-light"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                      if(e.target.value === "0404") setIsUnlocked(true);
                    }}
                    autoFocus
                  />
                  <p className="text-[9px] text-stone-900 tracking-widest">Hint: YOUR BIRTHDAY</p>
                </div>
              ) : (
                <div className="space-y-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <div className="h-[1px] w-12 bg-[#e2002b]"></div>
                  <div className="text-[15px] leading-loose text-stone-300 font-light break-keep">
                    "오늘 경기 너무 멋있었어요! 😍 
                    중계 화면으로 보니까 조그매서 뭔가 귀여웠어요. <br /><br />
                    과제도 많고 할 공부도 많은 하루지만 2세트에서 깔끔하게 끝내서 너무 힘났당 ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎ "
                  </div>
                  <div className="text-right pt-8">
                    <p className="text-[10px] text-stone-600 tracking-[0.3em] italic uppercase">- Logged by Yu-Hyun -</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <footer className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0 text-[10px] tracking-widest text-stone-700 uppercase">
        <div>© 2026 HIDEONLETTER. All rights reserved.</div>
        <div className="flex space-x-12">
          <div className="space-y-1">
            <p className="text-[9px] text-stone-800 tracking-tighter">Collaborator</p>
            <p className="text-[11px] text-stone-500 tracking-widest">S.H.Lee & Y.H.Lee</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[9px] text-stone-800 tracking-tighter">Location</p>
            <p className="text-[11px] text-stone-500 tracking-widest">Seoul, KR</p>
          </div>
        </div>
      </footer>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
}
