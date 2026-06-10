"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WaxSeal from "@/components/WaxSeal";
import RuneRing from "@/components/RuneRing";
import Modal from "@/components/Modal";

type Stage = "sealed" | "opening" | "open";

export default function HomeClient() {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState<Stage | null>(null);
  const [showSecret, setShowSecret] = useState(false);
  const [pass, setPass] = useState("");
  const [secret, setSecret] = useState<{ message: string; signedBy: string } | null>(null);
  const [wrong, setWrong] = useState(false);
  const [checking, setChecking] = useState(false);

  /* 세션당 1회만 봉투 인트로 — reduced motion이면 즉시 open */
  useEffect(() => {
    const seen = sessionStorage.getItem("hol-intro-seen");
 
    setStage(seen || reduced ? "open" : "sealed");
  }, [reduced]);

  const openEnvelope = () => {
    if (stage !== "sealed") return;
    setStage("opening");
    sessionStorage.setItem("hol-intro-seen", "1");
    setTimeout(() => setStage("open"), 1700);
  };

  const tryUnlock = async (value: string) => {
    setPass(value);
    if (value.length !== 4 || checking) return;
    setChecking(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pass: value }),
      });
      const data = await res.json();
      if (data.ok) { setSecret({ message: data.message, signedBy: data.signedBy }); setWrong(false); }
      else { setWrong(true); setPass(""); }
    } finally {
      setChecking(false);
    }
  };

  if (stage === null) return <main className="min-h-[80vh] bg-ink" />;

  return (
    <main className="relative min-h-[calc(100vh-140px)] overflow-x-hidden">
      {/* ── 봉투 인트로 (A안) ── */}
      <AnimatePresence>
        {stage !== "open" && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink"
          >
            <button
              onClick={openEnvelope}
              aria-label="봉투 열기"
              className="group relative outline-offset-8"
              style={{ perspective: 1200 }}
            >
              {/* 봉투 본체 */}
              <div className="relative h-[230px] w-[330px] border border-white/10 bg-ink-soft shadow-[0_30px_80px_rgba(228,0,43,0.12)] md:h-[270px] md:w-[400px]">
                {/* 봉투 안 편지지 — 개봉 시 위로 */}
                <motion.div
                  initial={false}
                  animate={stage === "opening" ? { y: -120, opacity: 1 } : { y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-x-6 bottom-3 top-6 bg-paper"
                >
                  <p className="px-5 pt-5 font-serif text-[13px] leading-relaxed text-ink/70">
                    다정한 무지 속에
                    <br />
                    머무는 기록.
                  </p>
                </motion.div>
                {/* 봉투 앞면 하단 */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%] bg-ink-soft"
                  style={{ clipPath: "polygon(0 0, 50% 38%, 100% 0, 100% 100%, 0 100%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                />
                {/* 플랩 — rotateX로 개봉 */}
                <motion.div
                  aria-hidden
                  initial={false}
                  animate={stage === "opening" ? { rotateX: -180 } : { rotateX: 0 }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  style={{ transformOrigin: "top center", clipPath: "polygon(0 0, 100% 0, 50% 92%)" }}
                  className="absolute inset-x-0 top-0 z-10 h-[52%] border-b border-white/10 bg-[#141416]"
                />
                {/* 왁스 실 */}
                <motion.div
                  initial={false}
                  animate={
                    stage === "opening"
                      ? { scale: 0.6, opacity: 0, rotate: 18, y: 30 }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.45 }}
                  className="absolute left-1/2 top-[42%] z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105"
                >
                  <WaxSeal size={96} />
                </motion.div>
                {/* 수신인 */}
                <div className="absolute bottom-4 right-5 z-10 text-right">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-gold/70">To. You</p>
                  <p className="mt-1 text-[10px] tracking-[0.25em] text-paper/30">from S.H. &amp; Y.H.</p>
                </div>
              </div>
              <p className="mt-8 text-center text-[11px] uppercase tracking-[0.45em] text-paper/40 transition-colors group-hover:text-paper">
                {stage === "opening" ? "Opening…" : "실을 눌러 개봉"}
              </p>
            </button>
            <button
              onClick={() => { sessionStorage.setItem("hol-intro-seen", "1"); setStage("open"); }}
              className="mt-10 text-[10px] uppercase tracking-[0.35em] text-paper/30 underline-offset-4 hover:text-paper hover:underline"
            >
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 배경: 룬 링 1개 — 절제 (모바일 파손 방지: vw 제한) ── */}
      <RuneRing className="absolute right-[-12vw] top-1/2 h-[min(75vw,760px)] w-[min(75vw,760px)] -translate-y-1/2 opacity-30 md:right-[-160px]" />
      <div aria-hidden className="absolute left-[10%] top-0 h-[45vh] w-px bg-gradient-to-b from-t1-red/40 to-transparent" />

      {/* ── 히어로 ── */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: stage === "open" ? 0.1 : 0 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-6"
          >
            <Image
              src="/T1logo.png" alt="T1" width={84} height={84}
              style={{ filter: "drop-shadow(0 0 18px rgba(228,0,43,0.55))" }}
              priority
            />
            <div className="h-12 w-px bg-white/10" aria-hidden />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-5 bg-t1-red" aria-hidden />
                <span className="font-display text-[10px] font-black uppercase tracking-[0.5em] text-t1-red">Introduction</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70">S.H.Lee × Y.H.Lee</span>
            </div>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="mb-10 break-keep font-serif text-5xl leading-[1.15] tracking-[-0.02em] text-paper md:text-7xl"
          >
            다정한 무지 속에
            <br />
            <span className="italic text-paper/45">머무는 기록.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-md break-keep border-l-2 border-t1-red/40 pl-5 font-serif text-[15px] leading-[2] text-mist"
          >
            성공의 뒷면에는 항상 실패의 형태가 남아있습니다. 그것을 고치려 하지
            않고, 그저 곁에 머무는 것만으로 충분했던 어느 계절의 기록입니다.
          </motion.p>

          {/* CTA — 핵심 콘텐츠 우선 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-5"
          >
            <Link href="/archive" className="group flex w-fit items-center gap-5">
              <span className="flex h-10 w-10 items-center justify-center border border-t1-red bg-t1-red/10 text-sm font-black text-t1-red transition-all duration-300 group-hover:bg-t1-red group-hover:text-white">→</span>
              <span className="text-[12px] font-black uppercase tracking-[0.35em] text-paper transition-colors group-hover:text-t1-red">Read the Narrative</span>
            </Link>
            <Link href="/moments" className="group flex w-fit items-center gap-5">
              <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-sm font-black text-paper/30 transition-all duration-300 group-hover:border-white/40 group-hover:text-paper">→</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-paper/40 transition-colors group-hover:text-paper">View the Moments</span>
            </Link>
            <button
              onClick={() => setShowSecret(true)}
              className="group flex w-fit items-center gap-5 pt-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-sm transition-all duration-300 group-hover:border-gold/50">💌</span>
              <span className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-paper/40 transition-colors group-hover:text-paper">Private Message</span>
                <span className="text-[11px] tracking-widest text-paper/30 transition-colors group-hover:text-paper/50">내 속마음이 알고 싶어?</span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 비밀 메시지 — 검증은 서버에서 (/api/unlock) ── */}
      <Modal open={showSecret} onClose={() => { setShowSecret(false); setSecret(null); setPass(""); setWrong(false); }} label="비밀 메시지">
        {!secret ? (
          <div className="flex flex-col items-center space-y-8 py-12">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-4 bg-t1-red" aria-hidden />
              <p className="text-[10px] font-black uppercase italic tracking-[0.5em] text-t1-red">Input the master key</p>
              <div className="h-[2px] w-4 bg-t1-red" aria-hidden />
            </div>
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              aria-label="4자리 비밀번호"
              className="w-48 border-b-2 border-white/15 bg-transparent py-4 text-center text-2xl font-black tracking-[1em] text-paper outline-none transition-colors focus:border-t1-red"
              value={pass}
              onChange={(e) => tryUnlock(e.target.value)}
              autoFocus
            />
            <p className="text-[10px] uppercase tracking-widest text-paper/30">
              {checking ? "Checking…" : wrong ? "다시 시도해 보세요" : "Hint: Your Birthday"}
            </p>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8 py-8">
            <div className="h-[2px] w-10 bg-t1-red" aria-hidden />
            <p className="whitespace-pre-line break-keep font-serif text-[16px] leading-loose text-paper/80">{secret.message}</p>
            <p className="pt-6 text-right text-[10px] uppercase italic tracking-[0.3em] text-paper/40">{secret.signedBy}</p>
          </motion.div>
        )}
      </Modal>
    </main>
  );
}
