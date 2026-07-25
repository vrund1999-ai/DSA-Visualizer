import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FindDiffData } from "./algorithm";

export function FindDiffRenderer({ step }: RendererProps<FindDiffData>) {
  const { s, t, from, idx, x, answer } = step.data;

  const roleForS = (i: number) => (from === "s" && i === idx ? "current" : from === "s" && i < (idx ?? -1) ? "visited" : from === "t" ? "visited" : "default");
  const roleForT = (i: number) => (from === "t" && i === idx ? "current" : from === "t" && i < (idx ?? -1) ? "visited" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s</span>
        <ArrayCells values={s.split("")} roleFor={roleForS} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">t (one extra char)</span>
        <ArrayCells values={t.split("")} roleFor={roleForT} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="text-sm">running XOR = <b className="tabular-nums text-foreground">{x}</b></div>

      {answer !== null && <div className="text-base font-semibold text-role-current">added char = '{answer}'</div>}

      <Legend items={[{ role: "current", label: "XORing" }, { role: "visited", label: "Applied" }]} />
    </div>
  );
}
