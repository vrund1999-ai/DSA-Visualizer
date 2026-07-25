import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CarFleetData } from "./algorithm";

const HUES = ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#ec4899", "#14b8a6"];

export function CarFleetRenderer({ step }: RendererProps<CarFleetData>) {
  const { target, cars, idx, lead, fleetOf, fleets, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">target = {target}</span>
        <span className="rounded-md border px-3 py-1">lead time = {lead ? lead.toFixed(2) : "0"}</span>
        <span className="rounded-md border px-3 py-1">fleets = <b className="tabular-nums">{answer ?? fleets}</b></span>
      </div>

      <div className="flex flex-col gap-1.5">
        {cars.map((car, i) => {
          const fid = fleetOf[i];
          return (
            <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-1 ${i === idx ? "ring-1 ring-role-current" : ""}`}>
              <span className="w-16 text-right text-xs text-muted-foreground">pos {car.position}</span>
              <div className="h-5 w-5 rounded-full border-2" style={{ backgroundColor: fid > 0 ? HUES[(fid - 1) % HUES.length] : "transparent", borderColor: fid > 0 ? HUES[(fid - 1) % HUES.length] : "#888" }} />
              <span className="text-xs tabular-nums text-muted-foreground">speed {car.speed} · time {car.time.toFixed(2)}</span>
              {fid > 0 && <span className="text-xs font-semibold">fleet {fid}</span>}
            </div>
          );
        })}
      </div>

      <Legend items={[{ role: "current", label: "Current car" }]} />
      <p className="text-xs text-muted-foreground">same color = same fleet (cars that bunch together)</p>
    </div>
  );
}
