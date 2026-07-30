import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FlipData } from "./algorithm";

function Grid({ g, row, pair, label }: { g: number[][]; row: number | null; pair: [number, number] | null; label: string }) {
  const n = g[0].length;
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 2rem)` }}>
        {g.flatMap((r, ri) =>
          r.map((v, ci) => {
            const active = ri === row && pair !== null && (ci === pair[0] || ci === pair[1]);
            return <div key={`${ri}-${ci}`} className={`flex h-8 w-8 items-center justify-center rounded border text-xs font-semibold ${active ? "bg-role-current text-white border-role-current" : v === 1 ? "bg-role-active/40 border-role-active" : "bg-muted/40 border-border text-muted-foreground"}`}>{v}</div>;
          }),
        )}
      </div>
    </div>
  );
}

export function FlipRenderer({ step }: RendererProps<FlipData>) {
  const { original, image, row, pair, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-start gap-8">
        <Grid g={original} row={null} pair={null} label="original" />
        <Grid g={answer ?? image} row={row} pair={pair} label="flipped + inverted" />
      </div>

      <Legend items={[{ role: "current", label: "Swapping columns" }, { role: "active", label: "1 bit" }]} />
    </div>
  );
}
