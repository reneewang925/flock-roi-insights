import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Banknote,
  ChevronDown,
  CreditCard,
  Info,
  LandPlot,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { KlaraFarmLogo } from "@/components/KlaraFarmLogo";
import { RangeSlider } from "@/components/RangeSlider";
import { RoiGauge } from "@/components/RoiGauge";
import { calcRoi } from "@/lib/roi";
import { formatNum, formatSEK, useT, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KlaraFarm — Green-Loan ROI Calculator" },
      {
        name: "description",
        content:
          "Calculate KlaraFarm ROI from subscription costs, green-loan interest savings and premium profit in SEK, connected to Smart Flock Monitor.",
      },
      { property: "og:title", content: "KlaraFarm — Green-Loan ROI Calculator" },
      {
        property: "og:description",
        content:
          "Model KlaraFarm subscription costs, green-loan interest savings and premium profit for your farm in SEK.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SMART_FLOCK_URL =
  "https://lovable.dev/projects/1e3b7138-a362-4f8d-9ccd-022e0aa29e0c";

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [farmSize, setFarmSize] = useState(6000);
  const [loan, setLoan] = useState(8_000_000);
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState(false);

  const t = useT(lang);
  const r = useMemo(() => calcRoi({ farmSize, loan }), [farmSize, loan]);

  const rows = [
    { label: t.subscription, monthly: -r.monthlySubscription, annual: -r.annualSubscription },
    { label: t.interest, monthly: r.monthlyInterestSavings, annual: r.interestSavings },
    { label: t.premium, monthly: r.monthlyPremiumProfit, annual: r.premiumProfit },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,oklch(0.35_0.09_165/0.35),transparent),radial-gradient(50%_40%_at_90%_10%,oklch(0.35_0.07_250/0.3),transparent)]" />

      <header className="relative z-10 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid size-11 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_24px_oklch(0.696_0.17_162.48/0.16)]">
              <KlaraFarmLogo className="h-7 w-9" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">{t.brand}</p>
              <p className="text-xs text-muted-foreground">{t.tagline}</p>
            </div>
          </div>

          <a
            href={SMART_FLOCK_URL}
            target="_blank"
            rel="noreferrer"
            className="group ml-auto flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-400/20"
          >
            <Leaf className="size-3.5" aria-hidden />
            {t.ecosystem}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
          </a>

          <div className="flex items-center rounded-full border border-border bg-card/70 p-0.5 text-xs">
            {(["en", "sv"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l === "en" ? "English" : "Svenska"}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.sub}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <section className="space-y-4" aria-label={t.inputs}>
            <RangeSlider
              icon={LandPlot}
              label={`${t.farmSize} (${t.farmSizeUnit})`}
              value={farmSize}
              min={500}
              max={25000}
              step={100}
              onChange={setFarmSize}
              display={`${formatNum(lang, farmSize)} ${t.farmSizeUnit}`}
              minLabel={`${t.min} 500`}
              maxLabel={`${t.max} 25 000`}
            />
            <RangeSlider
              icon={Banknote}
              label={`${t.loan} (SEK)`}
              value={loan}
              min={500_000}
              max={30_000_000}
              step={50_000}
              onChange={setLoan}
              display={formatSEK(lang, loan)}
              minLabel={`${t.min} 500 000`}
              maxLabel={`${t.max} 30 000 000`}
            />

            <div className="rounded-2xl border border-border/70 bg-card/40 p-5">
              <button
                onClick={() => setTip((v) => !v)}
                className="flex w-full items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                aria-expanded={tip}
              >
                <Info className="size-4 text-primary" aria-hidden />
                {t.infoTitle}
                <ChevronDown className={`ml-auto size-4 transition-transform ${tip ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {tip && (
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                  {t.assumptionList.map((a) => (
                    <li key={a} className="border-l-2 border-primary/40 pl-3">
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-border/70 bg-card/60 p-8 backdrop-blur">
              <RoiGauge value={r.roi} label={t.roi} />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
                  <p className="text-xs text-muted-foreground">{t.netGain}</p>
                  <p
                    className={`mt-1 font-mono text-xl font-semibold tabular-nums ${
                      r.netAnnualGain >= 0 ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {formatSEK(lang, r.netAnnualGain)}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
                  <p className="text-xs text-muted-foreground">{t.payback}</p>
                  <p className="mt-1 font-mono text-xl font-semibold tabular-nums text-foreground">
                    {r.paybackMonths
                      ? `${formatNum(lang, r.paybackMonths, 1)} ${t.months}`
                      : "—"}
                  </p>
                </div>
              </div>
              {r.netAnnualGain < 0 && (
                <p className="mt-4 text-xs text-rose-300/80">{t.negative}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard
                icon={CreditCard}
                tone="rose"
                label={t.subscription}
                value={formatSEK(lang, r.monthlySubscription)}
                sub={`${formatSEK(lang, r.annualSubscription)} ${t.perYear}`}
              />
              <MetricCard
                icon={Banknote}
                tone="emerald"
                label={t.interest}
                value={formatSEK(lang, r.interestSavings)}
                sub={`${formatSEK(lang, r.monthlyInterestSavings)} ${t.perMonth}`}
              />
              <MetricCard
                icon={TrendingUp}
                tone="emerald"
                label={t.premium}
                value={formatSEK(lang, r.premiumProfit)}
                sub={`${formatSEK(lang, r.monthlyPremiumProfit)} ${t.perMonth}`}
              />
            </div>

            <div className="rounded-3xl border border-border/70 bg-card/40 p-6">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center gap-2 text-sm font-medium"
              >
                {t.breakdown}
                <span className="ml-auto text-xs text-muted-foreground">
                  {open ? t.hideBreakdown : t.showBreakdown}
                </span>
                <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
              </button>

              {open && (
                <table className="mt-5 w-full text-sm">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="pb-2 text-left font-medium">{t.item}</th>
                      <th className="pb-2 text-right font-medium">{t.monthly}</th>
                      <th className="pb-2 text-right font-medium">{t.annual}</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono tabular-nums">
                    {rows.map((row) => (
                      <tr key={row.label} className="border-t border-border/60">
                        <td className="py-2.5 pr-3 font-sans text-muted-foreground">{row.label}</td>
                        <td className={`py-2.5 text-right ${row.annual < 0 ? "text-rose-400" : "text-emerald-400"}`}>
                          {formatSEK(lang, row.monthly)}
                        </td>
                        <td className={`py-2.5 text-right ${row.annual < 0 ? "text-rose-400" : "text-emerald-400"}`}>
                          {formatSEK(lang, row.annual)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-border">
                      <td className="py-3 font-sans font-medium">{t.total}</td>
                      <td className={`py-3 text-right font-semibold ${r.netAnnualGain >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {formatSEK(lang, r.netMonthlyGain)}
                      </td>
                      <td className={`py-3 text-right font-semibold ${r.netAnnualGain >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {formatSEK(lang, r.netAnnualGain)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </div>

        <footer className="mt-14 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <a href={SMART_FLOCK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            {t.openEcosystem}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </footer>
      </main>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  tone,
  label,
  value,
  sub,
}: {
  icon: typeof Banknote;
  tone: "rose" | "emerald";
  label: string;
  value: string;
  sub: string;
}) {
  const tones =
    tone === "rose"
      ? "border-rose-400/25 bg-rose-950/40 text-rose-400"
      : "border-emerald-400/25 bg-emerald-950/40 text-emerald-400";
  return (
    <div className={`rounded-2xl border p-5 ${tones}`}>
      <Icon className="size-4" aria-hidden />
      <p className="mt-3 text-xs font-medium text-foreground/70">{label}</p>
      <p className="mt-1 font-mono text-lg font-semibold tabular-nums">{value}</p>
      <p className="mt-1 text-[11px] text-foreground/50">{sub}</p>
    </div>
  );
}
