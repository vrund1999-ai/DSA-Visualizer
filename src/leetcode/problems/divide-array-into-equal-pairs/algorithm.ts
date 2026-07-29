import type { Step } from "@/core/types";

export interface EqualPairsData {
  nums: number[];
  count: [number, number][];
  /** value whose parity is being checked */
  checking: number | null;
  odd: boolean;
  answer: boolean | null;
}

export type EqualPairsStep = Step<EqualPairsData>;

/**
 * The array splits into equal pairs iff every value appears an even number of times — each value's
 * copies pair up among themselves. So we tally counts and fail on the first odd one. `line` indexes CODE.
 */
export function equalPairsSteps(nums: number[]): EqualPairsStep[] {
  const steps: EqualPairsStep[] = [];
  const count = new Map<number, number>();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);

  const snap = (o: Partial<EqualPairsData>): EqualPairsData => ({ nums, count: [...count.entries()].sort((a, b) => a[0] - b[0]), checking: null, odd: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EqualPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Every value must appear an even number of times to pair up.");

  for (const [v, c] of [...count.entries()].sort((a, b) => a[0] - b[0])) {
    if (c % 2 !== 0) {
      push(5, `${v} appears ${c} times (odd) → can't pair → false.`, { checking: v, odd: true, answer: false });
      return steps;
    }
    push(4, `${v} appears ${c} times (even) ✓.`, { checking: v });
  }

  push(6, "All counts even → the array divides into equal pairs → true.", { answer: true });
  return steps;
}
