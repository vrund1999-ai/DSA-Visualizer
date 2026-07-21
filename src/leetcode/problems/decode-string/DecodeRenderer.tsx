import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { DecodeData } from "./algorithm";

export function DecodeRenderer({ step }: RendererProps<DecodeData>) {
  const { chars, counts, strings, cur, num } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} showIndex={false} />

      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-muted-foreground">
          num = <span className="font-mono text-foreground">{num}</span>
        </span>
        <span className="text-muted-foreground">
          cur = <span className="font-mono text-foreground">"{cur}"</span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Count stack</span>
          <div className="flex min-h-[2.5rem] w-full flex-col-reverse items-center gap-1 rounded-lg border bg-card/40 p-2">
            {counts.length === 0 ? (
              <span className="text-xs text-muted-foreground">empty</span>
            ) : (
              counts.map((c, k) => (
                <span key={k} className="rounded border border-role-pivot bg-role-pivot/15 px-2 py-0.5 font-mono text-xs">
                  {c}
                </span>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">String stack</span>
          <div className="flex min-h-[2.5rem] w-full flex-col-reverse items-center gap-1 rounded-lg border bg-card/40 p-2">
            {strings.length === 0 ? (
              <span className="text-xs text-muted-foreground">empty</span>
            ) : (
              strings.map((sv, k) => (
                <span key={k} className="rounded border border-role-active bg-role-active/15 px-2 py-0.5 font-mono text-xs">
                  "{sv}"
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Scanning" },
          { role: "pivot", label: "Counts" },
          { role: "active", label: "Strings" },
        ]}
      />
    </div>
  );
}
