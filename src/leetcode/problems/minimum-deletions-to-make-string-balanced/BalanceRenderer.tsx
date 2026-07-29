import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BalanceData } from "./algorithm";

export function BalanceRenderer({ step }: RendererProps<BalanceData>) {
  const { s, i, del, b, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (i !== null && idx < i) return s[idx] === "b" ? "pivot" : "visited";
    return "default";
  };
  const topLabel = (idx: number) => (idx === i ? "▼" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">b seen = {b}</span>
        <span className="rounded-md border px-3 py-1">deletions = <b className="tabular-nums">{answer ?? del}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "pivot", label: "'b' kept" }, { role: "visited", label: "processed" }]} />
    </div>
  );
}
