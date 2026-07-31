import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DivisorGameData } from "./algorithm";

export function DivisorGameRenderer({ step }: RendererProps<DivisorGameData>) {
  const { n, dp, active, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">n = {n}</span>

      <div className="flex flex-wrap justify-center gap-1.5">
        {dp.map((win, i) =>
          i === 0 ? null : (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-muted-foreground">{i}</span>
              <div
                className={`flex size-9 items-center justify-center rounded-md border-2 text-xs font-medium ${
                  i === active
                    ? "border-role-current bg-role-current text-white"
                    : win
                      ? "border-role-sorted bg-role-sorted/20"
                      : "border-role-swapped bg-role-swapped/10"
                }`}
              >
                {win ? "W" : "L"}
              </div>
            </div>
          ),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        Alice wins? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "winning (W)" }, { role: "swapped", label: "losing (L)" }, { role: "current", label: "computing" }]} />
    </div>
  );
}
