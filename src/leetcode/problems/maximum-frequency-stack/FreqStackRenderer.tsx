import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FreqStackData } from "./algorithm";

export function FreqStackRenderer({ step }: RendererProps<FreqStackData>) {
  const { groups, maxFreq, op, active, results, done } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {op && <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-sm">{op}{active !== null && !op.includes(String(active)) ? ` → ${active}` : ""}</div>}

      <div className="flex items-end gap-4">
        {groups.length === 0 && <span className="text-sm text-muted-foreground">empty</span>}
        {groups.map((stack, gi) => {
          const f = gi + 1;
          const isMax = f === maxFreq && !done;
          return (
            <div key={f} className="flex flex-col items-center gap-1">
              <div className="flex flex-col-reverse gap-1">
                {stack.map((v, si) => {
                  const top = si === stack.length - 1;
                  return (
                    <span key={si} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${isMax && top ? "bg-role-current text-white border-role-current" : "bg-role-active/20 border-role-active"}`}>{v}</span>
                  );
                })}
              </div>
              <span className={`text-xs ${isMax ? "font-bold text-role-current" : "text-muted-foreground"}`}>freq {f}</span>
            </div>
          );
        })}
      </div>

      <div className="text-sm">
        <span className="text-muted-foreground">pop results:</span> <b className="font-mono">{results.length ? results.join(", ") : "—"}</b>
      </div>

      <Legend items={[{ role: "current", label: "Next to pop (max freq top)" }, { role: "active", label: "Stacked values" }]} />
    </div>
  );
}
