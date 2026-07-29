import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SumNumbersData } from "./algorithm";

export function SumNumbersRenderer({ step }: RendererProps<SumNumbersData>) {
  const { heap, cur, value, path, leafValues, sum, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (path.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        {value !== null && <span className="rounded-md border border-role-current px-3 py-1">path number = <b className="tabular-nums">{value}</b></span>}
        <span className="rounded-md border px-3 py-1">sum = <b className="tabular-nums">{answer ?? sum}</b></span>
      </div>

      {leafValues.length > 0 && <div className="text-xs text-muted-foreground">leaf numbers: {leafValues.join(" + ")} = {leafValues.reduce((a, b) => a + b, 0)}</div>}

      <Legend items={[{ role: "current", label: "Current node" }, { role: "active", label: "Path from root" }]} />
    </div>
  );
}
