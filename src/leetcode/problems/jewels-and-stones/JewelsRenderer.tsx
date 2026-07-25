import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { JewelsData } from "./algorithm";

export function JewelsRenderer({ step }: RendererProps<JewelsData>) {
  const { jewels, stones, pos, isJewel, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return isJewel ? "sorted" : "target";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">jewel types</span>
        <div className="flex gap-1">
          {[...new Set(jewels)].map((c) => (
            <span key={c} className="flex size-9 items-center justify-center rounded-md border-2 border-role-sorted bg-role-sorted/15 font-mono text-sm">{c}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stones</span>
        <ArrayCells values={stones.split("")} roleFor={roleFor} topLabel={(i) => (i === pos ? "s" : "")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="text-sm">jewels found = <b className="tabular-nums text-role-sorted">{answer ?? count}</b></div>

      <Legend items={[{ role: "sorted", label: "Is a jewel" }, { role: "target", label: "Not a jewel" }, { role: "visited", label: "Checked" }]} />
    </div>
  );
}
