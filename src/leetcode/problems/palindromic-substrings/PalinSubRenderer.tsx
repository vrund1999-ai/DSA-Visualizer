import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PalinSubData } from "./algorithm";

export function PalinSubRenderer({ step }: RendererProps<PalinSubData>) {
  const { s, l, r, matched, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (l !== null && r !== null && (i === l || i === r)) return matched ? "sorted" : "target";
    if (l !== null && r !== null && i > l && i < r) return "active";
    return "default";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === l) parts.push("l");
    if (i === r) parts.push("r");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={topLabel} showIndex={true} />

      <div className="text-sm">palindromic substrings = <b className="tabular-nums text-role-sorted">{answer ?? count}</b></div>

      <Legend items={[{ role: "sorted", label: "Match (l == r ends)" }, { role: "active", label: "Inside window" }, { role: "target", label: "Mismatch" }]} />
    </div>
  );
}
