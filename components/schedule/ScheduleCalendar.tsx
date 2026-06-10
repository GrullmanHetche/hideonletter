"use client";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { EVENTS, type EventItem } from "@/content/schedule";

const TYPE_STYLE = {
  match: { dot: "bg-t1-red", text: "text-t1-red", badge: "border-t1-red/40 text-t1-red" },
  rtmsi: { dot: "bg-gold", text: "text-gold", badge: "border-gold/40 text-gold" },
  personal: { dot: "bg-white/40", text: "text-paper/55", badge: "border-white/20 text-paper/45" },
  holiday: { dot: "bg-white/20", text: "text-paper/40", badge: "border-white/10 text-paper/30" },
  exam: { dot: "bg-purple-500/60", text: "text-purple-400/80", badge: "border-purple-500/30 text-purple-400/70" },
} as const;

const LEGEND = [
  { type: "match", label: "LCK 경기" },
  { type: "rtmsi", label: "Road to MSI" },
  { type: "exam", label: "기말고사" },
  { type: "holiday", label: "기념일" },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");
const ym = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;

/** .ics 내보내기 — 전체 이벤트를 실제 캘린더로 구독 */
function downloadICS() {
  const lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//HIDEONLETTER//Schedule//KO",
  ];
  for (const [date, items] of Object.entries(EVENTS)) {
    const d = date.replaceAll("-", "");
    items.forEach((e, i) => {
      lines.push(
        "BEGIN:VEVENT",
        `UID:${date}-${i}@hideonletter`,
        `DTSTART;VALUE=DATE:${d}`,
        `SUMMARY:${e.label}${e.sub ? ` — ${e.sub}` : ""}`,
        e.venue ? `LOCATION:${e.venue}` : "",
        "END:VEVENT"
      );
    });
  }
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.filter(Boolean).join("\r\n")], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hideonletter-schedule.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ScheduleCalendar() {
  const router = useRouter();
  const params = useSearchParams();

  /* 월 하드코딩 제거 (C6 해결): URL ?m=YYYY-MM 동기화, 기본값 = 이번 달 */
  const today = useMemo(() => new Date(), []);
  const initial = params.get("m") ?? ym(today);
  const [year, month0] = useMemo(() => {
    const m = /^(\d{4})-(\d{2})$/.exec(initial);
    if (!m) return [today.getFullYear(), today.getMonth()] as const;
    return [Number(m[1]), Number(m[2]) - 1] as const;
  }, [initial, today]);

  const [selected, setSelected] = useState<string | null>(null);

  const move = (delta: number) => {
    const d = new Date(year, month0 + delta, 1);
    router.replace(`/schedule?m=${ym(d)}`, { scroll: false });
    setSelected(null);
  };

  const daysInMonth = new Date(year, month0 + 1, 0).getDate();
  const firstDay = new Date(year, month0, 1).getDay();
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  /* D-day: 오늘 이후 가장 가까운 경기/RTMSI — 연산이 가벼워 메모 불필요 */
  const upcomingEntry = Object.entries(EVENTS)
    .filter(([d, items]) => d >= todayStr && items.some((e) => e.type === "match" || e.type === "rtmsi"))
    .sort(([a], [b]) => a.localeCompare(b))[0];
  const nextMatch = upcomingEntry
    ? (() => {
        const [d, items] = upcomingEntry;
        const ev = items.find((e) => e.type === "match" || e.type === "rtmsi")!;
        const diff = Math.round((new Date(d).getTime() - new Date(todayStr).getTime()) / 86_400_000);
        return { date: d, ev, diff };
      })()
    : null;

  const selectedEvents: EventItem[] = selected ? EVENTS[selected] ?? [] : [];
  const monthLabel = `${year}. ${pad(month0 + 1)}`;
  const monthEvents = Object.entries(EVENTS)
    .filter(([d]) => d.startsWith(`${year}-${pad(month0 + 1)}`))
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-16">
      {/* 헤더 + D-day */}
      <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="flex items-center gap-5">
          <Image src="/T1logo.png" alt="T1" width={42} height={42}
            style={{ filter: "drop-shadow(0 0 10px rgba(228,0,43,0.5))" }} />
          <div>
            <h1 className="font-display text-3xl font-black tracking-tighter text-t1-red">SCHEDULE</h1>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.4em] text-paper/35">The Archive Calendar</p>
          </div>
        </div>
        {nextMatch && (
          <div className="border border-t1-red/30 bg-t1-red/[0.06] px-5 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-t1-red">
              Next Match {nextMatch.diff === 0 ? "Today" : `D-${nextMatch.diff}`}
            </p>
            <p className="mt-1 text-[13px] font-bold text-paper/80">
              {nextMatch.ev.label}
              <span className="ml-2 text-[11px] font-medium text-paper/45">{nextMatch.date}</span>
            </p>
          </div>
        )}
      </header>

      {/* 월 내비 + 범례 + ICS */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <button onClick={() => move(-1)} aria-label="이전 달"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-paper/50 transition-colors hover:border-t1-red hover:text-t1-red">←</button>
          <span className="font-display min-w-[110px] text-center text-xl font-black tabular-nums tracking-wider text-paper">{monthLabel}</span>
          <button onClick={() => move(1)} aria-label="다음 달"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-paper/50 transition-colors hover:border-t1-red hover:text-t1-red">→</button>
          <button onClick={() => { router.replace(`/schedule?m=${ym(today)}`, { scroll: false }); setSelected(null); }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-paper/40 hover:text-paper">오늘</button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {LEGEND.map(({ type, label }) => (
            <span key={type} className="flex items-center gap-1.5">
              <span aria-hidden className={`h-2 w-2 rounded-full ${TYPE_STYLE[type].dot}`} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-paper/40">{label}</span>
            </span>
          ))}
          <button onClick={downloadICS}
            className="border border-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-paper/50 transition-colors hover:border-gold hover:text-gold">
            .ics 내보내기
          </button>
        </div>
      </div>

      {/* 데스크톱: 달력 그리드 */}
      <div className="hidden gap-6 md:flex md:flex-col lg:flex-row">
        <div className="flex-1 border border-white/5 bg-ink-soft">
          <div className="grid grid-cols-7 border-b border-white/5">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <div key={d} className={`py-3 text-center text-[10px] font-black uppercase tracking-widest ${d === "SUN" ? "text-t1-red/70" : "text-paper/30"}`}>
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`b${i}`} className="min-h-[86px] border-b border-r border-white/[0.03]" />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const dateStr = `${year}-${pad(month0 + 1)}-${pad(day)}`;
              const events = EVENTS[dateStr] ?? [];
              const isSelected = selected === dateStr;
              const isToday = dateStr === todayStr;
              return (
                <button
                  key={day}
                  onClick={() => setSelected(isSelected ? null : dateStr)}
                  aria-pressed={isSelected}
                  className={`relative min-h-[86px] border-b border-r border-white/[0.03] p-2 text-left transition-all duration-200 ${
                    isSelected ? "bg-t1-red/[0.08]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`text-[12px] font-bold tabular-nums ${isToday ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-t1-red text-white" : "text-paper/45"}`}>
                    {day}
                  </span>
                  <span className="mt-1.5 flex flex-col gap-1">
                    {events.slice(0, 2).map((e, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${TYPE_STYLE[e.type].dot}`} />
                        <span className={`truncate text-[10px] font-bold ${TYPE_STYLE[e.type].text}`}>
                          {e.result && <strong className={e.result === "W" ? "text-gold" : "text-paper/40"}>{e.result} </strong>}
                          {e.label}
                        </span>
                      </span>
                    ))}
                    {events.length > 2 && <span className="text-[10px] text-paper/30">+{events.length - 2}</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 선택일 상세 */}
        <aside className="w-full border border-white/5 bg-ink-soft p-6 lg:w-80">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-paper/35">Selected</p>
          <p className="mt-2 font-display text-xl font-black tabular-nums text-paper">{selected ?? "—"}</p>
          <div className="mt-6 space-y-4">
            {selected && selectedEvents.length === 0 && (
              <p className="text-[13px] text-paper/40">기록된 일정이 없는 날.</p>
            )}
            {selectedEvents.map((e, i) => (
              <div key={i} className={`border px-4 py-3 ${TYPE_STYLE[e.type].badge}`}>
                <p className="text-[13px] font-black">
                  {e.result && <span className={`mr-1.5 ${e.result === "W" ? "text-gold" : ""}`}>[{e.result}{e.score ? ` ${e.score}` : ""}]</span>}
                  {e.label}
                </p>
                {e.sub && <p className="mt-1 text-[12px] opacity-70">{e.sub}</p>}
                {e.venue && <p className="mt-1 text-[11px] uppercase tracking-wider opacity-50">{e.venue}</p>}
              </div>
            ))}
            {!selected && <p className="text-[13px] text-paper/40">날짜를 선택하면 상세가 표시됩니다.</p>}
          </div>
        </aside>
      </div>

      {/* 모바일: 리스트 뷰 */}
      <ol className="space-y-3 md:hidden">
        {monthEvents.length === 0 && (
          <p className="border border-white/5 bg-ink-soft px-5 py-8 text-center text-[13px] text-paper/40">
            이 달에는 기록된 일정이 없습니다.
          </p>
        )}
        {monthEvents.map(([date, items]) => (
          <li key={date} className={`border border-white/5 bg-ink-soft px-4 py-4 ${date === todayStr ? "border-t1-red/40" : ""}`}>
            <p className="flex items-baseline gap-2 text-[12px] font-black tabular-nums tracking-wider text-paper/60">
              {date.slice(5).replace("-", ".")}
              {date === todayStr && <span className="text-[10px] uppercase tracking-[0.25em] text-t1-red">Today</span>}
            </p>
            <div className="mt-2.5 space-y-2">
              {items.map((e, i) => (
                <p key={i} className="flex items-center gap-2 text-[13px] font-bold">
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${TYPE_STYLE[e.type].dot}`} />
                  <span className={TYPE_STYLE[e.type].text}>
                    {e.result && <strong className={e.result === "W" ? "text-gold" : ""}>{e.result} </strong>}
                    {e.label}
                  </span>
                  {e.sub && <span className="text-[11px] font-medium text-paper/40">{e.sub}</span>}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
