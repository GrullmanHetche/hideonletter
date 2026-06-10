"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trackList, youtubeSearch, type Track } from "@/content/playlist";

/* 코멘터리 타이핑 효과 */
function Typed({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? text : "");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 트랙 변경 시 타이핑 리셋(1회)
    if (reduced) { setShown(text); return; }
    setShown("");
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length && timer.current) clearInterval(timer.current);
    }, 28);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [text, reduced]);

  return (
    <p className={`break-keep font-serif text-[15px] leading-[1.9] text-paper/80 ${shown.length < text.length ? "ink-cursor" : ""}`}>
      {shown}
    </p>
  );
}

export default function Turntable() {
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const track: Track = trackList[idx];

  return (
    <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
      {/* C안: 트랙별 무드 컬러 — 곡이 바뀌면 배경이 보간 */}
      <motion.div
        aria-hidden
        animate={{ background: `radial-gradient(120% 90% at 50% -10%, ${track.mood}26 0%, transparent 55%), radial-gradient(80% 60% at 80% 110%, ${track.mood}1f 0%, transparent 60%)` }}
        transition={{ duration: reduced ? 0 : 1.2 }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <header className="mb-14 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-t1-red" />
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-paper/45">Sound Archive: The Narrative</p>
            <span aria-hidden className="h-px w-8 bg-t1-red" />
          </div>
          <h1 className="font-display text-5xl font-black uppercase italic tracking-tighter text-paper md:text-6xl">
            Playlist<span style={{ color: track.mood }}>.</span>
          </h1>
          <p className="mt-3 text-[11px] uppercase tracking-[0.45em] text-paper/35">
            Tracing the story of SangHyeok &amp; YuHyeon
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[440px_1fr]">
          {/* ── A안: 턴테이블 ── */}
          <div className="lg:sticky lg:top-12 lg:self-start">
            <div className="border border-white/8 bg-ink-soft/80 p-7 backdrop-blur-sm">
              <div className="relative mx-auto aspect-square w-full max-w-[330px]">
                {/* LP */}
                <div className={`absolute inset-0 rounded-full bg-[#0d0d0f] shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${playing && !reduced ? "lp-spin" : ""}`}>
                  {/* 그루브 */}
                  {[88, 76, 64, 52].map((r) => (
                    <span key={r} aria-hidden className="absolute rounded-full border border-white/[0.05]"
                      style={{ inset: `${(100 - r) / 2}%` }} />
                  ))}
                  {/* 레이블 */}
                  <div
                    className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center"
                    style={{ background: `radial-gradient(circle, ${track.mood}, color-mix(in srgb, ${track.mood} 45%, black))` }}
                  >
                    <span className="font-display text-[8px] font-black uppercase tracking-[0.3em] text-white/90">Hideonletter</span>
                    <span className="mt-1 text-[9px] font-bold tabular-nums text-white/70">{track.id} / 15</span>
                    <span aria-hidden className="mt-1 block h-1.5 w-1.5 rounded-full bg-ink" />
                  </div>
                </div>
                {/* 톤암 */}
                <motion.div
                  aria-hidden
                  animate={{ rotate: playing ? 24 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformOrigin: "90% 10%" }}
                  className="absolute -right-2 -top-2 h-[58%] w-[12px]"
                >
                  <span className="absolute right-0 top-0 h-7 w-7 rounded-full border border-gold/60 bg-ink" />
                  <span className="absolute right-[11px] top-6 h-[78%] w-[3px] bg-gradient-to-b from-gold/80 to-gold/30" />
                  <span className="absolute bottom-0 right-[6px] h-5 w-[13px] bg-gold/80" />
                </motion.div>
              </div>

              {/* 재생 컨트롤 + 스펙트럼 */}
              <div className="mt-8 flex items-center gap-5">
                <button
                  onClick={() => setPlaying(!playing)}
                  aria-pressed={playing}
                  aria-label={playing ? "일시정지" : "재생"}
                  className="flex h-12 w-12 shrink-0 items-center justify-center border text-lg transition-colors"
                  style={{ borderColor: track.mood, color: track.mood, background: playing ? `${track.mood}1a` : "transparent" }}
                >
                  {playing ? "❚❚" : "▶"}
                </button>
                <div className="flex h-10 flex-1 items-end gap-[3px]" aria-hidden>
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className={`flex-1 ${playing ? "spectrum-bar" : ""}`}
                      style={{
                        height: `${22 + ((i * 37) % 70)}%`,
                        background: `color-mix(in srgb, ${track.mood} ${45 + ((i * 13) % 50)}%, transparent)`,
                        animationDelay: `${(i % 7) * 0.11}s`,
                        animationDuration: `${0.7 + ((i * 29) % 50) / 100}s`,
                        transform: playing ? undefined : "scaleY(0.22)",
                        transformOrigin: "bottom",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* 현재 트랙 + 코멘터리 타이핑 */}
              <div className="mt-8 border-t border-white/8 pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.35em]" style={{ color: track.mood }}>
                  Now on the platter
                </p>
                <h2 className="mt-2 font-serif text-2xl text-paper">{track.title}</h2>
                <p className="mt-1 text-[13px] tracking-wide text-paper/50">{track.artist}</p>
                <div className="mt-5 min-h-[84px]">
                  <Typed key={track.id} text={track.desc} />
                </div>
                <a
                  href={youtubeSearch(track)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[11px] font-black uppercase tracking-[0.3em] text-paper/45 underline-offset-4 transition-colors hover:text-paper hover:underline"
                >
                  YouTube에서 듣기 ↗
                </a>
              </div>
            </div>
          </div>

          {/* ── 트랙리스트 ── */}
          <ol className="space-y-1">
            {trackList.map((t, i) => {
              const current = i === idx;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => { setIdx(i); setPlaying(true); }}
                    aria-current={current ? "true" : undefined}
                    className={`group grid w-full grid-cols-[44px_1fr_auto] items-baseline gap-4 border-l-2 px-4 py-4 text-left transition-all duration-300 ${
                      current ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                    }`}
                    style={{ borderColor: current ? t.mood : "rgba(255,255,255,0.07)" }}
                  >
                    <span className="font-display text-[12px] font-black tabular-nums tracking-wider" style={{ color: current ? t.mood : "rgba(242,238,230,0.3)" }}>
                      {t.id}
                    </span>
                    <span className="min-w-0">
                      <span className={`block truncate text-[15px] font-bold tracking-tight ${current ? "text-paper" : "text-paper/75"}`}>
                        {t.title}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-paper/40">{t.artist}</span>
                    </span>
                    <span aria-hidden className="hidden items-end gap-[2px] md:flex">
                      {current && playing
                        ? [0, 1, 2].map((b) => (
                            <span key={b} className="spectrum-bar w-[3px]" style={{ height: 14, background: t.mood, animationDelay: `${b * 0.15}s` }} />
                          ))
                        : <span className="text-[11px] uppercase tracking-[0.25em] text-paper/25 opacity-0 transition-opacity group-hover:opacity-100">Play</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </main>
  );
}
