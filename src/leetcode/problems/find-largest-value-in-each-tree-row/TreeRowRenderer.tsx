import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { TreeRowData } from "./algorithm";

export function TreeRowRenderer({ step }: RendererProps<TreeRowData>) {
  const { heap, level, cur, best, res, answer } = step.data;
  const inLevel = new Set(level);

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (inLevel.has(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        {best !== null && <span className="rounded-md border px-3 py-1">row best = {best === -Infinity ? "−∞" : best}</span>}
        <span className="rounded-md border px-3 py-1">
          result = [<b className="tabular-nums">{(answer ?? res).join(", ")}</b>]
        </span>
      </div>

      <Legend items={[{ role: "current", label: "Reading" }, { role: "active", label: "Current row" }]} />
    </div>
  );
}
