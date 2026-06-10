"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/archive", label: "Archive" },
  { href: "/moments", label: "Moments" },
  { href: "/profile", label: "Profile" },
  { href: "/playlist", label: "Playlist" },
  { href: "/schedule", label: "Schedule" },
  { href: "/glossary", label: "Glossary" },
  { href: "/commission", label: "Commission" },
  { href: "/exchange", label: "Exchange" },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <nav className="relative z-40 w-full border-b border-white/5 bg-ink/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link href="/" className="flex shrink-0 flex-col" aria-label="HIDEONLETTER 홈">
          <span className="font-display text-[12px] font-black uppercase tracking-[0.5em] text-t1-red">
            Hideonletter
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-paper/30">
            The Sealed Archive
          </span>
        </Link>
        <div
          className="flex items-center gap-5 overflow-x-auto text-[10px] font-bold uppercase tracking-[0.3em] md:gap-7"
          style={{ scrollbarWidth: "none" }}
        >
          {LINKS.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap pb-0.5 transition-colors duration-200 ${
                  active
                    ? "border-b border-t1-red text-paper"
                    : "text-paper/40 hover:text-paper"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
