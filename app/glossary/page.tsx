import type { Metadata } from "next";
import Link from "next/link";
import { entries } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Glossary",
  description: "둘만의 사전 — 마이혁부터 다정한 무지까지, 두 사람 사이에서 태어난 말들.",
};

const BY_COLOR: Record<string, string> = {
  현: "var(--yh-pink)",
  혁: "var(--t1-red)",
  둘: "var(--gold)",
};

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <header className="mb-16 text-center">
        <p className="font-display text-[11px] font-black uppercase tracking-[0.5em] text-t1-red">Glossary</p>
        <h1 className="mt-4 font-serif text-4xl text-paper md:text-5xl">둘만의 사전</h1>
        <p className="mx-auto mt-5 max-w-md break-keep font-serif text-[15px] leading-relaxed text-mist">
          두 사람 사이에서만 통용되는 말들을 채집하여 표제어로 올린다.
          모든 어휘의 출전은 <Link href="/moments" className="text-gold underline-offset-4 hover:underline">Moments</Link>에 보존되어 있다.
        </p>
      </header>

      <ol className="space-y-0 border-t border-white/10">
        {entries.map((e, i) => (
          <li key={e.term} className="group border-b border-white/10 py-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-display text-[11px] font-black tabular-nums tracking-[0.3em] text-paper/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl text-paper">
                {e.term}
                {e.reading && <span className="ml-3 text-[14px] text-paper/40">[{e.reading}]</span>}
              </h2>
              <span className="text-[12px] italic text-paper/40">「{e.pos}」</span>
              <span
                className="ml-auto border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.25em]"
                style={{ color: BY_COLOR[e.by], borderColor: `color-mix(in srgb, ${BY_COLOR[e.by]} 40%, transparent)` }}
              >
                {e.by === "둘" ? "공동 등재" : `${e.by}의 말`}
              </span>
            </div>

            <ol className="mt-5 space-y-2 pl-1">
              {e.defs.map((d, j) => (
                <li key={j} className="flex gap-3 break-keep font-serif text-[16px] leading-[1.9] text-paper/80">
                  <span className="shrink-0 tabular-nums text-paper/35">{j + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>

            {e.example && (
              <blockquote className="mt-5 border-l-2 border-gold/40 pl-4 font-serif text-[14px] italic leading-relaxed text-paper/55">
                ¶ {e.example}
              </blockquote>
            )}
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-paper/30">초출 — {e.origin}</p>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-center text-[11px] uppercase tracking-[0.4em] text-paper/30">
        본 사전은 두 사람의 대화가 이어지는 한 증보된다.
      </p>
    </main>
  );
}
