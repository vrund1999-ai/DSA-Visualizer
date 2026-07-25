import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { Pattern132Data } from "./algorithm";

export function Pattern132Renderer({ step }: RendererProps<Pattern132Data>) {
  const { nums, i, stack, k, found, answer } = step.data;

  const roleFor = (idx: number) => {
    if (found && idx === i) return "target";
    if (idx === i) return "current";
    if (i !== null && idx > i) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">candidate '3' stack</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((v, idx) => (
            <span key={idx} className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${idx === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      <div className="text-sm">best '2' (k) = <b className="tabular-nums text-foreground">{Number.isFinite(k) ? k : "−∞"}</b></div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-target" : "text-muted-foreground"}`}>
          {answer ? "132 pattern found" : "no 132 pattern"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current i" }, { role: "active", label: "Stack top" }, { role: "target", label: "The '1'" }]} />
    </div>
  );
}
