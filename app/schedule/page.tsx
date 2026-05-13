"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 1. 타입 정의
type EventType = "match" | "ewc" | "personal" | "holiday" | "exam";

interface EventItem {
  type: EventType;
  label: string;
  sub?: string;
  result?: "W" | "L";
  score?: string;
  venue?: string;
}

// 2. 일정 데이터
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

// 3. 헬퍼 함수 (컴포넌트 밖으로 이동)
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Schedule() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#030303]" />;

  const year = 2026;
  const month = 4; // 5월
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
        <header className="mb-12 flex items-end justify-between">
          <div className="flex items-center gap-5">
            <div className="text-2xl font-black italic text-[#E4002B]">T1</div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-[#E4002B]">SCHEDULE</h1>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">May 2026</p>
            </div>
          </div>
          <Link href="/" className="text-[9px] font-black uppercase text-white/20 hover:text-[#E4002B]">← Back</Link>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 border border-white/5 bg-[#050505]">
            <div className="grid grid-cols-7 border-b border-white/5">
              {weekdays.map((d) => (
                <div key={d} className="py-3 text-center text-[9px] font-black text-white/15 uppercase">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {blanks.map((_, i) => <div key={`b${i}`} className="min-h-[80px] border-b border-r border-white/[0.03]" />)}
              {days.map((day) => {
                const dateStr = `2026-05-${String(day).padStart(2, "0")}`;
                const events = EVENTS_FIXED[dateStr] ?? [];
                const isSelected = selected === dateStr;
                return (
                  <div
                    key={day}
                    onClick={() => setSelected(isSelected ? null : dateStr)}
                    className={`relative min-h-[80px] cursor-pointer border-b border-r border-white/[0.03] p-2 ${isSelected ? "bg-[#E4002B]/10" : "hover:bg-white/[0.02]"}`}
                  >
                    <div className="mb-1 text-[11px] font-black text-white/30">{day}</div>
                    <div className="space-y-1">
                      {events.slice(0, 3).map((ev, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div className={`h-1 w-1 rounded-full ${TYPE_STYLE[ev.type].dot}`} />
                          <div className={`truncate text-[8px] font-bold ${TYPE_STYLE[ev.type].text}`}>{ev.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 상세 패널 */}
          <div className="border border-white/5 bg-[#050505] lg:w-72 shrink-0">
            {selected && selectedEvents.length > 0 ? (
              <div className="p-5">
                <p className="text-2xl font-black mb-4">{selected.split("-")[2]}</p>
                {selectedEvents.map((ev, i) => (
                  <div key={i} className="mb-4 space-y-1">
                    <p className={`text-[10px] font-bold ${TYPE_STYLE[ev.type].text}`}>{ev.type.toUpperCase()}</p>
                    <p className="text-sm font-bold">{ev.label}</p>
                    {ev.sub && <p className="text-xs text-white/40">{ev.sub}</p>}
                    {ev.result && <div className="mt-2 inline-block border border-[#E4002B] px-2 py-1 text-[10px] text-[#E4002B] font-bold">{ev.result} {ev.score}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-10 text-center text-[9px] text-white/20 uppercase tracking-widest">Select a date</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
