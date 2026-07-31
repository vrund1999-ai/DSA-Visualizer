import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxScoreWordsData } from "./algorithm";

export function MaxScoreWordsRenderer({ step }: RendererProps<MaxScoreWordsData>) {
  const { words, wordScores, chosen, avail, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((w, i) => (
          <div
            key={i}
            className={`flex flex-col items-center rounded-md border px-3 py-1.5 ${
              chosen[i] === true
                ? "border-role-sorted bg-role-sorted/20"
                : chosen[i] === false
                  ? "border-border opacity-50"
                  : "border-role-current bg-role-current/10"
            }`}
          >
            <span className="font-mono text-sm">{w}</span>
            <span className="text-xs text-muted-foreground">+{wordScores[i]}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">available letters</span>
        <div className="flex flex-wrap justify-center gap-1">
          {avail.map((a) => (
            <span key={a.ch} className="rounded border border-border px-1.5 py-0.5 font-mono text-xs">
              {a.ch}×{a.count}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        max score = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "chosen word" }]} />
    </div>
  );
}
