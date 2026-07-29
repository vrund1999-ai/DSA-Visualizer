import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LockData } from "./algorithm";

export function LockRenderer({ step }: RendererProps<LockData>) {
  const { deadends, target, frontier, frontierSize, reached, moves, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-target px-3 py-1 font-mono">target {target}</span>
        <span className="rounded-md border px-3 py-1">moves = <b className="tabular-nums">{answer === -1 ? "—" : answer ?? moves}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">BFS frontier ({frontierSize} state{frontierSize === 1 ? "" : "s"})</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {frontier.map((st) => (
            <span key={st} className={`rounded-md border-2 px-2 py-0.5 font-mono text-sm ${st === target ? "border-role-sorted bg-role-sorted text-white" : "border-role-current bg-role-current/15"}`}>{st}</span>
          ))}
          {frontierSize > frontier.length && <span className="text-sm text-muted-foreground">+{frontierSize - frontier.length} more</span>}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1 text-xs">
        <span className="text-muted-foreground">deadends:</span>
        {deadends.map((d) => <span key={d} className="rounded border border-role-compared/40 px-1.5 py-0.5 font-mono text-role-compared">{d}</span>)}
      </div>

      {answer === -1 && <div className="rounded-md bg-role-compared px-3 py-1 text-sm font-semibold text-white">unreachable</div>}
      {reached && <div className="rounded-md bg-role-sorted px-3 py-1 text-sm font-semibold text-white">target reached!</div>}

      <Legend items={[{ role: "current", label: "Frontier" }, { role: "sorted", label: "Target" }, { role: "compared", label: "Deadend" }]} />
    </div>
  );
}
