import type { Step } from "@/core/types";

export interface NextGreaterData {
  nums: number[];
  res: number[];
  stack: number[];
  /** index i % n currently being processed */
  cur: number | null;
  /** index just resolved by cur */
  resolved: number | null;
}

export type NextGreaterStep = Step<NextGreaterData>;

/**
 * Circular next-greater via a monotonic decreasing stack of indices. Walk the array
 * twice (2n) to let the wrap-around resolve elements near the end; only push real
 * indices (i < n). When the current value exceeds a stacked index's value, it is
 * that index's answer. `line` indexes CODE.
 */
export function nextGreaterSteps(nums: number[]): NextGreaterStep[] {
  const steps: NextGreaterStep[] = [];
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack: number[] = [];

  const snap = (o: Partial<NextGreaterData>): NextGreaterData => ({ nums: [...nums], res: [...res], stack: [...stack], cur: null, resolved: null, ...o });
  const push = (line: number, explanation: string, data: NextGreaterData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Scan the array twice, keeping a stack of indices with decreasing values.", snap({}));

  for (let i = 0; i < 2 * n; i++) {
    const idx = i % n;
    const cur = nums[idx];
    push(5, `Look at index ${idx} (value ${cur})${i >= n ? " — wrap-around pass" : ""}.`, snap({ cur: idx }));
    while (stack.length && nums[stack[stack.length - 1]] < cur) {
      const popped = stack.pop()!;
      res[popped] = cur;
      push(8, `${cur} > ${nums[popped]} → next greater of index ${popped} is ${cur}.`, snap({ cur: idx, resolved: popped }));
    }
    if (i < n) {
      stack.push(idx);
      push(10, `Push index ${idx} — waiting for its next greater.`, snap({ cur: idx }));
    }
  }

  push(12, "Anything left on the stack has no greater element (stays -1).", snap({}));
  return steps;
}
