import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HappyData } from "./algorithm";

export function HappyRenderer({ step }: RendererProps<HappyData>) {
  const { n, digits, seen, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Current n</span>
        <span className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-lg font-semibold">{n}</span>
      </div>

      <div className="flex items-center gap-1.5">
        {digits.map((d, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="flex size-9 items-center justify-center rounded-md border-2 border-border bg-muted/30 font-mono text-sm">{d}</span>
            <span className="text-[10px] text-muted-foreground">d²={d * d}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Seen values (cycle guard)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {seen.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : seen.map((v) => (
            <span key={v} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${v === n ? "border-role-swapped bg-role-swapped/15" : "border-border bg-muted/30 text-muted-foreground"}`}>{v}</span>
          ))}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Happy number ✓" : "Not happy (cycle) ✗"}
        </p>
      )}

      <Legend items={[{ role: "current", label: "Current value" }, { role: "swapped", label: "Repeat (cycle)" }]} />
    </div>
  );
}
