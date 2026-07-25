import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ReverseBitsData } from "./algorithm";

function BitRow({ bits, activeIndex, tone }: { bits: number[]; activeIndex: number | null; tone: string }) {
  return (
    <div className="flex gap-0.5">
      {bits.map((b, k) => (
        <div key={k} className={`flex h-6 w-4 items-center justify-center rounded-sm border text-[10px] tabular-nums ${k === activeIndex ? `${tone} text-white` : b ? "border-border bg-muted/50" : "border-border/50 bg-muted/10 text-muted-foreground"}`}>{b}</div>
      ))}
    </div>
  );
}

export function ReverseBitsRenderer({ step }: RendererProps<ReverseBitsData>) {
  const { inputBits, resultBits, i, answer } = step.data;
  // input bits are shown MSB..LSB (index 0 = bit 31); source bit i sits at display index 31 - i
  const srcDisplay = i === null ? null : 31 - i;
  const dstDisplay = i === null ? null : i; // mirror position 31-i shown at display index i

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 overflow-x-auto">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">input (MSB → LSB)</span>
        <BitRow bits={inputBits} activeIndex={srcDisplay} tone="bg-role-current border-role-current" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result (building)</span>
        <BitRow bits={resultBits} activeIndex={dstDisplay} tone="bg-role-sorted border-role-sorted" />
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold tabular-nums">reversed = {answer}</div>}

      <Legend items={[{ role: "current", label: "Source bit i" }, { role: "sorted", label: "Mirror slot 31−i" }]} />
    </div>
  );
}
