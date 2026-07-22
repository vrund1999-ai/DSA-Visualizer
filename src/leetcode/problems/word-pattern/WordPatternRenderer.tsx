import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { WordPatternData } from "./algorithm";

export function WordPatternRenderer({ step }: RendererProps<WordPatternData>) {
  const { pattern, words, mapping, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-2">
        {pattern.map((c, i) => (
          <div key={i} className={`flex items-center gap-2 rounded-md border-2 px-3 py-1 transition-colors ${roleFor(i) !== "default" ? ROLE_CLASS[roleFor(i)] : "border-border bg-muted/30"}`}>
            <span className="font-mono text-lg font-semibold">{c}</span>
            <span className="text-muted-foreground">↔</span>
            <span className="font-mono">{words[i] ?? "—"}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Bindings</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {mapping.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : mapping.map((p) => (
            <span key={p.key} className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-xs">{p.key} → {p.value}</span>
          ))}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Pattern matches ✓" : "Pattern fails ✗"}</p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "New binding" },
          { role: "compared", label: "Consistent" },
          { role: "swapped", label: "Conflict" },
        ]}
      />
    </div>
  );
}
