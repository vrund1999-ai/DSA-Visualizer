import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { GoodTripletsData } from "./algorithm";

export function GoodTripletsRenderer({ step }: RendererProps<GoodTripletsData>) {
  const { arr, a, b, c, triplet, good, count, answer } = step.data;

  const roleFor = (idx: number) => {
    if (!triplet) return "default";
    if (triplet.includes(idx)) return good === false ? "swapped" : "current";
    return "default";
  };

  const topLabel = (idx: number) => {
    if (!triplet) return "";
    if (idx === triplet[0]) return "i";
    if (idx === triplet[1]) return "j";
    if (idx === triplet[2]) return "k";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs text-muted-foreground tabular-nums">
        a = {a} · b = {b} · c = {c}
      </span>

      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} />

      <div className="rounded-md border px-3 py-1 text-sm">
        good triplets = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "good triplet" }, { role: "swapped", label: "failing triplet" }]} />
    </div>
  );
}
