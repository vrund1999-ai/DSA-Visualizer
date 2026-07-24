import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BouquetsData } from "./algorithm";

export function BouquetsRenderer({ step }: RendererProps<BouquetsData>) {
  const { bloomDay, m, k, lo, hi, mid, bloomed, bouquets, feasible, answer } = step.data;

  const roleFor = (i: number) => (bloomed[i] ? (feasible ? "sorted" : "active") : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">bloom day per flower (need {m} bouquets of {k} adjacent)</span>
        <ArrayCells values={bloomDay} roleFor={roleFor} showIndex={false} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1.5">lo = <b className="tabular-nums">{lo}</b></span>
        {mid !== null && (
          <span className="rounded-md border-2 border-role-current bg-role-current/15 px-3 py-1.5">day = <b className="tabular-nums">{mid}</b></span>
        )}
        <span className="rounded-md border px-3 py-1.5">hi = <b className="tabular-nums">{hi}</b></span>
      </div>

      {bouquets !== null && (
        <div className="text-sm text-muted-foreground">
          bouquets makeable: <b className={feasible ? "text-role-sorted" : "text-role-active"}>{bouquets}</b> / {m}
        </div>
      )}

      {answer !== null && <div className="text-base font-semibold text-role-current">{answer === -1 ? "impossible (-1)" : `Answer: day ${answer}`}</div>}

      <Legend items={[{ role: "sorted", label: "Bloomed (feasible)" }, { role: "active", label: "Bloomed (short)" }]} />
    </div>
  );
}
