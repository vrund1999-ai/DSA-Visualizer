import type { RendererProps } from "@/core/types";
import type { BrokenCalcData } from "./algorithm";

const OP_LABEL: Record<string, string> = { halve: "÷2", increment: "+1", subtract: "−1s" };

export function BrokenCalcRenderer({ step }: RendererProps<BrokenCalcData>) {
  const { startValue, target, current, ops, lastOp, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border border-role-active bg-role-active/20 px-3 py-1.5 tabular-nums">
          start {startValue}
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="rounded-md border border-role-target bg-role-target/20 px-3 py-1.5 tabular-nums">
          target {target}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">current (working backwards)</span>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold tabular-nums">{current}</span>
          {lastOp && <span className="rounded bg-role-current/20 px-2 py-0.5 text-sm text-role-current">{OP_LABEL[lastOp]}</span>}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        operations = <b className="tabular-nums">{answer ?? ops}</b>
      </div>
    </div>
  );
}
