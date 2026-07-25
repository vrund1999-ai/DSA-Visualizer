import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FlowersData } from "./algorithm";

export function FlowersRenderer({ step }: RendererProps<FlowersData>) {
  const { bed, n, pos, planted, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">need to plant n = <b className="tabular-nums text-foreground">{n}</b></div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {bed.map((v, i) => {
          const isCur = i === pos;
          const cls = isCur && planted ? "border-role-sorted bg-role-sorted/25" : isCur ? "border-role-current bg-role-current/20" : v === 1 ? "border-role-visited bg-role-visited/15" : "border-border bg-card";
          return (
            <div key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-lg ${cls}`}>{v === 1 ? "🌸" : "·"}</div>
          );
        })}
      </div>

      <div className="text-sm">planted so far = <b className="tabular-nums text-role-sorted">{count}</b></div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-sorted" : "text-role-target"}`}>
          {answer ? "can plant enough ✓" : "not enough room ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Examining plot" }, { role: "sorted", label: "Just planted" }, { role: "visited", label: "Flower" }]} />
    </div>
  );
}
