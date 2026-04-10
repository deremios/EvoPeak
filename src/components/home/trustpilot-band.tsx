export function TrustpilotBand() {
  return (
    <div className="bg-brand-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* Trustpilot logo */}
          <svg viewBox="0 0 126 31" className="h-5 w-auto flex-shrink-0" aria-label="Trustpilot">
            <path
              d="M33.3 13.6h-8.7l-2.7-8.3L19.2 13.6l-8.7.0 7.0 5.1-2.7 8.3 7.1-5.1 7.0 5.1-2.7-8.3 7.1-5.1z"
              fill="#00B67A"
            />
            <path d="M24.3 20.4l-.9-2.8-4.2 3.1z" fill="#005128" />
            <text x="38" y="22" fill="white" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="700">
              Trustpilot
            </text>
          </svg>

          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            ))}
            {/* Half star */}
            <div className="w-5 h-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#DCDCE6]" />
              <div className="absolute inset-y-0 left-0 w-[70%] bg-[#00B67A]" />
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white absolute top-0.5 left-0.5" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Rating text */}
          <span className="text-sm font-semibold text-white">
            4.7 / 5
          </span>
          <span className="text-sm text-white/70">
            based on 180+ reviews
          </span>
        </div>
      </div>
    </div>
  );
}
