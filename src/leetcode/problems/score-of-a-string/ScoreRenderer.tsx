import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ScoreData } from "./algorithm";

export function ScoreRenderer({ step }: RendererProps<ScoreData>) {
  const { s, i, diff, score, answer } = step.data;
  const chars = s.split("");

  const roleFor = (k: number) => {
    if (i === null) return "default";
    if (k === i || k === i - 1) return "current";
    if (k < i - 1) return "visited";
    return "default";
  };

  const badge = (k: number) => `${s.charCodeAt(k)}`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} badge={badge} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {diff !== null && <span className="rounded-md border border-role-current px-3 py-1">|diff| = {diff}</span>}
        <span className="rounded-md border px-3 py-1">score = <b className="tabular-nums">{answer ?? score}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Adjacent pair" }, { role: "visited", label: "Scored" }]} />
      <p className="text-xs text-muted-foreground">badges show each character's ASCII code</p>
    </div>
  );
}
