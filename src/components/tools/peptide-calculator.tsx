"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { region } from "@/config";

type CalculatorMode = "reconstitution" | "dosage";

function parsePositive(value: string): number | null {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function PeptideCalculator() {
  const [mode, setMode] = useState<CalculatorMode>("reconstitution");
  const [vialMg, setVialMg] = useState("5");
  const [waterMl, setWaterMl] = useState("2");
  const [desiredMcg, setDesiredMcg] = useState("250");
  const [syringeUnits, setSyringeUnits] = useState("100");

  const reconstitution = useMemo(() => {
    const mg = parsePositive(vialMg);
    const ml = parsePositive(waterMl);
    if (!mg || !ml) return null;

    const totalMcg = mg * 1000;
    const mcgPerMl = totalMcg / ml;
    const mcgPerUnit = mcgPerMl / 100;
    const mcgPerTenthMl = mcgPerMl / 10;

    return { totalMcg, mcgPerMl, mcgPerUnit, mcgPerTenthMl };
  }, [vialMg, waterMl]);

  const dosage = useMemo(() => {
    const mcg = parsePositive(desiredMcg);
    const units = parsePositive(syringeUnits);
    if (!reconstitution || !mcg || !units) return null;

    const mlNeeded = mcg / reconstitution.mcgPerMl;
    const insulinUnits = mlNeeded * 100;
    const syringeFillPercent = (insulinUnits / units) * 100;

    return { mlNeeded, insulinUnits, syringeFillPercent };
  }, [desiredMcg, syringeUnits, reconstitution]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {(
          [
            ["reconstitution", "Reconstitution"],
            ["dosage", "Dosage volume"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition-colors ${
              mode === value
                ? "bg-brand-green text-white"
                : "border border-border-default bg-white text-brand-navy hover:border-brand-green/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-border-default bg-white p-6 sm:p-8">
          <h2 className="text-xl font-black text-brand-navy">
            {mode === "reconstitution"
              ? "Reconstitution calculator"
              : "Dosage volume calculator"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {mode === "reconstitution"
              ? "Enter your lyophilised vial size and bacteriostatic water volume to calculate concentration."
              : "Enter your target research amount and syringe size to calculate draw volume."}
          </p>

          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                Vial size (mg)
              </span>
              <input
                type="number"
                min="0"
                step="0.1"
                value={vialMg}
                onChange={(e) => setVialMg(e.target.value)}
                className="mt-2 w-full rounded-xl border border-border-default px-4 py-3 text-brand-navy focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                Bacteriostatic water added (mL)
              </span>
              <input
                type="number"
                min="0"
                step="0.1"
                value={waterMl}
                onChange={(e) => setWaterMl(e.target.value)}
                className="mt-2 w-full rounded-xl border border-border-default px-4 py-3 text-brand-navy focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </label>

            {mode === "dosage" && (
              <>
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                    Target amount (mcg)
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={desiredMcg}
                    onChange={(e) => setDesiredMcg(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-border-default px-4 py-3 text-brand-navy focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                    Insulin syringe capacity (units)
                  </span>
                  <select
                    value={syringeUnits}
                    onChange={(e) => setSyringeUnits(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-border-default px-4 py-3 text-brand-navy focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  >
                    <option value="30">30 unit (0.3 mL)</option>
                    <option value="50">50 unit (0.5 mL)</option>
                    <option value="100">100 unit (1.0 mL)</option>
                  </select>
                </label>
              </>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border-default bg-brand-navy p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
            Results
          </p>

          {!reconstitution ? (
            <p className="mt-6 text-sm leading-6 text-white/70">
              Enter valid vial size and water volume to see results.
            </p>
          ) : (
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">
                  Total peptide
                </dt>
                <dd className="mt-1 text-3xl font-black">
                  {reconstitution.totalMcg.toLocaleString()} mcg
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">
                  Concentration
                </dt>
                <dd className="mt-1 text-3xl font-black">
                  {reconstitution.mcgPerMl.toFixed(1)} mcg/mL
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">
                  Per 0.1 mL (10 units)
                </dt>
                <dd className="mt-1 text-2xl font-black">
                  {reconstitution.mcgPerTenthMl.toFixed(1)} mcg
                </dd>
              </div>
              {mode === "dosage" && dosage && (
                <>
                  <div>
                    <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">
                      Volume to draw
                    </dt>
                    <dd className="mt-1 text-3xl font-black">
                      {dosage.mlNeeded.toFixed(3)} mL
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">
                      Insulin syringe units
                    </dt>
                    <dd className="mt-1 text-2xl font-black">
                      {dosage.insulinUnits.toFixed(1)} units
                      <span className="ml-2 text-base font-semibold text-white/60">
                        ({dosage.syringeFillPercent.toFixed(0)}% of syringe)
                      </span>
                    </dd>
                  </div>
                </>
              )}
            </dl>
          )}

          <p className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/60">
            For laboratory reconstitution reference only. Not dosing advice for
            human or animal use. Always verify calculations against your
            published research protocol.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border-default bg-white p-6 sm:p-8">
        <h3 className="text-lg font-black text-brand-navy">Quick reference</h3>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
          <li>
            <strong className="text-brand-navy">Standard reconstitution:</strong>{" "}
            inject bacteriostatic water slowly down the vial wall. Swirl gently
            — do not shake.
          </li>
          <li>
            <strong className="text-brand-navy">Insulin syringe units:</strong>{" "}
            100 units = 1.0 mL, so 10 units = 0.1 mL.
          </li>
          <li>
            <strong className="text-brand-navy">Storage:</strong> lyophilised
            powder at −20°C; reconstituted solution at 2–8°C for up to 28 days.
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/blog/how-to-reconstitute-peptides"
            className="rounded-full border border-border-default px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-green/40 hover:text-brand-green transition-colors"
          >
            Reconstitution guide
          </Link>
          <Link
            href="/shop/bacteriostatic-water"
            className="rounded-full border border-border-default px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-green/40 hover:text-brand-green transition-colors"
          >
            Bacteriostatic water
          </Link>
          <Link
            href="/guide"
            className="rounded-full border border-border-default px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-green/40 hover:text-brand-green transition-colors"
          >
            Beginner guide
          </Link>
        </div>
        <p className="mt-6 text-xs leading-5 text-text-muted">
          {region.legal.disclaimer}
        </p>
      </div>
    </div>
  );
}
