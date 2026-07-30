import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { UnitsData } from "./algorithm";

export function UnitsRenderer({ step }: RendererProps<UnitsData>) {
  const { boxTypes, truckSize, cur, taken, spaceLeft, units, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {boxTypes.map(([count, perBox], i) => (
          <div key={i} className={`flex flex-col items-center rounded-lg border-2 px-3 py-2 ${i === cur ? "border-role-current bg-role-current/10" : i < (cur ?? -1) ? "border-role-visited bg-role-visited/10" : "border-border"}`}>
            <span className="text-lg font-bold tabular-nums">{perBox}</span>
            <span className="text-[10px] text-muted-foreground">units/box</span>
            <span className="mt-1 text-xs tabular-nums">×{count}</span>
            {i === cur && <span className="text-[10px] text-role-current">took {taken}</span>}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">space left {spaceLeft}/{truckSize}</span>
        <span className="rounded-md border px-3 py-1">units = <b className="tabular-nums">{answer ?? units}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Loading" }, { role: "visited", label: "Loaded" }]} />
    </div>
  );
}
