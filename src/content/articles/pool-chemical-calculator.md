---
title: "Pool chemical calculator: the dosing math explained with worked examples"
description: "Every pool chemical calculator, ours included, runs the same underlying mass-balance idea: (pool gallons ÷ 10,000) × (ppm change needed) × the chemical's"
keyword: "pool chemical calculator"
publishDate: 2026-07-19
---

Every pool chemical calculator, ours included, runs the same underlying mass-balance idea: (pool gallons ÷ 10,000) × (ppm change needed) × the chemical's known dose rate, scaled to whatever ppm increment that chemical is conventionally measured in. Alkalinity, calcium, and CYA rates are published per 10 ppm because owners typically move those numbers in large chunks; chlorine rates are published per 1 ppm because a working chlorine range only spans a few ppm at a time. Same idea, different increment.

Knowing the formula means you can sanity-check any calculator's output, or work the math by hand when you're standing at the pool with a bag of shock and no signal.

## What's the base formula behind every dose?

**Amount needed = (pool gallons ÷ 10,000) × (ppm change ÷ ppm increment for that chemical) × dose rate per 10,000 gallons**

The dose rate and the ppm increment are the only things that change chemical to chemical. Below are the rates for the six chemicals a home pool owner doses most often.

## Dose rate per 10,000 gallons

| Chemical | Direction | Dose rate | Per how many ppm | Product strength assumed |
|---|---|---|---|---|
| Liquid chlorine (sodium hypochlorite) | Raise free chlorine | 13 fl oz | 1 ppm | 10% |
| Liquid chlorine (sodium hypochlorite) | Raise free chlorine | 10 fl oz | 1 ppm | 12.5% |
| Calcium hypochlorite (cal-hypo) | Raise free chlorine | 1.3 oz | 1 ppm | 65% |
| Sodium bicarbonate (baking soda) | Raise total alkalinity | 1.5 lb | 10 ppm | n/a |
| Muriatic acid | Lower total alkalinity or pH | 32 fl oz | 10 ppm | 31.45% |
| Soda ash (sodium carbonate) | Raise pH (also raises TA slightly) | 6 oz | 0.2 pH unit | n/a |
| Calcium chloride (flake) | Raise calcium hardness | 1.25 lb | 10 ppm | 77% |
| Cyanuric acid (granular) | Raise CYA/stabilizer | 13 oz | 10 ppm | n/a |

These rates come from standard industry dosing charts used across pool-supply retailers and are consistent with the mass-balance approach taught in Certified Pool Operator training. Product concentration varies by brand, so always confirm the percentage on your specific label before dosing off a generic chart.

## Worked example: chlorine

A 20,000-gallon pool tests at 1 ppm free chlorine and needs to reach 4 ppm, a 3 ppm rise, using 12.5% liquid chlorine, dosed at 10 fl oz per 10,000 gallons per 1 ppm.

(20,000 ÷ 10,000) × 3 ppm × 10 fl oz = 2 × 3 × 10 = **60 fl oz** (about 1.9 quarts) of 12.5% liquid chlorine.

## Worked example: alkalinity

A 15,000-gallon pool tests at 70 ppm alkalinity and needs to reach 100 ppm, a 30 ppm rise, using baking soda.

(15,000 ÷ 10,000) × (30 ÷ 10) × 1.5 lb = 1.5 × 3 × 1.5 = **6.75 lb**, roughly 7 pounds, staged in one dose since it's under the 1.5 lb per 10,000 gallon per-treatment cap most manufacturers list.

## Worked example: calcium hardness

A 25,000-gallon pool tests at 150 ppm calcium hardness and needs to reach 250 ppm, a 100 ppm rise, using 77% calcium chloride flake.

(25,000 ÷ 10,000) × (100 ÷ 10) × 1.25 lb = 2.5 × 10 × 1.25 = **31.25 lb**, added in stages of roughly 10 lb at a time with a 4-hour retest between doses, since calcium chloride generates heat as it dissolves and large single doses can cloud the water.

## Worked example: cyanuric acid (stabilizer)

A 15,000-gallon pool tests at 20 ppm CYA and needs to reach 40 ppm, a 20 ppm rise, using granular cyanuric acid.

(15,000 ÷ 10,000) × (20 ÷ 10) × 13 oz = 1.5 × 2 × 13 = **39 oz**, roughly 2.4 lb, pre-dissolved or added to a sock in front of a return jet since granular CYA can take 48 to 72 hours to fully dissolve.

## Why do calculators disagree with each other?

Two calculators can return different numbers for the same pool for three reasons: they assume different product concentrations (10% versus 12.5% liquid chlorine changes the dose by nearly 25%), they round the base rate differently (some use 1.25 oz cal-hypo per 1 ppm, others 1.3 oz, both close but not identical), or they don't ask for your actual pool shape and depth, defaulting to a rough volume estimate instead of your real gallon count. Get your gallon count right first: every other error in the chain is smaller than a wrong volume figure.

Run your own numbers through the ClearCove Pools pool chemical calculator, which asks for your actual product's label percentage instead of assuming a default strength, then compare it against the hand math above if you want to double-check it.

For a full spring startup where five or six of these calculations happen back-to-back, the ClearCove Pools pool-opening guide lays out the order that keeps one correction from throwing off the next.

## Frequently asked questions

**Do I need to know my exact pool volume to use a calculator?**
Yes, and it's the single biggest source of dosing error. Measure length, width, and average depth (or use your pool's original spec sheet) rather than guessing; a 10% error in gallons produces a 10% error in every chemical dose calculated from it.

**Why does the same calculator give a different chlorine dose for tablets versus liquid?**
Trichlor tablets (typically around 90% available chlorine plus cyanuric acid) and liquid sodium hypochlorite (10 to 12.5% available chlorine, no CYA) have completely different active-ingredient concentrations, so the ounces-per-ppm rate is not interchangeable between them.

**Can I use a pool chemical calculator for a hot tub?**
The same mass-balance formula works, but hot tub volumes are far smaller (300 to 500 gallons typically), so small measuring errors matter more, and CDC guidance specifically recommends against using cyanuric acid or stabilized chlorine products in hot tubs at all ([CDC Healthy Swimming](https://www.cdc.gov/healthy-swimming/about/home-pool-and-hot-tub-water-treatment-and-testing.html)).

**What if my calculator recommends more than the safe per-dose maximum?**
Split it. Every chemical in the table above has a practical per-treatment cap (roughly 1.5 lb/10,000 gal for baking soda, a 20 ppm drop for acid, and similar limits for the rest); stage larger corrections across multiple treatments with a retest between each rather than adding the full calculated amount at once.

Bottom line: every pool chemical calculator runs (gallons ÷ 10,000) × (ppm change ÷ that chemical's ppm increment) × a chemical-specific rate. Get the gallon count and the product's label percentage right, and the rest is arithmetic you can check by hand in under a minute.

<!-- QA tell-audit: first draft mislabeled the chlorine dose rate as "per 10 ppm" when the industry convention is per 1 ppm, which would have understated the chlorine dose by 10x; caught it on self-review and rewrote the formula section, table, and worked example to separate chlorine's per-1-ppm convention from the per-10-ppm chemicals; confirmed all four worked examples recompute correctly by hand; zero em/en dashes on final scan. -->