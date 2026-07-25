import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SymmetricData } from "./algorithm";

export function SymmetricRenderer({ step }: RendererProps<SymmetricData>) {
  const { low, high, x, digits, leftSum, rightSum, symmetric, count, answer } = step.data;
  const h = digits.length / 2;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="rounded-md border px-3 py-1 text-sm">range [{low}, {high}]</div>

      {x !== null && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {digits.split("").map((d, i) => {
              const inLeft = digits.length % 2 === 0 && i < h;
              const inRight = digits.length % 2 === 0 && i >= h;
              return <div key={i} className={`flex size-11 items-center justify-center rounded-md border-2 text-lg font-bold ${inLeft ? "border-role-current bg-role-current/15" : inRight ? "border-role-compared bg-role-compared/15" : "border-border bg-muted/30"}`}>{d}</div>;
            })}
          </div>
          {leftSum !== null && (
            <div className={`rounded-md px-3 py-1 text-sm ${symmetric ? "bg-role-sorted text-white" : "border"}`}>
              left sum {leftSum} {symmetric ? "=" : "≠"} right sum {rightSum}
            </div>
          )}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Left half" }, { role: "compared", label: "Right half" }]} />
    </div>
  );
}
