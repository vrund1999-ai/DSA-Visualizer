import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TwoHousesData } from "./algorithm";

const PALETTE = ["bg-role-active/40", "bg-role-pivot/40", "bg-role-target/40", "bg-role-sorted/40", "bg-amber-400/40", "bg-role-compared/40"];

export function TwoHousesRenderer({ step }: RendererProps<TwoHousesData>) {
  const { colors, scan, bestPair, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {colors.map((c, i) => {
          const inBest = bestPair && (i === bestPair[0] || i === bestPair[1]);
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="h-4 text-[10px] font-semibold text-role-current">{i === scan ? "▼" : ""}</span>
              <div
                className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${PALETTE[c % PALETTE.length]} ${
                  inBest ? "border-role-current" : "border-border"
                }`}
              >
                {c}
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">{i}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        max distance = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "best differing pair" }]} />
    </div>
  );
}
