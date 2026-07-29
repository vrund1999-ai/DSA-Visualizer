import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DominoesData } from "./algorithm";

const glyph = (c: string) => (c === "R" ? "→" : c === "L" ? "←" : "│");

export function DominoesRenderer({ step }: RendererProps<DominoesData>) {
  const { dominoes, force, phase, idx, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="rounded-md border px-3 py-1 text-sm">phase: {phase === "right" ? "→ rightward" : phase === "left" ? "← leftward" : "resolved"}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">initial</span>
        <div className="flex gap-0.5">
          {dominoes.split("").map((c, i) => (
            <div key={i} className={`flex size-8 items-center justify-center rounded border-2 text-lg ${i === idx ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{glyph(c)}</div>
          ))}
        </div>
      </div>

      <div className="flex gap-0.5">
        {force.map((v, i) => (
          <div key={i} className={`flex size-8 items-center justify-center rounded border text-[10px] tabular-nums ${v > 0 ? "border-role-sorted/50 bg-role-sorted/10" : v < 0 ? "border-role-compared/50 bg-role-compared/10" : "border-border/50"}`}>{v}</div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result (net force)</span>
        <div className="flex gap-0.5">
          {force.map((v, i) => {
            const ch = v > 0 ? "R" : v < 0 ? "L" : ".";
            return <div key={i} className={`flex size-8 items-center justify-center rounded border-2 text-lg ${answer ? "border-role-sorted bg-role-sorted/10" : "border-border bg-muted/20"}`}>{glyph(ch)}</div>;
          })}
        </div>
      </div>

      {answer && <div className="rounded-md border px-3 py-1 font-mono text-sm">"{answer}"</div>}

      <Legend items={[{ role: "sorted", label: "Rightward (R)" }, { role: "compared", label: "Leftward (L)" }, { role: "current", label: "Current" }]} />
    </div>
  );
}
