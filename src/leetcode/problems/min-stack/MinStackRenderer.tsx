import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MinStackData } from "./algorithm";

function StackColumn({ title, values, color }: { title: string; values: number[]; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</span>
      <div className="flex min-h-[8rem] w-20 flex-col-reverse items-center gap-1 rounded-lg border bg-card/40 p-2">
        {values.length === 0 ? (
          <span className="text-xs text-muted-foreground">empty</span>
        ) : (
          values.map((v, k) => (
            <span
              key={k}
              className={`w-full rounded border px-2 py-1 text-center font-mono text-sm tabular-nums ${
                k === values.length - 1 ? color : "border-border bg-muted/30 text-muted-foreground"
              }`}
            >
              {v}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export function MinStackRenderer({ step }: RendererProps<MinStackData>) {
  const { st, min, op, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center gap-5">
      <div className="flex items-center gap-2 text-sm">
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">
          {op}
        </span>
        {result && <span className="text-muted-foreground">→ {result}</span>}
      </div>

      <div className="flex items-start gap-8">
        <StackColumn title="Stack" values={st} color="border-role-current bg-role-current/15" />
        <StackColumn title="Min stack" values={min} color="border-role-sorted bg-role-sorted/15" />
      </div>

      <Legend
        items={[
          { role: "current", label: "Stack top" },
          { role: "sorted", label: "Current min (top)" },
        ]}
      />
    </div>
  );
}
