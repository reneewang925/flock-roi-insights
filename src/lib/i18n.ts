export type Lang = "en" | "sv";

export const dict = {
  en: {
    brand: "AgriROI",
    tagline: "Green-loan ROI calculator",
    ecosystem: "Companion tool for Smart Flock Monitor",
    openEcosystem: "Open Smart Flock Monitor",
    heading: "Agricultural ROI Calculator",
    sub: "Model the financial return of Smart Flock Monitor across subscription cost, green-loan interest savings and mortality prevention.",
    inputs: "Your farm",
    farmSize: "Farm Size",
    farmSizeUnit: "sqm",
    loan: "Current Bank Loan",
    mortality: "Mortality Rate",
    min: "Min",
    max: "Max",
    fine: "Fine-tune",
    roi: "Annual ROI",
    netGain: "Net annual gain",
    payback: "Payback period",
    months: "months",
    monthsShort: "mo",
    subscription: "Monthly Subscription Cost",
    interest: "Interest Savings",
    premium: "Premium Profit",
    perYear: "per year",
    perMonth: "per month",
    breakdown: "Detailed breakdown",
    showBreakdown: "Show breakdown",
    hideBreakdown: "Hide breakdown",
    item: "Item",
    monthly: "Monthly",
    annual: "Annual",
    total: "Net result",
    assumptions: "Calculation assumptions",
    assumptionList: [
      "Green agri-loan discount: 0.35 percentage points on the outstanding loan once flock monitoring data is reported to the lender.",
      "Mortality reduction index: monitoring prevents 30% of current mortality; each prevented loss is valued from an output of 950 SEK per sqm per year.",
      "Platform pricing: 1 500 SEK per month base plus 0.60 SEK per sqm per month.",
    ],
    infoTitle: "How this is calculated",
    negative: "At these inputs the platform does not yet pay for itself.",
  },
  sv: {
    brand: "AgriROI",
    tagline: "ROI-kalkylator för gröna lån",
    ecosystem: "Kompletterande verktyg till Smart Flock Monitor",
    openEcosystem: "Öppna Smart Flock Monitor",
    heading: "Lönsamhetskalkylator för lantbruk",
    sub: "Beräkna avkastningen för Smart Flock Monitor utifrån prenumerationskostnad, räntebesparing på gröna lån och minskad dödlighet.",
    inputs: "Din gård",
    farmSize: "Gårdsyta",
    farmSizeUnit: "m²",
    loan: "Befintligt banklån",
    mortality: "Dödlighet",
    min: "Min",
    max: "Max",
    fine: "Finjustera",
    roi: "Årlig ROI",
    netGain: "Nettovinst per år",
    payback: "Återbetalningstid",
    months: "månader",
    monthsShort: "mån",
    subscription: "Månadskostnad prenumeration",
    interest: "Räntebesparing",
    premium: "Ökad premievinst",
    perYear: "per år",
    perMonth: "per månad",
    breakdown: "Detaljerad uppdelning",
    showBreakdown: "Visa uppdelning",
    hideBreakdown: "Dölj uppdelning",
    item: "Post",
    monthly: "Per månad",
    annual: "Per år",
    total: "Nettoresultat",
    assumptions: "Antaganden i beräkningen",
    assumptionList: [
      "Grön lantbruksrabatt: 0,35 procentenheter på befintligt lån när flockdata rapporteras till banken.",
      "Index för minskad dödlighet: övervakning förhindrar 30 % av nuvarande dödlighet; varje undviken förlust värderas utifrån 950 kr per m² och år.",
      "Plattformspris: 1 500 kr per månad i grundavgift plus 0,60 kr per m² och månad.",
    ],
    infoTitle: "Så räknar vi",
    negative: "Med dessa värden betalar plattformen ännu inte av sig.",
  },
} as const;

export function useT(lang: Lang) {
  return dict[lang];
}

export function formatSEK(lang: Lang, value: number, decimals = 0) {
  const n = new Intl.NumberFormat(lang === "sv" ? "sv-SE" : "en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Math.round(value * 10 ** decimals) / 10 ** decimals)
    .replace(/\u00a0/g, " ");
  return `${n} kr`;
}

export function formatNum(lang: Lang, value: number, decimals = 0) {
  return new Intl.NumberFormat(lang === "sv" ? "sv-SE" : "en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(value)
    .replace(/\u00a0/g, " ");
}
