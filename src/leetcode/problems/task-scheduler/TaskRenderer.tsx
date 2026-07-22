import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TaskData } from "./algorithm";

export function TaskRenderer({ step }: RendererProps<TaskData>) {
  const { counts, n, maxCount, maxTasks, framed, answer } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Task frequencies (cooldown n = {n})</span>
        <div className="flex flex-wrap items-end justify-center gap-2">
          {counts.map((c) => (
            <div key={c.task} className="flex flex-col items-center gap-1">
              <div className={`w-9 rounded-t ${c.n === maxCount && maxCount > 0 ? "bg-role-target/60" : "bg-role-active/40"}`} style={{ height: `${Math.max(1, c.n) * 24}px` }} />
              <span className="font-mono text-sm font-semibold">{c.task}</span>
              <span className="text-[10px] tabular-nums text-muted-foreground">{c.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">maxCount</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{maxCount || "—"}</span>
        <span className="text-muted-foreground">tied</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{maxTasks || "—"}</span>
        <span className="text-muted-foreground">framed</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{framed ?? "—"}</span>
        {answer !== null && (
          <>
            <span className="text-muted-foreground">answer</span>
            <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{answer}</span>
          </>
        )}
      </div>

      <Legend
        items={[
          { role: "target", label: "Busiest task(s)" },
          { role: "active", label: "Other tasks" },
        ]}
      />
    </div>
  );
}
