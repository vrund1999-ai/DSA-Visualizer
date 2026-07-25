import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KDistinctData } from "./algorithm";

export function KDistinctRenderer({ step }: RendererProps<KDistinctData>) {
  const { nums, k, left, right, distinct, atMostK, answer } = step.data;

  const roleFor = (i: number) => {
    if (right < 0 || i < left || i > right) return "default";
    return distinct <= k ? "active" : "target";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === left && right >= 0) parts.push("L");
    if (i === right) parts.push("R");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">k = <b className="tabular-nums text-foreground">{k}</b> distinct integers</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">distinct = <b className="tabular-nums">{distinct}</b></span>
        <span className="rounded-md border px-3 py-1">atMost({k}) = <b className="tabular-nums">{atMostK}</b></span>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-active">exactly {k} distinct = {answer}</div>}

      <Legend items={[{ role: "active", label: "Window (≤ k)" }, { role: "target", label: "Shrinking (> k)" }]} />
    </div>
  );
}
