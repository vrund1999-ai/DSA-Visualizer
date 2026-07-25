import type { Step } from "@/core/types";

export interface EvenDigitsData {
  nums: number[];
  pos: number | null;
  /** digit count of the current number */
  digits: number | null;
  isEven: boolean | null;
  count: number;
  answer: number | null;
}

export type EvenDigitsStep = Step<EvenDigitsData>;

/**
 * For each number, its digit count is the length of its decimal string; count those
 * with an even length. `line` indexes CODE.
 */
export function evenDigitsSteps(nums: number[]): EvenDigitsStep[] {
  const steps: EvenDigitsStep[] = [];
  let count = 0;

  const snap = (pos: number, o: Partial<EvenDigitsData>): EvenDigitsData => ({ nums: [...nums], pos, digits: null, isEven: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<EvenDigitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, "Count numbers whose digit count is even.", -1);

  for (let i = 0; i < nums.length; i++) {
    const digits = String(Math.abs(nums[i])).length;
    const isEven = digits % 2 === 0;
    if (isEven) count++;
    push(4, `${nums[i]} has ${digits} digit(s) — ${isEven ? "even, count " + count : "odd"}.`, i, { digits, isEven });
  }

  push(6, `Numbers with even digit count: ${count}.`, -1, { answer: count });
  return steps;
}
