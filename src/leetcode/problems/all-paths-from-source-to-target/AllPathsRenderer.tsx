import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AllPathsData } from "./algorithm";

export function AllPathsRenderer({ step }: RendererProps<AllPathsData>) {
  const { graph, path, current, results } = step.data;
  const pathSet = new Set(path);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Nodes (edges: {graph.map((adj, i) => adj.map((j) => `${i}→${j}`).join(" ")).filter(Boolean).join("  ")})</span>
        <div className="flex flex-wrap justify-center gap-2">
          {graph.map((_, i) => (
            <div key={i} className={`flex size-11 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors ${i === current ? "border-role-current bg-role-current/15" : pathSet.has(i) ? "border-role-path bg-role-path/15" : i === graph.length - 1 ? "border-role-target bg-role-target/10" : "border-border bg-muted/30"}`}>{i}</div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Current path</span>
        <span className="rounded-md border border-role-path bg-role-path/15 px-2.5 py-1 font-mono">{path.join(" → ")}</span>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Paths found ({results.length})</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-xs">{r.join("→")}</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "path", label: "Current path" },
          { role: "target", label: "Target node" },
        ]}
      />
    </div>
  );
}
