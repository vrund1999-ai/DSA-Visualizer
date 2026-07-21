import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { WordBreakData } from "./algorithm";

export function WordBreakRenderer({ step }: RendererProps<WordBreakData>) {
  const { chars, dict, dp } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-1.5 text-sm">
        <span className="mr-1 text-muted-foreground">Dictionary:</span>
        {dict.map((w) => (
          <span key={w} className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-xs">{w}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">String</span>
        <ArrayCells values={chars} roleFor={(i) => roleForRef(`ch${i}`)} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (reachable positions 0…n)</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {dp.map((v, i) => {
            const role = roleForRef(`dp${i}`);
            return (
              <div
                key={i}
                className={`flex size-8 items-center justify-center rounded-md border-2 text-xs font-medium transition-colors ${
                  role === "default" ? (v ? "border-role-sorted/50 bg-role-sorted/10 text-role-sorted" : ROLE_CLASS.default) : ROLE_CLASS[role]
                }`}
              >
                {v ? "T" : "F"}
              </div>
            );
          })}
        </div>
      </div>

      <Legend
        items={[
          { role: "active", label: "Substring tested" },
          { role: "sorted", label: "In dictionary" },
          { role: "compared", label: "Reachable start" },
          { role: "target", label: "dp[i] = true" },
        ]}
      />
    </div>
  );
}
