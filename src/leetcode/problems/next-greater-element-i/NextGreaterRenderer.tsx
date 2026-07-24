import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { NextGreaterData } from "./algorithm";

export function NextGreaterRenderer({ step }: RendererProps<NextGreaterData>) {
  const { nums1, nums2, i, stack, map, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums2 (scanned)</span>
        <ArrayCells values={nums2} roleFor={(idx) => (idx === i ? "current" : roleForRef(`n2-${idx}`))} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Stack (decreasing)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, k) => (
            <span key={k} className="rounded border border-role-active bg-role-active/15 px-2 py-0.5">{v}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Next-greater map</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {map.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : map.map((e) => (
            <span key={e.value} className="rounded-md border border-role-sorted bg-role-sorted/10 px-2 py-0.5 font-mono text-xs tabular-nums">{e.value}→{e.next}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums1 answers</span>
        <ArrayCells values={result ?? nums1.map(() => "?")} roleFor={() => (result ? "target" : "default")} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Scanning" },
          { role: "active", label: "On stack" },
          { role: "sorted", label: "Resolved" },
        ]}
      />
    </div>
  );
}
