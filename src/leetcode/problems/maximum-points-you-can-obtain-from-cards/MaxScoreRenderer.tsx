import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxScoreData } from "./algorithm";

export function MaxScoreRenderer({ step }: RendererProps<MaxScoreData>) {
  const { cardPoints, k, win, total, start, windowSum, minWindow, bestStart, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null) return i >= bestStart && i < bestStart + win ? "compared" : "sorted";
    if (start !== null && i >= start && i < start + win) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">take k = {k}</span>
        <span className="rounded-md border px-3 py-1">leave window = {win}</span>
        <span className="rounded-md border px-3 py-1">total = {total}</span>
      </div>

      <ArrayCells values={cardPoints} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {start !== null && answer === null && <span className="rounded-md border px-3 py-1">window sum = {windowSum}</span>}
        <span className="rounded-md border px-3 py-1">min window = {minWindow}</span>
        {answer !== null && <span className="rounded-md border px-3 py-1 font-semibold">score = {answer}</span>}
      </div>

      <Legend items={[{ role: "current", label: "Middle window (left)" }, { role: "compared", label: "Best window to leave" }, { role: "sorted", label: "Cards taken" }]} />
    </div>
  );
}
