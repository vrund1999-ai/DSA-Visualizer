import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LetterCaseData } from "./algorithm";

export function LetterCaseRenderer({ step }: RendererProps<LetterCaseData>) {
  const { s, cur, i, results, justAdded, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-1">
        {s.split("").map((ch, idx) => {
          const decided = idx < cur.length;
          const cls = idx === i ? "bg-role-current text-white border-role-current" : decided ? "bg-role-visited/30 border-role-visited" : "bg-muted/40 border-border text-muted-foreground";
          return (
            <span key={idx} className={`flex h-10 w-9 items-center justify-center rounded border font-mono text-lg ${cls}`}>{decided ? cur[idx] : ch}</span>
          );
        })}
      </div>

      <div className="min-h-[3.5rem] max-h-32 overflow-y-auto flex flex-wrap justify-center gap-1.5">
        {(answer ?? results).map((r, k) => (
          <span key={k} className={`rounded border px-2 py-0.5 font-mono text-sm ${r === justAdded ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>{r}</span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">permutations = <b className="tabular-nums">{(answer ?? results).length}</b></div>

      <Legend items={[{ role: "current", label: "Deciding char" }, { role: "visited", label: "Fixed prefix" }, { role: "sorted", label: "Just added" }]} />
    </div>
  );
}
