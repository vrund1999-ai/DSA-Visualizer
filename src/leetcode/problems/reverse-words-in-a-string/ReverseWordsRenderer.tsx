import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ReverseWordsData } from "./algorithm";

export function ReverseWordsRenderer({ step }: RendererProps<ReverseWordsData>) {
  const { raw, words, phase, result } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Input</span>
        <div className="rounded-lg border bg-card/40 px-4 py-2 font-mono text-sm">"{raw}"</div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {phase === "reverse" || phase === "done" ? "Words (reversed order)" : "Words"}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {words.map((w, i) => (
            <span key={i} className={`rounded-md border-2 px-2.5 py-1 font-mono text-sm ${phase === "done" ? "border-role-sorted bg-role-sorted/10" : "border-role-active bg-role-active/10"}`}>{w}</span>
          ))}
        </div>
      </div>

      {phase === "done" && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result</span>
          <div className="rounded-lg border border-role-sorted bg-role-sorted/10 px-4 py-2 font-mono text-sm">"{result}"</div>
        </div>
      )}

      <Legend
        items={[
          { role: "active", label: "Word tokens" },
          { role: "sorted", label: "Final order" },
        ]}
      />
    </div>
  );
}
