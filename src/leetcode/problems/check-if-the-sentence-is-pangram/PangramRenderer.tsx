import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PangramData } from "./algorithm";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

export function PangramRenderer({ step }: RendererProps<PangramData>) {
  const { sentence, pos, seen, answer } = step.data;
  const seenSet = new Set(seen);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-0.5 font-mono text-sm">
        {sentence.split("").map((c, i) => (
          <span key={i} className={`rounded px-0.5 py-1 ${i === pos ? "bg-role-current/25 text-role-current" : pos !== null && i < pos ? "text-muted-foreground" : ""}`}>{c === " " ? "␣" : c}</span>
        ))}
      </div>

      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}>
        {ALPHABET.map((c) => (
          <span key={c} className={`flex size-8 items-center justify-center rounded border font-mono text-sm ${seenSet.has(c) ? "border-role-visited bg-role-visited/20 text-role-visited" : "border-border bg-card text-muted-foreground"}`}>{c}</span>
        ))}
      </div>

      <div className="text-sm">{seen.length} / 26 letters seen</div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "pangram ✓" : "not a pangram ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "visited", label: "Letter seen" }]} />
    </div>
  );
}
