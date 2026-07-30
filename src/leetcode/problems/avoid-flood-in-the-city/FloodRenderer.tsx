import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FloodData } from "./algorithm";

export function FloodRenderer({ step }: RendererProps<FloodData>) {
  const { rains, day, full, dryDays, ans, flooded, done } = step.data;
  const drySet = new Set(dryDays);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {rains.map((r, i) => {
          const isDry = r === 0;
          const role = i === day ? "current" : isDry ? (drySet.has(i) ? "active" : "visited") : "target";
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`flex size-9 items-center justify-center rounded-md border-2 text-sm tabular-nums ${
                  i === day
                    ? flooded
                      ? "border-role-swapped bg-role-swapped text-white"
                      : "border-role-current bg-role-current text-white"
                    : role === "target"
                      ? "border-role-target/50 bg-role-target/15"
                      : role === "active"
                        ? "border-role-active bg-role-active/20"
                        : "border-border bg-muted/20 text-muted-foreground"
                }`}
              >
                {isDry ? "0" : r}
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">
                {done && !flooded ? (ans[i] === -1 ? "rain" : ans[i]) : i}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">full lakes</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {full.length === 0 ? (
            <span className="text-xs text-muted-foreground">(none)</span>
          ) : (
            full.map((f) => (
              <span key={f.lake} className="rounded border border-role-target px-2 py-0.5 text-xs tabular-nums">
                lake {f.lake}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        {flooded ? <b className="text-role-swapped">flood → []</b> : done ? <span>ans = [{ans.join(", ")}]</span> : <span className="text-muted-foreground">…</span>}
      </div>

      <Legend
        items={[
          { role: "target", label: "rain day" },
          { role: "active", label: "unused dry day" },
          { role: "current", label: "today" },
        ]}
      />
    </div>
  );
}
