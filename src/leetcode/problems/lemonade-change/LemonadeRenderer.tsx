import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LemonadeData } from "./algorithm";

export function LemonadeRenderer({ step }: RendererProps<LemonadeData>) {
  const { bills, pos, five, ten, changeNote, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return answer === false ? "target" : "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">customers pay ($)</span>
        <ArrayCells values={bills} roleFor={roleFor} showIndex={false} />
      </div>

      {changeNote && <div className="text-xs text-muted-foreground">change: {changeNote}</div>}

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-4 py-2">$5 bills = <b className="tabular-nums">{five}</b></span>
        <span className="rounded-md border px-4 py-2">$10 bills = <b className="tabular-nums">{ten}</b></span>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "served everyone ✓" : "ran out of change ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current customer" }, { role: "visited", label: "Served" }, { role: "target", label: "Failed" }]} />
    </div>
  );
}
