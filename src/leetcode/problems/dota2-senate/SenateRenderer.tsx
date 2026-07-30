import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SenateData } from "./algorithm";

export function SenateRenderer({ step }: RendererProps<SenateData>) {
  const { senate, banned, duel, bannedNow, answer } = step.data;
  const bannedSet = new Set(banned);

  const cls = (i: number) => {
    if (i === bannedNow) return "bg-role-swapped text-white border-role-swapped";
    if (bannedSet.has(i)) return "bg-muted/40 border-border text-muted-foreground line-through opacity-50";
    if (duel && (duel[0] === i || duel[1] === i)) return "bg-role-current text-white border-role-current";
    return senate[i] === "R" ? "bg-role-active/30 border-role-active" : "bg-role-pivot/30 border-role-pivot";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1">
        {senate.split("").map((c, i) => (
          <span key={i} className={`flex h-10 w-10 items-center justify-center rounded border text-lg font-bold ${cls(i)}`}>{c}</span>
        ))}
      </div>

      <div className="text-xs text-muted-foreground">
        R (Radiant) · D (Dire) — a senator bans the next surviving opponent
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        winner = <b className={answer === "Radiant" ? "text-role-active" : answer === "Dire" ? "text-role-pivot" : ""}>{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "Dueling pair" }, { role: "swapped", label: "Banned now" }, { role: "active", label: "Radiant" }, { role: "pivot", label: "Dire" }]} />
    </div>
  );
}
