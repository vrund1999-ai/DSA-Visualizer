import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StringMatchData } from "./algorithm";

export function StringMatchRenderer({ step }: RendererProps<StringMatchData>) {
  const { words, i, j, found, res, answer } = step.data;
  const resultSet = new Set(answer ?? res);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((w, idx) => {
          const cls = idx === i ? (found ? "bg-role-sorted text-white border-role-sorted" : "bg-role-current text-white border-role-current") : idx === j ? "bg-role-active/40 border-role-active" : resultSet.has(w) && answer ? "bg-role-sorted/15 border-role-sorted" : "bg-muted/40 border-border";
          return <span key={idx} className={`rounded border px-3 py-1.5 font-mono text-sm ${cls}`}>{w}</span>;
        })}
      </div>

      {i !== null && j !== null && (
        <div className="font-mono text-sm text-muted-foreground">
          is "<span className="text-role-current">{words[i]}</span>" ⊆ "<span className="text-role-active">{words[j]}</span>"?
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">substrings</span>
        <div className="flex flex-wrap justify-center gap-1">
          {(answer ?? res).length ? (answer ?? res).map((w, k) => <span key={k} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-0.5 font-mono text-sm">{w}</span>) : <span className="text-sm text-muted-foreground">—</span>}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Candidate" }, { role: "active", label: "Container" }, { role: "sorted", label: "Is a substring" }]} />
    </div>
  );
}
