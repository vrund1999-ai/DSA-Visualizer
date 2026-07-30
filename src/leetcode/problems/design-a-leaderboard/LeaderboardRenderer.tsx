import type { RendererProps } from "@/core/types";
import type { LeaderboardData } from "./algorithm";

export function LeaderboardRenderer({ step }: RendererProps<LeaderboardData>) {
  const { ops, opIndex, rows, counted, result } = step.data;
  const countedSet = new Set(counted);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded-md border px-2 py-1 text-xs font-medium tabular-nums ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {op}
          </span>
        ))}
      </div>

      <table className="border-collapse text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wide text-muted-foreground">
            <th className="px-4 py-1 text-left">Player</th>
            <th className="px-4 py-1 text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={2} className="px-4 py-2 text-center text-muted-foreground">
                (no players yet)
              </td>
            </tr>
          )}
          {rows.map((r) => (
            <tr
              key={r.player}
              className={`border-t border-border ${countedSet.has(r.player) ? "bg-role-active/20" : ""}`}
            >
              <td className="px-4 py-1 text-left font-medium">Player {r.player}</td>
              <td className="px-4 py-1 text-right tabular-nums">{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {result !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          top sum = <b className="tabular-nums">{result}</b>
        </div>
      )}
    </div>
  );
}
