import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FibSubseqData } from "./algorithm";

export function FibSubseqRenderer({ step }: RendererProps<FibSubseqData>) {
  const { arr, triple, best, bestSeq, answer } = step.data;
  const bestSet = new Set(bestSeq ?? []);

  const roleFor = (i: number) => {
    if (triple) {
      if (i === triple[0]) return "compared";
      if (i === triple[1]) return "current";
      if (i === triple[2]) return "swapped";
    }
    if (answer !== null && bestSet.has(arr[i])) return "sorted";
    return "default";
  };

  const topLabel = (i: number) => {
    if (!triple) return "";
    if (i === triple[0]) return "a";
    if (i === triple[1]) return "b";
    if (i === triple[2]) return "a+b";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} cellWidth="w-10" />

      <div className="rounded-md border px-3 py-1 text-sm">
        {bestSeq ? (
          <span>
            best = [{bestSeq.join(", ")}] · length <b>{answer}</b>
          </span>
        ) : (
          <span>
            longest length = <b>{answer ?? best}</b>
          </span>
        )}
      </div>

      <Legend
        items={[
          { role: "compared", label: "a" },
          { role: "current", label: "b" },
          { role: "swapped", label: "a + b" },
          { role: "sorted", label: "best subsequence" },
        ]}
      />
    </div>
  );
}
