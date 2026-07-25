import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxSumData } from "./algorithm";

export function MaxSumRenderer({ step }: RendererProps<MaxSumData>) {
  const { nums, idx, digitSum, best, partner, ans, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (partner !== null && nums[i] === partner && i !== idx) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">best value per digit-sum bucket</span>
        <div className="flex max-w-xl flex-wrap justify-center gap-2">
          {best.length === 0 ? (
            <span className="text-sm text-muted-foreground">empty</span>
          ) : (
            best
              .slice()
              .sort((a, b) => a[0] - b[0])
              .map(([ds, v]) => (
                <span
                  key={ds}
                  className={`rounded-md border px-2.5 py-1 text-sm tabular-nums ${ds === digitSum ? "border-role-current bg-role-current/15" : ""}`}
                >
                  Σ{ds} → <b>{v}</b>
                </span>
              ))
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">best pair sum = <b className="tabular-nums">{answer ?? ans}</b></div>

      <Legend items={[{ role: "current", label: "Current number" }, { role: "compared", label: "Pair partner" }]} />
    </div>
  );
}
