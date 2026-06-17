const AFRICA_PATH =
  "M 480 120 C 520 118 550 125 570 140 C 595 158 600 180 598 200 C 596 225 580 240 575 260 C 570 285 578 305 572 325 C 560 365 535 385 520 420 C 505 458 500 495 490 530 C 478 568 460 598 445 628 C 425 665 400 690 390 720 C 378 752 385 775 375 795 C 360 820 335 830 320 815 C 300 798 295 770 285 748 C 272 720 255 700 248 672 C 238 635 245 605 238 575 C 228 535 205 510 198 472 C 190 430 200 395 192 358 C 182 315 160 285 155 245 C 148 198 162 158 178 125 C 195 88 225 70 258 60 C 292 48 328 52 360 58 C 395 65 425 80 455 95 C 465 100 472 112 480 120 Z";

const PINS = [
  { cx: 340, cy: 165 },
  { cx: 215, cy: 410 },
  { cx: 505, cy: 490 },
  { cx: 355, cy: 710 },
];

const STARS = [
  { cx: 95, cy: 155, r: 2.5 },
  { cx: 340, cy: 45, r: 2 },
  { cx: 365, cy: 145, r: 2 },
  { cx: 125, cy: 255, r: 2 },
  { cx: 295, cy: 355, r: 2.5 },
  { cx: 175, cy: 95, r: 1.5 },
];

const DOTS = [
  { cx: 280, cy: 55 },
  { cx: 50, cy: 200 },
  { cx: 355, cy: 260 },
  { cx: 145, cy: 355 },
  { cx: 250, cy: 375 },
];

function SketchIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <g
      className={className}
      fill="none"
      stroke="#1a4d2e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </g>
  );
}

export function AfricaIllustration() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-[#1a4d2e]/[0.08]" />
      <div className="absolute inset-8 rounded-full border-2 border-[#1a4d2e]/[0.12]" />
      <div className="absolute inset-16 rounded-full border-2 border-[#1a4d2e]/[0.16]" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="48%" r="42%">
            <stop offset="0%" stopColor="#1a4d2e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1a4d2e" stopOpacity="0" />
          </radialGradient>
          <clipPath id="africaClip">
            <path d={AFRICA_PATH} />
          </clipPath>
        </defs>

        {/* Soft globe glow */}
        <circle cx="200" cy="195" r="148" fill="url(#globeGlow)" />

        {/* Hand-drawn globe outline */}
        <path
          d="M200 52 C278 48 348 82 362 158 C376 234 342 318 200 342 C58 318 24 234 38 158 C52 82 122 48 200 52 Z"
          stroke="#1a4d2e"
          strokeWidth="1.5"
          strokeOpacity="0.18"
          fill="none"
          strokeLinecap="round"
        />

        {/* Decorative stars */}
        {STARS.map((star, i) => (
          <g key={i} transform={`translate(${star.cx}, ${star.cy})`}>
            <path
              d={`M0 -${star.r} L0 ${star.r} M-${star.r} 0 L${star.r} 0`}
              stroke="#e8a020"
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />
          </g>
        ))}

        {/* Scattered dots */}
        {DOTS.map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="2.5"
            fill="#1a4d2e"
            opacity="0.2"
          />
        ))}

        {/* Africa continent */}
        <g transform="translate(22, -18) scale(0.38)">
          <path d={AFRICA_PATH} fill="#1a4d2e" />

          {/* Sketch hatch texture */}
          <g clipPath="url(#africaClip)" opacity="0.12">
            {Array.from({ length: 18 }).map((_, i) => (
              <line
                key={i}
                x1={160 + i * 28}
                y1={80}
                x2={120 + i * 28}
                y2={820}
                stroke="#2d6a4f"
                strokeWidth="3"
              />
            ))}
          </g>

          {PINS.map((pin, i) => (
            <g key={i}>
              <circle
                cx={pin.cx}
                cy={pin.cy}
                r="12"
                fill="#e8a020"
                opacity="0.18"
              />
              <circle cx={pin.cx} cy={pin.cy} r="6" fill="#e8a020" />
            </g>
          ))}
        </g>

        {/* Laptop — top left */}
        <SketchIcon className="illustration-float-slow">
          <rect
            x="48"
            y="72"
            width="54"
            height="34"
            rx="4"
            fill="#1a4d2e"
            fillOpacity="0.06"
          />
          <path d="M42 106 H108 Q110 108 108 110 H42 Q40 108 42 106 Z" fill="#1a4d2e" fillOpacity="0.1" />
          <line x1="58" y1="82" x2="92" y2="82" strokeOpacity="0.4" />
        </SketchIcon>

        {/* Cloud + server — top right */}
        <SketchIcon className="illustration-float">
          <path
            d="M298 68 C308 58 322 60 328 70 C338 62 352 66 356 78 C366 80 368 92 360 100 C362 108 352 114 342 112 C336 120 322 118 318 108 C308 114 296 106 298 96 C290 94 288 82 294 76 C294 72 296 70 298 68 Z"
            fill="#1a4d2e"
            fillOpacity="0.08"
          />
          <rect x="322" y="88" width="22" height="14" rx="2" fill="#1a4d2e" fillOpacity="0.12" />
          <line x1="326" y1="93" x2="340" y2="93" strokeOpacity="0.5" />
          <line x1="326" y1="97" x2="336" y2="97" strokeOpacity="0.5" />
        </SketchIcon>

        {/* Smartphone — middle right */}
        <SketchIcon className="illustration-float-delayed">
          <rect x="328" y="188" width="24" height="42" rx="5" fill="#1a4d2e" fillOpacity="0.06" />
          <circle cx="340" cy="224" r="2" fill="#1a4d2e" fillOpacity="0.3" />
          <line x1="334" y1="196" x2="346" y2="196" strokeOpacity="0.35" />
        </SketchIcon>

        {/* Gear — bottom right */}
        <SketchIcon className="illustration-float-slow">
          <circle cx="332" cy="318" r="16" fill="#1a4d2e" fillOpacity="0.05" />
          <circle cx="332" cy="318" r="6" fill="#1a4d2e" fillOpacity="0.15" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1={332 + Math.cos((angle * Math.PI) / 180) * 10}
              y1={318 + Math.sin((angle * Math.PI) / 180) * 10}
              x2={332 + Math.cos((angle * Math.PI) / 180) * 18}
              y2={318 + Math.sin((angle * Math.PI) / 180) * 18}
            />
          ))}
        </SketchIcon>

        {/* Code brackets — bottom left */}
        <SketchIcon className="illustration-float">
          <path d="M72 298 C58 310 58 330 72 342" />
          <path d="M98 298 C112 310 112 330 98 342" />
          <line x1="82" y1="314" x2="88" y2="314" strokeOpacity="0.35" />
          <line x1="82" y1="326" x2="88" y2="326" strokeOpacity="0.35" />
        </SketchIcon>

        {/* Decorative flourish */}
        <path
          d="M168 88 C175 78 188 76 195 86 C202 96 190 104 182 98"
          stroke="#e8a020"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
