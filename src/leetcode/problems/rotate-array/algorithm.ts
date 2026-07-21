import type { Highlight, Step } from "@/core/types";

export interface RotateArrayInput {
  nums: number[];
  k: number;
}

export interface RotateArrayData {
  nums: number[];
  phase: string;
}

export type RotateArrayStep = Step<RotateArrayData>;

/**
 * Rotate right by k using three reversals: reverse everything, then reverse the
 * first k and the remaining n−k. Reversing twice brings each block back to
 * forward order but in the rotated position. `line` indexes CODE.
 */
export function rotateArraySteps(input: RotateArrayInput): RotateArrayStep[] {
  const nums = [...input.nums];
  const n = nums.length;
  const k = n ? input.k % n : 0;
  const steps: RotateArrayStep[] = [];

  const push = (line: number, phase: string, explanation: string, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data: { nums: [...nums], phase }, highlights });
  };

  const reverse = (l: number, r: number, phase: string) => {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      push(7, phase, `Swap positions ${l} and ${r}.`, [
        { ref: l, role: "active" },
        { ref: r, role: "active" },
      ]);
      l++;
      r--;
    }
  };

  push(1, "start", `Rotate right by k = ${k}.`, []);
  push(2, "whole", "Reverse the entire array.", []);
  reverse(0, n - 1, "whole");
  push(3, "first-k", `Reverse the first ${k} elements.`, []);
  reverse(0, k - 1, "first-k");
  push(4, "rest", `Reverse the remaining ${n - k} elements.`, []);
  reverse(k, n - 1, "rest");
  push(5, "done", "Rotation complete.", nums.map((_, i) => ({ ref: i, role: "sorted" }) as Highlight));
  return steps;
}
