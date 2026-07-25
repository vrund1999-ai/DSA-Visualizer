import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BasicCalcData } from "./algorithm";

export function BasicCalcRenderer({ step }: RendererProps<BasicCalcData>) {
  const { s, pos, result, sign, num, stack, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-0.5 font-mono text-lg">
        {s.split("").map((c, i) => (
          <span key={i} className={`rounded px-1 py-0.5 ${i === pos ? "bg-role-current/25 text-role-current" : pos !== null && i < pos ? "text-muted-foreground" : ""}`}>{c === " " ? "␣" : c}</span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">result = <b className="tabular-nums">{result}</b></span>
        <span className="rounded-md border px-3 py-1">sign = <b>{sign > 0 ? "+" : "−"}</b></span>
        <span className="rounded-md border px-3 py-1">num = <b className="tabular-nums">{num}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (saved result, sign)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, i) => (
            <span key={i} className="rounded-md border-2 border-role-active bg-role-active/10 px-2 py-1 font-mono text-xs tabular-nums">{v}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">= {answer}</div>}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "active", label: "Saved context" }]} />
    </div>
  );
}
