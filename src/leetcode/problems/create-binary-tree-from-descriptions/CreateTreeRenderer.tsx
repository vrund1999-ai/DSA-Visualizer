import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { CreateTreeData } from "./algorithm";

export function CreateTreeRenderer({ step }: RendererProps<CreateTreeData>) {
  const { descriptions, di, heap, root, answer } = step.data;
  const shown = answer ?? heap;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1 text-xs">
        {descriptions.map((d, i) => (
          <span key={i} className={`rounded border px-1.5 py-0.5 font-mono ${i === di ? "border-role-current bg-role-current/15" : i < (di ?? -1) ? "border-role-visited bg-role-visited/15" : "border-border text-muted-foreground"}`}>
            {d[0]}→{d[1]}{d[2] ? "L" : "R"}
          </span>
        ))}
      </div>

      {shown.length > 0 ? (
        <TreeView heap={shown} roleFor={(i) => (shown[i] === root && root !== null ? "pivot" : "default")} />
      ) : (
        <div className="text-sm text-muted-foreground">linking descriptions…</div>
      )}

      {root !== null && <div className="rounded-md border px-3 py-1 text-sm">root = <b className="tabular-nums">{root}</b></div>}

      <Legend items={[{ role: "current", label: "Current description" }, { role: "pivot", label: "Root" }]} />
    </div>
  );
}
