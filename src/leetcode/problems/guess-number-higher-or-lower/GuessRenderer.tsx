import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GuessData } from "./algorithm";

export function GuessRenderer({ step }: RendererProps<GuessData>) {
  const { n, pick, lo, hi, mid, answer } = step.data;

  const cellClass = (v: number) => {
    if (v === answer) return "border-role-target bg-role-target text-white";
    if (v === mid) return "border-role-current bg-role-current text-white";
    if (v < lo || v > hi) return "border-border bg-muted/20 text-muted-foreground";
    return "border-role-active/40 bg-role-active/5";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Range</span>
        <span className="rounded-md border px-2 py-0.5 font-mono tabular-nums">[{lo}, {hi}]</span>
        {answer !== null && <span className="ml-2 font-semibold text-role-target">guessed {answer}</span>}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {Array.from({ length: n }, (_, k) => k + 1).map((v) => (
          <div key={v} className={`flex size-9 items-center justify-center rounded-md border-2 text-sm tabular-nums transition-colors ${cellClass(v)}`}>{v}</div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Secret pick is {pick} — the oracle only reveals higher/lower.</p>

      <Legend
        items={[
          { role: "current", label: "Current guess" },
          { role: "target", label: "Correct" },
        ]}
      />
    </div>
  );
}
