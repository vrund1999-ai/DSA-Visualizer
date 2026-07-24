import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PermStringData } from "./algorithm";

export function PermStringRenderer({ step }: RendererProps<PermStringData>) {
  const { s1, s2, lo, hi, match, answer } = step.data;
  const chars = s2.split("");

  const roleFor = (i: number) => {
    if (hi < 0 || i < lo || i > hi) return "default";
    return match ? "sorted" : "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === lo && hi >= 0) parts.push("L");
    if (i === hi) parts.push("R");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">looking for a permutation of <span className="font-mono text-foreground">{s1}</span></div>

      <ArrayCells values={chars} roleFor={roleFor} topLabel={topLabel} showIndex={false} cellWidth="w-9" />

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-sorted" : "text-muted-foreground"}`}>
          {answer ? "Permutation found" : "No permutation present"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Window" }, { role: "sorted", label: "Matching window" }]} />
    </div>
  );
}
