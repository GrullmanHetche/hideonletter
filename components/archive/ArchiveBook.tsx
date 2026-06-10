"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { chapters } from "@/content/archive";

const HANJA: Record<number, string> = { 1: "講", 2: "書", 3: "知" };

export default function ArchiveBook() {
  const reduced = useReducedMotion();
  const [opened, setOpened] = useState(false);
  const [ch, setCh] = useState(0);
  const [resume, setResume] = useState<number | null>(null);

  /* 읽던 챕터 기억 — 이어 읽기 */
  useEffect(() => {
    const saved = Number(localStorage.getItem("hol-archive-ch"));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage 1회 복원
    if (!Number.isNaN(saved) && saved > 0 && saved < chapters.length) setResume(saved);
  }, []);
  useEffect(() => {
    if (opened) localStorage.setItem("hol-archive-ch", String(ch));
  }, [ch, opened]);

  const chapter = chapters[ch];
  const flip = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { rotateY: -65, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: 55, opacity: 0 },
      };

  /* ───────── 닫힌 책 (표지) ───────── */
  if (!opened) {
    return (
      <main className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-6 py-16">
        <motion.button
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onClick={() => { setOpened(true); if (resume !== null) setCh(resume); }}
          aria-label="책 펼치기"
          className="group relative h-[420px] w-[300px] outline-offset-8 md:h-[480px] md:w-[340px]"
        >
          {/* 책등 그림자 + 표지 */}
          <span aria-hidden className="absolute -right-2 top-2 h-full w-full bg-black/60" />
          <span className="absolute inset-0 flex flex-col items-center justify-between border border-gold/30 bg-gradient-to-br from-[#15090c] via-ink-soft to-[#0d0d10] px-8 py-12 transition-transform duration-500 group-hover:-translate-y-1">
            <span className="flex flex-col items-center gap-3">
              <span aria-hidden className="h-px w-12 bg-gold/50" />
              <span className="font-display text-[11px] font-black uppercase tracking-[0.55em] text-gold">Hideonletter</span>
              <span aria-hidden className="h-px w-12 bg-gold/50" />
            </span>
            <span className="flex flex-col items-center gap-6">
              <span className="break-keep text-center font-serif text-3xl leading-snug text-paper md:text-4xl">
                다정한 무지 속에
                <br />
                머무는 기록
              </span>
              <span className="text-[11px] tracking-[0.35em] text-paper/40">전 3장 · 서간 부록</span>
            </span>
            <span className="flex flex-col items-center gap-4">
              <span className="block h-10 w-10 rotate-45 border border-t1-red/60 transition-colors group-hover:bg-t1-red/10" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.45em] text-paper/40 transition-colors group-hover:text-paper">
                {resume !== null ? `Chapter ${resume + 1}부터 이어 읽기` : "표지를 눌러 펼치기"}
              </span>
            </span>
          </span>
        </motion.button>
        {resume !== null && (
          <button
            onClick={() => { setCh(0); setOpened(true); }}
            className="mt-8 text-[11px] uppercase tracking-[0.35em] text-paper/35 underline-offset-4 hover:text-paper hover:underline"
          >
            처음부터 읽기
          </button>
        )}
      </main>
    );
  }

  /* ───────── 펼침면 ───────── */
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-10 md:py-16">
      {/* 챕터 내비 */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => setOpened(false)}
          className="text-[10px] font-black uppercase tracking-[0.35em] text-paper/40 transition-colors hover:text-paper"
        >
          ← 표지로
        </button>
        <div className="flex items-center gap-4" role="tablist" aria-label="챕터 선택">
          {chapters.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={ch === i}
              onClick={() => setCh(i)}
              className={`flex flex-col items-center gap-1.5 px-1 pb-1 transition-colors ${
                ch === i ? "text-t1-red" : "text-paper/30 hover:text-paper/70"
              }`}
            >
              <span aria-hidden className={`h-5 w-[2px] ${ch === i ? "bg-t1-red" : "bg-white/15"}`} />
              <span className="text-[10px] font-black tracking-widest">{c.id}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ perspective: 1600 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={ch}
            {...flip}
            transition={{ duration: reduced ? 0.2 : 0.55, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "left center" }}
            /* 데스크톱: 펼침면 2단 / 모바일: 한 페이지(요청 사항) */
            className="grid grid-cols-1 border border-white/8 bg-ink-soft shadow-[0_40px_120px_rgba(0,0,0,0.6)] md:grid-cols-2"
          >
            {/* 왼쪽 면지 — 장 표지 */}
            <section className="relative flex flex-col items-center justify-center gap-8 border-b border-white/8 bg-gradient-to-br from-[#101013] to-ink px-8 py-16 md:border-b-0 md:border-r md:py-24">
              <span aria-hidden className="select-none font-serif text-[120px] leading-none text-paper/[0.06] md:text-[180px]">
                {HANJA[chapter.id]}
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center">
                <p className="font-display text-[11px] font-black uppercase tracking-[0.5em] text-t1-red">{chapter.label}</p>
                <h1 className="font-serif text-4xl text-paper md:text-5xl">{chapter.title}</h1>
                <div aria-hidden className="h-px w-10 bg-gold/50" />
                <p className="max-w-[26ch] break-keep font-serif text-[15px] italic leading-relaxed text-mist">{chapter.sub}</p>
              </div>
            </section>

            {/* 오른쪽 본문 — 독서 모드 사양 (세리프 17~18px / 행간 2.0) */}
            <section className="relative max-h-none px-7 py-12 md:max-h-[72vh] md:overflow-y-auto md:px-12 md:py-14">
              <div className="mx-auto max-w-[38rem] space-y-7">
                {chapter.content.map((para, i) => (
                  <p key={i} className="break-keep font-serif text-[17px] leading-[2] text-paper/85 first:first-letter:float-left first:first-letter:mr-2 first:first-letter:font-serif first:first-letter:text-5xl first:first-letter:leading-[0.9] first:first-letter:text-t1-red">
                    {para}
                  </p>
                ))}
              </div>

              {/* 하단: 다음 장 / 접힌 모서리(Moments 딥링크) */}
              <div className="mx-auto mt-14 flex max-w-[38rem] items-center justify-between border-t border-white/8 pt-8">
                {ch > 0 ? (
                  <button onClick={() => setCh(ch - 1)} className="text-[11px] font-black uppercase tracking-[0.3em] text-paper/40 hover:text-paper">
                    ← {chapters[ch - 1].title}
                  </button>
                ) : <span />}
                {ch < chapters.length - 1 ? (
                  <button onClick={() => setCh(ch + 1)} className="text-[11px] font-black uppercase tracking-[0.3em] text-t1-red hover:text-paper">
                    {chapters[ch + 1].title} →
                  </button>
                ) : (
                  <Link href="/moments" className="text-[11px] font-black uppercase tracking-[0.3em] text-gold hover:text-paper">
                    이후의 기록 → Moments
                  </Link>
                )}
              </div>

              {/* 접힌 모서리 */}
              <Link
                href="/moments"
                aria-label="이 장과 이어지는 Moments 보기"
                className="group absolute bottom-0 right-0 hidden md:block"
              >
                <span
                  aria-hidden
                  className="block h-12 w-12 bg-gradient-to-tl from-t1-red/25 to-transparent transition-all duration-300 group-hover:h-16 group-hover:w-16 group-hover:from-t1-red/40"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />
              </Link>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 진행률 */}
      <div className="mt-6 flex items-center gap-3" aria-hidden>
        <div className="h-px flex-1 bg-white/8">
          <div className="h-px bg-t1-red transition-all duration-500" style={{ width: `${((ch + 1) / chapters.length) * 100}%` }} />
        </div>
        <span className="text-[10px] tracking-[0.3em] text-paper/35">
          {ch + 1} / {chapters.length}
        </span>
      </div>
    </main>
  );
}
