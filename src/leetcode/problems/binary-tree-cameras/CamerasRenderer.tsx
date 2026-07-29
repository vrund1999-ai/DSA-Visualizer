import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { CamerasData } from "./algorithm";

export function CamerasRenderer({ step }: RendererProps<CamerasData>) {
  const { heap, cameras, covered, cur, state, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (cameras.includes(i)) return "compared";
    if (i === cur) return "current";
    if (covered.includes(i)) return "visited";
    return "default";
  };

  const stateLabel = state === 0 ? "needs cover" : state === 1 ? "camera placed" : state === 2 ? "covered" : "";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        {cur !== null && <span className="rounded-md border px-3 py-1">node {heap[cur]}: {stateLabel}</span>}
        <span className="rounded-md border px-3 py-1">cameras = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "compared", label: "Camera 📷" }, { role: "visited", label: "Covered" }, { role: "current", label: "Visiting" }]} />
    </div>
  );
}
