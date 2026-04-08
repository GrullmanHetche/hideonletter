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

        {/* ── 수직 연대기 ── */}
        <div className="mt-64 mb-32">

          {/* 헤더 */}
          <div className="flex flex-col items-center mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-8 bg-[#E4002B]" />
              <div className="w-1.5 h-1.5 bg-[#E4002B] rotate-45" />
              <div className="h-[1px] w-8 bg-[#E4002B]" />
            </div>
            <h3 className="text-[11px] font-black tracking-[0.6em] text-white/50 uppercase italic">
              The Chronicle of Origin
            </h3>
            {/* 컬럼 레이블 */}
            <div className="flex justify-between w-full max-w-3xl mt-10 px-6">
              <span className="text-[9px] font-black tracking-[0.4em] text-[#E4002B] uppercase">상 혁</span>
              <span className="text-[9px] font-black tracking-[0.4em] text-white/25 uppercase">유 현</span>
            </div>
          </div>

          {/* 연대기 아이템들 */}
          <div className="max-w-3xl mx-auto px-6 space-y-0">

            {[
              {
                year: "1996",
                sanghyeok: { text: "서울, 이상혁 출생", sub: null, highlight: false },
                yuhyeon: null,
              },
              {
                year: "2004",
                sanghyeok: null,
                yuhyeon: { text: "인천, 이유현 출생", sub: null, highlight: false },
              },
              {
                year: "2013",
                sanghyeok: { text: "프로게이머 데뷔", sub: "롤드컵 1회 우승", highlight: true },
                yuhyeon: null,
              },
              {
                year: "2015",
                sanghyeok: { text: "롤드컵 2회 우승", sub: "LCK 스프링·서머 석권", highlight: true },
                yuhyeon: null,
              },
              {
                year: "2016",
                sanghyeok: { text: "롤드컵 3회 우승", sub: "MSI 우승 — 역대 최다 타이틀", highlight: true },
                yuhyeon: null,
              },
              {
                year: "2023",
                sanghyeok: { text: "롤드컵 4회 우승", sub: "전설의 전당 초대 헌액", highlight: true },
                yuhyeon: { text: "가장 힘든 계절", sub: null, highlight: false, dim: true },
              },
              {
                year: "2024",
                sanghyeok: { text: "롤드컵 5회 우승", sub: "결승 MVP", highlight: true },
                yuhyeon: { text: "인공지능공학과 입학", sub: "서예를 시작하다", highlight: false },
              },
              {
                year: "2025",
                sanghyeok: { text: "월즈 쓰리핏 달성", sub: "6회 우승 · 청룡장 수훈", highlight: true, goat: true },
                yuhyeon: null,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* 연도 — 중앙 크게 */}
                <div className="flex flex-col items-center py-10 relative">
                  {/* 수직 연결선 */}
                  {idx !== 0 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-b from-white/5 to-white/10" />
                  )}

                  {/* 연도 텍스트 */}
                  <div className="relative z-10 flex items-center gap-6 w-full">
                    {/* 상혁 (왼쪽) */}
                    <div className="flex-1 text-right pr-8">
                      {item.sanghyeok ? (
                        <div className={`inline-block text-left border-l-2 pl-4 py-2 ${item.sanghyeok.goat ? 'border-[#E4002B]' : item.sanghyeok.highlight ? 'border-[#E4002B]/50' : 'border-white/10'}`}>
                          <p className={`text-[14px] font-black leading-tight ${item.sanghyeok.goat ? 'text-[#E4002B]' : 'text-white'}`}>
                            {item.sanghyeok.text}
                          </p>
                          {item.sanghyeok.sub && (
                            <p className="text-[10px] text-white/30 font-bold tracking-wider mt-1">{item.sanghyeok.sub}</p>
                          )}
                          {item.sanghyeok.goat && (
                            <p className="text-[9px] text-[#C89B3C]/70 font-black tracking-[0.3em] uppercase mt-1">The Greatest of All Time</p>
                          )}
                        </div>
                      ) : (
                        <div className="h-2" />
                      )}
                    </div>

                    {/* 연도 중앙 */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-2 h-2 rotate-45 mb-2 ${item.sanghyeok?.highlight || item.yuhyeon ? 'bg-[#E4002B]' : 'bg-white/20'}`} />
                      <span className={`text-[22px] font-black tracking-tighter tabular-nums ${item.sanghyeok?.goat ? 'text-[#E4002B]' : item.sanghyeok?.highlight ? 'text-white' : 'text-white/40'}`}>
                        {item.year}
                      </span>
                    </div>

                    {/* 유현 (오른쪽) */}
                    <div className="flex-1 pl-8">
                      {item.yuhyeon ? (
                        <div className={`inline-block border-l-2 pl-4 py-2 ${(item.yuhyeon as any).dim ? 'border-white/10' : 'border-white/20'}`}>
                          <p className={`text-[14px] font-black leading-tight ${(item.yuhyeon as any).dim ? 'text-white/30 italic' : 'text-white/80'}`}>
                            {item.yuhyeon.text}
                          </p>
                          {item.yuhyeon.sub && (
                            <p className="text-[10px] text-white/25 font-bold tracking-wider mt-1">{item.yuhyeon.sub}</p>
                          )}
                        </div>
                      ) : (
                        <div className="h-2" />
                      )}
                    </div>
                  </div>

                  {/* 하단 구분선 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/4" />
                </div>
              </div>
            ))}
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
