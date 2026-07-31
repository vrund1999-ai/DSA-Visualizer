import type { Step } from "@/core/types";

export interface MakeZeroData {
  nums: number[];
  /** the (start, direction) selection being tested */
  attempt: { start: number; dir: number } | null;
  /** the array state at the end of the current simulation */
  finalState: number[] | null;
  valid: boolean | null;
  count: number;
  answer: number | null;
}

export type MakeZeroStep = Step<MakeZeroData>;

/**
 * Make Array Elements Equal to Zero: start on a zero and pick a direction; each step either passes over a
 * zero or decrements a non-zero and reverses direction, until you walk off the array. A selection is valid
 * if the whole array ends at zero. Count all valid (start, direction) pairs. `line` indexes CODE.
 */
export function makeZeroSteps(nums: number[]): MakeZeroStep[] {
  const steps: MakeZeroStep[] = [];
  let count = 0;

  const snap = (o: Partial<MakeZeroData>): MakeZeroData => ({
    nums,
    attempt: null,
    finalState: null,
    valid: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MakeZeroData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Try every start on a zero and each direction; count selections that zero the whole array.`);

  for (let start = 0; start < nums.length; start++) {
    if (nums[start] !== 0) continue;
    for (const d of [-1, 1]) {
      const a = [...nums];
      let curr = start;
      let dir = d;
      while (curr >= 0 && curr < a.length) {
        if (a[curr] === 0) curr += dir;
        else {
          a[curr]--;
          dir = -dir;
          curr += dir;
        }
      }
      const valid = a.every((x) => x === 0);
      if (valid) count++;
      push(11, `Start ${start}, direction ${d === 1 ? "→" : "←"}: ${valid ? "zeros the array ✓ (count " + count + ")" : "leaves nonzeros ✗"}.`, {
        attempt: { start, dir: d },
        finalState: a,
        valid,
      });
    }
  }

  push(14, `Valid selections = ${count}.`, { answer: count });
  return steps;
}
