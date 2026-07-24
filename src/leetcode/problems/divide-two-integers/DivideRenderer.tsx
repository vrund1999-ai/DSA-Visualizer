import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DivideData } from "./algorithm";

export function DivideRenderer({ step }: RendererProps<DivideData>) {
  const { dividend, divisor, a, temp, multiple, quotient, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{dividend} ÷ {divisor}</div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">remainder</span>
          <div className="flex min-w-[4rem] items-center justify-center rounded-lg border-2 border-role-current bg-role-current/15 px-4 py-2 text-xl font-semibold tabular-nums">{a}</div>
        </div>
        <span className="text-2xl text-muted-foreground">−</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">chunk (divisor × {multiple ?? "?"})</span>
          <div className="flex min-w-[4rem] items-center justify-center rounded-lg border-2 border-role-active bg-role-active/15 px-4 py-2 text-xl font-semibold tabular-nums">{temp ?? "—"}</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase text-muted-foreground">quotient</span>
        <div className="flex min-w-[4rem] items-center justify-center rounded-lg border-2 border-role-visited bg-role-visited/15 px-4 py-2 text-xl font-semibold tabular-nums">{quotient}</div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">= {answer}</div>}

      <Legend items={[{ role: "current", label: "Remainder" }, { role: "active", label: "Subtracted chunk" }, { role: "visited", label: "Quotient" }]} />
    </div>
  );
}
