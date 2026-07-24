import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { NQueensData } from "./algorithm";

export function NQueensRenderer({ step }: RendererProps<NQueensData>) {
  const { n, queens, tryCell, conflict, solutions } = step.data;

  const role = (r: number, c: number) => {
    if (r < queens.length && queens[r] === c) return "target";
    if (tryCell && tryCell[0] === r && tryCell[1] === c) return conflict ? "swapped" : "current";
    return (r + c) % 2 === 0 ? "default" : "visited";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Solutions found</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{solutions}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Grid rows={n} cols={n} cellRole={role} cellValue={(r, c) => (r < queens.length && queens[r] === c ? "♛" : "")} size="size-9" />
      </div>

      <Legend
        items={[
          { role: "target", label: "Placed queen" },
          { role: "current", label: "Trying" },
          { role: "swapped", label: "Attacked" },
        ]}
      />
    </div>
  );
}
