import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ReverseParenData } from "./algorithm";

export function ReverseParenRenderer({ step }: RendererProps<ReverseParenData>) {
  const { s, idx, stack, action, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i === idx) return action === "close" ? "compared" : action === "open" ? "pivot" : "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">segment stack (top = deepest)</span>
        <div className="flex flex-col-reverse items-center gap-1.5">
          {stack.map((seg, i) => (
            <div
              key={i}
              className={`min-w-24 rounded-md border-2 px-3 py-1.5 text-center font-mono text-sm ${i === stack.length - 1 ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}
            >
              {seg === "" ? <span className="text-muted-foreground">ε</span> : seg}
            </div>
          ))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = "{answer}"</div>}

      <Legend items={[{ role: "pivot", label: "'(' open" }, { role: "compared", label: "')' reverse+merge" }, { role: "current", label: "Letter" }]} />
    </div>
  );
}
