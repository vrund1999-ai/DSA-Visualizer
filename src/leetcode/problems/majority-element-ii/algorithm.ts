import type { Highlight, Step } from "@/core/types";

export interface MajorityIIData {
  nums: number[];
  i: number | null;
  c1: number | null;
  n1: number;
  c2: number | null;
  n2: number;
  result: number[] | null;
}

export type MajorityIIStep = Step<MajorityIIData>;

/**
 * At most two values can exceed n/3, so extended Boyer–Moore tracks two
 * candidates and counters. A value matching a candidate boosts it; an empty slot
 * adopts it; otherwise both counters decrement. A verification pass confirms the
 * survivors. `line` indexes CODE.
 */
export function majorityIISteps(nums: number[]): MajorityIIStep[] {
  const steps: MajorityIIStep[] = [];
  let c1: number | null = null;
  let c2: number | null = null;
  let n1 = 0;
  let n2 = 0;

  const snap = (o: Partial<MajorityIIData>): MajorityIIData => ({
    nums: [...nums],
    i: null,
    c1,
    n1,
    c2,
    n2,
    result: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: MajorityIIData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Track up to two candidates that could each exceed n/3.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const mark: Highlight[] = [{ ref: i, role: "current" }];
    if (x === c1) {
      n1++;
      push(3, `${x} matches candidate 1 — count1 = ${n1}.`, snap({ i }), mark);
    } else if (x === c2) {
      n2++;
      push(4, `${x} matches candidate 2 — count2 = ${n2}.`, snap({ i }), mark);
    } else if (n1 === 0) {
      c1 = x;
      n1 = 1;
      push(5, `Slot 1 empty — adopt ${x} as candidate 1.`, snap({ i }), mark);
    } else if (n2 === 0) {
      c2 = x;
      n2 = 1;
      push(6, `Slot 2 empty — adopt ${x} as candidate 2.`, snap({ i }), mark);
    } else {
      n1--;
      n2--;
      push(7, `${x} differs from both — decrement both counters.`, snap({ i }), mark);
    }
  }

  const result = [c1, c2].filter((c): c is number => c !== null && nums.filter((x) => x === c).length > nums.length / 3);
  push(10, `Verified majority elements (> n/3): [${result.join(", ")}].`, snap({ result }), nums.map((v, k) => ({ ref: k, role: result.includes(v) ? "target" : "default" }) as Highlight));
  return steps;
}
