import type { Step } from "@/core/types";

export interface KthProductData {
  nums1: number[];
  nums2: number[];
  k: number;
  lo: number;
  hi: number;
  mid: number | null;
  count: number | null;
  answer: number | null;
}

export type KthProductStep = Step<KthProductData>;

/** count of nums2 entries <= t (nums2 sorted ascending). */
const countBelow = (nums2: number[], t: number): number => {
  let lo = 0;
  let hi = nums2.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums2[mid] <= t) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

/** count of nums2 entries >= t. */
const countAbove = (nums2: number[], t: number): number => {
  let lo = 0;
  let hi = nums2.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums2[mid] >= t) hi = mid;
    else lo = mid + 1;
  }
  return nums2.length - lo;
};

/**
 * The k-th smallest product a·b over the two sorted arrays. Binary-search the answer value x; a helper
 * counts pairs whose product is ≤ x (splitting on the sign of a, since a negative factor flips the
 * comparison). The smallest x whose count reaches k is the answer. `line` indexes CODE.
 */
export function kthProductSteps(nums1: number[], nums2: number[], k: number): KthProductStep[] {
  const steps: KthProductStep[] = [];

  const countLE = (x: number): number => {
    let c = 0;
    for (const a of nums1) {
      if (a > 0) c += countBelow(nums2, Math.floor(x / a));
      else if (a < 0) c += countAbove(nums2, Math.ceil(x / a));
      else if (x >= 0) c += nums2.length;
    }
    return c;
  };

  let lo = -1e10;
  let hi = 1e10;

  const snap = (o: Partial<KthProductData>): KthProductData => ({
    nums1,
    nums2,
    k,
    lo,
    hi,
    mid: null,
    count: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<KthProductData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(10, `Binary-search the ${k}-th smallest product between ${lo.toExponential(0)} and ${hi.toExponential(0)}.`);

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    const count = countLE(mid);
    if (count >= k) {
      hi = mid;
      push(13, `${count} product(s) ≤ ${mid} ≥ k=${k} → answer ≤ ${mid}, shrink hi.`, { mid, count });
    } else {
      lo = mid + 1;
      push(14, `Only ${count} product(s) ≤ ${mid} < k=${k} → answer > ${mid}, raise lo.`, { mid, count });
    }
  }

  push(16, `The ${k}-th smallest product is ${lo}.`, { answer: lo });
  return steps;
}
