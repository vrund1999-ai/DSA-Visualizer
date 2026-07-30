import type { Step } from "@/core/types";

export interface SpecialArrayData {
  sorted: number[];
  x: number | null;
  count: number | null;
  answer: number | null;
}

export type SpecialArrayStep = Step<SpecialArrayData>;

/**
 * x is "special" when exactly x elements are ≥ x. As x rises the count of elements ≥ x only falls, so the
 * two cross at most once; testing each candidate x from 0 to n finds it. `line` indexes CODE.
 */
export function specialArraySteps(nums: number[]): SpecialArrayStep[] {
  const steps: SpecialArrayStep[] = [];
  const sorted = [...nums].sort((a, b) => b - a);
  const n = nums.length;

  const snap = (o: Partial<SpecialArrayData>): SpecialArrayData => ({ sorted, x: null, count: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SpecialArrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Find x where exactly x elements are ≥ x (values shown sorted descending).");

  for (let x = 0; x <= n; x++) {
    const count = nums.filter((v) => v >= x).length;
    if (count === x) {
      push(6, `x=${x}: exactly ${count} element(s) ≥ ${x} → special!`, { x, count, answer: x });
      return steps;
    }
    push(5, `x=${x}: ${count} element(s) ≥ ${x} (need ${x}).`, { x, count });
  }

  push(8, "No special value exists → -1.", { answer: -1 });
  return steps;
}
