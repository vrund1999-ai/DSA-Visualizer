import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SerializeData } from "./algorithm";

export function SerializeRenderer({ step }: RendererProps<SerializeData>) {
  const { heap, current, tokens, visited } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (visited.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">serialized (preorder)</span>
        <div className="flex min-h-[2rem] max-w-2xl flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2">
          {tokens.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : tokens.map((t, k) => (
            <span key={k} className={`rounded border px-2 py-0.5 font-mono text-xs ${t === "#" ? "bg-muted/20 text-muted-foreground" : k === tokens.length - 1 ? "border-role-current bg-role-current/20" : "bg-muted/30"}`}>{t}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Emitting" }, { role: "visited", label: "Emitted" }]} />
    </div>
  );
}
