import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CycleIIData } from "./algorithm";

export function CycleIIRenderer({ step }: RendererProps<CycleIIData>) {
  const { values, cyclePos, slow, fast, finder, phase, entry } = step.data;

  const roleFor = (i: number) => {
    if (i === entry) return "target";
    if (i === slow && i === fast) return "swapped";
    if (i === slow || i === finder) return "current";
    if (i === fast) return "active";
    if (i === cyclePos) return "compared";
    return "default";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === slow) parts.push("S");
    if (i === fast && phase === "race") parts.push("F");
    if (i === finder) parts.push("P");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        {cyclePos >= 0 ? <>tail links back to index {cyclePos} (value {values[cyclePos]})</> : "no cycle"} · {phase === "race" ? "phase 1: race" : phase === "find" ? "phase 2: find entry" : "done"}
      </div>

      <ArrayCells values={values} roleFor={roleFor} topLabel={topLabel} />

      {entry !== null && <div className="text-base font-semibold text-role-target">cycle entry = {values[entry]}</div>}

      <Legend items={[{ role: "current", label: "slow / finder" }, { role: "active", label: "fast" }, { role: "compared", label: "Cycle link target" }, { role: "target", label: "Entry" }]} />
    </div>
  );
}
