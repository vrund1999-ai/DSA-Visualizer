import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxPathData } from "./algorithm";

export function MaxPathRenderer({ step }: RendererProps<MaxPathData>) {
  const { heap, current, gains, best, improved, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return improved ? "swapped" : "current";
    if (i in gains) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>best path sum so far: <b className="tabular-nums text-role-swapped">{Number.isFinite(best) ? best : "−∞"}</b></span>
        {answer !== null && <span>answer: <b className="text-role-current">{answer}</b></span>}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "swapped", label: "New best" }, { role: "visited", label: "Gain computed" }]} />
    </div>
  );
}
