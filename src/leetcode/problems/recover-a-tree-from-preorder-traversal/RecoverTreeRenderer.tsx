import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import type { RecoverTreeData } from "./algorithm";

export function RecoverTreeRenderer({ step }: RendererProps<RecoverTreeData>) {
  const { s, heap, active, token } = step.data;

  const roleFor = (i: number) => {
    if (heap[i] === null || heap[i] === undefined) return "default";
    if (i === active) return "current";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">preorder string</span>
        <span className="font-mono text-sm">{s}</span>
      </div>

      {token && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 text-sm">
          depth {token.depth} · value {token.value}
        </div>
      )}

      {heap.length > 0 && <TreeView heap={heap} roleFor={roleFor} />}
    </div>
  );
}
