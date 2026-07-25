import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SimplifyPathData } from "./algorithm";

export function SimplifyPathRenderer({ step }: RendererProps<SimplifyPathData>) {
  const { parts, pos, stack, action, answer } = step.data;

  const actionText = action === "skip" ? "ignored" : action === "up" ? "popped (..)" : action === "enter" ? "entered" : "";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1">
        {parts.map((p, i) => (
          <span key={i} className={`rounded border px-2 py-1 font-mono text-xs ${i === pos ? "border-role-current bg-role-current/20" : pos !== null && i < pos ? "bg-muted/20 text-muted-foreground" : "bg-muted/30"}`}>{p === "" ? "·" : p}</span>
        ))}
      </div>

      {action && <div className="text-xs text-muted-foreground">{actionText}</div>}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">directory stack</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">/ (root)</span> : stack.map((d, i) => (
            <span key={i} className={`rounded-md border-2 px-3 py-1.5 font-mono text-sm ${i === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{d}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{answer}</div>}

      <Legend items={[{ role: "current", label: "Current part" }, { role: "active", label: "Stack top" }]} />
    </div>
  );
}
