import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { FindAnagramsData } from "./algorithm";

export function FindAnagramsRenderer({ step }: RendererProps<FindAnagramsData>) {
  const { chars, p, matches } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Pattern p</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">{p}</span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} showIndex />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Anagram start indices</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {matches.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : matches.join(", ")}
        </div>
      </div>

      <Legend
        items={[
          { role: "active", label: "Current window" },
          { role: "target", label: "Anagram match" },
        ]}
      />
    </div>
  );
}
