import type { RendererProps } from "@/core/types";
import type { BankData } from "./algorithm";

export function BankRenderer({ step }: RendererProps<BankData>) {
  const { ops, opIndex, balance, touched, result } = step.data;
  const touchedSet = new Set(touched);
  const maxB = Math.max(1, ...balance);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {op}
          </span>
        ))}
      </div>

      <div className="flex items-end justify-center gap-3">
        {balance.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs tabular-nums text-muted-foreground">{v}</span>
            <div
              className={`flex w-10 items-end justify-center rounded-t ${touchedSet.has(i) ? "bg-role-current" : "bg-role-active/50"}`}
              style={{ height: `${20 + (v / maxB) * 90}px` }}
            />
            <span className="text-xs tabular-nums text-muted-foreground">#{i + 1}</span>
          </div>
        ))}
      </div>

      {result !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          result → <b className={result ? "text-role-sorted" : "text-role-swapped"}>{result ? "true" : "false"}</b>
        </div>
      )}
    </div>
  );
}
