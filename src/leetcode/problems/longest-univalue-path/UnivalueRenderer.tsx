import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { UnivalueData } from "./algorithm";

export function UnivalueRenderer({ step }: RendererProps<UnivalueData>) {
  const { heap, cur, best, bestPath, answer } = step.data;
  const pathSet = new Set(bestPath);

  const roleFor = (i: number) => {
    if (i === cur && answer === null) return "current";
    if (pathSet.has(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">longest univalue path = <b className="tabular-nums">{answer ?? best}</b> edge(s)</div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "sorted", label: "Best path" }]} />
    </div>
  );
}
