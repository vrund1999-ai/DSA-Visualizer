import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxXorData } from "./algorithm";

function bitRow(v: number, bits: number) {
  const out: number[] = [];
  for (let b = bits; b >= 0; b--) out.push((v >> b) & 1);
  return out;
}

export function MaxXorRenderer({ step }: RendererProps<MaxXorData>) {
  const { nums, bits, bit, max, pair, answer } = step.data;
  const cols = bits + 1;
  const inPair = new Set(pair ?? []);
  const colOf = (b: number) => bits - b; // display index for bit b

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-1">
        {nums.map((n) => {
          const highlighted = inPair.has(n);
          return (
            <div key={n} className="flex items-center gap-1">
              <span className={`w-8 text-right text-xs tabular-nums ${highlighted ? "font-bold text-role-current" : "text-muted-foreground"}`}>{n}</span>
              {bitRow(n, bits).map((d, ci) => {
                const isBitCol = bit !== null && ci === colOf(bit);
                const cls = highlighted
                  ? "bg-role-current/25 border-role-current text-foreground"
                  : isBitCol
                    ? "bg-role-active/20 border-role-active"
                    : "border-border text-muted-foreground";
                return (
                  <span key={ci} className={`flex h-6 w-6 items-center justify-center rounded border text-xs font-mono ${cls}`}>
                    {d}
                  </span>
                );
              })}
            </div>
          );
        })}
        <div className="mt-1 flex items-center gap-1">
          <span className="w-8 text-right text-[10px] uppercase text-muted-foreground">bit</span>
          {Array.from({ length: cols }).map((_, ci) => (
            <span key={ci} className={`flex h-5 w-6 items-center justify-center text-[10px] ${bit !== null && ci === colOf(bit) ? "font-bold text-role-active" : "text-muted-foreground"}`}>
              {bits - ci}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        max XOR = <b className="tabular-nums">{answer ?? max}</b>
        <span className="ml-2 font-mono text-xs text-muted-foreground">{bitRow(answer ?? max, bits).join("")}</span>
      </div>

      <Legend items={[{ role: "active", label: "Current bit" }, { role: "current", label: "Best pair" }]} />
    </div>
  );
}
