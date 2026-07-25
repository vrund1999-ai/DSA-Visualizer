import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CloneGraphData } from "./algorithm";

export function CloneGraphRenderer({ step }: RendererProps<CloneGraphData>) {
  const { adj, current, cloned, linked } = step.data;

  const n = adj.length;
  const r = 90;

  const nodeCls = (u: number) => {
    if (u === current) return "border-role-current bg-role-current/25";
    if (cloned.includes(u)) return "border-role-visited bg-role-visited/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">deep-copy an undirected graph</div>

      <div className="relative" style={{ width: 2 * r + 56, height: 2 * r + 56 }}>
        {adj.map((_, u) => {
          const angle = (u / n) * 2 * Math.PI - Math.PI / 2;
          const x = r + r * Math.cos(angle);
          const y = r + r * Math.sin(angle);
          const isLinked = linked && (linked[0] === u || linked[1] === u);
          return (
            <div key={u} className={`absolute flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold ${nodeCls(u)} ${isLinked ? "ring-2 ring-role-active" : ""}`} style={{ left: x, top: y }}>
              {u + 1}
            </div>
          );
        })}
      </div>

      <div className="text-sm text-muted-foreground">cloned {cloned.length} / {n} nodes</div>

      <Legend items={[{ role: "current", label: "Cloning" }, { role: "visited", label: "Cloned" }, { role: "active", label: "Linking edge" }]} />
    </div>
  );
}
