import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MoveBallsData } from "./algorithm";

export function MoveBallsRenderer({ step }: RendererProps<MoveBallsData>) {
  const { boxes, ans, i, dir, answer } = step.data;

  const boxRole = (idx: number) => {
    if (idx === i) return "current";
    return boxes[idx] === "1" ? "pivot" : "default";
  };
  const ansRole = (idx: number) => (idx === i ? "current" : answer ? "sorted" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">boxes {dir ? `· sweeping ${dir}` : ""}</span>
        <ArrayCells values={boxes.split("")} roleFor={boxRole} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">operations</span>
        <ArrayCells values={ans} roleFor={ansRole} />
      </div>

      <Legend items={[{ role: "pivot", label: "Ball (1)" }, { role: "current", label: "Current box" }, { role: "sorted", label: "Final answer" }]} />
    </div>
  );
}
