import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HammingData } from "./algorithm";

export function HammingRenderer({ step }: RendererProps<HammingData>) {
  const { x, y, bits, bit, count, answer } = step.data;
  const xor = x ^ y;

  const bitRow = (v: number, highlightDiff: boolean) =>
    Array.from({ length: bits }).map((_, ci) => {
      const b = bits - 1 - ci;
      const val = (v >> b) & 1;
      const isCur = b === bit;
      const diff = ((xor >> b) & 1) === 1;
      const cls = isCur ? "bg-role-current text-white border-role-current" : highlightDiff && diff ? "bg-role-swapped/40 border-role-swapped" : "border-border text-muted-foreground";
      return <span key={ci} className={`flex h-7 w-7 items-center justify-center rounded border font-mono text-sm ${cls}`}>{val}</span>;
    });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1"><span className="w-10 text-right text-xs text-muted-foreground">x={x}</span>{bitRow(x, false)}</div>
        <div className="flex items-center gap-1"><span className="w-10 text-right text-xs text-muted-foreground">y={y}</span>{bitRow(y, false)}</div>
        <div className="flex items-center gap-1"><span className="w-10 text-right text-xs font-bold text-role-swapped">XOR</span>{bitRow(xor, true)}</div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">hamming distance = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Current bit" }, { role: "swapped", label: "Differing bit" }]} />
    </div>
  );
}
