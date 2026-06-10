"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Modal from "@/components/Modal";
import { commissions, type Commission } from "@/content/commissions";

/* ───────── 그림 커미션: 액자 ───────── */
function ArtFrame({ c, index }: { c: Commission; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.figure
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: reduced ? 0 : index * 0.08 }}
      className="group"
    >
      {/* 액자: 골드 몰딩 + 매트 + 스포트라이트 */}
      <div className="relative border-[6px] border-[#2a2117] bg-[#1a1410] p-1 shadow-[0_30px_70px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-1">
        <span aria-hidden className="pointer-events-none absolute inset-0 border border-gold/30" />
        {/* 연작 리본 */}
        {c.series && (
          <span className="absolute -right-2 top-4 z-10 bg-gold px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-ink shadow-md">
            {c.series}
          </span>
        )}
        <div className="border-[10px] border-ink-soft bg-ink p-3 md:border-[14px]">
          <div className="group/img relative overflow-hidden">
            <Image
              src={c.file}
              alt={`${c.title} — ${c.note}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 90vw, 460px"
              // 고정 비율로 자르지 않고 사진 원본 비율 그대로 → 액자가 사진에 맞춰짐
              // GIF는 최적화하면 정지하므로 원본 그대로 (애니메이션 보존)
              unoptimized={c.file.endsWith(".gif")}
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* 스포트라이트 */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: "radial-gradient(90% 70% at 50% 18%, transparent 30%, rgba(10,10,11,0.55) 100%)" }}
            />
          </div>
        </div>
      </div>
      {/* 골드 명판 */}
      <figcaption className="mx-auto mt-5 w-fit max-w-full">
        <div className="border border-gold/40 bg-gradient-to-b from-[#241c0e] to-[#16110a] px-5 py-3 text-center shadow-inner">
          <p className="font-serif text-[16px] text-gold">{c.title}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold/50">{c.subtitle}</p>
        </div>
        <p className="mx-auto mt-3 max-w-[34ch] break-keep text-center text-[12px] leading-relaxed text-paper/45">{c.note}</p>
      </figcaption>
    </motion.figure>
  );
}

/* ───────── 글 커미션: 원고 봉투 ───────── */
function ManuscriptCard({ c, index, onOpen }: { c: Commission; index: number; onOpen: () => void }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: reduced ? 0 : index * 0.08 }}
    >
      <button onClick={onOpen} className="group block w-full text-left" aria-label={`${c.title} 원고 열기`}>
        <div className="relative overflow-hidden border border-white/10 bg-ink-soft p-7 transition-colors duration-300 hover:border-gold/40 md:p-9">
          {/* 봉투 안에서 비치는 종이 */}
          <span
            aria-hidden
            className="absolute -right-7 -top-7 h-28 w-28 rotate-12 bg-paper/[0.06] transition-all duration-500 group-hover:rotate-6 group-hover:bg-paper/[0.1]"
          />
          <p className="font-display text-[10px] font-black uppercase tracking-[0.45em] text-gold/70">{c.subtitle}</p>
          <h3 className="mt-4 font-serif text-3xl text-paper transition-colors group-hover:text-gold">{c.title}</h3>
          <p className="mt-4 max-w-[44ch] break-keep font-serif text-[14px] leading-[1.9] text-paper/55">{c.note}</p>
          <div className="mt-7 flex items-center justify-between border-t border-white/8 pt-5">
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-paper/40 transition-colors group-hover:text-paper">
              원고 펼치기 →
            </span>
            <span aria-hidden className="text-[11px] uppercase tracking-[0.25em] text-paper/25">
              {/\.(png|jpe?g|gif|webp)$/i.test(c.file) ? "Image" : "PDF"}
            </span>
          </div>
        </div>
      </button>
      {c.linkedTo && (
        <Link
          href={c.linkedTo.href}
          className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-gold/60 underline-offset-4 hover:text-gold hover:underline"
        >
          {c.linkedTo.label}
        </Link>
      )}
    </motion.div>
  );
}

/* ───────── 페이지 본체 ───────── */
export default function CommissionGallery() {
  const [openDoc, setOpenDoc] = useState<Commission | null>(null);
  const arts = commissions.filter((c) => c.kind === "art");
  const texts = commissions.filter((c) => c.kind === "text");

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
      <header className="mb-16 text-center">
        <p className="font-display text-[11px] font-black uppercase tracking-[0.5em] text-gold">Commission</p>
        <h1 className="mt-4 font-serif text-4xl text-paper md:text-5xl">수신 전시실</h1>
        <p className="mx-auto mt-5 max-w-md break-keep font-serif text-[15px] leading-relaxed text-mist">
          두 사람의 이야기가 다른 손을 거쳐 돌아온 것들.
          받은 그림은 벽에 걸고, 받은 글은 봉투째 보관한다.
        </p>
      </header>

      {/* 그림 — 갤러리 월 */}
      <section aria-labelledby="art-heading" className="mb-24">
        <div className="mb-10 flex items-center gap-4">
          <h2 id="art-heading" className="text-[11px] font-black uppercase tracking-[0.45em] text-paper/50">
            On the Wall — 그림
          </h2>
          <span aria-hidden className="h-px flex-1 bg-white/8" />
          <span className="text-[11px] tabular-nums tracking-[0.3em] text-paper/30">{arts.length}점</span>
        </div>
        <div className="gap-12 md:columns-2 [&>*]:mb-14 md:[&>*]:mb-12 [&>*]:break-inside-avoid">
          {arts.map((c, i) => <ArtFrame key={c.id} c={c} index={i} />)}
        </div>
      </section>

      {/* 글 — 원고 보관함 */}
      <section aria-labelledby="text-heading">
        <div className="mb-10 flex items-center gap-4">
          <h2 id="text-heading" className="text-[11px] font-black uppercase tracking-[0.45em] text-paper/50">
            In the Drawer — 글
          </h2>
          <span aria-hidden className="h-px flex-1 bg-white/8" />
          <span className="text-[11px] tabular-nums tracking-[0.3em] text-paper/30">{texts.length}편</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {texts.map((c, i) => (
            <ManuscriptCard key={c.id} c={c} index={i} onOpen={() => setOpenDoc(c)} />
          ))}
        </div>
      </section>

      {/* 원고 뷰어 모달 — 이미지/PDF 자동 분기, 미지원 환경 폴백 포함 */}
      <Modal
        open={openDoc !== null}
        onClose={() => setOpenDoc(null)}
        label={openDoc ? `${openDoc.title} 원고` : "원고"}
        color="var(--gold)"
        wide
      >
        {openDoc && (
          <div className="space-y-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/70">{openDoc.subtitle}</p>
              <h3 className="mt-2 font-serif text-2xl text-paper">{openDoc.title}</h3>
            </div>
            {/\.(png|jpe?g|gif|webp)$/i.test(openDoc.file) ? (
              <Image
                src={openDoc.file}
                alt={`${openDoc.title} — ${openDoc.note}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 86vw, 700px"
                unoptimized={openDoc.file.endsWith(".gif")}
                className="mx-auto block h-auto w-full bg-ink"
              />
            ) : (
              <object data={openDoc.file} type="application/pdf" className="h-[70vh] w-full bg-ink" aria-label={`${openDoc.title} PDF`}>
                <div className="flex h-[30vh] flex-col items-center justify-center gap-4 border border-white/10">
                  <p className="text-[13px] text-paper/50">이 브라우저에서는 문서를 바로 표시할 수 없습니다.</p>
                </div>
              </object>
            )}
            <a
              href={openDoc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-gold underline-offset-4 hover:underline"
            >
              새 탭에서 열기 ↗
            </a>
          </div>
        )}
      </Modal>
    </main>
  );
}
