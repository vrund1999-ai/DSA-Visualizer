import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BombData } from "./algorithm";

export function BombRenderer({ step }: RendererProps<BombData>) {
  const { code, k, i, window, res, answer } = step.data;

  const codeRole = (idx: number) => {
    if (idx === i) return "current";
    if (window.includes(idx)) return "compared";
    return "default";
  };

  const resShown = (answer ?? res).map((x) => (x === null ? "·" : x));
  const resRole = (idx: number) => (idx === i ? "current" : res[idx] !== null ? "sorted" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b></div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">code (circular)</span>
        <ArrayCells values={code} roleFor={codeRole} showIndex cellWidth="w-11" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">decrypted</span>
        <ArrayCells values={resShown} roleFor={resRole} showIndex cellWidth="w-11" />
      </div>

      <Legend items={[{ role: "current", label: "Target index" }, { role: "compared", label: "Summed neighbors" }, { role: "sorted", label: "Filled" }]} />
    </div>
  );
}
