import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RankData } from "./algorithm";

export function RankRenderer({ step }: RendererProps<RankData>) {
  const { arr, sorted, rank, mapIdx, result, phase, answer } = step.data;
  const rankMap = new Map(rank);

  const arrRole = (i: number) => (i === mapIdx ? "current" : phase === "map" && result[i] !== null ? "visited" : "default");
  const resShown = (answer ?? result).map((x) => (x === null ? "·" : x));
  const resRole = (i: number) => (i === mapIdx ? "current" : result[i] !== null ? "sorted" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">array</span>
        <ArrayCells values={arr} roleFor={arrRole} showIndex cellWidth="w-11" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sorted distinct → rank</span>
        <div className="flex flex-wrap justify-center gap-2">
          {sorted.map((v) => (
            <span key={v} className="flex flex-col items-center rounded-md border px-2 py-1 text-sm">
              <b className="tabular-nums">{v}</b>
              <span className="text-xs text-muted-foreground">{rankMap.has(v) ? `rank ${rankMap.get(v)}` : "—"}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result</span>
        <ArrayCells values={resShown} roleFor={resRole} showIndex cellWidth="w-11" />
      </div>

      <Legend items={[{ role: "current", label: "Mapping" }, { role: "sorted", label: "Assigned rank" }]} />
    </div>
  );
}
