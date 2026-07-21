import type { RendererProps } from "@/core/types";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { TrapData } from "./algorithm";

export function TrapRenderer({ step }: RendererProps<TrapData>) {
  const { heights, l, r, leftMax, rightMax, water, trapped } = step.data;
  const roleFor = roleLookup(step.highlights);
  const max = Math.max(...heights, 1);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">leftMax</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{leftMax}</span>
        <span className="text-muted-foreground">rightMax</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{rightMax}</span>
        <span className="ml-2 text-muted-foreground">Water</span>
        <span className="rounded-md border border-role-current bg-role-current/10 px-2.5 py-1 font-semibold tabular-nums text-role-current">
          {water}
        </span>
      </div>

      <div className="flex h-56 items-end justify-center gap-1">
        {heights.map((h, i) => {
          const role = roleFor(i);
          const isPtr = role === "current" || role === "active";
          return (
            <div key={i} className="flex h-full flex-col items-center justify-end">
              <span className="h-4 text-[10px] font-semibold uppercase text-role-current">
                {i === l ? "L" : i === r ? "R" : ""}
              </span>
              <div className="flex h-full w-6 flex-col justify-end">
                {trapped[i] > 0 && (
                  <div
                    className="w-full rounded-t bg-role-current/40"
                    style={{ height: `${(trapped[i] / max) * 100}%` }}
                  />
                )}
                <div
                  className={`w-full ${isPtr ? "bg-role-current" : "bg-muted-foreground/40"}`}
                  style={{ height: `${(h / max) * 100}%` }}
                />
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">{h}</span>
            </div>
          );
        })}
      </div>

      <Legend
        items={[
          { role: "current", label: "Pointer / wall" },
          { role: "active", label: "Right pointer" },
        ]}
      />
      <p className="text-center text-xs text-muted-foreground">
        The lighter band above each column is the water it traps.
      </p>
    </div>
  );
}
