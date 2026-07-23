import type { Step } from "@/core/types";

export interface RemoveNthInput {
  values: number[];
  n: number;
}

export interface RemoveNthData {
  values: number[];
  n: number;
  /** Pointer indices into `values`; -1 means the dummy before the head. */
  slow: number;
  fast: number;
  removed: number | null;
  phase: "gap" | "advance" | "unlink" | "done";
}

export type RemoveNthStep = Step<RemoveNthData>;

/**
 * Two pointers a fixed gap of n apart: advance `fast` n nodes first, then move
 * both until `fast` hits the end. `slow` now sits just before the nth-from-last
 * node, ready to unlink it in one pass. `line` indexes CODE.
 */
export function removeNthSteps(input: RemoveNthInput): RemoveNthStep[] {
  const { values, n } = input;
  const steps: RemoveNthStep[] = [];
  // Use -1 for the dummy node; real nodes are 0..len-1.
  let slow = -1;
  let fast = -1;

  const snap = (o: Partial<RemoveNthData>): RemoveNthData => ({
    values: [...values],
    n,
    slow,
    fast,
    removed: null,
    phase: "gap",
    ...o,
  });
  const push = (line: number, explanation: string, data: RemoveNthData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Open a gap of n = ${n} between fast and slow using a dummy head.`, snap({}));
  for (let i = 0; i < n; i++) {
    fast++;
    push(3, `Advance fast to node ${fast} (${i + 1}/${n}).`, snap({ phase: "gap" }));
  }

  while (fast + 1 < values.length) {
    fast++;
    slow++;
    push(5, `Move both: slow → ${slow}, fast → ${fast}.`, snap({ phase: "advance" }));
  }

  const removed = slow + 1;
  push(7, `slow is before node ${removed} (value ${values[removed]}) — unlink it.`, snap({ phase: "unlink", removed }));

  const remaining = values.filter((_, idx) => idx !== removed);
  steps.push({
    id: steps.length,
    line: 8,
    explanation: `Removed the ${n}th node from the end. Result: [${remaining.join(", ")}].`,
    data: { values: remaining, n, slow, fast, removed: null, phase: "done" },
    highlights: [],
  });
  return steps;
}
