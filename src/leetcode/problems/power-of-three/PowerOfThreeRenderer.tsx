import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowerOfThreeData } from "./algorithm";

export function PowerOfThreeRenderer({ step }: RendererProps<PowerOfThreeData>) {
  const { n, chain, stuck, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">is {n} a power of 3?</div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {chain.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-muted-foreground">÷3 →</span>}
            <div className={`flex size-14 items-center justify-center rounded-lg border-2 text-lg font-semibold tabular-nums ${i === chain.length - 1 ? (answer !== null ? (answer ? "border-role-visited bg-role-visited/15" : "border-role-target bg-role-target/15") : "border-role-current bg-role-current/15") : "border-border bg-card"}`}>{v}</div>
          </div>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "power of three ✓" : `not a power of three${stuck ? " (leftover ≠ 1)" : ""} ✗`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Reducing" }, { role: "visited", label: "Reached 1" }, { role: "target", label: "Stuck / invalid" }]} />
    </div>
  );
}
