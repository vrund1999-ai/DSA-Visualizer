import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CouplesData } from "./algorithm";

// Distinct hues per couple id so partners share a color.
const HUES = ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#ec4899", "#14b8a6", "#f97316"];

export function CouplesRenderer({ step }: RendererProps<CouplesData>) {
  const { row, seat, swapped, swaps, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1">
        {row.map((p, i) => {
          const couple = p >> 1;
          const inPair = seat !== null && (i === seat || i === seat + 1);
          const isSwapped = swapped && (i === swapped[0] || i === swapped[1]);
          const boundary = i % 2 === 0 ? "ml-3" : "";
          return (
            <div
              key={i}
              className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-bold text-white ${boundary} ${isSwapped ? "ring-4 ring-role-current" : inPair ? "ring-2 ring-foreground" : ""}`}
              style={{ backgroundColor: HUES[couple % HUES.length] }}
            >
              {p}
            </div>
          );
        })}
      </div>

      <div className="text-xs text-muted-foreground">each adjacent pair (with a gap between pairs) should share a color</div>

      <div className="rounded-md border px-3 py-1 text-sm">swaps = <b className="tabular-nums">{answer ?? swaps}</b></div>

      <Legend items={[{ role: "current", label: "Swapped seats" }]} />
    </div>
  );
}
