import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import type { KthLevelSumData } from "./algorithm";

export function KthLevelSumRenderer({ step }: RendererProps<KthLevelSumData>) {
  const { heap, k, activeLevel, levelSums, sortedSums, answer } = step.data;

  const depthOf = (i: number) => Math.floor(Math.log2(i + 1));
  const roleFor = (i: number) => (heap[i] === null ? "default" : depthOf(i) === activeLevel ? "current" : "active");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex flex-wrap justify-center gap-1.5">
        {levelSums.map((s, i) => {
          const isAnswer = sortedSums !== null && answer !== null && s === answer && sortedSums.indexOf(s) === k - 1;
          return (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 text-sm tabular-nums ${
                i === activeLevel && sortedSums === null
                  ? "border-role-current bg-role-current text-white"
                  : isAnswer
                    ? "border-role-sorted bg-role-sorted text-white"
                    : "border-border text-muted-foreground"
              }`}
            >
              L{i}: {s}
            </span>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        {k}-th largest level sum = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
