import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StackQueueData } from "./algorithm";

export function StackQueueRenderer({ step }: RendererProps<StackQueueData>) {
  const { queue, op, rotating, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{op}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">queue (front → back)</span>
        <div className="flex min-h-[3rem] items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground">front</span>
          {queue.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            queue.map((v, i) => (
              <span key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === 0 ? "border-role-current bg-role-current/20" : rotating ? "border-role-active bg-role-active/10" : "border-border bg-card"}`}>{v}</span>
            ))
          )}
          <span className="text-[10px] text-muted-foreground">back</span>
        </div>
      </div>

      {result !== null && <div className="text-sm">returned <b className="tabular-nums text-role-current">{result}</b></div>}

      <Legend items={[{ role: "current", label: "Front (stack top)" }, { role: "active", label: "Rotating" }]} />
    </div>
  );
}
