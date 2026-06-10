/** 시그니처 코너 브래킷 — 페이지마다 복붙되던 장식의 공용화 */
export default function CornerFrame({
  color = "var(--t1-red)",
  className = "",
  children,
}: {
  color?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2" style={{ borderColor: color }} />
      <span aria-hidden className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2" style={{ borderColor: color }} />
      <span aria-hidden className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2" style={{ borderColor: color, opacity: 0.45 }} />
      <span aria-hidden className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2" style={{ borderColor: color, opacity: 0.45 }} />
      {children}
    </div>
  );
}
