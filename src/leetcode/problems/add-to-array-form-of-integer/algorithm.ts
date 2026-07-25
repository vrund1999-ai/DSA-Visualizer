import type { Step } from "@/core/types";

export interface AddArrayData {
  num: number[];
  k: number;
  /** index in num currently being consumed */
  i: number | null;
  carry: number;
  /** result digits, least-significant first while building */
  res: number[];
  answer: number[] | null;
}

export type AddArrayStep = Step<AddArrayData>;

/**
 * Treat the whole addend k as the initial carry, then walk num from its least-significant
 * digit: each step folds one digit into carry, emits carry % 10, and keeps carry / 10 —
 * exactly grade-school addition. The result is built reversed, then flipped. `line` indexes CODE.
 */
export function addArraySteps(num: number[], k: number): AddArrayStep[] {
  const steps: AddArrayStep[] = [];
  const res: number[] = [];
  let i = num.length - 1;
  let carry = k;

  const snap = (o: Partial<AddArrayData>): AddArrayData => ({ num, k, i: null, carry, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<AddArrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Seed carry with the entire addend k = ${k}, then add num's digits.`, { i });

  while (i >= 0 || carry > 0) {
    if (i >= 0) {
      carry += num[i];
      push(5, `Add digit ${num[i]} → carry = ${carry}.`, { i });
      i--;
    }
    const digit = carry % 10;
    res.push(digit);
    carry = Math.floor(carry / 10);
    push(7, `Emit ${digit}; keep carry = ${carry}.`, { i: i >= 0 ? i : null });
  }

  const answer = [...res].reverse();
  push(9, `Reverse to get [${answer.join(", ")}].`, { answer });
  return steps;
}
