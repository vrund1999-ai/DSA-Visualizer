import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KillProcessData } from "./algorithm";

export function KillProcessRenderer({ step }: RendererProps<KillProcessData>) {
  const { pid, kill, children, current, queue, killed, answer } = step.data;

  const roleOf = (p: number) => {
    if (p === current) return "border-role-current bg-role-current/25";
    if (killed.includes(p)) return "border-role-target bg-role-target/15";
    if (queue.includes(p)) return "border-role-active bg-role-active/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">kill process <b className="text-foreground">{kill}</b> (and descendants)</div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {pid.map((p) => (
          <div key={p} className="flex flex-col items-center gap-0.5">
            <div className={`flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold ${roleOf(p)}`}>{p}</div>
            <span className="text-[10px] text-muted-foreground">{(children[p] ?? []).length ? `→${(children[p] ?? []).join(",")}` : "leaf"}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted-foreground">queue: [{queue.join(", ")}]</span>
        <span className="rounded-md border px-3 py-1">killed: [{(answer ?? killed).join(", ")}]</span>
      </div>

      <Legend items={[{ role: "active", label: "In queue" }, { role: "current", label: "Killing" }, { role: "target", label: "Killed" }]} />
    </div>
  );
}
