import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RemoveOccData } from "./algorithm";

export function RemoveOccRenderer({ step }: RendererProps<RemoveOccData>) {
  const { s, part, matchAt, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => (matchAt !== null && i >= matchAt && i < matchAt + part.length ? "compared" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">part = <b className="font-mono">"{part}"</b></div>

      {chars.length === 0 ? (
        <div className="text-sm text-muted-foreground">(empty string)</div>
      ) : (
        <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = "{answer}"</div>}

      <Legend items={[{ role: "compared", label: "Occurrence being removed" }]} />
    </div>
  );
}
