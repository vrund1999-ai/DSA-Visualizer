import type { RendererProps } from "@/core/types";
import type { BoolExprData } from "./algorithm";

export function BoolExprRenderer({ step }: RendererProps<BoolExprData>) {
  const { expr, scan, stack, lastEval, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-0.5 font-mono">
        {expr.split("").map((c, i) => (
          <span
            key={i}
            className={`flex size-7 items-center justify-center rounded text-sm ${
              i === scan ? "bg-role-current text-white" : "bg-muted/30 text-foreground"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">stack</span>
        <div className="flex min-h-[2.25rem] gap-1">
          {stack.length === 0 ? (
            <span className="text-sm text-muted-foreground">(empty)</span>
          ) : (
            stack.map((v, i) => (
              <span
                key={i}
                className={`flex size-8 items-center justify-center rounded border font-mono text-sm ${
                  v === "t" ? "border-role-sorted bg-role-sorted/20" : v === "f" ? "border-role-swapped bg-role-swapped/20" : "border-border"
                }`}
              >
                {v}
              </span>
            ))
          )}
        </div>
      </div>

      {lastEval && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-sm">
          {lastEval.op}({lastEval.operands.join(",")}) = {lastEval.result}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        result = <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>
    </div>
  );
}
