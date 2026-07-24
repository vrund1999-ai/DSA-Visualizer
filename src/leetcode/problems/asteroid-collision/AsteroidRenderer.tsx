import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { AsteroidData } from "./algorithm";

export function AsteroidRenderer({ step }: RendererProps<AsteroidData>) {
  const { asteroids, incoming, stack, exploded, done } = step.data;

  const roleFor = (i: number) => {
    if (i === incoming) return "current";
    if (incoming !== null && i < incoming) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">asteroids (＋ = →, − = ←)</span>
        <ArrayCells values={asteroids} roleFor={roleFor} topLabel={(i) => (i === incoming ? "in" : "")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack {done ? "(survivors)" : ""}</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, i) => (
            <span key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      {exploded.length > 0 && <div className="text-xs text-role-target">💥 exploded: {exploded.join(", ")}</div>}

      <Legend items={[{ role: "current", label: "Incoming" }, { role: "active", label: "Stack top" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
