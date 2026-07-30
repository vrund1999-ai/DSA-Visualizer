import type { Step } from "@/core/types";

export interface HeightCheckerData {
  heights: number[];
  expected: number[];
  scan: number | null;
  mismatches: number[];
  count: number;
  answer: number | null;
}

export type HeightCheckerStep = Step<HeightCheckerData>;

/**
 * Compare each student's height to where they'd stand in non-decreasing order; count how many positions
 * differ. `line` indexes CODE.
 */
export function heightCheckerSteps(heights: number[]): HeightCheckerStep[] {
  const steps: HeightCheckerStep[] = [];
  const expected = [...heights].sort((a, b) => a - b);
  const mismatches: number[] = [];
  let count = 0;

  const snap = (o: Partial<HeightCheckerData>): HeightCheckerData => ({
    heights,
    expected,
    scan: null,
    mismatches: [...mismatches],
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<HeightCheckerData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Expected order: [${expected.join(", ")}]. Compare position by position.`);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      mismatches.push(i);
      count++;
      push(6, `Position ${i}: ${heights[i]} ≠ ${expected[i]} → out of order (count ${count}).`, { scan: i });
    } else {
      push(5, `Position ${i}: ${heights[i]} already correct.`, { scan: i });
    }
  }

  push(7, `Students out of place = ${count}.`, { answer: count });
  return steps;
}
