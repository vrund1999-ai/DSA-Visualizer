import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { ConsecutiveData } from "./algorithm";

export function ConsecutiveRenderer({ step }: RendererProps<ConsecutiveData>) {
  const { values, best, bestRun } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Longest run</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">
          {best}
        </span>
        {bestRun.length > 0 && (
          <span className="ml-2 font-mono text-muted-foreground">[{bestRun.join(", ")}]</span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {values.map((v) => {
          const role = roleFor(v);
          return (
            <div
              key={v}
              className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                ROLE_CLASS[role] ?? ROLE_CLASS.default
              }`}
            >
              {v}
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Values shown as the deduplicated hash set (sorted for display).
      </p>

      <Legend
        items={[
          { role: "pivot", label: "Run start" },
          { role: "active", label: "Counting run" },
          { role: "visited", label: "Not a start" },
          { role: "target", label: "Best run" },
        ]}
      />
    </div>
  );
}
