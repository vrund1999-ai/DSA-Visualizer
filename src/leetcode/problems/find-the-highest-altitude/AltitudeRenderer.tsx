import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { AltitudeData } from "./algorithm";

export function AltitudeRenderer({ step }: RendererProps<AltitudeData>) {
  const { gain, idx, altitudes, altitude, highest, highestIdx, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (i === highestIdx) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">gains</span>
        <ArrayCells values={gain} roleFor={(i) => (i + 1 === idx ? "current" : "default")} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">altitudes (prefix sums)</span>
        <ArrayCells values={altitudes} roleFor={roleFor} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">altitude = <b className="tabular-nums">{altitude}</b></span>
        <span className="rounded-md border border-role-sorted px-3 py-1">highest = <b className="tabular-nums">{answer ?? highest}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current altitude" }, { role: "sorted", label: "Highest point" }]} />
    </div>
  );
}
