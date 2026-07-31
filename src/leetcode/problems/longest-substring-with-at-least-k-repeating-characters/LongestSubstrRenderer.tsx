import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LongestSubstrData } from "./algorithm";

export function LongestSubstrRenderer({ step }: RendererProps<LongestSubstrData>) {
  const { s, k, segment, splitChar, best, bestWindow, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">k = {k}</span>

      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {s.split("").map((c, i) => {
          const inSeg = segment && i >= segment[0] && i < segment[1];
          const inBest = answer !== null && bestWindow && i >= bestWindow[0] && i < bestWindow[1];
          const isSplit = inSeg && c === splitChar;
          return (
            <span
              key={i}
              className={`flex size-8 items-center justify-center rounded text-sm ${
                inBest ? "bg-role-sorted text-white" : isSplit ? "bg-role-swapped text-white" : inSeg ? "bg-role-current/30" : "bg-muted/20"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        longest length = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "segment" }, { role: "swapped", label: "split char" }, { role: "sorted", label: "best" }]} />
    </div>
  );
}
