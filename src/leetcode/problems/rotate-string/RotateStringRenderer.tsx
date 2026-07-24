import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RotateStringData } from "./algorithm";

export function RotateStringRenderer({ step }: RendererProps<RotateStringData>) {
  const { doubled, goal, n, k, matches, found } = step.data;

  const inWindow = (i: number) => k !== null && i >= k && i < k + n;

  const doubledRole = (i: number) => {
    if (!inWindow(i)) return "default";
    const pos = i - (k as number);
    if (matches[pos] === undefined) return "current";
    return matches[pos] ? "visited" : "target";
  };

  const goalRole = (i: number) => {
    if (matches.length === 0) return "default";
    return matches[i] ? "visited" : "target";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s + s (sliding window)</span>
        <ArrayCells values={doubled} roleFor={doubledRole} topLabel={(i) => (i === k ? "k" : "")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">goal</span>
        <ArrayCells values={goal} roleFor={k !== null ? goalRole : () => "default"} showIndex={false} cellWidth="w-9" />
      </div>

      {found !== null && (
        <div className={`text-base font-semibold ${found ? "text-role-visited" : "text-role-target"}`}>
          {found ? "Match — goal is a rotation" : "No rotation matches"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Comparing" }, { role: "visited", label: "Char matches" }, { role: "target", label: "Mismatch" }]} />
    </div>
  );
}
