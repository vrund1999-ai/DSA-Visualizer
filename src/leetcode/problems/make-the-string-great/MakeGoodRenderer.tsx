import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MakeGoodData } from "./algorithm";

export function MakeGoodRenderer({ step }: RendererProps<MakeGoodData>) {
  const { s, idx, stack, action, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return action === "pop" ? "compared" : "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <ArrayCells values={s.split("")} roleFor={roleFor} showIndex={false} cellWidth="w-9" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack</span>
        <div className="flex min-h-12 items-center gap-1.5 rounded-md border border-dashed px-3 py-2">
          {stack.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : stack.map((c, i) => (
            <div key={i} className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-bold ${i === stack.length - 1 ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{c}</div>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = "{answer || "(empty)"}"</div>}

      <Legend items={[{ role: "current", label: "Pushed" }, { role: "compared", label: "Cancelled pair" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
