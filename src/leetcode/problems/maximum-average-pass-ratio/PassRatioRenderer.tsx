import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PassRatioData } from "./algorithm";

export function PassRatioRenderer({ step }: RendererProps<PassRatioData>) {
  const { classes, boosted, extraLeft, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">extra students left: {extraLeft}</span>

      <div className="flex flex-wrap justify-center gap-3">
        {classes.map((c, i) => {
          const ratio = c[0] / c[1];
          return (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 rounded-md border px-3 py-2 ${
                i === boosted ? "border-role-current bg-role-current/20" : "border-border"
              }`}
            >
              <span className="text-sm font-semibold tabular-nums">
                {c[0]}/{c[1]}
              </span>
              <div className="h-16 w-4 overflow-hidden rounded bg-muted/30">
                <div className="w-full bg-role-active" style={{ height: `${ratio * 100}%`, marginTop: `${(1 - ratio) * 100}%` }} />
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">{ratio.toFixed(2)}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        avg pass ratio = <b className="tabular-nums">{answer !== null ? answer.toFixed(5) : "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "student added here" }]} />
    </div>
  );
}
