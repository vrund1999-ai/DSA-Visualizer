import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { EliminationData } from "./algorithm";

export function EliminationRenderer({ step }: RendererProps<EliminationData>) {
  const { n, head, step: gap, remaining, leftToRight, answer } = step.data;

  // Reconstruct the current survivors (head, head+gap, …) for small n so the pass is visible.
  const survivors: number[] = [];
  if (n <= 64) for (let v = head; v <= n && survivors.length < remaining; v += gap) survivors.push(v);

  const roleFor = (i: number) => (survivors[i] === head ? "current" : "active");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">n = <b className="tabular-nums">{n}</b></span>
        <span className="rounded-md border px-3 py-1">head = <b className="tabular-nums">{head}</b></span>
        <span className="rounded-md border px-3 py-1">step = <b className="tabular-nums">{gap}</b></span>
        <span className="rounded-md border px-3 py-1">remaining = <b className="tabular-nums">{remaining}</b></span>
      </div>

      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        next pass: {leftToRight ? "left → right" : "right → left"}
      </div>

      {survivors.length > 0 ? (
        <ArrayCells values={survivors} roleFor={roleFor} showIndex={false} cellWidth="w-11" />
      ) : (
        <div className="text-sm text-muted-foreground">(n too large to draw survivors)</div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">last remaining = {answer}</div>}

      <Legend items={[{ role: "current", label: "Head (first survivor)" }, { role: "active", label: "Other survivors" }]} />
    </div>
  );
}
