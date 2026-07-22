import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { LastWordData } from "./algorithm";

export function LastWordRenderer({ step }: RendererProps<LastWordData>) {
  const { chars, len } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Last word length</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">{len}</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {chars.map((c, idx) => {
          const role = roleFor(idx);
          return (
            <div key={idx} className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm transition-colors ${ROLE_CLASS[role] ?? ROLE_CLASS.default}`}>
              {c === " " ? "␣" : c}
            </div>
          );
        })}
      </div>

      <Legend
        items={[
          { role: "current", label: "Scanning" },
          { role: "visited", label: "Trailing space" },
          { role: "sorted", label: "Last word" },
        ]}
      />
    </div>
  );
}
