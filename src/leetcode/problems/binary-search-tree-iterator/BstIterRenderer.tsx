import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { BstIterData } from "./algorithm";

export function BstIterRenderer({ step }: RendererProps<BstIterData>) {
  const { heap, stack, cur, output, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (stack.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (top = next)</span>
          <div className="flex min-h-9 flex-row-reverse items-center gap-1.5 rounded-md border border-dashed px-3 py-1">
            {stack.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : stack.map((i, k) => (
              <div key={i} className={`flex size-8 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${k === stack.length - 1 ? "border-role-active bg-role-active/20" : "border-border bg-muted/30"}`}>{heap[i]}</div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">output (in-order)</span>
          <div className="flex min-h-9 items-center gap-1.5 rounded-md border px-3 py-1">
            {output.length === 0 ? <span className="text-sm text-muted-foreground">[]</span> : (answer ?? output).map((v, i) => (
              <span key={i} className="flex size-8 items-center justify-center rounded-md border-2 border-role-visited/40 bg-role-visited/15 text-sm font-medium tabular-nums">{v}</span>
            ))}
          </div>
        </div>
      </div>

      <Legend items={[{ role: "current", label: "next() result" }, { role: "active", label: "On stack" }]} />
    </div>
  );
}
