import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TriangleData } from "./algorithm";

export function TriangleRenderer({ step }: RendererProps<TriangleData>) {
  const { sorted, triple, valid, answer } = step.data;

  const roleFor = (i: number) => {
    if (!triple) return "default";
    if (triple.includes(i)) return valid ? "sorted" : "swapped";
    return "default";
  };

  const topLabel = (i: number) => {
    if (!triple) return "";
    if (i === triple[0]) return "a";
    if (i === triple[1]) return "b";
    if (i === triple[2]) return "c";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={sorted} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="rounded-md border px-3 py-1 text-sm">
        largest perimeter = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "valid triangle" }, { role: "swapped", label: "fails inequality" }]} />
    </div>
  );
}
