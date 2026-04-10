interface TripleTestedBadgeProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: "w-4 h-4", text: "text-xs", pad: "px-2 py-0.5", gap: "gap-1" },
  md: { icon: "w-5 h-5", text: "text-sm", pad: "px-3 py-1", gap: "gap-1.5" },
  lg: { icon: "w-6 h-6", text: "text-base", pad: "px-4 py-1.5", gap: "gap-2" },
};

export function TripleTestedBadge({ size = "md" }: TripleTestedBadgeProps) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} rounded-full bg-brand-green/10 ${s.pad} ${s.text} font-semibold text-brand-green`}
    >
      <svg
        className={s.icon}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
      Triple Tested
    </span>
  );
}
