import type { Highlight, Step } from "@/core/types";

export interface HIndexData {
  citations: number[];
  h: number | null;
  answer: number | null;
}

export type HIndexStep = Step<HIndexData>;

/**
 * Sort citations descending; then the largest h where the h-th paper (0-indexed
 * h-1) still has ≥ h citations is the h-index. Walking while citations[h] > h
 * finds it. `line` indexes CODE.
 */
export function hIndexSteps(input: number[]): HIndexStep[] {
  const citations = [...input].sort((a, b) => b - a);
  const steps: HIndexStep[] = [];

  const snap = (h: number | null, answer: number | null): HIndexData => ({ citations: [...citations], h, answer });
  const push = (line: number, explanation: string, data: HIndexData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Sort citations descending; count papers with enough citations.", snap(null, null), []);

  let h = 0;
  while (h < citations.length && citations[h] > h) {
    push(4, `Paper ${h + 1} has ${citations[h]} citations ≥ ${h + 1} — h can be ${h + 1}.`, snap(h, null), [
      ...Array.from({ length: h + 1 }, (_, k) => ({ ref: k, role: "sorted" as const })),
      { ref: h, role: "current" },
    ]);
    h++;
  }
  if (h < citations.length) {
    push(4, `Paper ${h + 1} has only ${citations[h]} citations < ${h + 1} — stop.`, snap(h, null), [{ ref: h, role: "swapped" }]);
  }

  push(5, `h-index is ${h}.`, snap(null, h), Array.from({ length: h }, (_, k) => ({ ref: k, role: "target" }) as Highlight));
  return steps;
}
