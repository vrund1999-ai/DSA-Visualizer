import type { Step } from "@/core/types";

export interface RotateData {
  nums: number[];
  /** current rotation amount k */
  k: number;
  /** rotated array at rotation k */
  rotated: number[];
  /** element that just moved from the highest weight to weight 0 */
  movedIndex: number | null;
  f: number;
  max: number;
  answer: number | null;
}

export type RotateStep = Step<RotateData>;

const rotate = (nums: number[], k: number) => nums.map((_, i) => nums[(i - k + nums.length * k) % nums.length]);

/**
 * F(k) weights each element by its position after k clockwise rotations. Rotating once shifts every
 * element's weight up by one except the element that wraps from the top weight to 0, giving the O(1)
 * recurrence F(k) = F(k−1) + total − n·nums[n−k]. `line` indexes CODE.
 */
export function rotateSteps(nums: number[]): RotateStep[] {
  const steps: RotateStep[] = [];
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b, 0);
  let f = nums.reduce((a, v, i) => a + i * v, 0);
  let max = f;

  const snap = (o: Partial<RotateData>): RotateData => ({ nums, k: 0, rotated: rotate(nums, 0), movedIndex: null, f, max, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RotateData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `F(0) = Σ i·nums[i] = ${f}.`, { k: 0, rotated: rotate(nums, 0), f, max });

  for (let k = 1; k < n; k++) {
    f += total - n * nums[n - k];
    max = Math.max(max, f);
    push(8, `F(${k}) = F(${k - 1}) + ${total} − ${n}·${nums[n - k]} = ${f} (max ${max}).`, { k, rotated: rotate(nums, k), movedIndex: n - k, f, max });
  }

  push(10, `Maximum rotate-function value: ${max}.`, { k: 0, rotated: rotate(nums, 0), max, answer: max });
  return steps;
}
