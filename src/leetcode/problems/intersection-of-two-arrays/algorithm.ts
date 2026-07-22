import type { Highlight, Step } from "@/core/types";

export interface IntersectionInput {
  nums1: number[];
  nums2: number[];
}

export interface IntersectionData {
  nums1: number[];
  nums2: number[];
  set1: number[];
  j: number | null;
  result: number[];
}

export type IntersectionStep = Step<IntersectionData>;

/**
 * Put the first array in a hash set, then scan the second: any value in the set
 * is a shared element. A result set removes duplicates. `line` indexes CODE.
 */
export function intersectionSteps(input: IntersectionInput): IntersectionStep[] {
  const { nums1, nums2 } = input;
  const steps: IntersectionStep[] = [];
  const set1 = new Set(nums1);
  const res = new Set<number>();

  const snap = (o: Partial<IntersectionData>): IntersectionData => ({
    nums1: [...nums1],
    nums2: [...nums2],
    set1: [...set1],
    j: null,
    result: [...res],
    ...o,
  });
  const push = (line: number, explanation: string, data: IntersectionData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Put nums1 in a set, then check each value of nums2 against it.", snap({}), []);

  for (let j = 0; j < nums2.length; j++) {
    const x = nums2[j];
    if (set1.has(x)) {
      const isNew = !res.has(x);
      res.add(x);
      push(4, `${x} is in nums1 — ${isNew ? "add to the intersection" : "already recorded"}.`, snap({ j }), [{ ref: `b${j}`, role: "sorted" }]);
    } else {
      push(4, `${x} isn't in nums1 — skip.`, snap({ j }), [{ ref: `b${j}`, role: "visited" }]);
    }
  }

  push(5, `Intersection: [${[...res].join(", ")}].`, snap({ j: null }), []);
  return steps;
}
