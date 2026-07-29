import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KDiffData } from "./algorithm";

export function KDiffRenderer({ step }: RendererProps<KDiffData>) {
  const { k, count, v, partner, found, pairs, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b></div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value counts</span>
        <div className="flex flex-wrap justify-center gap-2">
          {count.map(([val, c]) => {
            const isV = val === v;
            const isPartner = partner !== null && val === partner;
            return (
              <div key={val} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${isV ? (found ? "border-role-sorted bg-role-sorted/15" : "border-role-current bg-role-current/15") : isPartner ? "border-role-compared bg-role-compared/15" : "border-border bg-muted/30"}`}>
                <span className="text-base font-bold tabular-nums">{val}</span>
                <span className="text-xs text-muted-foreground">×{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">pairs = <b className="tabular-nums">{answer ?? pairs}</b></div>

      <Legend items={[{ role: "current", label: "Value v" }, { role: "compared", label: "Partner v+k" }, { role: "sorted", label: "Pair formed" }]} />
    </div>
  );
}
