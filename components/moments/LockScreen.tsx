"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { dialogues, type Msg } from "@/content/moments";

/* "(사진)" · "(셀카)" → 폴라로이드 슬롯 분리, "(링크)" → 링크 아이콘 */
function Bubble({ msg }: { msg: Msg }) {
  const mine = msg.side === "right";
  const photoMatch = msg.text?.match(/^\((사진|셀카)\)/);
  const hasPhoto = Boolean(photoMatch);
  const hasLink = msg.text?.startsWith("(링크)");
  const body = msg.text?.replace(/^\((사진|셀카|링크)\)\s*/, "");

  if (msg.type === "eyes") {
    return <p className={`py-1 text-5xl leading-none ${mine ? "text-right" : ""}`}>👀</p>;
  }

  return (
    <div className={`flex flex-col gap-1.5 ${mine ? "items-end" : "items-start"}`}>
      {hasPhoto && (
        <figure className={`w-40 border bg-white p-2 pb-6 shadow-lg ${mine ? "rotate-1" : "-rotate-1"} border-black/10`}>
          <span className="flex h-28 items-center justify-center bg-ink-soft text-2xl" role="img" aria-label={photoMatch?.[1] ?? "사진"}>
            {photoMatch?.[1] === "셀카" ? "🤳" : "📷"}
          </span>
          <figcaption className="mt-1.5 text-center text-[9px] uppercase tracking-[0.2em] text-black/40">
            {photoMatch?.[1] === "셀카" ? "selfie" : "photo"}
          </figcaption>
        </figure>
      )}
      {body && (
        <p
          className={`max-w-[78%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
            mine
              ? "rounded-tr-sm border border-yh-pink/30 bg-yh-pink/10 text-paper"
              : "rounded-tl-sm border border-white/10 bg-white/[0.05] text-paper/85"
          }`}
        >
          {hasLink && <span className="mr-1.5 text-[12px] text-gold" aria-hidden>🔗</span>}
          {body}
        </p>
      )}
    </div>
  );
}

export default function LockScreen() {
  const reduced = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 시계는 클라이언트에서만 시작
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const time = now
    ? `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    : "--:--";
  const dateLabel = now
    ? now.toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "long" })
    : "";

  const current = openIdx !== null ? dialogues[openIdx] : null;

  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 md:py-16">
      <header className="mb-10 text-center">
        <p className="font-display text-[11px] font-black uppercase tracking-[0.45em] text-t1-red">Moments</p>
        <h1 className="mt-3 font-serif text-3xl text-paper md:text-4xl">잠금화면의 기록</h1>
        <p className="mt-3 text-[12px] tracking-[0.2em] text-paper/40">알림을 눌러 그날의 대화를 펼치세요</p>
      </header>

      {/* 폰 프레임 — 데스크톱은 목업, 모바일은 풀폭 */}
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-none border-white/10 bg-ink-soft md:rounded-[2.6rem] md:border-[6px] md:shadow-[0_50px_120px_rgba(228,0,43,0.10)]">
        {/* 노치 */}
        <div aria-hidden className="absolute left-1/2 top-2 z-30 hidden h-6 w-28 -translate-x-1/2 rounded-full bg-ink md:block" />

        <div className="relative flex h-[72vh] min-h-[560px] flex-col">
          <AnimatePresence mode="wait">
            {current === null ? (
              /* ── 잠금화면 ── */
              <motion.div
                key="lock"
                initial={reduced ? { opacity: 0 } : { y: "-12%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { y: "-100%", opacity: 0.4 }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                className="flex flex-1 flex-col overflow-hidden min-h-0"
              >
                {/* 배경 룬 워터마크 */}
                <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
                  <svg viewBox="0 0 200 200" className="h-[120%] w-[120%]">
                    <circle cx="100" cy="100" r="92" stroke="var(--t1-red)" strokeWidth="1.5" fill="none" />
                    <circle cx="100" cy="100" r="60" stroke="var(--gold)" strokeWidth="1" strokeDasharray="4 5" fill="none" />
                  </svg>
                </div>

                <div className="relative z-10 pt-14 text-center md:pt-16">
                  <p className="font-display text-6xl font-black tabular-nums tracking-tight text-paper">{time}</p>
                  <p className="mt-2 text-[13px] tracking-[0.15em] text-paper/50">{dateLabel}</p>
                </div>

                {/* 알림 스택 */}
                <ul className="relative z-10 mt-10 min-h-0 flex-1 space-y-3 overflow-y-auto px-4 pb-8">
                  {dialogues.map((d, i) => {
                    const preview = d.messages.find((m) => m.text)?.text ?? "👀";
                    return (
                      <motion.li
                        key={i}
                        initial={reduced ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reduced ? 0 : 0.05 * i, duration: 0.4 }}
                      >
                        <button
                          onClick={() => setOpenIdx(i)}
                          className={`group w-full rounded-2xl border px-4 py-3.5 text-left backdrop-blur-sm transition-colors ${
                            d.featured
                              ? "border-gold/55 bg-gold/[0.06] shadow-[0_0_30px_rgba(212,175,55,0.18)] hover:border-gold/80 hover:bg-gold/[0.10]"
                              : "border-white/8 bg-white/[0.05] hover:border-t1-red/40 hover:bg-white/[0.08]"
                          }`}
                        >
                          <span className="flex items-center justify-between">
                            <span className="flex items-center gap-2.5">
                              <span aria-hidden className={`flex h-7 w-7 items-center justify-center rounded-lg text-[13px] ${d.featured ? "bg-gold/25" : "bg-t1-red/15"}`}>💌</span>
                              <span className="text-[12px] font-bold tracking-wide text-paper">HIDEONLETTER</span>
                              {d.featured && (
                                <span className="rounded-full bg-gold/20 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-[0.2em] text-gold">그날</span>
                              )}
                            </span>
                            <span className="text-[11px] tabular-nums tracking-wider text-paper/40">{d.date}</span>
                          </span>
                          <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-paper/60 group-hover:text-paper/80">
                            {preview.replace(/^\((사진|셀카|링크)\)\s*/, (m) => (m.includes("링크") ? "🔗 " : m.includes("셀카") ? "🤳 " : "📷 "))}
                          </span>
                          <span className="mt-1.5 block text-[10px] uppercase tracking-[0.25em] text-paper/30">
                            메시지 {d.messages.length}개 · 눌러서 열기
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : (
              /* ── 대화 화면 ── */
              <motion.div
                key={`chat-${openIdx}`}
                initial={reduced ? { opacity: 0 } : { y: "16%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-1 flex-col min-h-0"
              >
                <div className={`flex items-center justify-between px-4 py-4 pt-8 md:pt-10 border-b ${current.featured ? "border-gold/40" : "border-white/8"}`}>
                  <button
                    onClick={() => setOpenIdx(null)}
                    className="text-[11px] font-black uppercase tracking-[0.3em] text-paper/50 transition-colors hover:text-paper"
                  >
                    ← 잠금화면
                  </button>
                  <p className={`text-[12px] font-bold tabular-nums tracking-wider ${current.featured ? "text-gold" : "text-paper/60"}`}>{current.date}</p>
                  <span className="w-14" aria-hidden />
                </div>

                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-6">
                  {current.messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: reduced ? 0 : Math.min(i, 14) * 0.035 }}
                    >
                      <Bubble msg={m} />
                    </motion.div>
                  ))}
                  <p className="pt-4 text-center text-[10px] uppercase tracking-[0.4em] text-paper/25">
                    To be continued with you.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-paper/35">
                  <button
                    onClick={() => setOpenIdx(Math.max(0, (openIdx ?? 0) - 1))}
                    disabled={openIdx === 0}
                    className="font-bold disabled:opacity-30 hover:text-paper"
                  >
                    ← 이전
                  </button>
                  <span className="tabular-nums">{(openIdx ?? 0) + 1} / {dialogues.length}</span>
                  <button
                    onClick={() => setOpenIdx(Math.min(dialogues.length - 1, (openIdx ?? 0) + 1))}
                    disabled={openIdx === dialogues.length - 1}
                    className="font-bold disabled:opacity-30 hover:text-paper"
                  >
                    다음 →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
