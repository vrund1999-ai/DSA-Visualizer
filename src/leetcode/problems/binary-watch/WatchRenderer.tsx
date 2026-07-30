import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { WatchData } from "./algorithm";

function Led({ on }: { on: boolean }) {
  return <span className={`h-4 w-4 rounded-full border ${on ? "bg-role-sorted border-role-sorted" : "bg-muted/40 border-border"}`} />;
}

export function WatchRenderer({ step }: RendererProps<WatchData>) {
  const { turnedOn, h, m, res, answer } = step.data;
  const hourBits = [8, 4, 2, 1];
  const minBits = [32, 16, 8, 4, 2, 1];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-lg border-2 border-border bg-muted/20 px-6 py-3">
        <div className="mb-1 text-center font-mono text-2xl">{h !== null ? `${h}:${String(m).padStart(2, "0")}` : "—:—"}</div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 text-right text-[10px] uppercase text-muted-foreground">hr</span>
            {hourBits.map((b) => <Led key={b} on={h !== null && (h & b) !== 0} />)}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right text-[10px] uppercase text-muted-foreground">min</span>
            {minBits.map((b) => <Led key={b} on={m !== null && (m & b) !== 0} />)}
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">LEDs on = {turnedOn}</div>

      <div className="flex max-w-lg flex-wrap justify-center gap-1">
        {(answer ?? res).map((t, i) => (
          <span key={i} className={`rounded border px-1.5 py-0.5 font-mono text-xs ${answer ? "border-role-sorted bg-role-sorted/10" : "border-border"}`}>{t}</span>
        ))}
      </div>

      <Legend items={[{ role: "sorted", label: "Lit LED / valid time" }]} />
    </div>
  );
}
