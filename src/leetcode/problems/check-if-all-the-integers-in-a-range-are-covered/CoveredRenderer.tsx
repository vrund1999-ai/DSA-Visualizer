import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CoveredData } from "./algorithm";

export function CoveredRenderer({ step }: RendererProps<CoveredData>) {
  const { ranges, left, right, x, coveringRange, answer } = step.data;

  const lo = Math.min(left, ...ranges.map((r) => r[0]));
  const hi = Math.max(right, ...ranges.map((r) => r[1]));
  const nums = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">need to cover [<b className="text-foreground">{left}</b>, <b className="text-foreground">{right}</b>]</div>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {nums.map((v) => {
          const inTarget = v >= left && v <= right;
          const isCur = v === x;
          const cls = isCur
            ? answer === false ? "border-role-target bg-role-target/25" : "border-role-current bg-role-current/25"
            : inTarget ? "border-role-active bg-role-active/10" : "border-border bg-card";
          return <span key={v} className={`flex size-9 items-center justify-center rounded-md border-2 text-xs font-medium tabular-nums ${cls}`}>{v}</span>;
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {ranges.map(([a, b], i) => (
          <span key={i} className={`rounded-md border px-2 py-1 font-mono text-xs ${i === coveringRange ? "border-role-visited bg-role-visited/15" : "bg-muted/30"}`}>[{a}, {b}]</span>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "fully covered ✓" : "gap found ✗"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Target range" }, { role: "current", label: "Checking" }, { role: "visited", label: "Covering range" }, { role: "target", label: "Uncovered" }]} />
    </div>
  );
}
