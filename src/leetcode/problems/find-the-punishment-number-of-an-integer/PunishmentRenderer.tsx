import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PunishmentData } from "./algorithm";

export function PunishmentRenderer({ step }: RendererProps<PunishmentData>) {
  const { n, i, square, parts, qualifies, total, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">n = <b className="tabular-nums">{n}</b></span>
        {i !== null && <span className="rounded-md border border-role-current px-3 py-1">i = {i}</span>}
      </div>

      {square !== null && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{i}² = {square}</span>
          <div className="flex items-center gap-1">
            {parts ? (
              parts.map((p, idx) => (
                <span key={idx} className="flex items-center gap-1">
                  <span className="rounded-md border-2 border-role-sorted bg-role-sorted/15 px-3 py-1.5 font-mono text-lg">{p}</span>
                  {idx < parts.length - 1 && <span className="text-muted-foreground">+</span>}
                </span>
              ))
            ) : (
              <span className={`rounded-md border-2 px-3 py-1.5 font-mono text-lg ${qualifies === false ? "border-role-compared bg-role-compared/15" : "border-border"}`}>{square}</span>
            )}
          </div>
          {parts && <span className="text-sm text-muted-foreground">= {i} ✓</span>}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">punishment total = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "sorted", label: "Valid partition" }, { role: "compared", label: "No valid split" }]} />
    </div>
  );
}
