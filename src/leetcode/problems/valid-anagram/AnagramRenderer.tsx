import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { AnagramData } from "./algorithm";

export function AnagramRenderer({ step }: RendererProps<AnagramData>) {
  const { s, t, counts, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s</span>
          <ArrayCells values={s} roleFor={(i) => roleForRef(`s${i}`)} showIndex={false} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">t</span>
          <ArrayCells values={t} roleFor={(i) => roleForRef(`t${i}`)} showIndex={false} />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Letter tally
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {counts.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            counts.map((e) => (
              <span
                key={e.char}
                className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${
                  e.n === 0
                    ? "border-border bg-muted/20 text-muted-foreground"
                    : "border-role-current bg-role-current/10"
                }`}
              >
                {e.char}: {e.n}
              </span>
            ))
          )}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Anagram ✓" : "Not an anagram ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Counting (s)" },
          { role: "sorted", label: "Cancelled (t)" },
          { role: "swapped", label: "Missing letter" },
        ]}
      />
    </div>
  );
}
