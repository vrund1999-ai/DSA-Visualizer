import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CircularDistData } from "./algorithm";

export function CircularDistRenderer({ step }: RendererProps<CircularDistData>) {
  const { words, target, startIndex, cur, bestIndex, answer } = step.data;

  const n = words.length;
  const r = 110;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">target "{target}" · start at index {startIndex}</div>

      <div className="relative" style={{ width: 2 * r + 72, height: 2 * r + 72 }}>
        {words.map((w, i) => {
          const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
          const x = r + r * Math.cos(angle);
          const y = r + r * Math.sin(angle);
          const isStart = i === startIndex;
          const isBest = answer !== null && answer >= 0 && i === bestIndex;
          const isCur = i === cur;
          const cls = isBest ? "border-role-target bg-role-target/20" : isCur ? "border-role-current bg-role-current/20" : isStart ? "border-role-active bg-role-active/20" : w === target ? "border-role-visited bg-role-visited/10" : "border-border bg-card";
          return (
            <div key={i} className={`absolute flex min-w-11 items-center justify-center rounded-md border-2 px-2 py-1 text-xs font-medium ${cls}`} style={{ left: x, top: y }}>
              {w}
            </div>
          );
        })}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === -1 ? "text-muted-foreground" : "text-role-target"}`}>
          {answer === -1 ? "not found (-1)" : `shortest distance = ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Start" }, { role: "current", label: "Checking" }, { role: "visited", label: "Target occurrence" }, { role: "target", label: "Nearest" }]} />
    </div>
  );
}
