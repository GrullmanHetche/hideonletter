"use client";

import Link from 'next/link'
import { useState } from 'react'

const yhItems = [
  { img: "/yhnotebook.png",  name: "맥북",           desc: "항상 켜져 있음. 탭 47개." },
  { img: "/yhheadset.png",   name: "헤드셋",          desc: "혼자 있고 싶을 때 필수템." },
  { img: "/yhmedicine.png",  name: "진통제",          desc: "두통이 잦아서 항상 챙김." },
  { img: "/yhtumbler.png",   name: "텀블러",          desc: "따뜻한 물만 마심." },
  { img: "/yhcamera.png",    name: "핑크 디카",        desc: "세상의 예쁜 부분을 담는 카메라." },
  { img: "/yhperfume.png",   name: "향수",            desc: "은은한 플로럴 계열." },
  { img: "/yhpouch.png",     name: "메이크업 파우치",   desc: "꼭 필요한 것들만." },
  { img: "/yhscrunch.png",   name: "스크런치",         desc: "머리 묶을 때 쓰는 것." },
  { img: "/yhpowder.png",    name: "파우더",           desc: "외출 전 마지막 단계." },
];

const shItems = [
  { img: "/shbook.png",       name: "책",      desc: "서예실에서 빌려준 그 책." },
  { img: "/shcharger.png",    name: "충전기",   desc: "항상 두 개씩 챙김." },
  { img: "/shglasses.png",    name: "안경집",   desc: "예비 안경 포함." },
  { img: "/shnivea.png",      name: "니베아 립밤", desc: "오래된 습관." },
  { img: "/shtoothbrush.png", name: "칫솔",    desc: "칫솔 세트 中 1." },
  { img: "/shtoothpaste.png", name: "치약",    desc: "칫솔 세트 中 2." },
];

function BagModal({ items, name, onClose }: {
  items: typeof yhItems;
  name: string;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-[#030303]/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
      {/* 상단 레드 라인 */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E4002B]" />

      <div className="max-w-lg w-full relative">
        {/* 코너 장식 */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E4002B]" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E4002B]" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E4002B]/40" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E4002B]/40" />

        <div className="border border-white/5 bg-[#080808] px-8 py-10">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[9px] text-[#E4002B] tracking-[0.5em] uppercase font-black mb-1">What's in my bag</p>
              <h3 className="text-xl font-black text-white tracking-tighter">{name}의 가방</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/20 hover:text-white text-[9px] tracking-[0.4em] uppercase font-black transition-colors"
            >
              [ EXIT ]
            </button>
          </div>

          {/* 아이템 그리드 */}
          <div className="grid grid-cols-3 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative group cursor-default"
              >
                {/* 아이템 박스 */}
                <div className={`aspect-square border transition-all duration-200 flex items-center justify-center p-3
                  ${hovered === i ? 'border-[#E4002B]/50 bg-[#E4002B]/5' : 'border-white/8 bg-white/[0.02]'}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`w-full h-full object-contain transition-all duration-200 ${hovered === i ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* 호버 인디케이터 */}
                  {hovered === i && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E4002B]" />
                  )}
                </div>

                {/* 아이템 이름 */}
                <p className={`text-[9px] font-black tracking-wider mt-2 text-center transition-colors
                  ${hovered === i ? 'text-white' : 'text-white/30'}`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* 호버된 아이템 설명 */}
          <div className="mt-6 h-8 flex items-center">
            {hovered !== null ? (
              <p className="text-[11px] text-white/40 font-light italic animate-in fade-in duration-200">
                <span className="text-[#E4002B]/70 font-black not-italic">{items[hovered].name}</span>
                {" — "}
                {items[hovered].desc}
              </p>
            ) : (
              <p className="text-[9px] text-white/10 tracking-widest uppercase">아이템에 마우스를 올려보세요</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [bagOpen, setBagOpen] = useState<'yh' | 'sh' | null>(null);

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

      {/* 왓츠인마백 모달 */}
      {bagOpen === 'yh' && (
        <BagModal items={yhItems} name="유현" onClose={() => setBagOpen(null)} />
      )}
      {bagOpen === 'sh' && (
        <BagModal items={shItems} name="상혁" onClose={() => setBagOpen(null)} />
      )}

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

            {/* 가방 버튼 */}
            <button
              onClick={() => setBagOpen('yh')}
              className="group flex items-center gap-3 w-fit mt-2"
            >
              <img
                src="/yhbag.png"
                alt="유현 가방"
                className="w-12 h-12 object-contain opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
              />
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-[#E4002B] transition-colors">
                What's in my bag →
              </span>
            </button>
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

            {/* 가방 버튼 */}
            <button
              onClick={() => setBagOpen('sh')}
              className="group flex items-center gap-3 w-fit mt-2 md:self-end"
            >
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-[#E4002B] transition-colors">
                ← What's in my bag
              </span>
              <img
                src="/shbag.png"
                alt="상혁 가방"
                className="w-12 h-12 object-contain opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
              />
            </button>
          </div>
        </div>

        {/* ── 수직 연대기 ── */}
        <div className="mt-64 mb-32">
          <div className="flex flex-col items-center mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-8 bg-[#E4002B]" />
              <div className="w-1.5 h-1.5 bg-[#E4002B] rotate-45" />
              <div className="h-[1px] w-8 bg-[#E4002B]" />
            </div>
            <h3 className="text-[11px] font-black tracking-[0.6em] text-white/50 uppercase italic">
              The Chronicle of Origin
            </h3>
            <div className="flex justify-between w-full max-w-3xl mt-10 px-6">
              <span className="text-[9px] font-black tracking-[0.4em] text-[#E4002B] uppercase">상 혁</span>
              <span className="text-[9px] font-black tracking-[0.4em] text-white/25 uppercase">유 현</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 space-y-0">
            {[
              { year: "1996", sanghyeok: { text: "서울, 이상혁 출생", sub: null, highlight: false }, yuhyeon: null },
              { year: "2004", sanghyeok: null, yuhyeon: { text: "인천, 이유현 출생", sub: null, highlight: false } },
              { year: "2013", sanghyeok: { text: "프로게이머 데뷔", sub: "롤드컵 1회 우승", highlight: true }, yuhyeon: null },
              { year: "2015", sanghyeok: { text: "롤드컵 2회 우승", sub: "LCK 스프링·서머 석권", highlight: true }, yuhyeon: null },
              { year: "2016", sanghyeok: { text: "롤드컵 3회 우승", sub: "MSI 우승 — 역대 최다 타이틀", highlight: true }, yuhyeon: null },
              { year: "2023", sanghyeok: { text: "롤드컵 4회 우승", sub: "전설의 전당 초대 헌액", highlight: true }, yuhyeon: { text: "가장 힘든 계절", sub: null, highlight: false, dim: true } },
              { year: "2024", sanghyeok: { text: "롤드컵 5회 우승", sub: "결승 MVP", highlight: true }, yuhyeon: { text: "인공지능공학과 입학", sub: "서예를 시작하다", highlight: false } },
              { year: "2025", sanghyeok: { text: "월즈 쓰리핏 달성", sub: "6회 우승 · 청룡장 수훈", highlight: true, goat: true }, yuhyeon: null },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center py-10 relative">
                  {idx !== 0 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-b from-white/5 to-white/10" />
                  )}
                  <div className="relative z-10 flex items-center gap-6 w-full">
                    <div className="flex-1 text-right pr-8">
                      {item.sanghyeok ? (
                        <div className={`inline-block text-left border-l-2 pl-4 py-2 ${(item.sanghyeok as any).goat ? 'border-[#E4002B]' : item.sanghyeok.highlight ? 'border-[#E4002B]/50' : 'border-white/10'}`}>
                          <p className={`text-[14px] font-black leading-tight ${(item.sanghyeok as any).goat ? 'text-[#E4002B]' : 'text-white'}`}>{item.sanghyeok.text}</p>
                          {item.sanghyeok.sub && <p className="text-[10px] text-white/30 font-bold tracking-wider mt-1">{item.sanghyeok.sub}</p>}
                          {(item.sanghyeok as any).goat && <p className="text-[9px] text-[#C89B3C]/70 font-black tracking-[0.3em] uppercase mt-1">The Greatest of All Time</p>}
                        </div>
                      ) : <div className="h-2" />}
                    </div>
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-2 h-2 rotate-45 mb-2 ${item.sanghyeok?.highlight || item.yuhyeon ? 'bg-[#E4002B]' : 'bg-white/20'}`} />
                      <span className={`text-[22px] font-black tracking-tighter tabular-nums ${(item.sanghyeok as any)?.goat ? 'text-[#E4002B]' : item.sanghyeok?.highlight ? 'text-white' : 'text-white/40'}`}>{item.year}</span>
                    </div>
                    <div className="flex-1 pl-8">
                      {item.yuhyeon ? (
                        <div className={`inline-block border-l-2 pl-4 py-2 ${(item.yuhyeon as any).dim ? 'border-white/10' : 'border-white/20'}`}>
                          <p className={`text-[14px] font-black leading-tight ${(item.yuhyeon as any).dim ? 'text-white/30 italic' : 'text-white/80'}`}>{item.yuhyeon.text}</p>
                          {item.yuhyeon.sub && <p className="text-[10px] text-white/25 font-bold tracking-wider mt-1">{item.yuhyeon.sub}</p>}
                        </div>
                      ) : <div className="h-2" />}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-40 pt-12 border-t border-white/5 flex justify-center">
          <Link href="/" className="text-[9px] font-black text-white/15 hover:text-white tracking-[0.5em] uppercase transition-all duration-300 border-b border-transparent hover:border-[#E4002B] pb-1">
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
}
