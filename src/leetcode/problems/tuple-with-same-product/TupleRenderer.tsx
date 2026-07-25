import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TupleData } from "./algorithm";

export function TupleRenderer({ step }: RendererProps<TupleData>) {
  const { nums, i, j, product, counts, matched, tuples, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (idx === j) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-3 text-sm">
        {product !== null && (
          <span className="rounded-md border px-3 py-1">
            product = <b className="tabular-nums">{product}</b>{matched > 0 && <> · <span className="text-role-current">{matched} prior → +{matched * 8}</span></>}
          </span>
        )}
        <span className="rounded-md border px-3 py-1">tuples = <b className="tabular-nums">{answer ?? tuples}</b></span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">pairs seen per product</span>
        <div className="flex max-w-xl flex-wrap justify-center gap-2">
          {counts.length === 0 ? (
            <span className="text-sm text-muted-foreground">none yet</span>
          ) : (
            counts
              .slice()
              .sort((a, b) => a[0] - b[0])
              .map(([p, c]) => (
                <span key={p} className={`rounded-md border px-2.5 py-1 text-sm tabular-nums ${p === product ? "border-role-current bg-role-current/15" : ""}`}>
                  {p}: <b>{c}</b>
                </span>
              ))
          )}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "nums[i]" }, { role: "compared", label: "nums[j]" }]} />
    </div>
  );
}
