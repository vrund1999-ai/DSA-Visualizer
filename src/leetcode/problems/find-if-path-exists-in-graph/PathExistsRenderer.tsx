import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PathExistsData } from "./algorithm";

export function PathExistsRenderer({ step }: RendererProps<PathExistsData>) {
  const { n, edges, parent, source, dest, cur, answer } = step.data;

  const nodeCls = (node: number) => {
    if (node === source || node === dest) return "border-role-target bg-role-target/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">source <b className="text-role-target">{source}</b> → dest <b className="text-role-target">{dest}</b></div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {edges.map(([u, v], i) => (
          <span key={i} className={`rounded-md border-2 px-2 py-1 font-mono text-xs ${i === cur ? "border-role-current bg-role-current/20" : i < (cur ?? -1) ? "border-role-visited bg-role-visited/10" : "border-border bg-card"}`}>{u}–{v}</span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {Array.from({ length: n }, (_, node) => (
          <div key={node} className="flex flex-col items-center gap-0.5">
            <div className={`flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold ${nodeCls(node)}`}>{node}</div>
            <span className="text-[10px] text-muted-foreground">root {parent[node]}</span>
          </div>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-muted-foreground"}`}>
          {answer ? "path exists ✓" : "no path ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Unioning edge" }, { role: "visited", label: "Done" }, { role: "target", label: "Source / dest" }]} />
    </div>
  );
}
