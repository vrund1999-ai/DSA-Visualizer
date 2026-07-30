import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GrayData } from "./algorithm";

export function GrayRenderer({ step }: RendererProps<GrayData>) {
  const { n, res, i, flipped, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">{n}-bit gray code · adjacent codes differ by one bit</div>

      <div className="flex flex-col items-center gap-1">
        {res.map((g, idx) => {
          const bits = g.toString(2).padStart(n, "0").split("");
          const isCur = idx === i;
          return (
            <div key={idx} className={`flex items-center gap-1 ${isCur ? "" : "opacity-90"}`}>
              <span className="w-6 text-right text-[10px] text-muted-foreground">{g}</span>
              {bits.map((b, bi) => {
                const bitPos = n - 1 - bi;
                const isFlip = isCur && flipped !== null && bitPos === flipped;
                return <span key={bi} className={`flex h-6 w-6 items-center justify-center rounded border font-mono text-xs ${isFlip ? "bg-role-current text-white border-role-current" : isCur ? "bg-role-active/30 border-role-active" : "border-border text-muted-foreground"}`}>{b}</span>;
              })}
            </div>
          );
        })}
      </div>

      {answer && <div className="rounded-md border px-3 py-1 text-sm">[<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "active", label: "Current code" }, { role: "current", label: "Flipped bit" }]} />
    </div>
  );
}
