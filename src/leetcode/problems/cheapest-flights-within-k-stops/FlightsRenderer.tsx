import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FlightsData } from "./algorithm";

export function FlightsRenderer({ step }: RendererProps<FlightsData>) {
  const { src, dst, dist, round, edge, answer } = step.data;
  const shown = dist.map((v) => (v === Infinity ? "∞" : v));

  const roleFor = (i: number) => {
    if (edge && i === edge[1]) return "current";
    if (edge && i === edge[0]) return "compared";
    if (i === dst) return "target";
    if (i === src) return "pivot";
    return "default";
  };

  const topLabel = (i: number) => (i === src ? "src" : i === dst ? "dst" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        {round !== null && <span className="rounded-md border px-3 py-1">round {round + 1}</span>}
        {edge && <span className="rounded-md border px-3 py-1">relax {edge[0]} → {edge[1]} (cost {edge[2]})</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">cheapest known cost per city</span>
        <ArrayCells values={shown} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-12" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        best {src} → {dst} = <b className="tabular-nums">{answer ?? (dist[dst] === Infinity ? "∞" : dist[dst])}</b>
      </div>

      <Legend items={[{ role: "pivot", label: "Source" }, { role: "target", label: "Destination" }, { role: "compared", label: "Edge from" }, { role: "current", label: "Edge to (relaxed)" }]} />
    </div>
  );
}
