import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TwoCityData } from "./algorithm";

export function TwoCityRenderer({ step }: RendererProps<TwoCityData>) {
  const { people, i, n, total, phase } = step.data;

  const cell = (p: { a: number; b: number }, idx: number) => {
    const assigned = phase !== "sort" && idx <= (i ?? -1);
    const toA = idx < n;
    return (
      <div key={idx} className={`flex flex-col items-center gap-0.5 rounded-md border-2 px-2 py-1 transition-colors ${idx === i ? "border-role-current bg-role-current/15" : assigned ? (toA ? "border-role-sorted bg-role-sorted/10" : "border-role-active bg-role-active/10") : "border-border bg-muted/30"}`}>
        <span className="font-mono text-xs tabular-nums">A{p.a}/B{p.b}</span>
        <span className="text-[10px] text-muted-foreground">Δ{p.a - p.b}</span>
        {assigned && <span className="text-[10px] font-semibold">{toA ? "→A" : "→B"}</span>}
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Total cost</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{total}</span>
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-1.5">
        {people.map(cell)}
      </div>
      <p className="text-center text-xs text-muted-foreground">Sorted by Δ = costA − costB. First {n} go to City A, rest to City B.</p>

      <Legend
        items={[
          { role: "current", label: "Assigning" },
          { role: "sorted", label: "City A" },
          { role: "active", label: "City B" },
        ]}
      />
    </div>
  );
}
