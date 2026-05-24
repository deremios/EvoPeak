/** PayID mark — simplified recreation for merchant “we accept PayID” badges. */
export function PayIdLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 108 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="PayID"
    >
      <title>PayID</title>
      <g transform="translate(0 2)">
        <rect
          x="1"
          y="9"
          width="15"
          height="15"
          rx="4.5"
          fill="#512698"
          transform="rotate(-12 8.5 16.5)"
        />
        <rect
          x="9"
          y="4"
          width="15"
          height="15"
          rx="4.5"
          fill="#00B5AD"
          transform="rotate(12 16.5 11.5)"
        />
      </g>
      <text
        x="34"
        y="20"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#1A1A1A"
      >
        Pay
      </text>
      <text
        x="68"
        y="20"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#512698"
      >
        ID
      </text>
    </svg>
  );
}
