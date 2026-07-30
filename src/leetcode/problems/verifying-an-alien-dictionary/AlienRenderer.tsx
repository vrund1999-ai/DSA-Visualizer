import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AlienData } from "./algorithm";

function Word({ word, active, charIdx, verdict }: { word: string; active: boolean; charIdx: number | null; verdict: string | null }) {
  return (
    <div className="flex gap-1">
      {word.split("").map((ch, i) => {
        const hot = active && i === charIdx;
        const cls = hot ? (verdict === "bad" ? "bg-role-swapped text-white border-role-swapped" : "bg-role-sorted text-white border-role-sorted") : active ? "bg-role-active/25 border-role-active" : "bg-muted/40 border-border";
        return <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border font-mono text-base ${cls}`}>{ch}</span>;
      })}
    </div>
  );
}

export function AlienRenderer({ step }: RendererProps<AlienData>) {
  const { words, order, pair, charIdx, verdict, answer } = step.data;
  const pairSet = new Set(pair ?? []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-1 text-xs">
        <span className="text-muted-foreground">order:</span>
        {order.split("").map((ch, i) => (
          <span key={i} className="flex h-6 w-5 items-center justify-center rounded bg-muted/50 font-mono text-muted-foreground">{ch}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        {words.map((w, i) => (
          <Word key={i} word={w} active={pairSet.has(i)} charIdx={pairSet.has(i) ? charIdx : null} verdict={verdict} />
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        sorted = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "active", label: "Pair being compared" }, { role: "sorted", label: "Decides in order" }, { role: "swapped", label: "Violation" }]} />
    </div>
  );
}
