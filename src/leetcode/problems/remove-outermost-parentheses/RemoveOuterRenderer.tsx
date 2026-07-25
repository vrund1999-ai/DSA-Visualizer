import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RemoveOuterData } from "./algorithm";

export function RemoveOuterRenderer({ step }: RendererProps<RemoveOuterData>) {
  const { s, pos, depth, kept, res, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-0.5 font-mono text-xl">
        {s.split("").map((c, i) => {
          const state = i === pos ? (kept ? "keep" : "drop") : "";
          const cls = state === "keep" ? "bg-role-visited/25 text-role-visited" : state === "drop" ? "bg-role-target/25 text-role-target line-through" : i < (pos ?? -1) ? "text-muted-foreground" : "";
          return <span key={i} className={`rounded px-1 py-0.5 ${cls}`}>{c}</span>;
        })}
      </div>

      <div className="text-sm">current depth = <b className="tabular-nums text-foreground">{depth}</b></div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">{(answer ?? res) || "(empty)"}</div>
      </div>

      <Legend items={[{ role: "visited", label: "Kept (inner)" }, { role: "target", label: "Dropped (outer)" }]} />
    </div>
  );
}
