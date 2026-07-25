import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DefangData } from "./algorithm";

export function DefangRenderer({ step }: RendererProps<DefangData>) {
  const { address, idx, out, isDot, answer } = step.data;
  const chars = address.split("");

  const roleFor = (i: number) => {
    if (i === idx) return isDot ? "compared" : "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">output</span>
        <div className="rounded-md border px-4 py-2 font-mono text-lg">{(answer ?? out) || <span className="text-muted-foreground">…</span>}</div>
      </div>

      <Legend items={[{ role: "current", label: "Copied char" }, { role: "compared", label: "Dot → [.]" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
