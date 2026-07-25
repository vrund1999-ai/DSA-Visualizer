import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CalcData } from "./algorithm";

export function CalcRenderer({ step }: RendererProps<CalcData>) {
  const { s, pos, num, op, stack, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-0.5 font-mono text-lg">
        {s.split("").map((c, i) => (
          <span key={i} className={`rounded px-1 py-0.5 ${i === pos ? "bg-role-current/25 text-role-current" : pos !== null && i < pos ? "text-muted-foreground" : ""}`}>{c === " " ? "␣" : c}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">num = <b className="tabular-nums">{num}</b></span>
        <span className="rounded-md border px-3 py-1">pending op = <b className="font-mono">{op}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, i) => (
            <span key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">result = {answer}</div>}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "active", label: "Stack top" }]} />
    </div>
  );
}
