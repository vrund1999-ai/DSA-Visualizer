import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KPairsData } from "./algorithm";

export function KPairsRenderer({ step }: RendererProps<KPairsData>) {
  const { nums1, nums2, k, frontier, popped, result, answer } = step.data;
  const frontierSet = new Set(frontier);
  const resultSet = new Set(result.map(([i, j]) => `${i},${j}`));

  const cls = (i: number, j: number) => {
    const key = `${i},${j}`;
    if (popped && popped[0] === i && popped[1] === j) return "bg-role-current text-white border-role-current";
    if (resultSet.has(key)) return "bg-role-sorted/80 text-white border-role-sorted";
    if (frontierSet.has(key)) return "bg-role-active/30 border-role-active";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 pl-12">
          {nums2.map((v, j) => (
            <span key={j} className="flex h-7 w-11 items-center justify-center text-xs font-semibold text-muted-foreground">{v}</span>
          ))}
        </div>
        {nums1.map((v1, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="flex h-11 w-11 items-center justify-center text-xs font-semibold text-muted-foreground">{v1}</span>
            {nums2.map((v2, j) => (
              <span key={j} className={`flex h-11 w-11 items-center justify-center rounded border text-sm tabular-nums ${cls(i, j)}`}>{v1 + v2}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        k = {k} · pairs: <b className="font-mono">{(answer ?? result.map(([i, j]) => [nums1[i], nums2[j]])).map((p) => `[${p[0]},${p[1]}]`).join(" ")}</b>
      </div>

      <Legend items={[{ role: "current", label: "Popped (added)" }, { role: "sorted", label: "In result" }, { role: "active", label: "Heap frontier" }]} />
    </div>
  );
}
