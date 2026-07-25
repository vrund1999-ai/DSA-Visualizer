import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MagicData } from "./algorithm";

export function MagicRenderer({ step }: RendererProps<MagicData>) {
  const { words, search, wordIdx, diffMask, matched, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">search word</span>
        <div className="flex gap-1">
          {search.split("").map((c, i) => (
            <div key={i} className="flex size-9 items-center justify-center rounded-md border-2 border-border bg-muted/30 text-sm font-bold">{c}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dictionary</span>
        <div className="flex flex-col gap-1.5">
          {words.map((w, wi) => {
            const active = wi === wordIdx;
            return (
              <div key={wi} className={`flex items-center gap-1 rounded-md px-2 py-1 ${active ? "bg-role-current/10 ring-1 ring-role-current" : ""}`}>
                {w.split("").map((c, i) => {
                  const isDiff = active && w.length === search.length && diffMask[i];
                  return (
                    <div key={i} className={`flex size-8 items-center justify-center rounded border-2 text-sm font-medium ${isDiff ? (matched ? "border-role-sorted bg-role-sorted text-white" : "border-role-compared bg-role-compared/20") : "border-border bg-muted/20"}`}>{c}</div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "One-change match found ✓" : "No match ✗"}
        </div>
      )}

      <Legend items={[{ role: "compared", label: "Mismatch" }, { role: "sorted", label: "The single change" }]} />
    </div>
  );
}
