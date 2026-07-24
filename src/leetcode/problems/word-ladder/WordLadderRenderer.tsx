import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { WordLadderData } from "./algorithm";

export function WordLadderRenderer({ step }: RendererProps<WordLadderData>) {
  const { begin, end, words, level, frontier, current, seen, answer } = step.data;

  const roleOf = (w: string) => {
    if (w === current) return "border-role-current bg-role-current/25";
    if (w === end) return "border-role-target bg-role-target/15";
    if (frontier.includes(w)) return "border-role-active bg-role-active/15";
    if (seen.includes(w)) return "border-role-visited bg-role-visited/10";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="font-mono">{begin}</span>
        <span>→</span>
        <span className="font-mono">{end}</span>
        <span className="ml-2 rounded border px-2 py-0.5">level {level}</span>
      </div>

      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2">
        {words.map((w) => (
          <div key={w} className={`rounded-md border-2 px-3 py-1.5 font-mono text-sm ${roleOf(w)}`}>{w}</div>
        ))}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === 0 ? "text-role-target" : "text-role-visited"}`}>
          {answer === 0 ? "No transformation sequence" : `Shortest ladder length: ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Expanding" }, { role: "active", label: "Frontier" }, { role: "visited", label: "Seen" }, { role: "target", label: "End word" }]} />
    </div>
  );
}
