import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PairsData } from "./algorithm";

export function PairsRenderer({ step }: RendererProps<PairsData>) {
  const { spells, potions, success, spellIdx, lo, hi, mid, res, answer } = step.data;
  const s = spellIdx !== null ? spells[spellIdx] : null;

  const potionRole = (i: number) => {
    if (i === mid) return "current";
    if (spellIdx !== null && i >= lo && s !== null && s * potions[i] >= success && answer === null) return "sorted";
    if (i >= lo && i < hi) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">spells</span>
        <ArrayCells values={spells} roleFor={(i) => (i === spellIdx ? "pivot" : "default")} badge={(i) => (answer ?? res)[i] !== undefined ? `→${(answer ?? res)[i]}` : undefined} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          potions (sorted){s !== null ? ` · need ≥ ${Math.ceil(success / s)}` : ""}
        </span>
        <ArrayCells values={potions} roleFor={potionRole} topLabel={(i) => (i === mid ? "mid" : "")} showIndex />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">pairs = [<b className="tabular-nums">{(answer ?? res).join(", ")}</b>]</div>

      <Legend items={[{ role: "pivot", label: "Current spell" }, { role: "active", label: "Search range" }, { role: "current", label: "mid" }, { role: "sorted", label: "Works" }]} />
    </div>
  );
}
