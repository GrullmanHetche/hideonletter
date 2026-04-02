'use client'

import Link from 'next/link'

export default function Home() {
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
          <div className="pt-8">
            {/* ✅ 여기가 /archive로 가는 버튼! */}
            <Link href="/archive" className="group inline-flex items-center space-x-4 text-white text-xs tracking-widest uppercase font-bold">
              <span>Read the Narrative</span>
              <span className="w-8 h-[1px] bg-stone-700 group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
            </Link>
          </div>
        </div>
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
  )
}