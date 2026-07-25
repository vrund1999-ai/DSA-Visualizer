import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { UglyIIData } from "./algorithm";

export function UglyIIRenderer({ step }: RendererProps<UglyIIData>) {
  const { n, dp, p2, p3, p5, candidates, chosen, answer } = step.data;

  const roleFor = (i: number) => {
    if (chosen !== null && i === dp.length - 1) return "sorted";
    if (i === p2 || i === p3 || i === p5) return "current";
    return "default";
  };

  const topLabel = (i: number) => {
    const tags = [i === p2 && "×2", i === p3 && "×3", i === p5 && "×5"].filter(Boolean);
    return tags.join(" ");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">n = <b className="tabular-nums">{n}</b></div>

      <ArrayCells values={dp} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-3 text-sm">
        {candidates && (
          <span className="rounded-md border px-3 py-1">
            candidates: {candidates.map((c, i) => <span key={i} className={c === chosen ? "font-bold text-role-sorted" : ""}>{c}{i < 2 ? ", " : ""}</span>)}
          </span>
        )}
        {answer !== null && <span className="rounded-md border px-3 py-1 font-semibold">nth ugly = {answer}</span>}
      </div>

      <Legend items={[{ role: "current", label: "Pointer positions" }, { role: "sorted", label: "Just appended" }]} />
    </div>
  );
}
