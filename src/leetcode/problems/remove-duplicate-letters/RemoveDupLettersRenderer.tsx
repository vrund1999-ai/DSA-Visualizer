import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RemoveDupLettersData } from "./algorithm";

export function RemoveDupLettersRenderer({ step }: RendererProps<RemoveDupLettersData>) {
  const { s, pos, stack, popped, skipped, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return skipped ? "target" : "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">input</span>
        <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result stack{popped ? ` · popped '${popped}'` : ""}</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((c, i) => (
            <span key={i} className={`flex size-10 items-center justify-center rounded-md border-2 font-mono text-sm ${i === stack.length - 1 ? "border-role-active bg-role-active/15" : "border-border bg-card"}`}>{c}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">{answer}</div>}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "target", label: "Skipped (used)" }, { role: "active", label: "Stack top" }]} />
    </div>
  );
}
