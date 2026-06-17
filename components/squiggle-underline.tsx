export function SquiggleUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10C40 4 80 14 120 8C160 2 200 12 240 6C260 4 272 8 276 10"
        stroke="#e8a020"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
