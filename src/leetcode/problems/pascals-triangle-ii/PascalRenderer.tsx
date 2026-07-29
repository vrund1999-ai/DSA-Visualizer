import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PascalData } from "./algorithm";

export function PascalRenderer({ step }: RendererProps<PascalData>) {
  const { rowIndex, rows, building, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="rounded-md border px-3 py-1 text-sm">target row = <b className="tabular-nums">{rowIndex}</b></div>

      <div className="flex flex-col items-center gap-1">
        {rows.map((row, r) => (
          <div key={r} className={`flex gap-1 ${r === building ? "rounded bg-role-current/10 px-1 py-0.5 ring-1 ring-role-current" : ""}`}>
            {row.map((v, i) => {
              const isAnswer = answer !== null && r === rows.length - 1;
              return <div key={i} className={`flex h-7 min-w-7 items-center justify-center rounded border px-1 text-xs tabular-nums ${isAnswer ? "border-role-sorted bg-role-sorted/15" : r === building ? "border-role-current" : "border-border bg-muted/30"}`}>{v}</div>;
            })}
          </div>
        ))}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">row {rowIndex} = [{answer.join(", ")}]</div>}

      <Legend items={[{ role: "current", label: "Building row" }, { role: "sorted", label: "Answer row" }]} />
    </div>
  );
}
