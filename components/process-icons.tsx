type ProcessIconProps = {
  className?: string;
  color?: string;
};

export function DiscoveryIcon({
  className,
  color = "#1a4d2e",
}: ProcessIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="28"
        cy="28"
        r="14"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M38 38 L52 52"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 24 C24 22 30 22 32 26"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function StrategyIcon({
  className,
  color = "#7c3aed",
}: ProcessIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 12 C22 12 14 20 14 30 C14 38 20 45 28 47 L28 54 L36 54 L36 47 C44 45 50 38 50 30 C50 20 42 12 32 12 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 28 C26 24 30 22 34 24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M28 34 C30 32 34 32 36 34"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function DevelopmentIcon({
  className,
  color = "#b45309",
}: ProcessIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="10" stroke={color} strokeWidth="2.5" />
      <path
        d="M32 14 L32 22 M32 42 L32 50 M14 32 L22 32 M42 32 L50 32"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 20 L26 26 M38 38 L44 44 M44 20 L38 26 M26 38 L20 44"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function DeliveryIcon({
  className,
  color = "#1a4d2e",
}: ProcessIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 10 C32 10 20 24 20 40 L28 36 L32 48 L36 36 L44 40 C44 24 32 10 32 10 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="28" r="4" stroke={color} strokeWidth="2" />
      <path
        d="M24 44 L18 50 M40 44 L46 50"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M28 48 L26 56 M36 48 L38 56"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
