import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SearchBstData } from "./algorithm";

export function SearchBstRenderer({ step }: RendererProps<SearchBstData>) {
  const { heap, val, active, visited, found, done } = step.data;
  const visitedSet = new Set(visited);

  const roleFor = (i: number) => {
    if (heap[i] === null) return "default";
    if (i === found) return "sorted";
    if (i === active) return "current";
    if (visitedSet.has(i)) return "visited";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">searching for {val}</span>

      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">
        {done ? (found !== null ? <b className="text-role-sorted">found {val}</b> : <b className="text-role-swapped">not found</b>) : <span className="text-muted-foreground">…</span>}
      </div>

      <Legend items={[{ role: "current", label: "comparing" }, { role: "visited", label: "walk path" }, { role: "sorted", label: "found" }]} />
    </div>
  );
}
