import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ValidParenData } from "./algorithm";

export function ValidParenRenderer({ step }: RendererProps<ValidParenData>) {
  const { s, locked, phase, i, bal, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-md border px-3 py-1 text-sm">
        {phase === "forward" ? "→ forward pass" : phase === "backward" ? "← backward pass" : "done"}
      </div>

      <div className="flex gap-1">
        {s.split("").map((ch, idx) => {
          const lockedHere = locked[idx] === "1";
          const cls = idx === i ? "bg-role-current text-white border-role-current" : lockedHere ? "bg-role-active/30 border-role-active" : "bg-muted/40 border-border";
          return (
            <div key={idx} className="flex flex-col items-center gap-0.5">
              <span className={`flex h-10 w-9 items-center justify-center rounded border font-mono text-xl ${cls}`}>{ch}</span>
              <span className="text-[10px]">{lockedHere ? "🔒" : "🔓"}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">balance = {bal}</span>
        <span className="rounded-md border px-3 py-1">
          valid = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
        </span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "active", label: "Locked char" }]} />
    </div>
  );
}
