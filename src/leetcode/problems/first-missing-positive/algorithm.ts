import type { Step } from "@/core/types";

export interface FirstMissingData {
  nums: number[];
  /** the pair of indices swapped this step */
  swap: [number, number] | null;
  /** index being scanned in the final check */
  scan: number | null;
  phase: "place" | "scan" | "done";
  answer: number | null;
}

export type FirstMissingStep = Step<FirstMissingData>;

/**
 * Index-as-hash: repeatedly swap each value v (1..n) to index v−1 until every slot
 * either holds its matching value or an out-of-range one. The first index whose value
 * isn't i+1 gives the answer. `line` indexes CODE.
 */
export function firstMissingSteps(input: number[]): FirstMissingStep[] {
  const steps: FirstMissingStep[] = [];
  const nums = [...input];
  const n = nums.length;

  const snap = (o: Partial<FirstMissingData>): FirstMissingData => ({ nums: [...nums], swap: null, scan: null, phase: "place", answer: null, ...o });
  const push = (line: number, explanation: string, data: FirstMissingData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Place each value v into slot v−1 by swapping.", snap({}));

  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const j = nums[i] - 1;
      push(7, `Swap ${nums[i]} to its home index ${j}.`, snap({ swap: [i, j] }));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      push(11, `Index ${i} holds ${nums[i]} ≠ ${i + 1} → answer ${i + 1}.`, snap({ scan: i, phase: "scan", answer: i + 1 }));
      return steps;
    }
    push(11, `Index ${i} correctly holds ${i + 1}.`, snap({ scan: i, phase: "scan" }));
  }

  push(12, `All of 1..${n} present → answer ${n + 1}.`, snap({ phase: "done", answer: n + 1 }));
  return steps;
}
