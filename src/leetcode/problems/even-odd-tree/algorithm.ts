import type { Step } from "@/core/types";

export interface EvenOddData {
  heap: (number | null)[];
  level: number[];
  depth: number;
  /** node currently being checked */
  current: number | null;
  /** node that violated a rule */
  violation: number | null;
  answer: boolean | null;
}

export type EvenOddStep = Step<EvenOddData>;

/**
 * Level-order BFS. Even-indexed levels must hold strictly increasing odd values;
 * odd-indexed levels must hold strictly decreasing even values. Any violation fails
 * immediately. `line` indexes CODE.
 */
export function evenOddSteps(heap: (number | null)[]): EvenOddStep[] {
  const steps: EvenOddStep[] = [];

  const snap = (o: Partial<EvenOddData>): EvenOddData => ({ heap: [...heap], level: [], depth: 0, current: null, violation: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: EvenOddData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  let level = heap.length && heap[0] !== null ? [0] : [];
  let depth = 0;
  push(1, "Check each level's parity and monotonicity.", snap({ level, depth }));

  while (level.length) {
    const even = depth % 2 === 0;
    let prev = even ? -Infinity : Infinity;
    push(3, `Level ${depth} (${even ? "even: increasing odds" : "odd: decreasing evens"}).`, snap({ level, depth }));
    for (const i of level) {
      const val = heap[i] as number;
      const parityBad = even ? val % 2 === 0 : val % 2 === 1;
      const orderBad = even ? val <= prev : val >= prev;
      if (parityBad || orderBad) {
        push(8, `${val} breaks the rule (${parityBad ? "wrong parity" : "not monotonic"}) → false.`, snap({ level, depth, current: i, violation: i, answer: false }));
        return steps;
      }
      push(11, `${val} ok.`, snap({ level, depth, current: i }));
      prev = val;
    }
    const next: number[] = [];
    for (const i of level) {
      if (2 * i + 1 < heap.length && heap[2 * i + 1] !== null) next.push(2 * i + 1);
      if (2 * i + 2 < heap.length && heap[2 * i + 2] !== null) next.push(2 * i + 2);
    }
    level = next;
    depth++;
  }

  push(17, "Every level satisfies the rules → true.", snap({ answer: true }));
  return steps;
}
