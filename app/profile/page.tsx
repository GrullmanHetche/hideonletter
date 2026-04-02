"use client";

import Link from 'next/link'

export default function ProfilePage() {
  const yuHyun = {
    name: "유 현",
    birth: "2004.12.17",
    stats: {
      "키/몸무게": "165cm / 48kg",
      "성격": "INFP / 불안형 멘헤라",
      "취미": "C언어 코딩, 새벽에 우울해하기",
      "좋아하는 것": "조용한 곳, 손편지, '상혁'",
      "싫어하는 것": "바쁜 연락, '지루해하는 시선'",
    },
    tags: ["불안형", "INFP", "공대생", "집착", "손편지", "새벽", "멘헤라", "165cm", "C언어"],
    portrait: "/yhnng.png",
  };

  const sangHyeok = {
    name: "상 혁",
    birth: "1996.05.07",
    stats: {
      "키/몸무게": "177cm / 56kg",
      "성격": "ISTP인 척하는 ENFP / 안정형",
      "취미": "리그 오브 레전드, 유현이 관찰",
      "좋아하는 것": "승리, 유현이의 불안한 연락",
      "싫어하는 것": "무의미한 시간, 유현이가 울 때",
    },
    tags: ["안정형", "ISTP(enfp)", "프로게이머", "관찰", "다정", "화면", "LoL", "177cm", "안식처"],
    portrait: "/shnng.png",
  };

  return (
    <div className="min-h-screen bg-[#000000] py-24 px-6 text-[#ffffff] font-sans selection:bg-[#e2002b]/30">
      <div className="max-w-5xl mx-auto">
        
        {/* 헤더 */}
        <div className="flex items-center justify-center gap-3 mb-24">
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#555555]">
            OFFICIAL PAIR PROFILE
          </p>
          <div className="h-[1px] w-8 bg-[#e2002b]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative">
          {/* 중앙 구분선 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1a1a1a] transform -translate-x-1/2"></div>

          {/* 유현 (Left) */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src={yuHyun.portrait} alt="YuHyun" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase">{yuHyun.name}</h2>
                <p className="text-sm font-bold text-[#e2002b] mt-1 tracking-widest">{yuHyun.birth}</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              {Object.entries(yuHyun.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5 text-left">
                  <span className="text-[10px] font-black text-[#444444] uppercase tracking-[0.2em]">{key}</span>
                  <span className="text-[14px] text-[#bbbbbb] font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {yuHyun.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#0f0f0f] text-[#666666] text-[10px] font-bold rounded-md border border-[#1a1a1a] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 상혁 (Right) */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col items-center md:items-end gap-8 text-right">
              <div className="w-56 h-56 flex items-center justify-center">
                <img src={sangHyeok.portrait} alt="SangHyeok" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center md:text-right">
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase">{sangHyeok.name}</h2>
                <p className="text-sm font-bold text-[#e2002b] mt-1 tracking-widest">{sangHyeok.birth}</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 text-right">
              {Object.entries(sangHyeok.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5 items-end">
                  <span className="text-[10px] font-black text-[#444444] uppercase tracking-[0.2em]">{key}</span>
                  <span className="text-[14px] text-[#bbbbbb] font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-6 justify-center md:justify-end">
              {sangHyeok.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#0f0f0f] text-[#666666] text-[10px] font-bold rounded-md border border-[#1a1a1a] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 메인으로 돌아가기 버튼 */}
        <div className="mt-40 pt-12 border-t border-[#111111] flex justify-center">
          <Link 
            href="/" 
            className="text-[10px] font-black text-[#333333] hover:text-white tracking-[0.5em] uppercase transition-all duration-300 border-b border-transparent hover:border-white pb-1"
          >
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
}