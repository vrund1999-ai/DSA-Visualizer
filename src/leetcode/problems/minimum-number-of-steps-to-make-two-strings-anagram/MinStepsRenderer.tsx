import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MinStepsData } from "./algorithm";

export function MinStepsRenderer({ step }: RendererProps<MinStepsData>) {
  const { s, t, letters, count, active, phase, steps, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === active) return phase === "sum" ? "target" : "current";
    if (phase === "sum" && count[i] > 0) return "target";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <span>s = <span className="font-mono">{s}</span></span>
        <span>t = <span className="font-mono">{t}</span></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">count = (#in s) − (#in t)</span>
        <ArrayCells values={count} roleFor={roleFor} topLabel={(i) => letters[i]} showIndex={false} />
      </div>

      <div className="text-sm">
        replacements needed = <b className="tabular-nums text-role-target">{answer ?? steps}</b>
      </div>

      <Legend items={[{ role: "current", label: "Tallying" }, { role: "target", label: "Positive surplus" }]} />
    </div>
  );
}
