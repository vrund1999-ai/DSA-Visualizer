import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { RecoverBstData } from "./algorithm";

export function RecoverBstRenderer({ step }: RendererProps<RecoverBstData>) {
  const { heap, cur, first, second, phase, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === first || i === second) return phase === "done" ? "sorted" : "compared";
    if (i === cur) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      {answer && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">
          in-order = {answer.join(", ")}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "compared", label: "Swapped nodes" }, { role: "sorted", label: "Corrected" }]} />
    </div>
  );
}
