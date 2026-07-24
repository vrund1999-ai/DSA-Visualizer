import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { HouseRobberIIData } from "./algorithm";

export function HouseRobberIIRenderer({ step }: RendererProps<HouseRobberIIData>) {
  const { nums, range, cur, best, passResults, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (range && (i < range[0] || i > range[1])) return "wall"; // excluded end this pass
    if (range && i >= range[0] && i <= range[1]) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === cur ? "i" : "")} />

      <div className="text-sm text-muted-foreground">
        {range ? <>pass over houses [{range[0]}..{range[1]}] · best <b className="tabular-nums text-foreground">{best}</b></> : "two passes exclude one end each"}
      </div>

      <div className="flex gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">exclude last: <b className="tabular-nums">{passResults[0] ?? "—"}</b></span>
        <span className="rounded-md border px-3 py-1">exclude first: <b className="tabular-nums">{passResults[1] ?? "—"}</b></span>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-current">max loot = {answer}</div>}

      <Legend items={[{ role: "active", label: "This pass's houses" }, { role: "current", label: "Evaluating" }, { role: "wall", label: "Excluded end" }]} />
    </div>
  );
}
