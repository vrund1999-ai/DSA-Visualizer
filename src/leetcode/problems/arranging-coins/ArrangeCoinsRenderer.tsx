import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ArrangeCoinsData } from "./algorithm";

export function ArrangeCoinsRenderer({ step }: RendererProps<ArrangeCoinsData>) {
  const { n, lo, hi, k, need, answer } = step.data;
  const rows = answer ?? k ?? 0;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{n} coins</div>

      <div className="flex flex-col items-center gap-1">
        {Array.from({ length: Math.min(rows, 10) }, (_, r) => (
          <div key={r} className="flex gap-1">
            {Array.from({ length: r + 1 }, (_, i) => (
              <span key={i} className={`size-4 rounded-full ${answer !== null ? "bg-role-target" : "bg-role-current"}`} />
            ))}
          </div>
        ))}
        {rows > 10 && <span className="text-xs text-muted-foreground">… {rows} rows</span>}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1.5">lo = <b className="tabular-nums">{lo}</b></span>
        {k !== null && (
          <span className="rounded-md border-2 border-role-current bg-role-current/15 px-3 py-1.5">
            k = <b className="tabular-nums">{k}</b>{need !== null && <> (needs {need})</>}
          </span>
        )}
        <span className="rounded-md border px-3 py-1.5">hi = <b className="tabular-nums">{hi}</b></span>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">complete rows = {answer}</div>}

      <Legend items={[{ role: "current", label: "Trial rows" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
