import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MountainData } from "./algorithm";

export function MountainRenderer({ step }: RendererProps<MountainData>) {
  const { arr, target, phase, lo, hi, mid, peak, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && answer >= 0 && i === answer) return "target";
    if (i === mid) return "current";
    if (i === peak) return "pivot";
    if (i === lo || i === hi) return "compared";
    if (i < lo || i > hi) return "default";
    return "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === peak) parts.push("peak");
    if (i === mid) parts.push("mid");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        target = <b className="tabular-nums text-foreground">{target}</b> · phase: {phase}
      </div>

      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} />

      {answer !== null && (
        <div className={`text-base font-semibold ${answer >= 0 ? "text-role-target" : "text-muted-foreground"}`}>
          {answer >= 0 ? `found at index ${answer}` : "not found (-1)"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Search window" }, { role: "current", label: "mid" }, { role: "pivot", label: "Peak" }, { role: "target", label: "Found" }]} />
    </div>
  );
}
