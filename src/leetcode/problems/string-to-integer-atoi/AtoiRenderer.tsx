import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { AtoiData } from "./algorithm";

const PHASE_LABEL: Record<AtoiData["phase"], string> = {
  space: "Skipping whitespace…",
  sign: "Reading sign…",
  digits: "Reading digits…",
  done: "Done",
};

export function AtoiRenderer({ step }: RendererProps<AtoiData>) {
  const { chars, sign, num, result, phase } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">{PHASE_LABEL[phase]}</p>

      <ArrayCells
        values={chars.map((c) => (c === " " ? "␣" : c))}
        roleFor={(idx) => roleFor(idx)}
        showIndex={false}
      />

      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-muted-foreground">sign <span className="font-mono text-foreground">{sign < 0 ? "−" : "+"}</span></span>
        <span className="text-muted-foreground">num <span className="font-mono text-foreground">{num}</span></span>
        {result !== null && (
          <span className="text-muted-foreground">result <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-mono font-semibold tabular-nums text-role-target">{result}</span></span>
        )}
      </div>

      <Legend
        items={[
          { role: "visited", label: "Skipped space" },
          { role: "compared", label: "Sign" },
          { role: "sorted", label: "Digit" },
        ]}
      />
    </div>
  );
}
