import type { Highlight, Step } from "@/core/types";

export interface PlusOneData {
  digits: number[];
  i: number | null;
  carryOut: boolean;
}

export type PlusOneStep = Step<PlusOneData>;

/**
 * Add one to a number stored as digits: from the right, a digit below 9 just
 * increments and we're done; a 9 becomes 0 and carries left. If every digit was
 * 9, prepend a leading 1. `line` indexes CODE.
 */
export function plusOneSteps(input: number[]): PlusOneStep[] {
  const digits = [...input];
  const steps: PlusOneStep[] = [];

  const snap = (o: Partial<PlusOneData>): PlusOneData => ({ digits: [...digits], i: null, carryOut: false, ...o });
  const push = (line: number, explanation: string, data: PlusOneData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(0, "Add 1 to the number, propagating any carry from the right.", snap({ i: digits.length - 1 }), []);

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      push(3, `digit ${i} was < 9 — increment to ${digits[i]}, no carry. Done.`, snap({ i }), [{ ref: i, role: "target" }]);
      return steps;
    }
    digits[i] = 0;
    push(6, `digit ${i} was 9 — set to 0 and carry left.`, snap({ i }), [{ ref: i, role: "swapped" }]);
  }

  digits.unshift(1);
  push(8, "Every digit was 9 — prepend a leading 1.", snap({ i: 0, carryOut: true }), [{ ref: 0, role: "target" }]);
  return steps;
}
