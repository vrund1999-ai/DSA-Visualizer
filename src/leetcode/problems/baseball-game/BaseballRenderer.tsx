import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BaseballData } from "./algorithm";

export function BaseballRenderer({ step }: RendererProps<BaseballData>) {
  const { operations, idx, stack, used, action, total, answer } = step.data;

  const opRole = (i: number) => {
    if (i === idx) return action === "cancel" ? "compared" : "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  const stackRole = (i: number) => (used.includes(i) ? (action === "cancel" ? "compared" : "compared") : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">operations</span>
        <ArrayCells values={operations} roleFor={opRole} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">score stack (bottom → top)</span>
        <div className="flex min-h-12 items-center gap-1.5 rounded-md border border-dashed px-3 py-2">
          {stack.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : stack.map((v, i) => (
            <div key={i} className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${stackRole(i) === "compared" ? "border-role-compared bg-role-compared/20" : i === stack.length - 1 ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{v}</div>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">total = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "current", label: "Current op" }, { role: "compared", label: "Operands / cancelled" }]} />
    </div>
  );
}
