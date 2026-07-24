import type { Step } from "@/core/types";

export interface CycleIIData {
  values: number[];
  /** index the tail links back to, or -1 for no cycle */
  cyclePos: number;
  slow: number | null;
  fast: number | null;
  /** finder pointer during phase 2 */
  finder: number | null;
  phase: "race" | "find" | "done";
  entry: number | null;
}

export type CycleIIStep = Step<CycleIIData>;

/**
 * Floyd's algorithm. Phase 1: a slow (+1) and fast (+2) pointer race; if they meet a
 * cycle exists. Phase 2: move one pointer to the head and advance both by 1 — they
 * meet at the cycle entry. `line` indexes CODE.
 */
export function cycleIISteps(values: number[], cyclePos: number): CycleIIStep[] {
  const steps: CycleIIStep[] = [];
  const n = values.length;
  const nextOf = (i: number): number => {
    if (i + 1 < n) return i + 1;
    return cyclePos; // tail links back (or -1)
  };

  const snap = (o: Partial<CycleIIData>): CycleIIData => ({ values: [...values], cyclePos, slow: null, fast: null, finder: null, phase: "race", entry: null, ...o });
  const push = (line: number, explanation: string, data: CycleIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (n === 0) {
    push(13, "Empty list — no cycle.", snap({ phase: "done" }));
    return steps;
  }

  let slow = 0;
  let fast = 0;
  push(1, "Slow (+1) and fast (+2) start at the head.", snap({ slow, fast }));

  let met = false;
  while (fast !== -1 && nextOf(fast) !== -1) {
    slow = nextOf(slow);
    fast = nextOf(nextOf(fast));
    push(4, `Advance — slow at ${values[slow]}, fast at ${values[fast]}.`, snap({ slow, fast }));
    if (slow === fast) {
      met = true;
      push(5, `They meet at ${values[slow]} — a cycle exists.`, snap({ slow, fast }));
      break;
    }
  }

  if (!met) {
    push(13, "Fast reached the end — no cycle.", snap({ phase: "done" }));
    return steps;
  }

  let p = 0;
  push(6, "Move a finder to the head; advance both by 1.", snap({ slow, finder: p, phase: "find" }));
  while (p !== slow) {
    p = nextOf(p);
    slow = nextOf(slow);
    push(8, `Finder at ${values[p]}, slow at ${values[slow]}.`, snap({ slow, finder: p, phase: "find" }));
  }

  push(10, `Cycle entry is ${values[p]} (index ${p}).`, snap({ entry: p, finder: p, slow, phase: "done" }));
  return steps;
}
