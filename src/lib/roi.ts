export const ASSUMPTIONS = {
  greenLoanDiscount: 0.0035, // 0.35 pp interest discount
  mortalityReduction: 0.3, // 30% of losses prevented
  outputPerSqmYear: 950, // SEK
  baseMonthly: 1500, // SEK
  perSqmMonthly: 0.6, // SEK
};

export type Inputs = { farmSize: number; loan: number; mortality: number };

export function calcRoi({ farmSize, loan, mortality }: Inputs) {
  const monthlySubscription =
    ASSUMPTIONS.baseMonthly + farmSize * ASSUMPTIONS.perSqmMonthly;
  const annualSubscription = monthlySubscription * 12;

  const interestSavings = loan * ASSUMPTIONS.greenLoanDiscount;

  const annualOutput = farmSize * ASSUMPTIONS.outputPerSqmYear;
  const premiumProfit =
    annualOutput * (mortality / 100) * ASSUMPTIONS.mortalityReduction;

  const grossBenefit = interestSavings + premiumProfit;
  const netAnnualGain = grossBenefit - annualSubscription;
  const roi = annualSubscription > 0 ? (netAnnualGain / annualSubscription) * 100 : 0;
  const monthlyNet = netAnnualGain / 12;
  const paybackMonths = monthlyNet > 0 ? annualSubscription / (grossBenefit / 12) : null;

  return {
    monthlySubscription,
    annualSubscription,
    interestSavings,
    premiumProfit,
    grossBenefit,
    netAnnualGain,
    roi,
    paybackMonths,
  };
}
