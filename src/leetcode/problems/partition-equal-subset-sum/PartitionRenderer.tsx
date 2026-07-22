import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { PartitionData } from "./algorithm";

export function PartitionRenderer({ step }: RendererProps<PartitionData>) {
  const { nums, dp, target, currentNum, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Half-sum target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{target}</span>
        {currentNum !== null && (
          <>
            <span className="ml-2 text-muted-foreground">Offering</span>
            <span className="rounded-md border border-role-current bg-role-current/15 px-2 py-0.5 font-semibold tabular-nums">{currentNum}</span>
          </>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {nums.map((v, i) => (
          <span key={i} className={`rounded-md border px-2 py-1 font-mono text-sm tabular-nums ${v === currentNum ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{v}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (reachable sums 0…{target})</span>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {dp.map((v, s) => {
            const role = roleFor(s);
            return (
              <div key={s} className={`flex min-w-[1.75rem] flex-col items-center rounded border px-1 py-0.5 text-[10px] transition-colors ${role !== "default" ? ROLE_CLASS[role] : v ? "border-role-sorted/50 bg-role-sorted/10 text-role-sorted" : "border-border bg-muted/20 text-muted-foreground"}`}>
                <span className="tabular-nums">{s}</span>
                <span className="font-semibold">{v ? "T" : "·"}</span>
              </div>
            );
          })}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Can partition into equal halves ✓" : "Cannot partition ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "compared", label: "dp[s − x]" },
          { role: "target", label: "Newly reachable" },
          { role: "sorted", label: "Reachable" },
        ]}
      />
    </div>
  );
}
