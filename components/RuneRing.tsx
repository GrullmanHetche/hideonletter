export default function RuneRing({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 400 400" fill="none" className="rune-spin h-full w-full">
        <circle cx="200" cy="200" r="192" stroke="var(--t1-red)" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="200" r="170" stroke="var(--gold)" strokeWidth="0.6" strokeDasharray="6 5" opacity="0.22" />
        <circle cx="200" cy="200" r="138" stroke="var(--t1-red)" strokeWidth="0.8" opacity="0.22" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          return (
            <line key={i}
              x1={200 + Math.cos(a) * 145} y1={200 + Math.sin(a) * 145}
              x2={200 + Math.cos(a) * 192} y2={200 + Math.sin(a) * 192}
              stroke="var(--t1-red)" strokeWidth="0.4" opacity="0.15" />
          );
        })}
        <polygon
          points={Array.from({ length: 12 }).map((_, i) => {
            const a = ((i * 30 - 90) * Math.PI) / 180;
            return `${200 + Math.cos(a) * 170},${200 + Math.sin(a) * 170}`;
          }).join(" ")}
          stroke="var(--gold)" strokeWidth="0.6" opacity="0.25"
        />
      </svg>
      <svg viewBox="0 0 400 400" fill="none" className="rune-spin-rev absolute inset-0 h-full w-full">
        <polygon
          points={Array.from({ length: 8 }).map((_, i) => {
            const a = ((i * 45 - 22.5) * Math.PI) / 180;
            return `${200 + Math.cos(a) * 110},${200 + Math.sin(a) * 110}`;
          }).join(" ")}
          stroke="var(--t1-red)" strokeWidth="0.6" opacity="0.2"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const cx = 200 + Math.cos(a) * 110, cy = 200 + Math.sin(a) * 110;
          return <rect key={i} x={cx - 3} y={cy - 3} width="6" height="6" transform={`rotate(45 ${cx} ${cy})`} fill="var(--gold)" opacity="0.25" />;
        })}
      </svg>
    </div>
  );
}
