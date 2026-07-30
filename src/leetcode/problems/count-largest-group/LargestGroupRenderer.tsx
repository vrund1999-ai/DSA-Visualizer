import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LargestGroupData } from "./algorithm";

export function LargestGroupRenderer({ step }: RendererProps<LargestGroupData>) {
  const { scan, buckets, maxSize, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap items-end justify-center gap-2">
        {buckets.map((b) => {
          const isMax = maxSize !== null && b.members.length === maxSize;
          return (
            <div key={b.sum} className="flex flex-col items-center gap-1">
              <div className="flex flex-col-reverse gap-0.5">
                {b.members.map((m) => (
                  <div
                    key={m}
                    className={`flex size-7 items-center justify-center rounded border text-xs tabular-nums ${
                      m === scan
                        ? "border-role-current bg-role-current text-white"
                        : isMax
                          ? "border-role-sorted bg-role-sorted/20"
                          : "border-border bg-muted/30 text-muted-foreground"
                    }`}
                  >
                    {m}
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Σ{b.sum}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        largest groups = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "placing" }, { role: "sorted", label: "largest group" }]} />
    </div>
  );
}
