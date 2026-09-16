import { useId } from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  minLabel: string;
  maxLabel: string;
  decimals?: number;
};

export function RangeSlider({
  icon: Icon,
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  minLabel,
  maxLabel,
  decimals = 0,
}: Props) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Icon className="size-4 text-primary" aria-hidden />
          {label}
        </label>
        <span className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-sm tabular-nums text-primary">
          {display}
        </span>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-5 w-full"
        style={{ ["--pct" as string]: `${pct}%` }}
      />

      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground/70">
        <span>{minLabel}</span>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={Number(value.toFixed(decimals))}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (Number.isFinite(v)) onChange(Math.min(max, Math.max(min, v)));
          }}
          className="w-28 rounded-md border border-border bg-background/70 px-2 py-1 text-right font-mono text-xs tabular-nums text-foreground outline-none focus:border-primary/60"
        />
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
