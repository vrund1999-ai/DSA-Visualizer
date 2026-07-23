import type { Highlight, Step } from "@/core/types";

export interface ContainsDupIIInput {
  nums: number[];
  k: number;
}

export interface LastEntry {
  value: number;
  index: number;
}

export interface ContainsDupIIData {
  nums: number[];
  k: number;
  i: number | null;
  last: LastEntry[];
  result: boolean | null;
}

export type ContainsDupIIStep = Step<ContainsDupIIData>;

/**
 * Remember each value's most recent index. A repeat whose gap to that index is ≤
 * k is a "nearby" duplicate. Overwriting keeps only the latest index, which is
 * always the closest. `line` indexes CODE.
 */
export function containsDupIISteps(input: ContainsDupIIInput): ContainsDupIIStep[] {
  const { nums, k } = input;
  const steps: ContainsDupIIStep[] = [];
  const last = new Map<number, number>();
  let result: boolean | null = null;

  const entries = (): LastEntry[] => [...last.entries()].map(([value, index]) => ({ value, index }));
  const snap = (o: Partial<ContainsDupIIData>): ContainsDupIIData => ({ nums: [...nums], k, i: null, last: entries(), result, ...o });
  const push = (line: number, explanation: string, data: ContainsDupIIData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Look for equal values at most k = ${k} apart.`, snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const prev = last.get(nums[i]);
    if (prev !== undefined && i - prev <= k) {
      result = true;
      push(4, `${nums[i]} last seen at ${prev}; gap ${i - prev} ≤ ${k} — nearby duplicate.`, snap({ i, result: true }), [
        { ref: prev, role: "compared" },
        { ref: i, role: "target" },
      ]);
      return steps;
    }
    last.set(nums[i], i);
    push(5, prev === undefined ? `First time seeing ${nums[i]} — record index ${i}.` : `${nums[i]} seen before but too far — update its index to ${i}.`, snap({ i }), [{ ref: i, role: "current" }]);
  }

  result = false;
  push(7, "No equal values within k — false.", snap({ result: false }), []);
  return steps;
}
