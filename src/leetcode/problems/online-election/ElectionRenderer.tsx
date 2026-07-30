import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ElectionData } from "./algorithm";

export function ElectionRenderer({ step }: RendererProps<ElectionData>) {
  const { persons, times, leaders, buildIndex, queryTime, querySlot, result, phase } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex justify-center overflow-x-auto">
        <table className="border-separate border-spacing-1 text-center text-xs">
          <tbody>
            <tr>
              <td className="pr-2 text-right text-muted-foreground">time</td>
              {times.map((t, i) => (
                <td key={i} className={`size-8 rounded border tabular-nums ${phase === "query" && i === querySlot ? "border-role-current bg-role-current text-white" : "border-border"}`}>{t}</td>
              ))}
            </tr>
            <tr>
              <td className="pr-2 text-right text-muted-foreground">vote</td>
              {persons.map((p, i) => (
                <td key={i} className={`size-8 rounded border tabular-nums ${i === buildIndex ? "border-role-current bg-role-current/20" : "border-border text-muted-foreground"}`}>{p}</td>
              ))}
            </tr>
            <tr>
              <td className="pr-2 text-right text-muted-foreground">leader</td>
              {persons.map((_, i) => (
                <td key={i} className={`size-8 rounded border tabular-nums ${i < leaders.length ? "border-role-active bg-role-active/20" : "border-dashed border-border text-muted-foreground"}`}>
                  {i < leaders.length ? leaders[i] : "·"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {phase === "query" && (
        <div className="rounded-md border px-3 py-1 text-sm">
          q({queryTime}) = <b className="tabular-nums">{result}</b>
        </div>
      )}

      <Legend items={[{ role: "current", label: "current vote / query slot" }, { role: "active", label: "leader timeline" }]} />
    </div>
  );
}
