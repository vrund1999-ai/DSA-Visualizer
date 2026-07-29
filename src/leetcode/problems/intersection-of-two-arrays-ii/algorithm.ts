import type { Step } from "@/core/types";

export interface IntersectData {
  nums1: number[];
  nums2: number[];
  phase: "count" | "match";
  /** index into nums1 (count phase) or nums2 (match phase) */
  idx: number | null;
  count: [number, number][];
  result: number[];
  /** whether the current nums2 element matched */
  matched: boolean | null;
  answer: number[] | null;
}

export type IntersectStep = Step<IntersectData>;

/**
 * Multiplicity matters, so we tally how many times each value appears in the first array, then walk
 * the second: each element that still has remaining count joins the result and decrements that count.
 * `line` indexes CODE.
 */
export function intersectSteps(nums1: number[], nums2: number[]): IntersectStep[] {
  const steps: IntersectStep[] = [];
  const count = new Map<number, number>();
  const result: number[] = [];

  const snap = (o: Partial<IntersectData>): IntersectData => ({ nums1, nums2, phase: "count", idx: null, count: [...count.entries()], result: [...result], matched: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<IntersectData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count values of nums1, then consume matches from nums2.");

  for (let i = 0; i < nums1.length; i++) {
    count.set(nums1[i], (count.get(nums1[i]) ?? 0) + 1);
    push(3, `Count ${nums1[i]} → ${count.get(nums1[i])}.`, { phase: "count", idx: i });
  }

  for (let i = 0; i < nums2.length; i++) {
    const n = nums2[i];
    const matched = (count.get(n) ?? 0) > 0;
    if (matched) {
      result.push(n);
      count.set(n, count.get(n)! - 1);
      push(8, `${n} available → add to result; count now ${count.get(n)}.`, { phase: "match", idx: i, matched: true });
    } else {
      push(6, `${n} not available → skip.`, { phase: "match", idx: i, matched: false });
    }
  }

  push(11, `Intersection: [${result.join(", ")}].`, { answer: [...result] });
  return steps;
}
