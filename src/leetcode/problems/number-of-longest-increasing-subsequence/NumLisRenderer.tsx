import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NumLisData } from "./algorithm";

export function NumLisRenderer({ step }: RendererProps<NumLisData>) {
  const { nums, len, cnt, i, j, maxLen, answer } = step.data;

  const numRole = (idx: number) => (idx === i ? "current" : idx === j ? "compared" : "default");
  const lenRole = (idx: number) => (maxLen !== null && len[idx] === maxLen ? "sorted" : idx === i ? "current" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={numRole} topLabel={(k) => (k === i ? "i" : k === j ? "j" : "")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">len (longest chain ending here)</span>
        <ArrayCells values={len} roleFor={lenRole} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">cnt (number of such chains)</span>
        <ArrayCells values={cnt} roleFor={(idx) => (idx === i ? "current" : "default")} />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">number of LIS = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "i" }, { role: "compared", label: "j" }, { role: "sorted", label: "Max-length index" }]} />
    </div>
  );
}
