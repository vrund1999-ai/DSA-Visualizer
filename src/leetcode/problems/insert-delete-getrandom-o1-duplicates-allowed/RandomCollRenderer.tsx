import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RandomCollData } from "./algorithm";

export function RandomCollRenderer({ step }: RendererProps<RandomCollData>) {
  const { list, index, op, touched, result } = step.data;

  const roleFor = (i: number) => (touched.includes(i) ? "current" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-current px-3 py-1 font-mono">{op}</span>
        {result !== null && result !== "uniform" && <span className="rounded-md border px-3 py-1">→ {result}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">backing array</span>
        {list.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : <ArrayCells values={list} roleFor={roleFor} showIndex cellWidth="w-11" />}
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value → indices</span>
        <div className="flex flex-wrap justify-center gap-2">
          {index.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : index.map(([v, positions]) => (
            <span key={v} className="rounded-md border px-2.5 py-1 text-sm tabular-nums">{v} → {"{"}{positions.join(", ")}{"}"}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Touched this op" }]} />
    </div>
  );
}
