import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ChampagneData } from "./algorithm";

export function ChampagneRenderer({ step }: RendererProps<ChampagneData>) {
  const { tower, qRow, qGlass, activeRow, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center gap-2">
        {tower.map((row, r) => (
          <div key={r} className={`flex justify-center gap-2 ${r === activeRow ? "opacity-100" : "opacity-90"}`}>
            {row.map((v, i) => {
              const fill = Math.min(1, v);
              const isQuery = r === qRow && i === qGlass;
              return (
                <div key={i} className={`relative flex h-10 w-10 items-end justify-center overflow-hidden rounded-b-lg border-2 ${isQuery ? "border-role-current" : v > 1 ? "border-role-target" : "border-border"}`}>
                  <div className="absolute inset-x-0 bottom-0 bg-role-active/60" style={{ height: `${fill * 100}%` }} />
                  <span className="relative z-10 pb-0.5 text-[9px] font-semibold tabular-nums">{v > 0 ? v.toFixed(1) : ""}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        glass ({qRow}, {qGlass}) = <b className="tabular-nums">{answer !== null ? answer.toFixed(4) : "…"}</b>
      </div>

      <Legend items={[{ role: "active", label: "Champagne level" }, { role: "current", label: "Queried glass" }, { role: "target", label: "Overflowing" }]} />
    </div>
  );
}
