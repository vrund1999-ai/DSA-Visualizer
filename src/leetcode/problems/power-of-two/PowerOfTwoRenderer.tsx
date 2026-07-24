import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowerOfTwoData } from "./algorithm";

function BitRow({ label, bits, highlight }: { label: string; bits: number[]; highlight: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-right font-mono text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-1">
        {bits.map((b, i) => (
          <span key={i} className={`flex size-7 items-center justify-center rounded border font-mono text-xs ${b ? highlight : "border-border bg-muted/20 text-muted-foreground"}`}>{b}</span>
        ))}
      </div>
    </div>
  );
}

export function PowerOfTwoRenderer({ step }: RendererProps<PowerOfTwoData>) {
  const { n, bitsN, bitsNMinus1, bitsAnd, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <BitRow label={`n = ${n}`} bits={bitsN} highlight="border-role-current bg-role-current/15" />
        <BitRow label={`n − 1 = ${n - 1}`} bits={bitsNMinus1} highlight="border-role-active bg-role-active/15" />
        <BitRow label="n & (n−1)" bits={bitsAnd} highlight="border-role-swapped bg-role-swapped/20" />
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Power of two ✓" : "Not a power of two ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "n" },
          { role: "active", label: "n − 1" },
          { role: "swapped", label: "AND (should be 0)" },
        ]}
      />
    </div>
  );
}
