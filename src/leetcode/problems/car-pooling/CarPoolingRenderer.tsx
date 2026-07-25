import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CarPoolingData } from "./algorithm";

export function CarPoolingRenderer({ step }: RendererProps<CarPoolingData>) {
  const { trips, capacity, maxLoc, occ, loc, onboard, answer } = step.data;
  const occupancy = occ.length ? occ : new Array(maxLoc + 1).fill(0);
  const peak = Math.max(capacity, ...occupancy, 1);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">capacity = {capacity}</span>
        {loc !== null && <span className="rounded-md border border-role-current px-3 py-1">at loc {loc}: {onboard} onboard</span>}
      </div>

      <div className="flex items-end gap-0.5" style={{ height: "140px" }}>
        {occupancy.map((v, i) => {
          const over = v > capacity;
          return (
            <div key={i} className="flex flex-col items-center justify-end" style={{ height: "100%" }}>
              <div className={`w-4 rounded-t ${over ? "bg-role-compared" : i === loc ? "bg-role-current" : "bg-role-active/60"}`} style={{ height: `${(v / peak) * 100}%` }} />
              <span className="text-[8px] text-muted-foreground">{i}</span>
            </div>
          );
        })}
      </div>
      <div className="text-xs text-muted-foreground">occupancy along the route (dashed = capacity {capacity})</div>

      <div className="flex flex-wrap justify-center gap-1.5 text-xs">
        {trips.map((t, i) => <span key={i} className="rounded border px-2 py-0.5">{t[0]}p: {t[1]}→{t[2]}</span>)}
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "All trips fit ✓" : "Over capacity ✗"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Occupancy" }, { role: "current", label: "Current location" }, { role: "compared", label: "Over capacity" }]} />
    </div>
  );
}
