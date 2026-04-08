"use client";

import Link from 'next/link'

export default function ProfilePage() {
  const yuHyun = {
    name: "유 현",
    birth: "2004.12.17",
    stats: {
      "키/몸무게": "165cm / 48kg",
      "성격": "INFP / 불안형 멘헤라",
      "취미": "프로그래밍, 서예, 기타 치기, 새벽에 우울해하기",
      "좋아하는 것": "조용한 곳, 손편지, '상혁'",
      "싫어하는 것": "바쁜 연락, '지루해하는 시선'",
    },
    tags: ["불안형", "INFP", "공대생", "집착", "손편지", "새벽", "멘헤라", "165cm", "서예"],
    portrait: "/yhnng.png",
  };

  const sangHyeok = {
    name: "상 혁",
    birth: "1996.05.07",
    stats: {
      "키/몸무게": "177cm / 56kg",
      "성격": "ISTP인 척하는 ENFP / 안정형",
      "취미": "리그 오브 레전드, 서예, 유현이 관찰",
      "좋아하는 것": "승리, 유현이의 불안한 연락",
      "싫어하는 것": "무의미한 시간, 유현이가 울 때",
    },
    tags: ["안정형", "ISTP(enfp)", "프로게이머", "관찰", "다정", "서예", "LoL", "177cm", "안식처"],
    portrait: "/shnng.png",
  };

  return (
    <div className="min-h-screen bg-[#030303] py-24 px-6 text-[#ffffff] font-sans selection:bg-[#E4002B]/30">

      {/* 상단 레드 라인 */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />

      <div className="max-w-5xl mx-auto">

        {/* 헤더 */}
        <div className="flex items-center justify-center gap-4 mb-24">
          <div className="h-[1px] w-8 bg-[#E4002B]" />
          <img src="/T1logo.png" alt="T1" className="w-5 h-5 object-contain opacity-70" />
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30">
            Official Pair Profile
          </p>
          <img src="/T1logo.png" alt="T1" className="w-5 h-5 object-contain opacity-70" />
          <div className="h-[1px] w-8 bg-[#E4002B]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative">
          {/* 중앙 구분선 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 transform -translate-x-1/2" />

          {/* ── 유현 (Left) ── */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="w-56 h-56 flex items-center justify-center relative">
                {/* 포트레이트 코너 장식 */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E4002B]" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E4002B]/40" />
                <img src={yuHyun.portrait} alt="YuHyun" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tighter text-white">{yuHyun.name}</h2>
                <p className="text-xs font-black text-[#E4002B] mt-2 tracking-[0.3em]">{yuHyun.birth}</p>
              </div>
            </div>

            {/* 스탯 */}
            <div className="space-y-5 pt-2">
              {Object.entries(yuHyun.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5 text-left border-l border-white/5 pl-4 hover:border-[#E4002B]/40 transition-colors">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">{key}</span>
                  <span className="text-[13px] text-white/70 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 pt-2">
              {yuHyun.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/[0.03] text-white/30 text-[9px] font-black border border-white/8 uppercase tracking-wider hover:border-[#E4002B]/40 hover:text-white/60 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── 상혁 (Right) ── */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col items-center md:items-end gap-8">
              <div className="w-56 h-56 flex items-center justify-center relative">
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E4002B]" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E4002B]/40" />
                <img src={sangHyeok.portrait} alt="SangHyeok" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center md:text-right">
                <h2 className="text-4xl font-black tracking-tighter text-white">{sangHyeok.name}</h2>
                <p className="text-xs font-black text-[#E4002B] mt-2 tracking-[0.3em]">{sangHyeok.birth}</p>
              </div>
            </div>

            {/* 스탯 */}
            <div className="space-y-5 pt-2 text-right">
              {Object.entries(sangHyeok.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5 items-end border-r border-white/5 pr-4 hover:border-[#E4002B]/40 transition-colors">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">{key}</span>
                  <span className="text-[13px] text-white/70 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-end">
              {sangHyeok.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/[0.03] text-white/30 text-[9px] font-black border border-white/8 uppercase tracking-wider hover:border-[#E4002B]/40 hover:text-white/60 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 타임라인 ── */}
        <div className="mt-64 mb-32 relative">
          <div className="flex flex-col items-center mb-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#E4002B]" />
              <div className="w-1.5 h-1.5 bg-[#E4002B] rotate-45" />
              <div className="h-[1px] w-8 bg-[#E4002B]" />
            </div>
            <h3 className="text-[11px] font-black tracking-[0.6em] text-white/60 uppercase italic">
              The Chronicle of Origin
            </h3>
          </div>

          <div className="relative max-w-2xl mx-auto px-6">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E4002B] via-white/10 to-transparent transform -translate-x-1/2" />

            <div className="space-y-32">
              {/* 1996 */}
              <div className="relative flex items-center justify-between">
                <div className="w-[42%] text-right group">
                  <span className="text-[11px] font-black text-[#E4002B] tracking-widest">1996</span>
                  <p className="text-white text-[15px] font-bold mt-1">서울, 이상혁 출생</p>
                  <div className="h-[1px] w-0 group-hover:w-full bg-[#E4002B]/30 transition-all duration-500 ml-auto mt-2" />
                </div>
                <div className="z-10 w-2.5 h-2.5 bg-[#E4002B] rounded-full shadow-[0_0_10px_#E4002B]" />
                <div className="w-[42%]" />
              </div>

              {/* 2004 */}
              <div className="relative flex items-center justify-between">
                <div className="w-[42%]" />
                <div className="z-10 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="w-[42%] text-left group">
                  <span className="text-[11px] font-black text-white/30 tracking-widest">2004</span>
                  <p className="text-white text-[15px] font-bold mt-1">인천, 이유현 출생</p>
                  <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-500 mt-2" />
                </div>
              </div>

              {/* 2013 */}
              <div className="relative flex items-center justify-between">
                <div className="w-[42%] text-right">
                  <span className="text-[11px] font-black text-[#E4002B] tracking-widest">2013</span>
                  <p className="text-white text-[14px] font-medium mt-1">이상혁 프로게이머 데뷔</p>
                </div>
                <div className="z-10 w-2 h-2 bg-[#E4002B] rounded-full" />
                <div className="w-[42%]" />
              </div>

              {/* 2024 */}
              <div className="relative flex items-center justify-between">
                <div className="w-[42%]" />
                <div className="z-10 w-2 h-2 bg-white/60 rounded-full" />
                <div className="w-[42%] text-left">
                  <span className="text-[11px] font-black text-white/30 tracking-widest">2024</span>
                  <p className="text-white text-[14px] font-medium mt-1">이유현 인공지능공학과 입학</p>
                </div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center justify-between">
                <div className="w-[42%] text-right">
                  <span className="text-[11px] font-black text-[#E4002B] tracking-widest">2025</span>
                  <p className="text-[#E4002B] text-[17px] font-black mt-1 leading-tight">이상혁 월즈 쓰리핏 달성</p>
                  <p className="text-[9px] text-white/20 mt-1 font-black tracking-[0.3em] uppercase">The Greatest of All Time</p>
                </div>
                <div className="z-10 w-4 h-4 bg-[#E4002B] rounded-full ring-4 ring-[#E4002B]/20 shadow-[0_0_20px_rgba(228,0,43,0.6)]" />
                <div className="w-[42%]" />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-40 pt-12 border-t border-white/5 flex justify-center">
          <Link
            href="/"
            className="text-[9px] font-black text-white/15 hover:text-white tracking-[0.5em] uppercase transition-all duration-300 border-b border-transparent hover:border-[#E4002B] pb-1"
          >
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
}
