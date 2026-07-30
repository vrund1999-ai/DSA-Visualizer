import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FrogData } from "./algorithm";

export function FrogRenderer({ step }: RendererProps<FrogData>) {
  const { stones, jumps, cur, reached, answer } = step.data;
  const last = stones.length - 1;

  const cls = (i: number) => {
    if (i === cur) return "bg-role-current text-white border-role-current";
    if (i === reached) return "bg-role-sorted text-white border-role-sorted";
    if (jumps[stones[i]]?.length) return "bg-role-active/30 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap items-end justify-center gap-2">
        {stones.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="flex min-h-[1.2rem] flex-col items-center text-[9px] text-muted-foreground">
              {jumps[s]?.length ? jumps[s].map((k) => <span key={k}>+{k}</span>) : ""}
            </div>
            <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums ${cls(i)}`}>{s}</div>
            {i === last && <span className="text-[9px] uppercase text-role-target">goal</span>}
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        can cross = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Expanding" }, { role: "sorted", label: "Newly reached" }, { role: "active", label: "Reachable" }]} />
    </div>
  );
}
