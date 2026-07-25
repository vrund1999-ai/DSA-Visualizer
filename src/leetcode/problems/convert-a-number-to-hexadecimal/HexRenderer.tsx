import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HexData } from "./algorithm";

export function HexRenderer({ step }: RendererProps<HexData>) {
  const { num, n, nibble, digit, hex, answer } = step.data;
  const shown = answer ?? hex;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">num = <b className="tabular-nums">{num}</b></span>
        <span className="rounded-md border px-3 py-1">remaining = <b className="tabular-nums">{n}</b></span>
      </div>

      {nibble !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          low nibble {nibble} → <b className="font-mono">'{digit}'</b>
        </div>
      )}

      <div className="flex items-end gap-1">
        {shown.length === 0 ? (
          <span className="text-muted-foreground">…</span>
        ) : (
          shown.split("").map((ch, i) => (
            <div key={i} className={`flex size-12 items-center justify-center rounded-lg border-2 font-mono text-2xl font-bold ${!answer && i === 0 && ch === digit ? "border-role-current bg-role-current text-white" : "border-border bg-muted/30"}`}>{ch}</div>
          ))
        )}
      </div>

      {answer !== null && <div className="text-lg font-semibold">0x{answer}</div>}

      <Legend items={[{ role: "current", label: "Newest digit" }]} />
    </div>
  );
}
