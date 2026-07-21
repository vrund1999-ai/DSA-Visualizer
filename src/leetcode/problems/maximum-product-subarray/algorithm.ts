import type { Highlight, Step } from "@/core/types";

export interface MaxProductData {
  nums: number[];
  i: number | null;
  max: number;
  min: number;
  best: number;
}

export type MaxProductStep = Step<MaxProductData>;

/**
 * Track both the max and min product ending at i: a negative number flips their
 * roles (a large negative min can become the new max when multiplied). `line`
 * indexes CODE.
 */
export function maxProductSteps(nums: number[]): MaxProductStep[] {
  const steps: MaxProductStep[] = [];
  let max = nums[0];
  let min = nums[0];
  let best = nums[0];

  const snap = (o: Partial<MaxProductData>): MaxProductData => ({ nums: [...nums], i: null, max, min, best, ...o });
  const push = (line: number, explanation: string, data: MaxProductData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, "Track the max and min product ending here (min matters for negatives).", snap({ i: 0 }), [{ ref: 0, role: "current" }]);

  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    if (x < 0) {
      [max, min] = [min, max];
      push(4, `${x} is negative — swap max and min first.`, snap({ i }), [{ ref: i, role: "compared" }]);
    }
    max = Math.max(x, max * x);
    min = Math.min(x, min * x);
    const improved = max > best;
    if (improved) best = max;
    push(7, `At ${x}: max=${max}, min=${min}${improved ? ` → new best ${best}` : ""}.`, snap({ i }), [
      { ref: i, role: improved ? "target" : "current" },
    ]);
  }

  push(9, `Maximum product subarray = ${best}.`, snap({ i: null }), []);
  return steps;
}
