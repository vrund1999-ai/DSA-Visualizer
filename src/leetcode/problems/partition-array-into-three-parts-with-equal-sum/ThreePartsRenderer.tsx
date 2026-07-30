import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ThreePartsData } from "./algorithm";

export function ThreePartsRenderer({ step }: RendererProps<ThreePartsData>) {
  const { arr, target, i, acc, parts, boundaries, answer } = step.data;
  const boundarySet = new Set(boundaries);

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (boundarySet.has(idx)) return "sorted";
    if (i !== null && idx < i) return "visited";
    return "default";
  };
  const topLabel = (idx: number) => (boundarySet.has(idx) ? "┃" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        {target !== null && <span className="rounded-md border px-3 py-1">target {target}</span>}
        <span className="rounded-md border px-3 py-1">running {acc}</span>
        <span className="rounded-md border px-3 py-1">parts {parts}</span>
        <span className="rounded-md border px-3 py-1">
          result = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
        </span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "visited", label: "Processed" }, { role: "sorted", label: "Part boundary" }]} />
    </div>
  );
}
