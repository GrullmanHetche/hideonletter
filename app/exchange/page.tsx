import type { Metadata } from "next";
import Link from "next/link";
import { exchanges, songSearch } from "@/content/exchange";

export const metadata: Metadata = {
  title: "Exchange",
  description: "주고받은 것들 — 함께 본 영화와 서로에게 건넨 노래들이 쌓이는 장부.",
};

export default function ExchangePage() {
  const movies = exchanges.filter((e) => e.kind === "movie");
  const fromSh = exchanges.filter((e) => e.kind === "song" && e.from === "sh");
  const fromYh = exchanges.filter((e) => e.kind === "song" && e.from === "yh");

  return (
    <main className="mx-auto max-w-5xl px-5 py-14 md:px-10 md:py-20">
      <header className="mb-16 text-center">
        <p className="font-display text-[11px] font-black uppercase tracking-[0.5em] text-t1-red">Exchange</p>
        <h1 className="mt-4 font-serif text-4xl text-paper md:text-5xl">주고받은 것들</h1>
        <p className="mx-auto mt-5 max-w-md break-keep font-serif text-[15px] leading-relaxed text-mist">
          한쪽이 건네고 한쪽이 받은 것들의 장부.
          함께 본 것은 가운데에, 건넨 것은 각자의 줄에 적는다.
        </p>
      </header>

      {/* 레인 헤더 */}
      <div className="mb-8 grid grid-cols-2 gap-6 text-center text-[10px] font-black uppercase tracking-[0.4em]">
        <p className="text-t1-red">혁 → 현</p>
        <p className="text-yh-pink">현 → 혁</p>
      </div>

      {/* ── 함께 본 영화: 티켓 스텁 (가운데 풀폭) ── */}
      {movies.map((m) => (
        <section key={m.id} aria-label={`함께 본 영화 ${m.title}`} className="relative mb-14">
          <span aria-hidden className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-gold/60">
            Watched Together
          </span>
          <div className="relative mx-auto flex max-w-2xl flex-col overflow-hidden border border-gold/30 bg-gradient-to-br from-[#15110a] to-ink-soft md:flex-row">
            {/* 본권 */}
            <div className="flex-1 p-7 md:p-9">
              <p className="font-display text-[10px] font-black uppercase tracking-[0.45em] text-gold/70">Cinema Ticket</p>
              <h2 className="mt-3 font-serif text-4xl text-paper">{m.title}</h2>
              <p className="mt-1 text-[12px] uppercase tracking-[0.3em] text-paper/40">{m.year}</p>
              <p className="mt-5 max-w-[42ch] break-keep font-serif text-[14px] leading-[1.9] text-paper/60">{m.note}</p>
              {m.linkedTo && (
                <Link href={m.linkedTo.href} className="mt-5 inline-block text-[11px] font-black uppercase tracking-[0.3em] text-gold underline-offset-4 hover:underline">
                  {m.linkedTo.label}
                </Link>
              )}
            </div>
            {/* 절취선 + 스텁 */}
            <div aria-hidden className="relative hidden w-px border-l border-dashed border-gold/40 md:block">
              <span className="absolute -left-2.5 -top-2.5 h-5 w-5 rounded-full bg-ink" />
              <span className="absolute -bottom-2.5 -left-2.5 h-5 w-5 rounded-full bg-ink" />
            </div>
            <div aria-hidden className="relative h-px w-full border-t border-dashed border-gold/40 md:hidden" />
            <div className="flex shrink-0 flex-row items-center justify-between gap-3 p-6 md:w-40 md:flex-col md:justify-center">
              <p className="font-display text-[10px] font-black uppercase tracking-[0.35em] text-gold/60">Admit Two</p>
              <p className="font-display text-2xl font-black tracking-tighter text-paper/80">S.H × Y.H</p>
              <p className="text-[10px] tabular-nums tracking-[0.25em] text-paper/35">№ 0001</p>
            </div>
          </div>
        </section>
      ))}

      {/* ── 두 레인: 건넨 노래 ── */}
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {/* 중앙 실 */}
        <span aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-t1-red/30 via-white/5 to-yh-pink/30 md:block" />

        {/* 혁 → 현 */}
        <div className="space-y-6">
          {fromSh.map((s) => (
            <article key={s.id} className="group border border-t1-red/25 bg-ink-soft p-6 transition-colors hover:border-t1-red/50 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-t1-red">Song · From 혁</p>
                  <h3 className="mt-3 font-serif text-2xl text-paper">{s.title}</h3>
                  <p className="mt-1 text-[13px] tracking-wide text-paper/50">{s.artist}</p>
                </div>
                {/* 미니 레코드 */}
                <span aria-hidden className="relative mt-1 block h-14 w-14 shrink-0 rounded-full bg-[#101012] shadow-inner">
                  <span className="absolute inset-[30%] rounded-full bg-t1-red/80" />
                  <span className="absolute inset-[46%] rounded-full bg-ink" />
                </span>
              </div>
              <p className="mt-4 break-keep font-serif text-[14px] leading-[1.9] text-paper/55">{s.note}</p>
              <a href={songSearch(s)} target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-block text-[11px] font-black uppercase tracking-[0.3em] text-paper/40 underline-offset-4 transition-colors hover:text-t1-red hover:underline">
                YouTube에서 듣기 ↗
              </a>
            </article>
          ))}
        </div>

        {/* 현 → 혁 */}
        <div className="space-y-6">
          {fromYh.map((s) => (
            <article key={s.id} className="group border border-yh-pink/25 bg-ink-soft p-6 transition-colors hover:border-yh-pink/50 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yh-pink">Song · From 현</p>
                  <h3 className="mt-3 font-serif text-2xl text-paper">{s.title}</h3>
                  <p className="mt-1 text-[13px] tracking-wide text-paper/50">{s.artist}</p>
                </div>
                <span aria-hidden className="relative mt-1 block h-14 w-14 shrink-0 rounded-full bg-[#101012] shadow-inner">
                  <span className="absolute inset-[30%] rounded-full bg-yh-pink/80" />
                  <span className="absolute inset-[46%] rounded-full bg-ink" />
                </span>
              </div>
              <p className="mt-4 break-keep font-serif text-[14px] leading-[1.9] text-paper/55">{s.note}</p>
              <a href={songSearch(s)} target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-block text-[11px] font-black uppercase tracking-[0.3em] text-paper/40 underline-offset-4 transition-colors hover:text-yh-pink hover:underline">
                YouTube에서 듣기 ↗
              </a>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center text-[11px] uppercase tracking-[0.4em] text-paper/30">
        장부는 계속 길어진다 — content/exchange.ts에 한 줄씩.
      </p>
    </main>
  );
}
