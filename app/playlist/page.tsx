"use client";

import Link from 'next/link'

export default function PlaylistPage() {
  return (
    <div className="min-h-screen bg-[#000000] py-32 px-6 flex flex-col items-center selection:bg-[#e2002b]/30 font-sans">
      
      {/* 헤더 */}
      <div className="max-w-5xl w-full mb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#555555]">
            SOUND ARCHIVE: FAKE
          </p>
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
        </div>
        
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase mb-4">
          Playlist.
        </h1>
        <p className="text-[11px] text-[#444444] font-medium tracking-[0.5em] uppercase">
          Tracing the artificial emotions
        </p>
      </div>

      {/* 애플 뮤직 임베드용 플레이어 */}
      <div className="w-full max-w-[660px] overflow-hidden rounded-[2.5rem] border border-[#1a1a1a] shadow-[0_30px_100px_rgba(226,0,43,0.05)] bg-[#111111]">
        <iframe 
          allow="autoplay *; encrypted-media *;" 
          frameBorder="0" 
          height="450" 
          style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }} 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/kr/playlist/fake/pl.u-EdAVkrVTaZEMgky"
        ></iframe>
      </div>

      {/* 하단 메인으로 돌아가기 버튼 */}
      <div className="mt-32">
        <Link 
          href="/" 
          className="text-[10px] font-black text-[#222222] hover:text-white tracking-[0.4em] uppercase transition-all duration-300 border-b border-transparent hover:border-white pb-1"
        >
          Back to Main
        </Link>
      </div>

    </div>
  );
}