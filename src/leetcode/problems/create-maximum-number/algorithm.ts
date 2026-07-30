import type { Step } from "@/core/types";

export interface MaxNumberData {
  nums1: number[];
  nums2: number[];
  k: number;
  /** current split: i digits from nums1, k-i from nums2 */
  i: number | null;
  pick1: number[];
  pick2: number[];
  candidate: number[];
  best: number[];
  answer: number[] | null;
}

export type MaxNumberStep = Step<MaxNumberData>;

/** Keep the t largest digits of nums in order (drop smaller earlier digits greedily). */
function maxSub(nums: number[], t: number): number[] {
  const stack: number[] = [];
  let drop = nums.length - t;
  for (const x of nums) {
    while (drop > 0 && stack.length && stack[stack.length - 1] < x) {
      stack.pop();
      drop--;
    }
    stack.push(x);
  }
  return stack.slice(0, t);
}

/** Is a[ai..] lexicographically greater than b[bi..]? */
function greater(a: number[], ai: number, b: number[], bi: number): boolean {
  while (ai < a.length && bi < b.length && a[ai] === b[bi]) {
    ai++;
    bi++;
  }
  return bi === b.length || (ai < a.length && a[ai] > b[bi]);
}

function merge(a: number[], b: number[]): number[] {
  const res: number[] = [];
  let ai = 0;
  let bi = 0;
  while (ai < a.length || bi < b.length) {
    if (greater(a, ai, b, bi)) res.push(a[ai++]);
    else res.push(b[bi++]);
  }
  return res;
}

/**
 * Create Maximum Number: pick k digits from two arrays (preserving each array's order) to form the largest
 * number. Try every split i (i digits from nums1, k−i from nums2), take the maximum-subsequence of each via
 * a monotonic stack, merge them by repeatedly taking the lexicographically larger tail, and keep the best
 * candidate. `line` indexes CODE.
 */
export function maxNumberSteps(nums1: number[], nums2: number[], k: number): MaxNumberStep[] {
  const steps: MaxNumberStep[] = [];
  let best: number[] = [];

  const snap = (o: Partial<MaxNumberData>): MaxNumberData => ({
    nums1,
    nums2,
    k,
    i: null,
    pick1: [],
    pick2: [],
    candidate: [],
    best: [...best],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxNumberData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Try every split of k=${k} digits between the two arrays.`);

  for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
    const a = maxSub(nums1, i);
    const b = maxSub(nums2, k - i);
    const cand = merge(a, b);
    const win = greater(cand, 0, best, 0);
    if (win) best = cand;
    push(7, `Split ${i}+${k - i}: [${a.join("")}] ⊕ [${b.join("")}] = ${cand.join("")}${win ? " — new best" : ""}.`, {
      i,
      pick1: a,
      pick2: b,
      candidate: cand,
    });
  }

  push(9, `Maximum number: ${best.join("")}.`, { answer: best });
  return steps;
}
