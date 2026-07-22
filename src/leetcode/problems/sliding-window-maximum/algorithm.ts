import type { Highlight, Step } from "@/core/types";

export interface SlidingMaxInput {
  nums: number[];
  k: number;
}

export interface SlidingMaxData {
  nums: number[];
  k: number;
  i: number | null;
  windowStart: number;
  deque: number[];
  result: number[];
}

export type SlidingMaxStep = Step<SlidingMaxData>;

/**
 * A deque of indices keeps candidates in decreasing value order, so its front is
 * always the current window's max. Expire indices that slid out of the window and
 * drop smaller values from the back before pushing. `line` indexes CODE.
 */
export function slidingMaxSteps(input: SlidingMaxInput): SlidingMaxStep[] {
  const { nums, k } = input;
  const steps: SlidingMaxStep[] = [];
  const dq: number[] = [];
  const result: number[] = [];

  const snap = (o: Partial<SlidingMaxData>): SlidingMaxData => ({
    nums: [...nums],
    k,
    i: null,
    windowStart: 0,
    deque: [...dq],
    result: [...result],
    ...o,
  });
  const push = (line: number, explanation: string, data: SlidingMaxData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const windowHl = (i: number): Highlight[] => {
    const start = Math.max(0, i - k + 1);
    const hl: Highlight[] = [];
    for (let j = start; j <= i; j++) hl.push({ ref: j, role: "active" });
    return hl;
  };

  for (let i = 0; i < nums.length; i++) {
    const ws = Math.max(0, i - k + 1);
    push(2, `Extend to index ${i} (${nums[i]}).`, snap({ i, windowStart: ws }), [...windowHl(i), { ref: i, role: "current" }]);
    if (dq.length && dq[0] <= i - k) {
      const expired = dq.shift()!;
      push(3, `Index ${expired} slid out of the window — drop it from the front.`, snap({ i, windowStart: ws }), [...windowHl(i), { ref: i, role: "current" }]);
    }
    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
      const popped = dq.pop()!;
      push(5, `${nums[i]} ≥ ${nums[popped]} — pop the smaller index ${popped} from the back.`, snap({ i, windowStart: ws }), [...windowHl(i), { ref: popped, role: "swapped" }, { ref: i, role: "current" }]);
    }
    dq.push(i);
    push(6, `Push index ${i}.`, snap({ i, windowStart: ws }), [...windowHl(i), { ref: i, role: "active" }]);
    if (i >= k - 1) {
      result.push(nums[dq[0]]);
      push(7, `Window [${ws}..${i}] max = nums[${dq[0]}] = ${nums[dq[0]]}.`, snap({ i, windowStart: ws }), [...windowHl(i), { ref: dq[0], role: "target" }]);
    }
  }

  push(9, `Window maxima: [${result.join(", ")}].`, snap({ i: null }), []);
  return steps;
}
