"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { characters, chronicle, YH_BAG, SH_BAG, type Character, type BagItem } from "@/content/profile";

/* ───────── 선수 카드 (플립) ───────── */
function PlayerCard({ c }: { c: Character }) {
  const reduced = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        animate={{ rotateY: flipped && !reduced ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative min-h-[560px]"
      >
        {/* 앞면 — 공식 프로필 */}
        <div
          className={`border border-white/8 bg-ink-soft p-7 md:p-9 ${reduced && flipped ? "hidden" : ""}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-7 flex items-start justify-between">
            <div>
              <p className="font-display text-[10px] font-black uppercase tracking-[0.45em]" style={{ color: c.accent }}>
                {c.roman}
              </p>
              <h2 className="mt-2 font-serif text-4xl tracking-tight text-paper">{c.name}</h2>
              <p className="mt-2 text-[12px] font-black tabular-nums tracking-[0.3em]" style={{ color: c.accent }}>
                {c.birth}
              </p>
            </div>
            <div className="relative h-32 w-32 shrink-0 md:h-40 md:w-40">
              <span aria-hidden className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2" style={{ borderColor: c.accent }} />
              <span aria-hidden className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 opacity-50" style={{ borderColor: c.accent }} />
              <Image src={c.portrait} alt={`${c.name} 초상`} fill className="object-contain p-2" sizes="160px" />
            </div>
          </div>

          {/* 게이지 — 선수 카드 스탯 */}
          <div className="mb-8 space-y-3.5">
            {c.gauges.map((g) => (
              <div key={g.label}>
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-paper/50">{g.label}</span>
                  <span className="text-[11px] tabular-nums tracking-wider text-paper/40">
                    {g.note ?? g.value}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.06]">
                  <motion.div
                    initial={reduced ? false : { width: 0 }}
                    whileInView={{ width: `${g.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full"
                    style={{ background: c.accent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 인적 사항 */}
          <dl className="mb-8 space-y-4">
            {Object.entries(c.stats).map(([k, v]) => (
              <div key={k} className="border-l border-white/8 pl-4 transition-colors hover:border-current" style={{ color: c.accent }}>
                <dt className="text-[10px] font-black uppercase tracking-[0.3em] text-paper/35">{k}</dt>
                <dd className="mt-1 break-keep text-[14px] font-medium text-paper/80">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mb-8 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-paper/45">
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setFlipped(true)}
            className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.35em] text-paper/45 transition-colors hover:text-paper"
          >
            <span aria-hidden className="block h-px w-7 transition-all group-hover:w-10" style={{ background: c.accent }} />
            카드 뒤집기 — 상대가 쓴 소개
          </button>
        </div>

        {/* 뒷면 — 서로가 쓴 소개 */}
        <div
          className={`absolute inset-0 flex flex-col justify-between border p-8 md:p-10 ${reduced && !flipped ? "hidden" : ""} ${reduced ? "" : ""}`}
          style={{
            backfaceVisibility: "hidden",
            transform: reduced ? undefined : "rotateY(180deg)",
            borderColor: `color-mix(in srgb, ${c.accent} 40%, transparent)`,
            background: "linear-gradient(150deg, #121214, #0a0a0b)",
          }}
        >
          <div>
            <p className="font-display text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: c.accent }}>
              {c.introByOther.author}
            </p>
            <p className="mt-8 break-keep font-serif text-[17px] leading-[2.1] text-paper/85">
              {c.introByOther.text}
            </p>
          </div>
          <button
            onClick={() => setFlipped(false)}
            className="mt-10 w-fit text-[11px] font-black uppercase tracking-[0.35em] text-paper/45 transition-colors hover:text-paper"
          >
            ← 앞면으로
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────── 가방 — 반응형 캔버스 + 드래그 (D7 해결) ───────── */
function Bag({ bag, name, accent }: { bag: { baseW: number; baseH: number; items: BagItem[] }; name: string; accent: string }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { baseW, baseH, items } = bag;

  return (
    <div className="border border-white/8 bg-ink-soft p-5 md:p-7">
      <div className="mb-4 flex items-baseline justify-between">
        <p className="text-[10px] font-black uppercase tracking-[0.45em]" style={{ color: accent }}>
          What&apos;s in my bag
        </p>
        <p className="hidden text-[10px] tracking-[0.2em] text-paper/30 md:block">아이템을 끌어서 정리해 보세요</p>
      </div>

      {/* px 절대좌표 → %  + aspect-ratio: 어떤 폭에서도 비율 유지 */}
      <div
        ref={canvasRef}
        className="relative w-full touch-none overflow-hidden"
        style={{ aspectRatio: `${baseW} / ${baseH}` }}
      >
        {items.map((it, i) => (
          <motion.button
            key={it.name}
            drag={!reduced}
            dragConstraints={canvasRef}
            dragMomentum={false}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            onTap={() => setActive(active === i ? null : i)}
            whileHover={{ scale: 1.1, zIndex: 30 }}
            whileDrag={{ scale: 1.12, zIndex: 40 }}
            aria-label={`${it.name} — ${it.desc}`}
            className="absolute cursor-grab active:cursor-grabbing"
            style={{
              top: `${(it.top / baseH) * 100}%`,
              left: `${(it.left / baseW) * 100}%`,
              width: `${(it.w / baseW) * 100}%`,
              rotate: it.rotate,
              zIndex: active === i ? 30 : i,
              filter: active === i ? `drop-shadow(0 0 14px color-mix(in srgb, ${accent} 50%, transparent))` : "none",
            }}
          >
            <Image
              src={it.img}
              alt=""
              width={it.w}
              height={it.w}
              className="pointer-events-none h-auto w-full object-contain"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>

      <div className="mt-4 flex min-h-[28px] items-center border-t border-white/5 pt-4" aria-live="polite">
        {active !== null ? (
          <p className="text-[13px] font-light italic text-paper/60">
            <span className="font-black not-italic" style={{ color: accent }}>{items[active].name}</span>
            {" — "}
            {items[active].desc}
          </p>
        ) : (
          <p className="text-[11px] uppercase tracking-widest text-paper/30">{name}의 가방 · 아이템을 만져 보세요</p>
        )}
      </div>
    </div>
  );
}

/* ───────── 페이지 ───────── */
export default function ProfileCards() {
  const [yh, sh] = characters;

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
      <header className="mb-16 flex items-center justify-center gap-4">
        <span aria-hidden className="h-px w-8 bg-t1-red" />
        <Image src="/T1logo.png" alt="" width={20} height={20} className="opacity-70" />
        <h1 className="font-display text-[12px] font-black uppercase tracking-[0.5em] text-paper/60">
          Official Pair Profile
        </h1>
        <Image src="/T1logo.png" alt="" width={20} height={20} className="opacity-70" />
        <span aria-hidden className="h-px w-8 bg-t1-red" />
      </header>

      {/* 선수 카드 2장 */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <PlayerCard c={yh} />
        <PlayerCard c={sh} />
      </div>

      {/* 가방 — 카드 아래 자연스럽게 (모달 제거) */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Bag bag={YH_BAG} name="유현" accent="var(--yh-pink)" />
        <Bag bag={SH_BAG} name="상혁" accent="var(--t1-red)" />
      </div>

      {/* ── 수직 연대기 (기존 콘텐츠 보존) ── */}
      <section className="mt-32">
        <div className="mb-14 flex flex-col items-center">
          <div className="mb-5 flex items-center gap-3" aria-hidden>
            <span className="h-px w-8 bg-t1-red" />
            <span className="h-1.5 w-1.5 rotate-45 bg-t1-red" />
            <span className="h-px w-8 bg-t1-red" />
          </div>
          <h2 className="font-display text-[12px] font-black uppercase italic tracking-[0.6em] text-paper/60">
            The Chronicle of Origin
          </h2>
          <div className="mt-8 flex w-full max-w-3xl justify-between px-6 text-[10px] font-black uppercase tracking-[0.4em]">
            <span className="text-t1-red">상 혁</span>
            <span className="text-paper/40">유 현</span>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-0 px-2 md:px-6">
          {chronicle.map((row, idx) => (
            <div key={idx} className="relative flex flex-col items-center py-9">
              {idx !== 0 && <span aria-hidden className="absolute left-1/2 top-0 h-9 w-px -translate-x-1/2 bg-gradient-to-b from-white/5 to-white/10" />}
              <div className="relative z-10 flex w-full items-center gap-4 md:gap-6">
                <div className="flex-1 text-right">
                  {row.sh ? (
                    <div className={`inline-block border-l-2 py-2 pl-4 text-left ${row.sh.goat ? "border-t1-red" : row.sh.highlight ? "border-t1-red/50" : "border-white/10"}`}>
                      <p className={`text-[14px] font-black leading-tight ${row.sh.goat ? "text-t1-red" : "text-paper"}`}>{row.sh.text}</p>
                      {row.sh.sub && <p className="mt-1 text-[11px] font-bold tracking-wider text-paper/40">{row.sh.sub}</p>}
                      {row.sh.goat && <p className="mt-1 text-[10px] font-black uppercase tracking-[0.3em] text-gold/80">The Greatest of All Time</p>}
                    </div>
                  ) : <span aria-hidden className="block h-2" />}
                </div>
                <div className="flex shrink-0 flex-col items-center">
                  <span aria-hidden className={`mb-2 h-2 w-2 rotate-45 ${row.sh?.highlight || row.yh ? "bg-t1-red" : "bg-white/20"}`} />
                  <span className={`font-display text-[22px] font-black tabular-nums tracking-tighter ${row.sh?.goat ? "text-t1-red" : row.sh?.highlight ? "text-paper" : "text-paper/40"}`}>
                    {row.year}
                  </span>
                </div>
                <div className="flex-1">
                  {row.yh ? (
                    <div className={`inline-block border-l-2 py-2 pl-4 ${row.yh.dim ? "border-white/10" : "border-yh-pink/40"}`}>
                      <p className={`text-[14px] font-black leading-tight ${row.yh.dim ? "italic text-paper/35" : "text-paper/85"}`}>{row.yh.text}</p>
                      {row.yh.sub && <p className="mt-1 text-[11px] font-bold tracking-wider text-paper/40">{row.yh.sub}</p>}
                    </div>
                  ) : <span aria-hidden className="block h-2" />}
                </div>
              </div>
              <span aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
