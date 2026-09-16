type Props = { value: number; label: string };

export function RoiGauge({ value, label }: Props) {
  const size = 224;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const sweep = 0.75; // 270deg arc
  const clamped = Math.max(-100, Math.min(400, value));
  const frac = Math.max(0, Math.min(1, (clamped + 100) / 500));
  const dash = c * sweep * frac;
  const positive = value >= 0;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-[225deg]" role="img" aria-label={`${label}: ${value.toFixed(0)}%`}>
        <defs>
          <linearGradient id="roiArc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={positive ? "var(--gain)" : "var(--destructive)"} />
            <stop offset="100%" stopColor={positive ? "var(--brass)" : "var(--destructive)"} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${c * sweep} ${c}`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#roiArc)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          style={{ transition: "stroke-dasharray 600ms cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs font-bold uppercase text-muted-foreground">{label}</span>
        <span className={`mt-1 font-mono text-6xl font-bold tabular-nums ${positive ? "text-gain drop-shadow-[0_0_18px_var(--gain-glow)]" : "text-destructive"}`}>
          {value > 0 ? "+" : ""}
          {value.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}
