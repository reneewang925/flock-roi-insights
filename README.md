# Flock ROI Insights

Build a modern, FinTech-style agricultural ROI Calculator web application linked to the Smart Flock Monitor ecosystem.

Key requirements:
1. Bilingual Support (EN & SV):
   - Language toggle in header (English / Svenska)
   - All labels, metrics, tooltips, explanations, and financial terms fully translated in both EN and SV.
   - Appropriate SEK formatting for Sweden (e.g. 'kr' or 'SEK', 12 500 kr).

2. Header & Ecosystem Navigation:
   - Modern FinTech dark theme navigation bar.
   - Prominent badge linking back to Smart Flock Monitor (URL: https://lovable.dev/projects/1e3b7138-a362-4f8d-9ccd-022e0aa29e0c) and explaining the ecosystem connection (e.g. 'Companion tool for Smart Flock Monitor').
   - Language selector (EN / SV).

3. ROI Calculator Layout:
   - Left Column: Three sleek, responsive range sliders:
     * Farm Size (sqm) / Gårdsyta (m²) [Range: 500 - 25,000 sqm]
     * Current Bank Loan (SEK) / Befintligt banklån (SEK) [Range: 500k - 30M SEK]
     * Mortality Rate (%) / Dödlighet (%) [Range: 1.0% - 12.0%]
     * Include clean number badges, minimum/maximum indicators, and manual input or fine-tuning capability.

   - Right Column: Real-time FinTech financial dashboard:
     * Dynamic animated circular ROI percentage gauge (smooth SVG arc transitions as sliders update).
     * Net annual gain and estimated payback period in months.
     * Highlighted Metric Cards:
       - 'Monthly Subscription Cost' / 'Månadskostnad prenumeration' in muted red (rose-400 / rose-950).
       - 'Interest Savings' / 'Räntebesparing' in bold green (emerald-400 / emerald-950) based on green-loan risk reduction.
       - 'Premium Profit' / 'Ökad premievinst' (mortality prevention savings) in bold green (emerald-400).
     * Detailed breakdown toggle or breakdown table showing monthly vs. annual figures.

4. Design & Polish:
   - Dark FinTech aesthetic with refined typography, subtle gradients, and Lucide icons.
   - Interactive breakdown tooltip explaining the calculation assumptions (green ag-loan discount, mortality reduction index, platform pricing).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b9f8d1cb-786f-4c3f-b0af-77037422d0dc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
