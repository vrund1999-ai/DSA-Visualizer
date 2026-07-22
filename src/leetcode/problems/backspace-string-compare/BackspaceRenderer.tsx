import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { BackspaceData } from "./algorithm";

export function BackspaceRenderer({ step }: RendererProps<BackspaceData>) {
  const { chars, which, out, builtS, builtT, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Building string {which}</span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result so far</span>
        <div className="flex min-h-[2.5rem] items-center justify-center rounded-lg border bg-card/40 px-4 py-2 font-mono text-lg">
          {out.length === 0 ? <span className="text-xs text-muted-foreground">(empty)</span> : out.join("")}
        </div>
      </div>

      {result !== null && (
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-muted-foreground">
            s → <span className="font-mono text-foreground">"{builtS}"</span> · t → <span className="font-mono text-foreground">"{builtT}"</span>
          </p>
          <p className={`text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Equal ✓" : "Not equal ✗"}</p>
        </div>
      )}

      <Legend
        items={[
          { role: "current", label: "Typed" },
          { role: "swapped", label: "Backspace" },
        ]}
      />
    </div>
  );
}
