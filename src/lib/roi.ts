export const ASSUMPTIONS = {
  subscriptionPer1000SqmMonthly: 5040, // SEK hardware leasing + SaaS per 1,000 sqm / month
  greenLoanDiscount: 0.005, // 0.5% annual interest reduction
  birdsPer1000Sqm: 140000, // chickens per 1,000 sqm per year
  premiumPerBird: 0.5, // SEK premium per chicken
};

export type Inputs = { farmSize: number; loan: number };

export function calcRoi({ farmSize, loan }: Inputs) {
  const monthlySubscription = (farmSize / 1000) * ASSUMPTIONS.subscriptionPer1000SqmMonthly;
  const annualSubscription = monthlySubscription * 12;

  const monthlyInterestSavings = (loan * ASSUMPTIONS.greenLoanDiscount) / 12;
  const interestSavings = monthlyInterestSavings * 12;

  const monthlyPremiumProfit =
    ((farmSize / 1000) * (ASSUMPTIONS.birdsPer1000Sqm * ASSUMPTIONS.premiumPerBird)) / 12;
  const premiumProfit = monthlyPremiumProfit * 12;

  const netMonthlyGain = monthlyInterestSavings + monthlyPremiumProfit - monthlySubscription;
  const netAnnualGain = netMonthlyGain * 12;

  const roi =
    monthlySubscription > 0 ? (netMonthlyGain / monthlySubscription) * 100 : 0;

  const monthlyGrossBenefit = monthlyInterestSavings + monthlyPremiumProfit;
  const paybackMonths =
    monthlyGrossBenefit > 0 ? monthlySubscription / monthlyGrossBenefit : null;

  return {
    monthlySubscription,
    annualSubscription,
    monthlyInterestSavings,
    interestSavings,
    monthlyPremiumProfit,
    premiumProfit,
    netMonthlyGain,
    netAnnualGain,
    roi,
    paybackMonths,
  };
}
