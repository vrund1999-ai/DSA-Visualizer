import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HammingData } from "./algorithm";

export function HammingRenderer({ step }: RendererProps<HammingData>) {
  const { nums, bits, bit, ones, total, answer } = step.data;
  const cols = bits;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1">
        {nums.map((num) => (
          <div key={num} className="flex items-center gap-1">
            <span className="w-8 text-right text-xs tabular-nums text-muted-foreground">{num}</span>
            {Array.from({ length: cols }).map((_, ci) => {
              const b = cols - 1 - ci; // high bit left
              const isCol = b === bit;
              const val = (num >> b) & 1;
              return (
                <span key={ci} className={`flex h-6 w-6 items-center justify-center rounded border font-mono text-xs ${isCol ? (val ? "bg-role-active/50 border-role-active" : "bg-role-swapped/20 border-role-swapped/40") : "border-border text-muted-foreground"}`}>{val}</span>
              );
            })}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="w-8 text-right text-[10px] uppercase text-muted-foreground">bit</span>
          {Array.from({ length: cols }).map((_, ci) => {
            const b = cols - 1 - ci;
            return <span key={ci} className={`flex h-5 w-6 items-center justify-center text-[10px] ${b === bit ? "font-bold text-role-active" : "text-muted-foreground"}`}>{b}</span>;
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        {ones !== null && <span className="rounded-md border px-3 py-1">bit {bit}: {ones} × {nums.length - ones}</span>}
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "1 at current bit" }, { role: "swapped", label: "0 at current bit" }]} />
    </div>
  );
}
