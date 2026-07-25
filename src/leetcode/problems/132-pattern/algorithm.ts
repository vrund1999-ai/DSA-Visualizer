import type { Step } from "@/core/types";

export interface Pattern132Data {
  nums: number[];
  i: number | null;
  stack: number[];
  /** the current best "2" value (must stay < some earlier stack top) */
  k: number;
  found: boolean;
  answer: boolean | null;
}

export type Pattern132Step = Step<Pattern132Data>;

const NEG_INF = Number.NEGATIVE_INFINITY;

/**
 * Scan right to left keeping a decreasing stack of candidate "3" values and the best
 * "2" (k) popped so far — the largest value known to have a bigger value to its right.
 * If any element is smaller than k, it is the "1" completing a 1-3-2 pattern. `line`
 * indexes CODE.
 */
export function pattern132Steps(nums: number[]): Pattern132Step[] {
  const steps: Pattern132Step[] = [];
  const stack: number[] = [];
  let k = NEG_INF;

  const snap = (o: Partial<Pattern132Data>): Pattern132Data => ({ nums: [...nums], i: null, stack: [...stack], k, found: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: Pattern132Data) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Scan right to left; k tracks the best '2' with a larger value to its right.", snap({}));

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < k) {
      push(4, `nums[${i}]=${nums[i]} < k=${k} — it's the '1' of a 1-3-2 pattern → true.`, snap({ i, found: true, answer: true }));
      return steps;
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = stack.pop()!;
      push(6, `Pop ${k} (< ${nums[i]}) — becomes the '2' (k = ${k}).`, snap({ i }));
    }
    stack.push(nums[i]);
    push(8, `Push ${nums[i]} as a candidate '3'.`, snap({ i }));
  }

  push(10, "No 132 pattern → false.", snap({ answer: false }));
  return steps;
}
