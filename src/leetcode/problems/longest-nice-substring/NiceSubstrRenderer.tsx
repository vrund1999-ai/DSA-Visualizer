import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { NiceSubstrData } from "./algorithm";

export function NiceSubstrRenderer({ step }: RendererProps<NiceSubstrData>) {
  const { s, segment, splitIndex, best, bestWindow, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {s.split("").map((c, i) => {
          const inSeg = segment && i >= segment[0] && i < segment[1];
          const inBest = answer !== null && bestWindow && i >= bestWindow[0] && i < bestWindow[1];
          const isSplit = i === splitIndex;
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

      <div className="rounded-md border px-3 py-1 font-mono text-sm">
        longest nice = <b>{answer !== null ? (answer === "" ? '""' : answer) : best || "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "segment" }, { role: "swapped", label: "split char" }, { role: "sorted", label: "best" }]} />
    </div>
  );
}
