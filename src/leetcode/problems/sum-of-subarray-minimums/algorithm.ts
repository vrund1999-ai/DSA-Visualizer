import type { Step } from "@/core/types";

export interface SubarrayMinsData {
  arr: number[];
  pos: number | null;
  stack: number[];
  sum: number;
  /** the index whose contribution was just added */
  contributor: number | null;
  contribution: number | null;
  answer: number | null;
}

export type SubarrayMinsStep = Step<SubarrayMinsData>;

const MOD = 1e9 + 7;

/**
 * Each element arr[mid] is the minimum of every subarray spanning from just after the
 * previous smaller element to just before the next smaller. A monotonic increasing
 * stack finds those boundaries, and arr[mid] × (mid−left) × (right−mid) is its total
 * contribution. `line` indexes CODE.
 */
export function subarrayMinsSteps(arr: number[]): SubarrayMinsStep[] {
  const steps: SubarrayMinsStep[] = [];
  const n = arr.length;
  const stack: number[] = [];
  let sum = 0;

  const snap = (pos: number, o: Partial<SubarrayMinsData>): SubarrayMinsData => ({ arr: [...arr], pos, stack: [...stack], sum, contributor: null, contribution: null, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<SubarrayMinsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(3, -1, "Monotonic stack: sum each element's contribution as a subarray minimum.");

  for (let i = 0; i <= n; i++) {
    const cur = i < n ? arr[i] : -Infinity;
    while (stack.length && arr[stack[stack.length - 1]] >= cur) {
      const mid = stack.pop()!;
      const left = stack.length ? stack[stack.length - 1] : -1;
      const contribution = arr[mid] * (mid - left) * (i - mid);
      sum += contribution;
      push(11, i, `arr[${mid}]=${arr[mid]} is min of ${(mid - left) * (i - mid)} subarray(s) → +${contribution}.`, { contributor: mid, contribution });
    }
    if (i < n) {
      stack.push(i);
      push(13, i, `Push index ${i} (value ${arr[i]}).`);
    }
  }

  push(15, -1, `Sum of all subarray minimums: ${sum % MOD}.`, { answer: sum % MOD });
  return steps;
}
