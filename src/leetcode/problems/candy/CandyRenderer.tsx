import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CandyData } from "./algorithm";

export function CandyRenderer({ step }: RendererProps<CandyData>) {
  const { ratings, candies, phase, total } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">
          {phase === "left" ? "Left → right pass" : phase === "right" ? "Right → left pass" : "Done"}
        </span>
        <span className="text-muted-foreground">total</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{total}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ratings</span>
        <ArrayCells values={ratings} roleFor={(idx) => roleFor(idx)} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Candies</span>
        <ArrayCells values={candies} roleFor={(idx) => roleFor(idx)} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "compared", label: "Neighbour" },
          { role: "target", label: "Updated" },
          { role: "visited", label: "Unchanged" },
        ]}
      />
    </div>
  );
}
