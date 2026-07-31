import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ManhattanData } from "./algorithm";

export function ManhattanRenderer({ step }: RendererProps<ManhattanData>) {
  const { moves, k, scan, cnt, net, prefixMax, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">k = {k} change(s)</span>

      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {moves.split("").map((c, i) => (
          <span
            key={i}
            className={`flex size-8 items-center justify-center rounded text-sm ${
              i === scan ? "bg-role-current text-white" : i < (scan ?? -1) ? "bg-role-active/30" : "bg-muted/20"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-xs tabular-nums text-muted-foreground">
        <span>N:{cnt.N}</span>
        <span>S:{cnt.S}</span>
        <span>E:{cnt.E}</span>
        <span>W:{cnt.W}</span>
        {net !== null && <span className="text-foreground">net {net}</span>}
        {prefixMax !== null && <span className="text-role-sorted">reach {prefixMax}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        max distance = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "current move" }, { role: "active", label: "processed" }]} />
    </div>
  );
}
