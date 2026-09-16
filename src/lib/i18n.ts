export type Lang = "en" | "sv";

export const dict = {
  en: {
    brand: "KlaraFarm",
    tagline: "Clear returns for smarter farming",
    ecosystem: "Connected to Smart Flock Monitor",
    openEcosystem: "Open Smart Flock Monitor",
    heading: "Agricultural ROI Calculator",
    sub: "Model KlaraFarm's financial return across subscription cost, green-loan interest savings and premium profit, powered by the Smart Flock Monitor ecosystem.",
    inputs: "Your farm",
    farmSize: "Farm Size",
    farmSizeUnit: "sqm",
    loan: "Current Bank Loan",
    
    min: "Min",
    max: "Max",
    fine: "Fine-tune",
    roi: "Annual ROI",
    financialSummary: "Financial ROI summary",
    projectedImpact: "Projected impact",
    liveAnalysis: "Live analysis",
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
      "Platform pricing: 5,040 SEK per 1,000 sqm per month, covering hardware leasing and SaaS.",
      "Green loan discount: 0.5% annual interest reduction on your current bank loan, i.e. loan × 0.005 per year.",
      "Premium profit: 140,000 chickens per 1,000 sqm per year at a 0.50 SEK premium per chicken, i.e. (farm size ÷ 1,000) × 140,000 × 0.5 per year.",
      "Net ROI = (monthly interest savings + monthly premium profit − monthly subscription) ÷ monthly subscription × 100.",
    ],
    infoTitle: "How this is calculated",
    negative: "At these inputs the platform does not yet pay for itself.",
    netMonth: "Net monthly gain",
    financialBreakdown: "Financial breakdown",
  },
  sv: {
    brand: "KlaraFarm",
    tagline: "Tydlig avkastning för smartare lantbruk",
    ecosystem: "Ansluten till Smart Flock Monitor",
    openEcosystem: "Öppna Smart Flock Monitor",
    heading: "Lönsamhetskalkylator för lantbruk",
    sub: "Beräkna KlaraFarms avkastning utifrån prenumerationskostnad, räntebesparing på gröna lån och ökad premievinst, med stöd av Smart Flock Monitor-ekosystemet.",
    inputs: "Din gård",
    farmSize: "Gårdsyta",
    farmSizeUnit: "m²",
    loan: "Befintligt banklån",
    min: "Min",
    max: "Max",
    fine: "Finjustera",
    roi: "Årlig ROI",
    financialSummary: "Finansiell ROI-översikt",
    projectedImpact: "Beräknad effekt",
    liveAnalysis: "Liveanalys",
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
      "Plattformspris: 5 040 kr per 1 000 m² och månad, inklusive hårdvaruleasing och SaaS.",
      "Grön lånerabatt: 0,5 % årlig räntesänkning på befintligt banklån, dvs. lån × 0,005 per år.",
      "Premievinst: 140 000 kycklingar per 1 000 m² och år med 0,50 kr i premie per kyckling, dvs. (gårdsyta ÷ 1 000) × 140 000 × 0,5 per år.",
      "Netto-ROI = (månatlig räntebesparing + månatlig premievinst − månadskostnad) ÷ månadskostnad × 100.",
    ],
    infoTitle: "Så räknar vi",
    negative: "Med dessa värden betalar plattformen ännu inte av sig.",
    netMonth: "Nettovinst per månad",
    financialBreakdown: "Finansiell uppdelning",
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
