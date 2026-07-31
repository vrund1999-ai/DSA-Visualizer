import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TakeCharsData } from "./algorithm";

export function TakeCharsRenderer({ step }: RendererProps<TakeCharsData>) {
  const { s, k, left, right, win, best, bestWindow, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">need {k} of each a/b/c</span>

      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {s.split("").map((c, i) => {
          const inWin = left !== null && right !== null && i >= left && i <= right;
          const inBest = answer !== null && bestWindow && i >= bestWindow[0] && i <= bestWindow[1];
          return (
            <span
              key={i}
              className={`flex size-8 items-center justify-center rounded text-sm ${
                inBest ? "bg-role-sorted text-white" : inWin ? "bg-role-current text-white" : "bg-role-active/30"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>

      <div className="flex gap-4 text-xs tabular-nums text-muted-foreground">
        <span>window a:{win.a} b:{win.b} c:{win.c}</span>
        <span>best kept = {best}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        minimum taken = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "leavable window" }, { role: "sorted", label: "best (kept)" }, { role: "active", label: "taken from ends" }]} />
    </div>
  );
}
