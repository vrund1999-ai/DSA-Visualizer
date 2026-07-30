import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TaxData } from "./algorithm";

export function TaxRenderer({ step }: RendererProps<TaxData>) {
  const { brackets, income, activeBracket, tax, answer } = step.data;
  const maxUpper = Math.max(income, ...brackets.map(([u]) => u));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex w-full max-w-md flex-col gap-1.5">
        {brackets.map(([upper, percent], i) => {
          const lower = i === 0 ? 0 : brackets[i - 1][0];
          const taxedTo = Math.min(income, upper);
          const filled = Math.max(0, taxedTo - lower);
          const span = upper - lower;
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-24 text-right text-xs tabular-nums text-muted-foreground">
                {lower}–{upper} @ {percent}%
              </span>
              <div className="relative h-5 flex-1 overflow-hidden rounded bg-muted/30" style={{ maxWidth: `${(span / maxUpper) * 100}%` }}>
                <div
                  className={`h-full ${i === activeBracket ? "bg-role-current" : "bg-role-active/60"}`}
                  style={{ width: `${span > 0 ? (filled / span) * 100 : 0}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        income {income} · tax = <b>{answer !== null ? answer.toFixed(5).replace(/\.?0+$/, "") : tax.toFixed(2)}</b>
      </div>

      <Legend items={[{ role: "current", label: "active bracket" }, { role: "active", label: "taxed portion" }]} />
    </div>
  );
}
