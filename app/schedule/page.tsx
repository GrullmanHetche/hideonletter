"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// --- Types ---
type EventItem = {
  type: "match" | "ewc" | "personal" | "holiday" | "exam";
  label: string;
  sub?: string;
  result?: "W" | "L";
  score?: string;
  venue?: string;
};

// --- Constants ---
const EVENTS_FIXED: Record<string, EventItem[]> = {
  "2026-05-04": [{ type: "ewc", label: "T1 vs BRO", sub: "Road to EWC 1R", result: "W", score: "2 - 0" }],
  "2026-05-05": [{ type: "holiday", label: "어린이날" }],
  "2026-05-08": [
    { type: "holiday", label: "어버이날" },
    { type: "match", label: "T1 vs DNS", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" },
  ],
  "2026-05-10": [{ type: "match", label: "T1 vs DK", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" }],
  "2026-05-11": [{ type: "personal", label: "🎻 사촌 동생 클래식 공연" }],
  "2026-05-12": [{ type: "ewc", label: "BFX vs T1", sub: "Road to EWC 승자조 2R", result: "W", score: "2 - 0" }],
  "2026-05-13": [{ type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" }],
  "2026-05-15": [
    { type: "holiday", label: "스승의날" },
    { type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-05-18": [{ type: "ewc", label: "Road to EWC 패자조 1R", sub: "온라인 진행" }],
  "2026-05-19": [
    { type: "ewc", label: "Road to EWC 패자조 2R", sub: "온라인 진행" },
    { type: "personal", label: "🎭 빌리 엘리어트 뮤지컬" },
  ],
  "2026-05-25": [{ type: "ewc", label: "Road to EWC 3R", sub: "SOOP 콜로세움 (오프라인)", venue: "상암 SOOP 콜로세움" }],
  "2026-05-26": [{ type: "ewc", label: "Road to EWC 결승", sub: "EWC 진출권 결정", venue: "상암 SOOP 콜로세움" }],
  "2026-05-28": [{ type: "personal", label: "✂️ 미용실 예약" }],
  "2026-05-30": [{ type: "personal", label: "🎤 결혼식 축가" }],
};

const TYPE_STYLE = {
  match: { dot: "bg-[#E4002B]", text: "text-[#E4002B]" },
  ewc: { dot: "bg-[#C89B3C]", text: "text-[#C89B3C]" },
  personal: { dot: "bg-white/40", text: "text-white/50" },
  holiday: { dot: "bg-white/20", text: "text-white/30" },
  exam: { dot: "bg-purple-500/60", text: "text-purple-400/70" },
} as const;

// --- Helpers ---
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

// --- Main Component ---
export default function Schedule() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  // 하이드레이션 오류 방지: 마운트 후에만 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  const year = 2026;
  const month = 4; // May (0-indexed)
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay });
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const selectedEvents = selected ? EVENTS_FIXED[selected] ?? [] : [];

  // 초기 로딩 시 레이아웃 깨짐 방지
  if (!mounted) return <div className="min-h-screen bg-[#030303]" />;

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 z-50 h-[2px] w-full bg-[#E4002B]" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        {/* 헤더 */}
        <header className="mb-12 flex items-end justify-between">
          <div className="flex items-center gap-5">
            <div className="h-10 w-10 bg-[#E4002B] rounded-sm flex items-center justify-center font-black italic text-black">T1</div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-[#E4002B]">SCHEDULE</h1>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                The Archive: May 2026
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="border-b border-white/10 pb-1 text-[9px] font-black uppercase tracking-[0.35em] text-white/20 transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
          >
            ← Back
          </Link>
        </header>

        {/* 범례 */}
        <div className="mb-8 flex flex-wrap gap-4">
          {(["match", "ewc", "personal", "holiday"] as const).map((type) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${TYPE_STYLE[type].dot}`} />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                {type === "match" ? "LCK 경기" : type === "ewc" ? "Road to EWC" : type === "personal" ? "유현 일정" : "기념일"}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* 달력 섹션 */}
          <div className="flex-1 border border-white/5 bg-[#050505]">
            <div className="grid grid-cols-7 border-b border-white/5">
              {weekdays.map((d) => (
                <div
                  key={d}
                  className={`py-3 text-center text-[9px] font-black uppercase tracking-widest ${
                    d === "SUN" ? "text-[#E4002B]/60" : d === "SAT" ? "text-white/20" : "text-white/15"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {blanks.map((_, i) => (
                <div key={`b${i}`} className="min-h-[80px] border-b border-r border-white/[0.03]" />
              ))}

              {days.map((day) => {
                const dateStr = `2026-05-${String(day).padStart(2, "0")}`;
                const events = EVENTS_FIXED[dateStr] ?? [];
                const isSelected = selected === dateStr;
                const dow = (firstDay + day - 1) % 7;
                
                return (
                  <div
                    key={day}
                    onClick={() => setSelected(isSelected ? null : dateStr)}
                    className={`relative min-h-[80px] cursor-pointer border-b border-r border-white/[0.03] p-2 transition-all duration-200 ${
                      isSelected ? "bg-[#E4002B]/10" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className={`mb-1.5 flex h-6 w-6 items-center justify-center text-[11px] font-black ${
                      dow === 0 ? "text-[#E4002B]/60" : dow === 6 ? "text-white/25" : "text-white/30"
                    }`}>
                      {day}
                    </div>

                    <div className="space-y-0.5">
                      {events.slice(0, 3).map((ev, i) => (
                        <div key={`${dateStr}-${i}`} className="flex items-center gap-1">
                          <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${TYPE_STYLE[ev.type].dot}`} />
                          <span className={`truncate text-[8px] font-bold leading-tight ${TYPE_STYLE[ev.type].text}`}>
                            {ev.label}
                          </span>
                        </div>
                      ))}
                      {events.length > 3 && (
                        <span className="text-[7px] font-bold text-white/20">+{events.length - 3}</span>
                      )}
                    </div>
                    {isSelected && <div className="absolute top-0 left-0 h-[2px] w-full bg-[#E4002B]" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 상세 패널 */}
          <div className="border border-white/5 bg-[#050505] lg:w-72 shrink-0">
            {selected && selectedEvents.length > 0 ? (
              <div>
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20">May 2026</p>
                    <p className="text-2xl font-black tracking-tighter text-white">{parseInt(selected.split("-")[2])}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-[9px] font-black text-white/20 hover:text-white">
                    [ CLOSE ]
                  </button>
                </div>

                <div className="divide-y divide-white/[0.04]">
                  {selectedEvents.map((ev, i) => (
                    <div key={i} className="space-y-2 px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${TYPE_STYLE[ev.type].dot}`} />
                        <span className={`text-[9px] font-black uppercase tracking-widest ${TYPE_STYLE[ev.type].text}`}>
                          {ev.type === "match" ? "LCK" : ev.type === "ewc" ? "ROAD TO EWC" : ev.type === "holiday" ? "기념일" : "유현"}
                        </span>
                      </div>
                      <p className="text-[14px] font-black leading-tight text-white">{ev.label}</p>
                      {ev.sub && <p className="text-[10px] font-bold text-white/30">{ev.sub}</p>}
                      {ev.venue && <p className="text-[9px] font-bold uppercase tracking-wider text-white/20">📍 {ev.venue}</p>}
                      {ev.result && (
                        <div className={`inline-flex items-center gap-2 border px-3 py-1.5 ${ev.result === "W" ? "border-[#E4002B]/40 bg-[#E4002B]/10" : "border-white/10 bg-white/[0.03]"}`}>
                          <span className={`text-[10px] font-black ${ev.result === "W" ? "text-[#E4002B]" : "text-white/40"}`}>
                            {ev.result === "W" ? "승리" : "패배"}
                          </span>
                          {ev.score && <span className="text-[10px] font-black text-white/40">{ev.score}</span>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center space-y-3 px-5 py-10 text-center">
                <div className="mx-auto h-[1px] w-8 bg-white/10" />
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/15">날짜를 선택하세요</p>
              </div>
            )}
          </div>
        </div>

        <footer className="mt-8 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-white/10">
          <p>* Venue: 치지직 롤파크 & 상암 SOOP 콜로세움</p>
          <p>Verified by T1 Official Schedule</p>
        </footer>
      </div>
    </main>
  );
}"use client";
import { useState } from "react";
import Link from "next/link";

type EventItem = {
  type: "match" | "ewc" | "personal" | "holiday" | "exam";
  label: string;
  sub?: string;
  result?: "W" | "L";
  score?: string;
  venue?: string;
};

const EVENTS: Record<string, EventItem[]> = {
  // ─ 기념일
  "2026-05-05": [
    { type: "holiday", label: "어린이날" },
  ],
  "2026-05-08": [
    { type: "holiday", label: "어버이날" },
    { type: "match", label: "T1 vs DNS", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" },
  ],
  "2026-05-10": [
    { type: "match", label: "T1 vs DK", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" },
  ],
  "2026-05-11": [
    { type: "personal", label: "🎻 사촌 동생 클래식 공연" },
  ],
  "2026-05-12": [
    { type: "ewc", label: "BFX vs T1", sub: "Road to EWC 승자조 2R", result: "W", score: "2 - 0" },
  ],
  "2026-05-13": [
    { type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-05-15": [
    { type: "holiday", label: "스승의날" },
    { type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-05-18": [
    { type: "ewc", label: "Road to EWC 패자조 1R", sub: "온라인 진행" },
  ],
  "2026-05-19": [
    { type: "ewc", label: "Road to EWC 패자조 2R", sub: "온라인 진행" },
    { type: "personal", label: "🎭 빌리 엘리어트 뮤지컬" },
  ],
  "2026-05-25": [
    { type: "ewc", label: "Road to EWC 3R", sub: "SOOP 콜로세움 (오프라인)", venue: "상암 SOOP 콜로세움" },
  ],
  "2026-05-26": [
    { type: "ewc", label: "Road to EWC 결승", sub: "SOOP 콜로세움 (오프라인)", venue: "상암 SOOP 콜로세움" },
  ],
  "2026-05-28": [
    { type: "personal", label: "✂️ 미용실 예약" },
  ],
  "2026-05-30": [
    { type: "personal", label: "🎤 결혼식 축가" },
  ],

  // ─ Road to EWC 1R
  "2026-05-04": [
    { type: "ewc", label: "T1 vs BRO", sub: "Road to EWC 1R", result: "W", score: "2 - 0" },
  ],
  "2026-05-05": [
    { type: "holiday", label: "어린이날" },
  ],
};

// 5/5에 두 이벤트 합치기 (holiday + 어린이날 중복 제거)
const EVENTS_FIXED: Record<string, EventItem[]> = {
  "2026-05-04": [
    { type: "ewc", label: "T1 vs BRO", sub: "Road to EWC 1R", result: "W", score: "2 - 0" },
  ],
  "2026-05-05": [
    { type: "holiday", label: "어린이날" },
  ],
  "2026-05-08": [
    { type: "holiday", label: "어버이날" },
    { type: "match", label: "T1 vs DNS", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" },
  ],
  "2026-05-10": [
    { type: "match", label: "T1 vs DK", sub: "LCK 정규시즌 2R", result: "W", score: "2 - 0", venue: "치지직 롤파크" },
  ],
  "2026-05-11": [
    { type: "personal", label: "🎻 사촌 동생 클래식 공연" },
  ],
  "2026-05-12": [
    { type: "ewc", label: "BFX vs T1", sub: "Road to EWC 승자조 2R", result: "W", score: "2 - 0" },
  ],
  "2026-05-13": [
    { type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-05-15": [
    { type: "holiday", label: "스승의날" },
    { type: "match", label: "T1 LCK 7주차", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-05-18": [
    { type: "ewc", label: "Road to EWC 패자조 1R", sub: "온라인 진행" },
  ],
  "2026-05-19": [
    { type: "ewc", label: "Road to EWC 패자조 2R", sub: "온라인 진행" },
    { type: "personal", label: "🎭 빌리 엘리어트 뮤지컬" },
  ],
  "2026-05-25": [
    { type: "ewc", label: "Road to EWC 3R", sub: "SOOP 콜로세움 (오프라인)", venue: "상암 SOOP 콜로세움" },
  ],
  "2026-05-26": [
    { type: "ewc", label: "Road to EWC 결승", sub: "EWC 진출권 결정", venue: "상암 SOOP 콜로세움" },
  ],
  "2026-05-28": [
    { type: "personal", label: "✂️ 미용실 예약" },
  ],
  "2026-05-30": [
    { type: "personal", label: "🎤 결혼식 축가" },
  ],
};

const TYPE_STYLE = {
  match: {
    dot: "bg-[#E4002B]",
    text: "text-[#E4002B]",
    badge: "border-[#E4002B]/40 text-[#E4002B]",
  },
  ewc: {
    dot: "bg-[#C89B3C]",
    text: "text-[#C89B3C]",
    badge: "border-[#C89B3C]/40 text-[#C89B3C]",
  },
  personal: {
    dot: "bg-white/40",
    text: "text-white/50",
    badge: "border-white/20 text-white/40",
  },
  holiday: {
    dot: "bg-white/20",
    text: "text-white/30",
    badge: "border-white/10 text-white/20",
  },
  exam: {
    dot: "bg-purple-500/60",
    text: "text-purple-400/70",
    badge: "border-purple-500/30 text-purple-400/60",
  },
} as const;

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Schedule() {
  const [selected, setSelected] = useState<string | null>(null);

  const year = 2026;
  const month = 4; // 0-indexed = May
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay });
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const selectedEvents = selected ? EVENTS_FIXED[selected] ?? [] : [];

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 z-50 h-[2px] w-full bg-[#E4002B]" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        {/* 헤더 */}
        <header className="mb-12 flex items-end justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/T1logo.png"
              alt="T1"
              className="h-10 w-10 object-contain"
              style={{ filter: "drop-shadow(0 0 10px rgba(228,0,43,0.5))" }}
            />
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-[#E4002B]">SCHEDULE</h1>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                The Archive: May 2026
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="border-b border-white/10 pb-1 text-[9px] font-black uppercase tracking-[0.35em] text-white/20 transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
          >
            ← Back
          </Link>
        </header>

        {/* 범례 */}
        <div className="mb-8 flex flex-wrap gap-4">
          {[
            { type: "match", label: "LCK 경기" },
            { type: "ewc", label: "Road to EWC" },
            { type: "personal", label: "유현 일정" },
            { type: "holiday", label: "기념일" },
          ].map(({ type, label }) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${TYPE_STYLE[type as keyof typeof TYPE_STYLE].dot}`} />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* 달력 */}
          <div className="flex-1 border border-white/5 bg-[#050505]">
            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 border-b border-white/5">
              {weekdays.map((d) => (
                <div
                  key={d}
                  className={`py-3 text-center text-[9px] font-black uppercase tracking-widest ${
                    d === "SUN"
                      ? "text-[#E4002B]/60"
                      : d === "SAT"
                        ? "text-white/20"
                        : "text-white/15"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="grid grid-cols-7">
              {blanks.map((_, i) => (
                <div key={`b${i}`} className="min-h-[80px] border-b border-r border-white/[0.03]" />
              ))}

              {days.map((day) => {
                const dateStr = `2026-05-${String(day).padStart(2, "0")}`;
                const events = EVENTS_FIXED[dateStr] ?? [];
                const isSelected = selected === dateStr;
                const dow = (firstDay + day - 1) % 7;
                const isSun = dow === 0;
                const isSat = dow === 6;

                return (
                  <div
                    key={day}
                    onClick={() => setSelected(isSelected ? null : dateStr)}
                    className={`relative min-h-[80px] cursor-pointer border-b border-r border-white/[0.03] p-2 transition-all duration-200 ${
                      isSelected ? "border-[#E4002B]/20 bg-[#E4002B]/8" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* 날짜 숫자 */}
                    <div
                      className={`mb-1.5 flex h-6 w-6 items-center justify-center text-[11px] font-black ${
                        isSun ? "text-[#E4002B]/60" : isSat ? "text-white/25" : "text-white/30"
                      }`}
                    >
                      {day}
                    </div>

                    {/* 이벤트 도트 */}
                    <div className="space-y-0.5">
                      {events.slice(0, 3).map((ev, i) => (
                        <div key={`${dateStr}-${ev.label}-${i}`} className="flex items-center gap-1">
                          <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${TYPE_STYLE[ev.type].dot}`} />
                          <span className={`truncate text-[8px] font-bold leading-tight ${TYPE_STYLE[ev.type].text}`}>
                            {ev.label}
                          </span>
                        </div>
                      ))}

                      {events.length > 3 && (
                        <span className="text-[7px] font-bold text-white/20">+{events.length - 3}개</span>
                      )}
                    </div>

                    {/* 선택 인디케이터 */}
                    {isSelected && <div className="absolute top-0 left-0 h-[2px] w-full bg-[#E4002B]" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 상세 패널 */}
          <div className="border border-white/5 bg-[#050505] lg:w-72">
            {selected && selectedEvents.length > 0 ? (
              <div>
                {/* 선택된 날짜 헤더 */}
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20">May 2026</p>
                    <p className="text-2xl font-black tracking-tighter text-white">
                      {parseInt(selected.split("-")[2], 10)}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="text-[9px] font-black uppercase tracking-widest text-white/20 transition-colors hover:text-white"
                  >
                    [ CLOSE ]
                  </button>
                </div>

                {/* 이벤트 리스트 */}
                <div className="divide-y divide-white/[0.04]">
                  {selectedEvents.map((ev, i) => (
                    <div key={`${selected}-${ev.label}-${i}`} className="space-y-2 px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${TYPE_STYLE[ev.type].dot}`} />
                        <span className={`text-[9px] font-black uppercase tracking-widest ${TYPE_STYLE[ev.type].text}`}>
                          {ev.type === "match"
                            ? "LCK"
                            : ev.type === "ewc"
                              ? "ROAD TO EWC"
                              : ev.type === "holiday"
                                ? "기념일"
                                : "유현"}
                        </span>
                      </div>

                      <p className="text-[14px] font-black leading-tight text-white">{ev.label}</p>

                      {ev.sub && <p className="text-[10px] font-bold text-white/30">{ev.sub}</p>}

                      {ev.venue && (
                        <p className="text-[9px] font-bold uppercase tracking-wider text-white/20">
                          📍 {ev.venue}
                        </p>
                      )}

                      {ev.result && (
                        <div
                          className={`inline-flex items-center gap-2 border px-3 py-1.5 ${
                            ev.result === "W"
                              ? "border-[#E4002B]/40 bg-[#E4002B]/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-black ${
                              ev.result === "W" ? "text-[#E4002B]" : "text-white/40"
                            }`}
                          >
                            {ev.result === "W" ? "승리" : "패배"}
                          </span>
                          {ev.score && <span className="text-[10px] font-black text-white/40">{ev.score}</span>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center space-y-3 px-5 py-10 text-center">
                <div className="mx-auto h-[1px] w-8 bg-white/10" />
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/15">날짜를 선택하세요</p>
                <p className="text-[8px] tracking-wider text-white/8">Click a date to view details</p>
              </div>
            )}
          </div>
        </div>

        {/* 푸터 */}
        <footer className="mt-8 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-white/10">
          <p>* Venue: 치지직 롤파크 & 상암 SOOP 콜로세움</p>
          <p>Verified by T1 Official Schedule</p>
        </footer>
      </div>
    </main>
  );
}
