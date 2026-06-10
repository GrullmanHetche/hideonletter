import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/5 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-[10px] uppercase tracking-[0.3em] text-paper/30">
        <div className="flex items-center gap-3">
          <Image src="/T1logo.png" alt="T1" width={22} height={22} className="opacity-40" />
          <span>© 2026 Hideonletter</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px w-4 bg-t1-red/50" aria-hidden />
          <span className="font-bold text-paper/40">S.H.Lee &amp; Y.H.Lee</span>
        </div>
      </div>
    </footer>
  );
}
