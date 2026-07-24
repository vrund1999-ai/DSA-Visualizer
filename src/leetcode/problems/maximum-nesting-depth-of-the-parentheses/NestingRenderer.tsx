import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NestingData } from "./algorithm";

export function NestingRenderer({ step }: RendererProps<NestingData>) {
  const { chars, pos, depth, max, newMax } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return newMax ? "swapped" : "current";
    if (i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} topLabel={(i) => (i === pos ? "cur" : "")} showIndex={false} />

      <div className="flex items-center gap-6 text-sm">
        <span className="rounded-md border px-4 py-2">depth = <b className="tabular-nums">{depth}</b></span>
        <span className="rounded-md border-2 border-role-swapped bg-role-swapped/15 px-4 py-2">max = <b className="tabular-nums">{max}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current char" }, { role: "swapped", label: "New max depth" }, { role: "visited", label: "Scanned" }]} />
    </div>
  );
}
