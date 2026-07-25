import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ZigzagPathData } from "./algorithm";

export function ZigzagPathRenderer({ step }: RendererProps<ZigzagPathData>) {
  const { label, current, level, range, path, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">find the root→{label} path</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase text-muted-foreground">current node</span>
        <div className={`flex size-16 items-center justify-center rounded-lg border-2 text-2xl font-bold tabular-nums ${answer !== null ? "border-role-visited bg-role-visited/15" : "border-role-current bg-role-current/15"}`}>{current}</div>
        <span className="text-xs text-muted-foreground">
          level {level}{range ? ` · labels ${range[0]}..${range[1]}` : ""}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">path (root → target)</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {path.map((v, i) => (
            <div key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-muted-foreground">→</span>}
              <span className="flex size-9 items-center justify-center rounded-md border bg-muted/30 font-mono text-sm tabular-nums">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">[{answer.join(", ")}]</div>}

      <Legend items={[{ role: "current", label: "Climbing" }, { role: "visited", label: "Done (root reached)" }]} />
    </div>
  );
}
