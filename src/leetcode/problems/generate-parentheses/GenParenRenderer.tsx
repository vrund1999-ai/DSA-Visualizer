import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GenParenData } from "./algorithm";

export function GenParenRenderer({ step }: RendererProps<GenParenData>) {
  const { n, cur, open, close, results } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Current string</span>
        <div className="flex items-center gap-1">
          {cur.length === 0 ? (
            <span className="text-sm text-muted-foreground">(empty)</span>
          ) : (
            [...cur].map((ch, i) => (
              <span
                key={i}
                className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-lg ${
                  ch === "(" ? "border-role-current bg-role-current/15" : "border-role-sorted bg-role-sorted/15"
                }`}
              >
                {ch}
              </span>
            ))
          )}
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>open: {open}/{n}</span>
          <span>close: {close}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Valid combinations ({results.length})
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-sm">
              {r}
            </span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Open bracket" },
          { role: "sorted", label: "Close bracket" },
          { role: "target", label: "Completed" },
        ]}
      />
    </div>
  );
}
