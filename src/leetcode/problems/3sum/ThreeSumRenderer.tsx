import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ThreeSumData } from "./algorithm";

export function ThreeSumRenderer({ step }: RendererProps<ThreeSumData>) {
  const { nums, i, l, r, sum, triplets } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Current sum</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {sum ?? "—"}
        </span>
        <span className="ml-2 text-muted-foreground">(target 0)</span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === i ? "i" : idx === l ? "L" : idx === r ? "R" : "")}
      />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Triplets found
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {triplets.length === 0 ? (
            <span className="text-xs text-muted-foreground">none yet</span>
          ) : (
            triplets.map((t, k) => (
              <span
                key={k}
                className="rounded-md border border-role-target bg-role-target/15 px-2 py-1 font-mono text-xs tabular-nums"
              >
                [{t.join(", ")}]
              </span>
            ))
          )}
        </div>
      </div>

      <Legend
        items={[
          { role: "pivot", label: "Anchor (i)" },
          { role: "current", label: "Left (L)" },
          { role: "active", label: "Right (R)" },
          { role: "target", label: "Triplet" },
        ]}
      />
    </div>
  );
}
