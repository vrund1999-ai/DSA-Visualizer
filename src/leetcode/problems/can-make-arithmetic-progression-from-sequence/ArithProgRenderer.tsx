import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ArithProgData } from "./algorithm";

export function ArithProgRenderer({ step }: RendererProps<ArithProgData>) {
  const { arr, d, i, ok, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return ok === false ? "compared" : "current";
    if (idx === (i ?? -2) - 1) return "current";
    if (i !== null && idx < i - 1) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} showIndex cellWidth="w-12" />

      {d !== null && <div className="rounded-md border px-3 py-1 text-sm">common difference d = <b className="tabular-nums">{d}</b></div>}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Can form an arithmetic progression" : "Cannot form a progression"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Pair being checked" }, { role: "compared", label: "Difference mismatch" }, { role: "sorted", label: "Verified" }]} />
    </div>
  );
}
