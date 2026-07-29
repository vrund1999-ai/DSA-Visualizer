import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TribData } from "./algorithm";

export function TribRenderer({ step }: RendererProps<TribData>) {
  const { n, seq, i, answer } = step.data;

  const roleFor = (k: number) => {
    if (k === i) return "current";
    if (i !== null && (k === i - 1 || k === i - 2 || k === i - 3)) return "compared";
    return "default";
  };

  const topLabel = (k: number) => `T${k}`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">n = <b className="tabular-nums">{n}</b></div>

      <ArrayCells values={seq} roleFor={roleFor} topLabel={topLabel} showIndex={false} cellWidth="w-12" />

      {answer !== null && <div className="rounded-md border px-4 py-1.5 text-lg font-bold tabular-nums">T{n} = {answer}</div>}

      <Legend items={[{ role: "current", label: "New term" }, { role: "compared", label: "Previous three (summands)" }]} />
    </div>
  );
}
