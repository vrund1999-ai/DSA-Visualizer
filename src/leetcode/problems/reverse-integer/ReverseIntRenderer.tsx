import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ReverseIntData } from "./algorithm";

export function ReverseIntRenderer({ step }: RendererProps<ReverseIntData>) {
  const { inputDigits, outputDigits, sign, res, overflow, done } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Result</span>
        <span className={`rounded-md border px-2.5 py-1 font-semibold tabular-nums ${overflow ? "border-role-swapped bg-role-swapped/10 text-role-swapped" : "border-primary bg-primary/10 text-primary"}`}>
          {overflow ? "0 (overflow)" : done ? sign * res : res}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Input {sign < 0 ? "(negative)" : ""}
        </span>
        <ArrayCells values={inputDigits} roleFor={(i) => roleForRef(`in${i}`)} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Reversed</span>
        <ArrayCells values={outputDigits} roleFor={(i) => roleForRef(`out${i}`)} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Digit popped" },
          { role: "sorted", label: "Pushed to result" },
        ]}
      />
    </div>
  );
}
