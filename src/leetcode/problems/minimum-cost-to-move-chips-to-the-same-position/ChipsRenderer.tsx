import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ChipsData } from "./algorithm";

export function ChipsRenderer({ step }: RendererProps<ChipsData>) {
  const { position, idx, even, odd, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-2">
        {position.map((p, i) => {
          const isEven = p % 2 === 0;
          return (
            <div key={i} className={`flex size-11 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums ${i === idx ? "ring-2 ring-role-current" : ""} ${isEven ? "border-role-sorted bg-role-sorted/15" : "border-role-compared bg-role-compared/15"}`}>{p}</div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border border-role-sorted px-3 py-1">even = <b className="tabular-nums">{even}</b></span>
        <span className="rounded-md border border-role-compared px-3 py-1">odd = <b className="tabular-nums">{odd}</b></span>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min cost = {answer}</div>}

      <Legend items={[{ role: "sorted", label: "Even position" }, { role: "compared", label: "Odd position" }]} />
    </div>
  );
}
