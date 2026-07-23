import type { Highlight, Step } from "@/core/types";

export interface ThirdMaxData {
  nums: number[];
  i: number | null;
  a: number;
  b: number;
  c: number;
  answer: number | null;
}

export type ThirdMaxStep = Step<ThirdMaxData>;

const NEG = -Infinity;
const show = (v: number) => (v === NEG ? "−∞" : String(v));

/**
 * Track the top three distinct values (a > b > c) in one pass, shifting them down
 * whenever a new larger distinct value arrives. If a third distinct exists, it's
 * the answer; otherwise the maximum is. `line` indexes CODE.
 */
export function thirdMaxSteps(nums: number[]): ThirdMaxStep[] {
  const steps: ThirdMaxStep[] = [];
  let a = NEG;
  let b = NEG;
  let c = NEG;
  let answer: number | null = null;

  const snap = (o: Partial<ThirdMaxData>): ThirdMaxData => ({ nums: [...nums], i: null, a, b, c, answer, ...o });
  const push = (line: number, explanation: string, data: ThirdMaxData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Track the three largest distinct values: a > b > c.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x === a || x === b || x === c) {
      push(3, `${x} already among the top three — skip.`, snap({ i }), [{ ref: i, role: "visited" }]);
      continue;
    }
    if (x > a) {
      [a, b, c] = [x, a, b];
      push(4, `${x} is the new max — shift: a=${show(a)}, b=${show(b)}, c=${show(c)}.`, snap({ i }), [{ ref: i, role: "target" }]);
    } else if (x > b) {
      [b, c] = [x, b];
      push(5, `${x} is the new 2nd — b=${show(b)}, c=${show(c)}.`, snap({ i }), [{ ref: i, role: "current" }]);
    } else if (x > c) {
      c = x;
      push(6, `${x} is the new 3rd — c=${show(c)}.`, snap({ i }), [{ ref: i, role: "current" }]);
    } else {
      push(6, `${x} isn't in the top three — ignore.`, snap({ i }), [{ ref: i, role: "visited" }]);
    }
  }

  answer = c > NEG ? c : a;
  push(8, c > NEG ? `A distinct 3rd maximum exists — return ${c}.` : `Fewer than 3 distinct values — return the max ${a}.`, snap({ i: null, answer }), []);
  return steps;
}
