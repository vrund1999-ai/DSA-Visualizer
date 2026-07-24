import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CourseOrderData } from "./algorithm";

export function CourseOrderRenderer({ step }: RendererProps<CourseOrderData>) {
  const { numCourses, edges, indeg, queue, current, order, answer } = step.data;

  const roleOf = (i: number) => {
    if (i === current) return "border-role-current bg-role-current/25";
    if (order.includes(i)) return "border-role-visited bg-role-visited/15";
    if (queue.includes(i)) return "border-role-active bg-role-active/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {edges.map(([a, b], i) => (
          <span key={i} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">{b}→{a}</span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {Array.from({ length: numCourses }, (_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`flex size-12 items-center justify-center rounded-full border-2 text-base font-semibold ${roleOf(i)}`}>{i}</div>
            <span className="text-[10px] text-muted-foreground">indeg {indeg[i]}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">order</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{order.join(", ")}]</div>
      </div>

      {answer !== null && (
        <div className={`text-sm font-semibold ${answer.length ? "text-role-visited" : "text-role-target"}`}>
          {answer.length ? "valid topological order" : "cycle — no valid order"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "In queue (indeg 0)" }, { role: "current", label: "Taking" }, { role: "visited", label: "Ordered" }]} />
    </div>
  );
}
