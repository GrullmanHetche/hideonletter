"use client";
import { useState } from "react";
import Link from "next/link";

type EventItem = {
  type: "match" | "rtmsi" | "personal" | "holiday" | "exam";
  label: string;
  sub?: string;
  result?: "W" | "L";
  score?: string;
  venue?: string;
};

// ─────────────────────────────────────────────
// 6월 이벤트 데이터
// LCK 정규시즌 2R 잔여 경기: 6/21까지 종료 예정
// Road to MSI: 1~2R 롤파크(날짜 TBD), 3~5R 원주 6/12~14
// ─────────────────────────────────────────────
const EVENTS: Record<string, EventItem[]> = {

  // ─ 기념일
  "2026-06-06": [
    { type: "holiday", label: "현충일" },
  ],

  // ─ LCK 정규시즌 2R 잔여 (상대·결과 미정)
  "2026-06-02": [
    { type: "match", label: "T1 LCK 2R", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],
  "2026-06-05": [
    { type: "match", label: "T1 LCK 2R", sub: "LCK 정규시즌 2R", venue: "치지직 롤파크" },
  ],

  // ─ 유현 기말고사
  "2026-06-08": [
    { type: "exam", label: "선형대수 시험", sub: "기말고사" },
  ],
  "2026-06-10": [
    { type: "exam", label: "통계학 · 현대시읽기", sub: "기말고사" },
  ],
  "2026-06-11": [
    { type: "exam", label: "자료구조 시험", sub: "기말고사" },
  ],
  "2026-06-12": [
    { type: "exam", label: "종강 · 종강총회 🎉", sub: "기말고사 마지막 날" },
    { type: "rtmsi", label: "Road to MSI 3R", sub: "1시드 결정전 (1위 vs 2위)", venue: "원주 DB프로미 아레나" },
  ],
  "2026-06-13": [
    { type: "rtmsi", label: "Road to MSI 4R", sub: "3위 vs 2R 승자", venue: "원주 DB프로미 아레나" },
  ],
  "2026-06-14": [
    { type: "rtmsi", label: "Road to MSI 최종전", sub: "MSI 2시드 결정", venue: "원주 DB프로미 아레나" },
  ],

  // ─ Road to MSI 1~2R (롤파크, 날짜 미정 → 6/9~10 예상)
  "2026-06-09": [
    { type: "rtmsi", label: "Road to MSI 1~2R", sub: "5위 vs 6위 → 4위 vs 승자", venue: "치지직 롤파크" },
  ],
};

const TYPE_STYLE = {
  match: {
    dot: "bg-[#E4002B]",
    text: "text-[#E4002B]",
    badge: "border-[#E4002B]/40 text-[#E4002B]",
  },
  rtmsi: {
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
  const month = 5; // 0-indexed = June
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay });
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const selectedEvents = selected ? EVENTS[selected] ?? [] : [];

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
                The Archive: June 2026
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
            { type: "rtmsi", label: "Road to MSI" },
            { type: "exam", label: "기말고사" },
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
                const dateStr = `2026-06-${String(day).padStart(2, "0")}`;
                const events = EVENTS[dateStr] ?? [];
                const isSelected = selected === dateStr;
                const dow = (firstDay + day - 1) % 7;
                const isSun = dow === 0;
                const isSat = dow === 6;
                const hasExam = events.some((e) => e.type === "exam");

                return (
                  <div
                    key={day}
                    onClick={() => setSelected(isSelected ? null : dateStr)}
                    className={`relative min-h-[80px] cursor-pointer border-b border-r border-white/[0.03] p-2 transition-all duration-200 ${
                      isSelected ? "border-[#E4002B]/20 bg-[#E4002B]/8" : "hover:bg-white/[0.02]"
                    } ${hasExam ? "bg-purple-950/10" : ""}`}
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
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20">June 2026</p>
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
                            : ev.type === "rtmsi"
                              ? "ROAD TO MSI"
                              : ev.type === "exam"
                                ? "기말고사"
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
          <p>* Venue: 치지직 롤파크 · 원주 DB프로미 아레나</p>
          <p>Verified by T1 Official Schedule</p>
        </footer>
      </div>
    </main>
  );
}
