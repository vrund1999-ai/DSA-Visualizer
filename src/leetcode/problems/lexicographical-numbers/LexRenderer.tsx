import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LexData } from "./algorithm";

export function LexRenderer({ step }: RendererProps<LexData>) {
  const { n, res, cur, move } = step.data;

  const moveLabel =
    move === "deeper" ? "↓ descend (×10)" : move === "sibling" ? "→ next sibling (+1)" : move === "up" ? "↑ climb" : "visit";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">n = {n}</div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current</span>
        <div className="flex size-16 items-center justify-center rounded-lg border-2 border-role-current bg-role-current/15 text-2xl font-semibold tabular-nums">
          {cur}
        </div>
        <span className="text-xs text-muted-foreground">{moveLabel}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">output order</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {res.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : res.map((v, k) => (
            <span key={k} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${k === res.length - 1 ? "border-role-visited bg-role-visited/20" : "bg-muted/30"}`}>{v}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current number" }, { role: "visited", label: "Last emitted" }]} />
    </div>
  );
}
