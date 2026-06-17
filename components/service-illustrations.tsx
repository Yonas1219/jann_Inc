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
  const green = "#1a4d2e";
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="320" fill="#f0f7f2" rx="16" />
      <circle cx="200" cy="160" r="72" fill={green} fillOpacity="0.06" />
      <circle
        cx="200"
        cy="160"
        r="48"
        fill="none"
        stroke={green}
        strokeWidth="2"
        strokeOpacity="0.2"
      />

      {/* Hub */}
      <circle cx="200" cy="160" r="22" fill={green} fillOpacity="0.12" stroke={green} strokeWidth="2" />
      <path d="M192 160 H208 M200 152 V168" stroke={green} strokeWidth="2" strokeLinecap="round" />

      {/* Code — top */}
      <g transform="translate(200, 72)">
        <circle r="28" fill={green} fillOpacity="0.08" stroke={green} strokeWidth="1.5" />
        <text y="6" textAnchor="middle" fill={green} fontSize="16" fontFamily="monospace">
          {"</>"}
        </text>
      </g>
      <line x1="200" y1="100" x2="200" y2="138" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />

      {/* Cloud — right */}
      <g transform="translate(310, 160)">
        <circle r="28" fill="#5b21b6" fillOpacity="0.08" stroke="#5b21b6" strokeWidth="1.5" />
        <path
          d="M-14 4 C-8 -6 6 -6 10 4 C18 4 18 14 10 16 C8 22 -4 22 -6 16 C-14 14 -14 8 -10 6"
          fill="#5b21b6"
          fillOpacity="0.15"
          stroke="#5b21b6"
          strokeWidth="1.2"
        />
      </g>
      <line x1="282" y1="160" x2="222" y2="160" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />

      {/* Lightbulb — bottom */}
      <g transform="translate(200, 248)">
        <circle r="28" fill="#1d4ed8" fillOpacity="0.08" stroke="#1d4ed8" strokeWidth="1.5" />
        <path
          d="M0 -12 C8 -12 12 -4 10 4 L6 12 H-6 L-10 4 C-12 -4 -8 -12 0 -12 Z"
          fill="#1d4ed8"
          fillOpacity="0.15"
          stroke="#1d4ed8"
          strokeWidth="1.2"
        />
      </g>
      <line x1="200" y1="220" x2="200" y2="182" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />

      {/* AI chip — left */}
      <g transform="translate(90, 160)">
        <circle r="28" fill="#b45309" fillOpacity="0.08" stroke="#b45309" strokeWidth="1.5" />
        <rect x="-12" y="-12" width="24" height="24" rx="3" fill="none" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#b45309" fillOpacity="0.2" />
      </g>
      <line x1="118" y1="160" x2="178" y2="160" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />
    </svg>
  );
}

function CustomSoftwareIllustration() {
  const color = "#1a4d2e";
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="280" fill="#edfaf3" rx="16" />

      {/* Laptop */}
      <rect x="72" y="56" width="180" height="118" rx="8" fill="white" stroke={color} strokeWidth="2" />
      <rect x="84" y="68" width="156" height="88" rx="4" fill={color} fillOpacity="0.06" />
      <text x="148" y="122" textAnchor="middle" fill={color} fontSize="28" fontFamily="monospace">
        {"</>"}
      </text>
      <path
        d="M62 174 H262 L278 196 H46 Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Mobile app */}
      <rect x="268" y="88" width="52" height="88" rx="8" fill="white" stroke={color} strokeWidth="2" />
      <rect x="276" y="100" width="36" height="56" rx="3" fill={color} fillOpacity="0.08" />
      <rect x="284" y="108" width="20" height="4" rx="2" fill={color} fillOpacity="0.3" />
      <rect x="284" y="118" width="16" height="4" rx="2" fill={color} fillOpacity="0.2" />
      <rect x="284" y="128" width="18" height="4" rx="2" fill={color} fillOpacity="0.2" />
      <circle cx="294" cy="168" r="4" fill={color} fillOpacity="0.25" />

      {/* Integration arrows */}
      <path
        d="M248 130 H262 M256 124 L262 130 L256 136"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeOpacity="0.5"
      />

      {/* Stacked modules */}
      <rect x="88" y="210" width="64" height="36" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
      <rect x="100" y="220" width="40" height="6" rx="2" fill={color} fillOpacity="0.2" />
      <rect x="100" y="232" width="28" height="6" rx="2" fill={color} fillOpacity="0.12" />

      <rect x="164" y="210" width="64" height="36" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
      <rect x="176" y="220" width="40" height="6" rx="2" fill={color} fillOpacity="0.2" />
      <rect x="176" y="232" width="28" height="6" rx="2" fill={color} fillOpacity="0.12" />

      <rect x="240" y="210" width="64" height="36" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
      <rect x="252" y="220" width="40" height="6" rx="2" fill={color} fillOpacity="0.2" />
      <rect x="252" y="232" width="28" height="6" rx="2" fill={color} fillOpacity="0.12" />
    </svg>
  );
}

function B2BSaasIllustration() {
  const color = "#5b21b6";
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="280" fill="#f0edff" rx="16" />

      {/* Cloud */}
      <path
        d="M130 72 C145 52 185 52 200 72 C218 58 248 68 252 92 C272 96 278 118 262 132 C268 148 248 158 230 150 C218 168 188 168 176 150 C158 158 138 148 144 128 C128 122 126 98 142 88 C138 78 132 72 130 72 Z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="2"
      />

      {/* Connection lines */}
      <line x1="180" y1="148" x2="180" y2="168" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="140" y1="168" x2="220" y2="168" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="140" y1="168" x2="140" y2="188" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="220" y1="168" x2="220" y2="188" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Multi-tenant server stacks */}
      {[100, 160, 220].map((x) => (
        <g key={x}>
          <rect x={x} y="188" width="40" height="64" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
          <rect x={x + 6} y="198" width="28" height="8" rx="2" fill={color} fillOpacity="0.2" />
          <rect x={x + 6} y="212" width="28" height="8" rx="2" fill={color} fillOpacity="0.15" />
          <rect x={x + 6} y="226" width="28" height="8" rx="2" fill={color} fillOpacity="0.1" />
          <circle cx={x + 20} cy="242" r="3" fill={color} fillOpacity="0.35" />
        </g>
      ))}

      {/* Subscription cycle */}
      <path
        d="M72 230 A 28 28 0 1 1 72 226"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      <path
        d="M68 228 L72 222 L76 228"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeOpacity="0.35"
      />

      {/* API badge */}
      <rect x="268" y="200" width="56" height="32" rx="6" fill="white" stroke={color} strokeWidth="1.5" />
      <text x="296" y="220" textAnchor="middle" fill={color} fontSize="11" fontFamily="monospace" fontWeight="bold">
        API
      </text>
    </svg>
  );
}

function ConsultancyIllustration() {
  const color = "#1d4ed8";
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="280" fill="#eff6ff" rx="16" />

      {/* Lightbulb */}
      <path
        d="M180 48 C200 48 216 66 212 86 L200 118 L160 118 L148 86 C144 66 160 48 180 48 Z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="2"
      />
      <rect x="168" y="118" width="24" height="14" rx="2" fill={color} fillOpacity="0.2" />
      <line x1="156" y1="136" x2="204" y2="136" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Roadmap line */}
      <line x1="60" y1="200" x2="300" y2="200" stroke={color} strokeWidth="2" strokeOpacity="0.25" />

      {/* Milestones */}
      {[
        { x: 80, label: "1" },
        { x: 150, label: "2" },
        { x: 220, label: "3" },
        { x: 290, label: "4" },
      ].map((step, i) => (
        <g key={step.x}>
          <circle
            cx={step.x}
            cy="200"
            r="18"
            fill="white"
            stroke={color}
            strokeWidth="2"
          />
          <text
            x={step.x}
            y="205"
            textAnchor="middle"
            fill={color}
            fontSize="12"
            fontWeight="bold"
          >
            {step.label}
          </text>
          {i < 3 && (
            <path
              d={`M${step.x + 22} 200 H${[150, 220, 290][i] - 22}`}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              strokeOpacity="0.4"
            />
          )}
        </g>
      ))}

      {/* Strategy document */}
      <rect x="88" y="228" width="80" height="36" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
      <line x1="98" y1="240" x2="158" y2="240" stroke={color} strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="98" y1="252" x2="140" y2="252" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" />

      {/* Architecture diagram */}
      <rect x="192" y="228" width="80" height="36" rx="4" fill="white" stroke={color} strokeWidth="1.5" />
      <rect x="202" y="238" width="20" height="16" rx="2" fill={color} fillOpacity="0.15" />
      <rect x="228" y="238" width="20" height="16" rx="2" fill={color} fillOpacity="0.1" />
      <line x1="222" y1="246" x2="228" y2="246" stroke={color} strokeWidth="1" />
    </svg>
  );
}

function AiWorkflowIllustration() {
  const color = "#b45309";
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="280" fill="#fff8ed" rx="16" />

      {/* Input */}
      <rect x="48" y="108" width="64" height="64" rx="8" fill="white" stroke={color} strokeWidth="2" />
      <rect x="60" y="122" width="40" height="6" rx="2" fill={color} fillOpacity="0.25" />
      <rect x="60" y="134" width="32" height="6" rx="2" fill={color} fillOpacity="0.15" />
      <rect x="60" y="146" width="36" height="6" rx="2" fill={color} fillOpacity="0.15" />
      <text x="80" y="100" textAnchor="middle" fill={color} fontSize="10" fontWeight="bold">
        INPUT
      </text>

      {/* Arrow 1 */}
      <path
        d="M118 140 H148 M142 134 L148 140 L142 146"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* AI processor */}
      <rect x="148" y="96" width="64" height="88" rx="8" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="180" cy="132" r="18" fill="white" stroke={color} strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1={180 + Math.cos((angle * Math.PI) / 180) * 10}
          y1={132 + Math.sin((angle * Math.PI) / 180) * 10}
          x2={180 + Math.cos((angle * Math.PI) / 180) * 16}
          y2={132 + Math.sin((angle * Math.PI) / 180) * 16}
          stroke={color}
          strokeWidth="1.5"
        />
      ))}
      <circle cx="180" cy="132" r="5" fill={color} fillOpacity="0.35" />
      <text x="180" y="168" textAnchor="middle" fill={color} fontSize="9" fontWeight="bold">
        AI
      </text>

      {/* Arrow 2 */}
      <path
        d="M218 140 H248 M242 134 L248 140 L242 146"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Output / insights */}
      <rect x="248" y="108" width="64" height="64" rx="8" fill="white" stroke={color} strokeWidth="2" />
      <path
        d="M264 148 L276 132 L286 142 L298 122"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text x="280" y="100" textAnchor="middle" fill={color} fontSize="10" fontWeight="bold">
        OUTPUT
      </text>

      {/* Automation loop below */}
      <path
        d="M100 220 H260"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.4"
      />
      <rect x="130" y="228" width="100" height="28" rx="14" fill="white" stroke={color} strokeWidth="1.5" />
      <text x="180" y="246" textAnchor="middle" fill={color} fontSize="10" fontWeight="bold">
        Automate
      </text>
    </svg>
  );
}
