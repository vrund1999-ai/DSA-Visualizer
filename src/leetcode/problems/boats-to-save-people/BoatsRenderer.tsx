import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BoatsData } from "./algorithm";

export function BoatsRenderer({ step }: RendererProps<BoatsData>) {
  const { people, limit, i, j, boats, paired, answer } = step.data;

  const roleFor = (k: number) => {
    if (k < i || k > j) return "visited";
    if (k === i && k === j) return "current";
    if (k === j) return "current";
    if (k === i) return paired ? "sorted" : "target";
    return "active";
  };

  const topLabel = (k: number) => {
    const parts: string[] = [];
    if (k === i) parts.push("i");
    if (k === j) parts.push("j");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">weight limit = <b className="tabular-nums text-foreground">{limit}</b></div>

      <ArrayCells values={people} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="text-sm">boats used = <b className="tabular-nums text-role-current">{answer ?? boats}</b></div>

      <Legend items={[{ role: "current", label: "Heaviest (boards)" }, { role: "sorted", label: "Lightest (pairs)" }, { role: "target", label: "Too heavy to pair" }, { role: "visited", label: "Seated" }]} />
    </div>
  );
}
