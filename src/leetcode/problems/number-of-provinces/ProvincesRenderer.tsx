import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ProvincesData } from "./algorithm";

const PALETTE = [
  "border-role-current bg-role-current/15",
  "border-role-sorted bg-role-sorted/15",
  "border-role-active bg-role-active/15",
  "border-role-pivot bg-role-pivot/15",
  "border-role-compared bg-role-compared/15",
  "border-role-path bg-role-path/15",
];

function root(parent: number[], x: number): number {
  while (parent[x] !== x) x = parent[x];
  return x;
}

export function ProvincesRenderer({ step }: RendererProps<ProvincesData>) {
  const { n, parent, edge, provinces } = step.data;
  const roots = [...new Set(Array.from({ length: n }, (_, i) => root(parent, i)))];
  const colorFor = (i: number) => PALETTE[roots.indexOf(root(parent, i)) % PALETTE.length];

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Provinces (distinct groups)</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{provinces ?? roots.length}</span>
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-3">
        {Array.from({ length: n }, (_, i) => (
          <div key={i} className={`flex size-12 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors ${edge && (edge[0] === i || edge[1] === i) ? "ring-2 ring-primary/60 " : ""}${colorFor(i)}`}>{i}</div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Same colour = same province. parent[]: [{parent.join(", ")}]</p>

      <Legend items={[{ role: "target", label: "Province count" }]} />
    </div>
  );
}
