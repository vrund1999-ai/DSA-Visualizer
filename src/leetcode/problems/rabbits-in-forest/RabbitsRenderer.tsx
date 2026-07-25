import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RabbitsData } from "./algorithm";

export function RabbitsRenderer({ step }: RendererProps<RabbitsData>) {
  const { answers, freq, cur, groupSize, groups, added, total, answer } = step.data;

  const roleFor = (i: number) => (answers[i] === cur ? "current" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">answers</span>
        <ArrayCells values={answers} roleFor={roleFor} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {freq.map(([a, count]) => (
          <span key={a} className={`rounded-md border px-2.5 py-1 text-sm tabular-nums ${a === cur ? "border-role-current bg-role-current/15" : ""}`}>
            "{a}" ×{count} → herd {a + 1}
          </span>
        ))}
      </div>

      {groupSize !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          {groups} herd(s) × {groupSize} = <b>{added}</b> rabbits
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">total = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "current", label: "Current answer group" }]} />
    </div>
  );
}
