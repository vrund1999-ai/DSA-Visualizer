import type { Highlight, Step } from "@/core/types";

export interface MissingData {
  nums: number[];
  i: number | null;
  acc: number;
}

export type MissingStep = Step<MissingData>;

/**
 * XOR each index and value together with n. Every number 0..n except the missing
 * one appears once as an index and once as a value, so it cancels — leaving only
 * the absent number. `line` indexes CODE.
 */
export function missingSteps(nums: number[]): MissingStep[] {
  const steps: MissingStep[] = [];
  const n = nums.length;
  let acc = n;

  const snap = (o: Partial<MissingData>): MissingData => ({ nums: [...nums], i: null, acc, ...o });
  const push = (line: number, explanation: string, data: MissingData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { acc } });
  };

  push(2, `Start the XOR accumulator at n = ${n}.`, snap({}), []);

  for (let i = 0; i < n; i++) {
    const prev = acc;
    acc ^= i ^ nums[i];
    push(4, `acc ${prev} ^ ${i} ^ ${nums[i]} = ${acc}.`, snap({ i }), [{ ref: i, role: "current" }]);
  }

  push(5, `All present numbers cancelled — the missing number is ${acc}.`, snap({ i: null }), []);
  return steps;
}
