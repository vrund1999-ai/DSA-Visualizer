import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ParenData } from "./algorithm";

export function StackRenderer({ step }: RendererProps<ParenData>) {
  const { chars, stack, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells
        values={chars}
        roleFor={(idx) => roleFor(idx)}
        showIndex={false}
      />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Stack (top on the right)
        </span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {stack.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            stack.map((f) => (
              <span
                key={f.index}
                className="flex size-8 items-center justify-center rounded-md border border-role-active bg-role-active/15 font-mono text-sm"
              >
                {f.char}
              </span>
            ))
          )}
        </div>
      </div>

      {result !== null && (
        <p
          className={`text-center text-sm font-semibold ${
            result ? "text-role-sorted" : "text-role-swapped"
          }`}
        >
          {result ? "Valid ✓" : "Invalid ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Pushed" },
          { role: "sorted", label: "Matched pair" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
