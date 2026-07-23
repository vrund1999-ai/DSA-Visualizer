import type { Step } from "@/core/types";

export interface MiddleData {
  values: number[];
  slow: number | null;
  fast: number | null;
  done: boolean;
}

export type MiddleStep = Step<MiddleData>;

/**
 * Two-speed pointers: when the fast pointer (2× speed) reaches the end, the slow
 * pointer (1× speed) sits exactly at the middle. `line` indexes CODE.
 */
export function middleSteps(values: number[]): MiddleStep[] {
  const steps: MiddleStep[] = [];
  const n = values.length;
  let slow = n ? 0 : null;
  let fast = n ? 0 : null;

  const next = (i: number | null) => (i !== null && i + 1 < n ? i + 1 : null);
  const snap = (o: Partial<MiddleData>): MiddleData => ({ values: [...values], slow, fast, done: false, ...o });
  const push = (line: number, explanation: string, data: MiddleData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Slow moves 1 node per step; fast moves 2.", snap({}));

  while (fast !== null && next(fast) !== null) {
    slow = next(slow);
    fast = next(next(fast));
    push(4, `slow → ${slow}, fast → ${fast ?? "null"}.`, snap({}));
  }

  push(6, `Fast reached the end — the middle is node ${slow} (value ${slow !== null ? values[slow] : "—"}).`, snap({ done: true }));
  return steps;
}
