import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ParenScoreData } from "./algorithm";

export function ParenScoreRenderer({ step }: RendererProps<ParenScoreData>) {
  const { s, i, stack, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex gap-1">
        {s.split("").map((ch, idx) => (
          <span key={idx} className={`flex h-10 w-8 items-center justify-center rounded border font-mono text-xl ${idx === i ? "bg-role-current text-white border-role-current" : idx < (i ?? -1) ? "bg-role-visited/25 border-role-visited" : "bg-muted/40 border-border text-muted-foreground"}`}>{ch}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">stack (score per depth)</span>
        <div className="flex items-end gap-1">
          {stack.map((v, d) => (
            <div key={d} className={`flex h-10 min-w-10 items-center justify-center rounded border-2 px-2 text-lg font-bold tabular-nums ${d === stack.length - 1 ? "border-role-current bg-role-current/10" : "border-role-active bg-role-active/10"}`}>{v}</div>
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground">depth 0 → {stack.length - 1}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">score = <b className="tabular-nums">{answer ?? stack[0]}</b></div>

      <Legend items={[{ role: "current", label: "Current char / top of stack" }, { role: "active", label: "Deeper levels" }]} />
    </div>
  );
}
