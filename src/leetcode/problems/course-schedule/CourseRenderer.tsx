import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CourseData } from "./algorithm";

export function CourseRenderer({ step }: RendererProps<CourseData>) {
  const { n, edges, indeg, queue, order, current, result } = step.data;

  const nodeClass = (i: number) => {
    if (i === current) return "border-role-current bg-role-current/15";
    if (order.includes(i)) return "border-role-sorted bg-role-sorted/15";
    if (queue.includes(i)) return "border-role-active bg-role-active/15";
    return "border-border bg-muted/30";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Courses (in-degree badge)</span>
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: n }, (_, i) => (
            <div key={i} className={`relative flex size-11 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors ${nodeClass(i)}`}>
              {i}
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border bg-background text-[10px] tabular-nums">
                {indeg[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <span className="font-medium uppercase tracking-wide">Prereqs:</span>
        {edges.length === 0 ? <span>none</span> : edges.map(([a, b], k) => (
          <span key={k} className="rounded border bg-muted/30 px-1.5 py-0.5 font-mono">{b}→{a}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Queue</span>
          <div className="flex min-h-[2rem] w-full flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
            {queue.length ? queue.join(", ") : <span className="text-xs text-muted-foreground">empty</span>}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Order</span>
          <div className="flex min-h-[2rem] w-full flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
            {order.length ? order.join(" → ") : <span className="text-xs text-muted-foreground">none yet</span>}
          </div>
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Can finish all courses ✓" : "Cycle detected — cannot finish ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Taking" },
          { role: "active", label: "In queue" },
          { role: "sorted", label: "Ordered" },
        ]}
      />
    </div>
  );
}
