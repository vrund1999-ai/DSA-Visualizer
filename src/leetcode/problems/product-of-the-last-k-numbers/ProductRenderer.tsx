import type { RendererProps } from "@/core/types";
import { ArrayCells } from "@/leetcode/shared/viz";
import type { ProductData } from "./algorithm";

export function ProductRenderer({ step }: RendererProps<ProductData>) {
  const { ops, opIndex, prefix, result } = step.data;

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

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">prefix products</span>
        <ArrayCells values={prefix} roleFor={(i) => (i === prefix.length - 1 ? "active" : "default")} showIndex cellWidth="w-11" />
      </div>

      {result !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          getProduct → <b className="tabular-nums">{result}</b>
        </div>
      )}
    </div>
  );
}
