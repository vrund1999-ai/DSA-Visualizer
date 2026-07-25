import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SumBitsData } from "./algorithm";

function bits(n: number, width = 8): string {
  if (n < 0) return (n >>> 0).toString(2).slice(-width).padStart(width, "1");
  return n.toString(2).padStart(width, "0").slice(-width);
}

function BitRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-right text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-0.5 font-mono text-sm">
        {bits(value).split("").map((bit, i) => (
          <span key={i} className={`flex size-6 items-center justify-center rounded ${bit === "1" ? "bg-role-current/25 text-role-current" : "bg-muted/30 text-muted-foreground"}`}>{bit}</span>
        ))}
      </div>
      <span className="w-10 tabular-nums text-xs text-muted-foreground">{value}</span>
    </div>
  );
}

export function SumBitsRenderer({ step }: RendererProps<SumBitsData>) {
  const { origA, origB, a, b, carry, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{origA} + {origB}</div>

      <div className="flex flex-col gap-1.5">
        <BitRow label="a (sum)" value={a} />
        <BitRow label="b (carry)" value={b} />
        {carry !== null && <BitRow label="next carry" value={carry} />}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-current">sum = {answer}</div>}

      <Legend items={[{ role: "current", label: "Set bit (1)" }]} />
    </div>
  );
}
