import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BalancedData } from "./algorithm";

export function BalancedRenderer({ step }: RendererProps<BalancedData>) {
  const { n, candidate, counts, badDigit, balanced, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="rounded-md border px-3 py-1 text-sm">n = <b className="tabular-nums">{n}</b></div>

      {candidate !== null && (
        <div className="flex flex-col items-center gap-3">
          <div className={`rounded-md px-5 py-2 text-3xl font-bold tabular-nums ${balanced ? "bg-role-sorted text-white" : "bg-muted"}`}>{candidate}</div>
          <div className="flex gap-2">
            {counts.map(([d, c]) => {
              const ok = Number(d) === c;
              return (
                <div key={d} className="flex flex-col items-center gap-1">
                  <div className={`flex size-10 items-center justify-center rounded-md border-2 text-lg font-bold ${d === badDigit ? "border-role-compared bg-role-compared/20" : ok ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>{d}</div>
                  <span className="text-xs tabular-nums text-muted-foreground">×{c} {ok ? "✓" : "✗"}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">next balanced = {answer}</div>}

      <Legend items={[{ role: "sorted", label: "d occurs d times" }, { role: "compared", label: "Count mismatch" }]} />
    </div>
  );
}
