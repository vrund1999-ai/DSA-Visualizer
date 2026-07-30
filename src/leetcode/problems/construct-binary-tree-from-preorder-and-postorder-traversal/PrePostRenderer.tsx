import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PrePostData } from "./algorithm";

export function PrePostRenderer({ step }: RendererProps<PrePostData>) {
  const { pre, post, heap, rootPre, splitPost, answer } = step.data;
  const shown = answer ?? heap;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">preorder</span>
          <ArrayCells values={pre} roleFor={(i) => (i === rootPre ? "current" : i === (rootPre ?? -2) + 1 ? "compared" : "default")} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">postorder</span>
          <ArrayCells values={post} roleFor={(i) => (i === splitPost ? "compared" : "default")} />
        </div>
      </div>

      {shown.length > 0 && <TreeView heap={shown} roleFor={(i) => (rootPre !== null && shown[i] === pre[rootPre] && answer === null ? "current" : "default")} />}

      <Legend items={[{ role: "current", label: "Root" }, { role: "compared", label: "Left child / split" }]} />
    </div>
  );
}
