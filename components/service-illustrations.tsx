import { cn } from "@/lib/utils";

interface ServiceIllustrationProps {
  variant:
    | "custom-software"
    | "b2b-saas"
    | "consultancy"
    | "ai-workflows"
    | "hero";
  className?: string;
}

export function ServiceIllustration({
  variant,
  className,
}: ServiceIllustrationProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl",
        className,
      )}
    >
      {variant === "hero" && <HeroIllustration />}
      {variant === "custom-software" && <CustomSoftwareIllustration />}
      {variant === "b2b-saas" && <B2BSaasIllustration />}
      {variant === "consultancy" && <ConsultancyIllustration />}
      {variant === "ai-workflows" && <AiWorkflowIllustration />}
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a4d2e" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1a4d2e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="url(#heroGlow)" rx="16" />
      <rect
        x="120"
        y="80"
        width="160"
        height="110"
        rx="8"
        fill="#1a4d2e"
        fillOpacity="0.08"
        stroke="#1a4d2e"
        strokeWidth="2"
      />
      <path
        d="M130 180 H270 L280 195 H120 Z"
        fill="#1a4d2e"
        fillOpacity="0.1"
        stroke="#1a4d2e"
        strokeWidth="2"
      />
      <text x="175" y="140" fill="#1a4d2e" fontSize="28" fontFamily="monospace">
        {"</>"}
      </text>
      <circle
        cx="310"
        cy="70"
        r="28"
        fill="#1a4d2e"
        fillOpacity="0.06"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <path
        d="M298 70 C305 58 322 58 328 70 C335 82 322 92 310 88 C298 92 285 82 292 70 Z"
        fill="#1a4d2e"
        fillOpacity="0.15"
      />
      <rect
        x="60"
        y="200"
        width="36"
        height="56"
        rx="6"
        fill="#1a4d2e"
        fillOpacity="0.06"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <circle cx="78" cy="248" r="3" fill="#1a4d2e" fillOpacity="0.3" />
      <path
        d="M55 120 C70 100 95 95 110 110"
        stroke="#e8a020"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="90"
        cy="130"
        r="22"
        fill="#1a4d2e"
        fillOpacity="0.1"
        stroke="#1a4d2e"
        strokeWidth="2"
      />
      <path
        d="M78 125 Q90 115 102 125"
        stroke="#1a4d2e"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="84" cy="132" r="2" fill="#1a4d2e" />
      <circle cx="96" cy="132" r="2" fill="#1a4d2e" />
      <path
        d="M86 140 Q90 145 94 140"
        stroke="#1a4d2e"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function CustomSoftwareIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full p-6" aria-hidden="true">
      <rect width="360" height="280" fill="#edfaf3" rx="16" />
      <rect
        x="80"
        y="40"
        width="200"
        height="130"
        rx="6"
        fill="none"
        stroke="#1a4d2e"
        strokeWidth="2"
      />
      <path
        d="M90 160 H270 L285 180 H75 Z"
        fill="#1a4d2e"
        fillOpacity="0.1"
        stroke="#1a4d2e"
        strokeWidth="2"
      />
      <text x="155" y="110" fill="#1a4d2e" fontSize="24" fontFamily="monospace">
        {"</>"}
      </text>
      <rect
        x="40"
        y="190"
        width="280"
        height="50"
        rx="6"
        fill="#1a4d2e"
        fillOpacity="0.08"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <circle
        cx="70"
        cy="215"
        r="8"
        fill="none"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <line
        x1="95"
        y1="205"
        x2="130"
        y2="205"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <line
        x1="95"
        y1="220"
        x2="115"
        y2="220"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <rect
        x="160"
        y="200"
        width="40"
        height="30"
        rx="3"
        fill="none"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
      <circle
        cx="250"
        cy="215"
        r="12"
        fill="none"
        stroke="#1a4d2e"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function B2BSaasIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full p-6" aria-hidden="true">
      <rect width="360" height="280" fill="#f0edff" rx="16" />
      <path
        d="M140 60 C155 45 185 45 200 60 C215 45 245 45 260 60 C275 55 290 65 290 80 C300 85 300 100 290 108 C295 120 280 130 265 125 C255 140 230 140 220 125 C205 135 180 135 170 120 C155 125 140 115 145 100 C135 95 135 80 145 75 C145 68 150 62 140 60 Z"
        fill="#5b21b6"
        fillOpacity="0.12"
        stroke="#5b21b6"
        strokeWidth="2"
      />
      <rect
        x="155"
        y="145"
        width="50"
        height="70"
        rx="4"
        fill="#5b21b6"
        fillOpacity="0.1"
        stroke="#5b21b6"
        strokeWidth="1.5"
      />
      <rect
        x="160"
        y="150"
        width="40"
        height="8"
        rx="2"
        fill="#5b21b6"
        fillOpacity="0.2"
      />
      <rect
        x="160"
        y="163"
        width="40"
        height="8"
        rx="2"
        fill="#5b21b6"
        fillOpacity="0.15"
      />
      <rect
        x="160"
        y="176"
        width="40"
        height="8"
        rx="2"
        fill="#5b21b6"
        fillOpacity="0.1"
      />
      <rect
        x="100"
        y="170"
        width="50"
        height="35"
        rx="4"
        fill="none"
        stroke="#5b21b6"
        strokeWidth="1.5"
      />
      <circle
        cx="220"
        cy="185"
        r="22"
        fill="none"
        stroke="#5b21b6"
        strokeWidth="1.5"
      />
      <circle cx="220" cy="185" r="8" fill="#5b21b6" fillOpacity="0.2" />
    </svg>
  );
}

function ConsultancyIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full p-6" aria-hidden="true">
      <rect width="360" height="280" fill="#eff6ff" rx="16" />
      <path
        d="M180 50 C200 50 215 70 210 90 L195 130 L165 130 L150 90 C145 70 160 50 180 50 Z"
        fill="#1d4ed8"
        fillOpacity="0.1"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <rect
        x="172"
        y="130"
        width="16"
        height="20"
        fill="#1d4ed8"
        fillOpacity="0.15"
      />
      <line
        x1="160"
        y1="155"
        x2="200"
        y2="155"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="200"
        r="35"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <line
        x1="130"
        y1="225"
        x2="155"
        y2="250"
        stroke="#1d4ed8"
        strokeWidth="2"
      />
      <circle
        cx="270"
        cy="210"
        r="30"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="1.5"
      />
      <path
        d="M270 195 L275 215 L295 215 L280 227 L285 247 L270 235 L255 247 L260 227 L245 215 L265 215 Z"
        fill="#1d4ed8"
        fillOpacity="0.15"
        stroke="#1d4ed8"
        strokeWidth="1"
      />
    </svg>
  );
}

function AiWorkflowIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full p-6" aria-hidden="true">
      <rect width="360" height="280" fill="#fff8ed" rx="16" />
      <rect
        x="130"
        y="70"
        width="100"
        height="100"
        rx="8"
        fill="#b45309"
        fillOpacity="0.08"
        stroke="#b45309"
        strokeWidth="2"
      />
      <rect
        x="145"
        y="85"
        width="70"
        height="70"
        rx="4"
        fill="none"
        stroke="#b45309"
        strokeWidth="1.5"
      />
      {[0, 45, 90, 135].map((angle, i) => (
        <line
          key={i}
          x1={180 + Math.cos((angle * Math.PI) / 180) * 20}
          y1={120 + Math.sin((angle * Math.PI) / 180) * 20}
          x2={180 + Math.cos((angle * Math.PI) / 180) * 35}
          y2={120 + Math.sin((angle * Math.PI) / 180) * 35}
          stroke="#b45309"
          strokeWidth="2"
        />
      ))}
      <circle cx="180" cy="120" r="10" fill="#b45309" fillOpacity="0.2" />
      <circle
        cx="70"
        cy="120"
        r="18"
        fill="#b45309"
        fillOpacity="0.1"
        stroke="#b45309"
        strokeWidth="1.5"
      />
      <circle
        cx="290"
        cy="120"
        r="18"
        fill="#b45309"
        fillOpacity="0.1"
        stroke="#b45309"
        strokeWidth="1.5"
      />
      <path
        d="M88 120 H152 M208 120 H272"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}
