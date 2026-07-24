import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ZigzagData } from "./algorithm";

export function ZigzagRenderer({ step }: RendererProps<ZigzagData>) {
  const { s, rows, currentChar, currentRow, result } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-1">
        {[...s].map((c, i) => (
          <span key={i} className={`flex size-7 items-center justify-center rounded border font-mono text-sm ${i === currentChar ? "border-role-current bg-role-current/20" : i < (currentChar ?? -1) ? "border-border bg-muted/20 text-muted-foreground" : "border-border bg-muted/30"}`}>{c}</span>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-start gap-1.5">
        {rows.map((row, r) => (
          <div key={r} className="flex items-center gap-2">
            <span className={`w-14 text-right font-mono text-xs ${r === currentRow ? "text-role-current" : "text-muted-foreground"}`}>row {r}</span>
            <div className="flex gap-1">
              {[...row].map((c, k) => (
                <span key={k} className="flex size-7 items-center justify-center rounded border border-role-active bg-role-active/15 font-mono text-sm">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {result !== null && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result</span>
          <div className="rounded-lg border border-role-sorted bg-role-sorted/10 px-4 py-2 font-mono text-sm">{result}</div>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current char / row" }, { role: "active", label: "Row buffers" }]} />
    </div>
  );
}
