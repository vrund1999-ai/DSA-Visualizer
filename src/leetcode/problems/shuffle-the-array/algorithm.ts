import type { Step } from "@/core/types";

export interface ShuffleData {
  nums: number[];
  n: number;
  res: number[];
  /** source indices being read: x at i, y at i+n */
  xi: number | null;
  yi: number | null;
  done: boolean;
}

export type ShuffleStep = Step<ShuffleData>;

/**
 * The array is two halves [x1..xn | y1..yn]. Interleave them by reading index i from
 * the first half and i+n from the second, appending each pair. `line` indexes CODE.
 */
export function shuffleSteps(nums: number[], n: number): ShuffleStep[] {
  const steps: ShuffleStep[] = [];
  const res: number[] = [];

  const snap = (o: Partial<ShuffleData>): ShuffleData => ({ nums: [...nums], n, res: [...res], xi: null, yi: null, done: false, ...o });
  const push = (line: number, explanation: string, data: ShuffleData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Interleave the two halves: x_i from the front, y_i from the back.", snap({}));

  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
    push(4, `Append x${i + 1}=${nums[i]} and y${i + 1}=${nums[i + n]}.`, snap({ xi: i, yi: i + n }));
  }

  push(6, `Result: [${res.join(", ")}].`, snap({ done: true }));
  return steps;
}
