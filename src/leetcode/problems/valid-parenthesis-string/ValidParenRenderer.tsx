import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ValidParenData } from "./algorithm";

export function ValidParenRenderer({ step }: RendererProps<ValidParenData>) {
  const { s, pos, lo, hi, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return answer === false ? "target" : "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-4 py-2">min open (lo) = <b className="tabular-nums">{Math.max(lo, 0)}</b></span>
        <span className="rounded-md border px-4 py-2">max open (hi) = <b className="tabular-nums">{hi}</b></span>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "valid ✓" : "invalid ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "visited", label: "Processed" }, { role: "target", label: "Failure" }]} />
    </div>
  );
}
