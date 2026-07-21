import type { Highlight, Step } from "@/core/types";

export interface MergeSortedInput {
  nums1: number[];
  m: number;
  nums2: number[];
  n: number;
}

export interface MergeSortedData {
  nums1: number[];
  nums2: number[];
  i: number;
  j: number;
  k: number;
}

export type MergeSortedStep = Step<MergeSortedData>;

/**
 * Merge from the back so writes never clobber unread values in nums1: the write
 * pointer k starts at the last slot and the largest remaining of nums1[i]/
 * nums2[j] is placed there each step. `line` indexes CODE.
 */
export function mergeSortedSteps(input: MergeSortedInput): MergeSortedStep[] {
  const { m, n } = input;
  const nums1 = [...input.nums1];
  const nums2 = [...input.nums2];
  const steps: MergeSortedStep[] = [];
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  const snap = (extra: Highlight[]): MergeSortedStep => ({
    id: steps.length,
    line: 2,
    explanation: "",
    data: { nums1: [...nums1], nums2: [...nums2], i, j, k },
    highlights: extra,
  });
  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({ ...snap(highlights), line, explanation });
  };

  push(1, "Fill nums1 from its last slot, comparing the tails of both arrays.", [
    { ref: `a${i}`, role: "current" },
    { ref: `b${j}`, role: "active" },
    { ref: `a${k}`, role: "pivot" },
  ]);

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      push(4, `nums1[${i}] = ${nums1[i]} is larger — place it at slot ${k}.`, [
        { ref: `a${i}`, role: "current" },
        { ref: `a${k}`, role: "swapped" },
      ]);
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      push(6, `nums2[${j}] = ${nums2[j]} is larger (or nums1 is exhausted) — place it at slot ${k}.`, [
        { ref: `b${j}`, role: "active" },
        { ref: `a${k}`, role: "swapped" },
      ]);
      j--;
      k--;
    }
  }

  push(9, "nums2 is fully merged — nums1 is now sorted.", nums1.map((_, idx) => ({ ref: `a${idx}`, role: "sorted" })));
  return steps;
}
