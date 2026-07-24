import type { Highlight, Step } from "@/core/types";

export interface SetMismatchData {
  nums: number[];
  i: number | null;
  seen: number[];
  dup: number;
  sum: number;
  missing: number | null;
}

export type SetMismatchStep = Step<SetMismatchData>;

/**
 * One value from 1..n is duplicated in place of another. A hash set catches the
 * duplicate; the missing value is recovered by comparing the actual sum (minus
 * the duplicate's extra copy) against the expected 1..n sum. `line` indexes CODE.
 */
export function setMismatchSteps(nums: number[]): SetMismatchStep[] {
  const steps: SetMismatchStep[] = [];
  const seen = new Set<number>();
  let dup = -1;
  let sum = 0;

  const snap = (o: Partial<SetMismatchData>): SetMismatchData => ({ nums: [...nums], i: null, seen: [...seen], dup, sum, missing: null, ...o });
  const push = (line: number, explanation: string, data: SetMismatchData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, "Find the duplicate via a set; recover the missing value from the sum.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (seen.has(x)) {
      dup = x;
      push(4, `${x} was already seen — it's the duplicate.`, snap({ i, dup: x }), [{ ref: i, role: "swapped" }]);
    } else {
      push(5, `First time seeing ${x}.`, snap({ i }), [{ ref: i, role: "current" }]);
    }
    seen.add(x);
    sum += x;
  }

  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const missing = expected - (sum - dup);
  push(9, `Expected sum ${expected}, actual (minus dup) ${sum - dup} → missing ${missing}.`, snap({ i: null, missing }), []);
  push(10, `Duplicate ${dup}, missing ${missing}.`, snap({ i: null, missing }), []);
  return steps;
}
