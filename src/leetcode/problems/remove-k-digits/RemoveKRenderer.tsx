import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RemoveKData } from "./algorithm";

export function RemoveKRenderer({ step }: RendererProps<RemoveKData>) {
  const { num, pos, stack, k, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return "current";
    if (i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">digits · removals left: {k}</span>
        <ArrayCells values={num} roleFor={roleFor} topLabel={(i) => (i === pos ? "d" : "")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (result so far)</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((d, i) => (
            <span key={i} className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{d}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border-2 border-role-visited bg-role-visited/10 px-4 py-2 font-mono text-lg font-semibold">{answer}</div>}

      <Legend items={[{ role: "current", label: "Current digit" }, { role: "active", label: "Stack top" }, { role: "visited", label: "Consumed" }]} />
    </div>
  );
}
