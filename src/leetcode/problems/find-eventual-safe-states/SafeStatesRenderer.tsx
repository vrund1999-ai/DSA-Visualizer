import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SafeStatesData } from "./algorithm";

export function SafeStatesRenderer({ step }: RendererProps<SafeStatesData>) {
  const { graph, color, current, answer } = step.data;

  const nodeCls = (u: number) => {
    if (u === current) return "border-role-current bg-role-current/25";
    if (color[u] === 2) return "border-role-visited bg-role-visited/15";
    if (color[u] === 3) return "border-role-target bg-role-target/15";
    if (color[u] === 1) return "border-role-active bg-role-active/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {graph.map((adj, u) => (
          <span key={u} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">{u}→[{adj.join(",")}]</span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {graph.map((_, u) => (
          <div key={u} className={`flex size-12 items-center justify-center rounded-full border-2 text-base font-semibold ${nodeCls(u)}`}>{u}</div>
        ))}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">safe nodes: [{answer.join(", ")}]</div>}

      <Legend items={[{ role: "current", label: "Visiting now" }, { role: "active", label: "On path" }, { role: "visited", label: "Safe" }, { role: "target", label: "Unsafe" }]} />
    </div>
  );
}
