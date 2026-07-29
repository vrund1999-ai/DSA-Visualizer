import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RefuelData } from "./algorithm";

export function RefuelRenderer({ step }: RendererProps<RefuelData>) {
  const { target, stations, fuel, heap, refuelAmount, stops, answer } = step.data;
  const W = 300;
  const px = (pos: number) => Math.min(1, pos / target) * W;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">target = {target}</span>
        <span className="rounded-md border px-3 py-1">fuel reach = {Math.min(fuel, target)}</span>
        <span className="rounded-md border px-3 py-1">stops = <b className="tabular-nums">{answer === -1 ? "—" : answer ?? stops}</b></span>
      </div>

      <div className="relative" style={{ width: `${W}px`, height: "44px" }}>
        <div className="absolute top-5 h-1.5 w-full rounded bg-muted" />
        <div className="absolute top-5 h-1.5 rounded bg-role-current" style={{ width: `${px(fuel)}px` }} />
        <div className="absolute top-2 h-7 w-0.5 bg-foreground" style={{ left: `${W}px` }} />
        {stations.map((s, i) => (
          <div key={i} className="absolute top-1" style={{ left: `${px(s[0])}px` }}>
            <div className={`h-8 w-0.5 ${s[0] <= fuel ? "bg-role-sorted" : "bg-role-active"}`} />
            <span className="absolute top-8 -translate-x-1/2 whitespace-nowrap text-[8px] text-muted-foreground">@{s[0]}·{s[1]}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">banked fuels (max-heap)</span>
        <div className="flex min-h-8 flex-wrap justify-center gap-1.5">
          {heap.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : heap.map((v, k) => (
            <span key={k} className={`rounded-md border-2 px-2 py-0.5 text-sm tabular-nums ${refuelAmount === v && k === 0 ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{v}</span>
          ))}
        </div>
      </div>

      {answer === -1 && <div className="rounded-md bg-role-compared px-4 py-1.5 text-sm font-semibold text-white">Cannot reach target</div>}

      <Legend items={[{ role: "current", label: "Fuel range / refuel" }, { role: "sorted", label: "Passed station" }, { role: "active", label: "Unreached station" }]} />
    </div>
  );
}
