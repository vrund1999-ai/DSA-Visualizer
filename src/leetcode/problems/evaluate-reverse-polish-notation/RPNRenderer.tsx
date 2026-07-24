import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RPNData } from "./algorithm";

export function RPNRenderer({ step }: RendererProps<RPNData>) {
  const { tokens, pos, stack, operands, result } = step.data;

  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">tokens</span>
        <ArrayCells
          values={tokens}
          roleFor={(i) => (i === pos ? "current" : i < pos ? "visited" : "default")}
          topLabel={(i) => (i === pos ? "cur" : "")}
          showIndex={false}
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (bottom → top)</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, i) => (
            <span key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === stack.length - 1 ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      {operands && (
        <div className="text-center text-sm text-muted-foreground">
          popped operands: <b className="tabular-nums">{operands[0]}</b> and <b className="tabular-nums">{operands[1]}</b>
        </div>
      )}
      {result !== null && <div className="text-center text-base font-semibold text-role-visited">Result: {result}</div>}

      <Legend items={[{ role: "current", label: "Current / stack top" }, { role: "visited", label: "Consumed" }]} />
    </div>
  );
}
