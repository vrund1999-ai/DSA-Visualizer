import type { Step } from "@/core/types";

export interface LinkedListCycleInput {
  values: number[];
  /** Index the tail's next points back to; -1 for no cycle. */
  pos: number;
}

export interface CycleData {
  values: number[];
  pos: number;
  slow: number | null;
  fast: number | null;
  result: boolean | null;
}

export type CycleStep = Step<CycleData>;

/**
 * Floyd's tortoise & hare: the slow pointer moves one node, the fast pointer two.
 * If there's a cycle the fast pointer eventually laps the slow one and they meet;
 * otherwise the fast pointer runs off the end. `line` indexes CODE.
 */
export function cycleSteps(input: LinkedListCycleInput): CycleStep[] {
  const { values, pos } = input;
  const steps: CycleStep[] = [];
  const n = values.length;
  const next = (i: number | null): number | null => {
    if (i === null) return null;
    if (i + 1 < n) return i + 1;
    return pos >= 0 ? pos : null;
  };

  let slow: number | null = n ? 0 : null;
  let fast: number | null = n ? 0 : null;
  let result: boolean | null = null;

  const snap = (o: Partial<CycleData>): CycleData => ({ values: [...values], pos, slow, fast, result, ...o });
  const push = (line: number, explanation: string, data: CycleData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Slow moves 1 node per step, fast moves 2.", snap({}));

  while (fast !== null && next(fast) !== null) {
    slow = next(slow);
    fast = next(next(fast));
    if (slow === fast) {
      result = true;
      push(5, `slow and fast met at node ${slow} — there's a cycle.`, snap({ result: true }));
      return steps;
    }
    push(4, `slow → ${slow}, fast → ${fast}.`, snap({}));
  }

  result = false;
  push(7, "Fast pointer reached the end — no cycle.", snap({ slow: null, fast: null, result: false }));
  return steps;
}
