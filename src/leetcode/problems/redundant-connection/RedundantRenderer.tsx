import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RedundantData } from "./algorithm";

export function RedundantRenderer({ step }: RendererProps<RedundantData>) {
  const { edges, parent, cur, a, b, cycle, answer } = step.data;

  const nodes = Array.from({ length: parent.length - 1 }, (_, i) => i + 1);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {edges.map(([u, v], i) => {
          const state = answer && u === answer[0] && v === answer[1] ? "cycle" : i === cur ? "cur" : i < (cur ?? -1) ? "done" : "pending";
          const cls = state === "cycle" ? "border-role-target bg-role-target/20" : state === "cur" ? "border-role-current bg-role-current/20" : state === "done" ? "border-role-visited bg-role-visited/10" : "border-border bg-card";
          return <span key={i} className={`rounded-md border-2 px-2 py-1 font-mono text-xs ${cls}`}>[{u},{v}]</span>;
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {nodes.map((node) => (
          <div key={node} className="flex flex-col items-center gap-0.5">
            <div className={`flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold ${node === a || node === b ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{node}</div>
            <span className="text-[10px] text-muted-foreground">root {parent[node]}</span>
          </div>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${cycle ? "text-role-target" : "text-role-visited"}`}>
          redundant edge = [{answer[0]}, {answer[1]}]
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current edge" }, { role: "visited", label: "Unioned" }, { role: "target", label: "Redundant" }]} />
    </div>
  );
}
