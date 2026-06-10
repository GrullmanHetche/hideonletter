import Image from "next/image";

export default function WaxSeal({ size = 120 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="wax" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#ff4d6a" />
            <stop offset="45%" stopColor="#e4002b" />
            <stop offset="100%" stopColor="#7a0017" />
          </radialGradient>
        </defs>
        {/* 왁스 본체 — 불규칙한 가장자리 */}
        <path
          d="M60 4c14 0 20 7 30 11s24 9 24 26c0 10-6 14-6 22s8 13 4 25c-5 14-18 14-26 19s-14 9-26 9-17-5-26-9S12 102 8 88c-4-12 4-17 4-25S6 51 6 41C6 24 19 20 30 15S46 4 60 4z"
          fill="url(#wax)"
        />
        {/* 인장 음각: 마법진의 룬 — 축소·재해석 */}
        <g stroke="#7a0017" fill="none" opacity="0.85">
          <circle cx="60" cy="60" r="38" strokeWidth="1.4" />
          <circle cx="60" cy="60" r="30" strokeWidth="0.8" strokeDasharray="3 4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = ((i * 30 - 90) * Math.PI) / 180;
            return (
              <line key={i}
                x1={60 + Math.cos(a) * 30} y1={60 + Math.sin(a) * 30}
                x2={60 + Math.cos(a) * 38} y2={60 + Math.sin(a) * 38}
                strokeWidth="0.8" />
            );
          })}
          <polygon
            points={Array.from({ length: 6 }).map((_, i) => {
              const a = ((i * 60 - 30) * Math.PI) / 180;
              return `${60 + Math.cos(a) * 24},${60 + Math.sin(a) * 24}`;
            }).join(" ")}
            strokeWidth="1"
          />
        </g>
        <g stroke="#ffb3c1" fill="none" opacity="0.25" transform="translate(-1,-1)">
          <circle cx="60" cy="60" r="38" strokeWidth="1" />
        </g>
      </svg>
      <Image
        src="/T1logo.png" alt="" width={Math.round(size * 0.3)} height={Math.round(size * 0.3)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-luminosity"
      />
    </div>
  );
}
