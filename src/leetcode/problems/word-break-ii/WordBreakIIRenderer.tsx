import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { WordBreakIIData } from "./algorithm";

export function WordBreakIIRenderer({ step }: RendererProps<WordBreakIIData>) {
  const { s, dict, slice, isWord, results } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (slice && i >= slice[0] && i < slice[1]) return isWord ? "sorted" : "target";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-xs text-muted-foreground">dictionary: {dict.map((w) => `"${w}"`).join(", ")}</div>

      <ArrayCells values={chars} roleFor={roleFor} showIndex={false} cellWidth="w-9" />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sentences found</span>
        <div className="flex min-h-[2rem] max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">{r}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "sorted", label: "Prefix is a word" }, { role: "target", label: "Not a word" }]} />
    </div>
  );
}
