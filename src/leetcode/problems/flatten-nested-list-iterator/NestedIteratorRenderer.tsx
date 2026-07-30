import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NestedIteratorData } from "./algorithm";

export function NestedIteratorRenderer({ step }: RendererProps<NestedIteratorData>) {
  const { nested, flat, cursor, phase, output } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nested list</span>
        <span className="font-mono text-sm">{nested}</span>
      </div>

      {flat.length > 0 && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">flattened</span>
          <ArrayCells
            values={flat}
            roleFor={(i) => (i === cursor ? "current" : phase === "iterate" && i < (cursor ?? -1) ? "visited" : "active")}
            showIndex={false}
            cellWidth="w-9"
          />
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        {phase === "flatten" ? (
          <span className="text-muted-foreground">flattening…</span>
        ) : (
          <span>
            output = <b className="tabular-nums">[{output.join(", ")}]</b>
          </span>
        )}
      </div>

      <Legend items={[{ role: "current", label: "cursor" }, { role: "visited", label: "consumed" }]} />
    </div>
  );
}
