import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ShortestRemovalData } from "./algorithm";

export function ShortestRemovalRenderer({ step }: RendererProps<ShortestRemovalData>) {
  const { arr, left, right, i, j, ans, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (idx === j) return "compared";
    if (idx <= left) return "sorted";
    if (idx >= right) return "path";
    return "wall";
  };

  const topLabel = (idx: number) => (idx === i ? "i" : idx === j ? "j" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="rounded-md border px-3 py-1 text-sm">shortest removal = <b className="tabular-nums">{answer ?? ans ?? "…"}</b></div>

      <Legend
        items={[
          { role: "sorted", label: "Sorted prefix" },
          { role: "path", label: "Sorted suffix" },
          { role: "wall", label: "Removable" },
          { role: "current", label: "i (prefix)" },
          { role: "compared", label: "j (suffix)" },
        ]}
      />
    </div>
  );
}
