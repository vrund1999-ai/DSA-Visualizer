import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RankData } from "./algorithm";

export function RankRenderer({ step }: RendererProps<RankData>) {
  const { teams, count, order, tallied, answer } = step.data;
  const n = teams.length;
  const rows = answer ? order : teams.map((_, i) => i);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <table className="border-separate border-spacing-1 text-sm">
        <thead>
          <tr>
            <th className="px-2 text-xs text-muted-foreground">team</th>
            {Array.from({ length: n }).map((_, i) => (
              <th key={i} className="px-2 text-xs font-normal text-muted-foreground">#{i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((ti) => (
            <tr key={ti}>
              <td className={`rounded px-3 py-1 text-center font-bold ${answer ? "bg-role-sorted text-white" : "bg-muted/40"}`}>{teams[ti]}</td>
              {count[ti].map((v, pos) => {
                const hot = tallied && tallied[0] === ti && tallied[1] === pos;
                return (
                  <td key={pos} className={`rounded border px-3 py-1 text-center tabular-nums ${hot ? "bg-role-current text-white border-role-current" : "border-border"}`}>
                    {v}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="rounded-md border px-3 py-1 text-sm">ranking = <b className="font-mono tracking-widest">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Tallying" }, { role: "sorted", label: "Final rank" }]} />
    </div>
  );
}
