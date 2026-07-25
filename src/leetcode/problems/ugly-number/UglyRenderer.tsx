import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { UglyData } from "./algorithm";

export function UglyRenderer({ step }: RendererProps<UglyData>) {
  const { n, chain, current, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">is {n} an ugly number?</div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-lg border-2 border-border bg-card text-lg font-semibold tabular-nums">{n}</div>
        {chain.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">÷{c.factor}→</span>
            <div className={`flex size-12 items-center justify-center rounded-lg border-2 text-lg font-semibold tabular-nums ${i === chain.length - 1 && answer !== null ? (answer ? "border-role-visited bg-role-visited/15" : "border-role-target bg-role-target/15") : "border-role-current bg-role-current/15"}`}>{c.value}</div>
          </div>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "ugly number ✓" : `not ugly (leftover ${current}) ✗`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Reducing" }, { role: "visited", label: "Reached 1" }, { role: "target", label: "Leftover ≠ 1" }]} />
    </div>
  );
}
