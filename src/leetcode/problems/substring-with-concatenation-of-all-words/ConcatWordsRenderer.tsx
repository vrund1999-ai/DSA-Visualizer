import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ConcatWordsData } from "./algorithm";

export function ConcatWordsRenderer({ step }: RendererProps<ConcatWordsData>) {
  const { s, words, wordLen, total, start, matchedWords, valid, results } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-xs text-muted-foreground">words: {words.map((w) => `"${w}"`).join(", ")} · window = {total} chars</div>

      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-0.5 font-mono text-sm">
        {s.split("").map((c, i) => {
          const inWindow = start !== null && i >= start && i < start + total;
          const chunk = start !== null && inWindow ? Math.floor((i - start) / wordLen) : -1;
          const inMatched = chunk >= 0 && chunk < matchedWords;
          const cls = inWindow ? (valid ? "bg-role-sorted/25 text-role-sorted" : inMatched ? "bg-role-active/25 text-role-active" : "bg-role-current/25 text-role-current") : "text-muted-foreground";
          return <span key={i} className={`rounded px-0.5 py-1 ${cls}`}>{c}</span>;
        })}
      </div>

      <div className="text-sm text-muted-foreground">
        {start !== null ? <>window at {start}: {matchedWords}/{words.length} words matched</> : "scanning"}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">valid start indices</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r) => (
            <span key={r} className="rounded-md border-2 border-role-sorted bg-role-sorted/10 px-2 py-1 font-mono text-xs tabular-nums">{r}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "active", label: "Matched words" }, { role: "current", label: "Window (checking)" }, { role: "sorted", label: "Valid window" }]} />
    </div>
  );
}
