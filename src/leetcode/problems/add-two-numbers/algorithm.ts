import type { Step } from "@/core/types";

export interface AddData {
  l1: number[];
  l2: number[];
  i: number;
  carry: number;
  result: number[];
  done: boolean;
}

export type AddStep = Step<AddData>;

/**
 * The lists store digits least-significant first, so we add position by position
 * exactly like grade-school addition, carrying into the next node. `line`
 * indexes CODE.
 */
export function addTwoNumbersSteps(l1: number[], l2: number[]): AddStep[] {
  const steps: AddStep[] = [];
  const result: number[] = [];
  let carry = 0;

  const snap = (o: Partial<AddData>): AddData => ({
    l1: [...l1],
    l2: [...l2],
    i: 0,
    carry,
    result: [...result],
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: AddData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { carry: data.carry } });
  };

  push(2, "Digits are stored least-significant first — add column by column with a carry.", snap({}));

  let i = 0;
  const n = Math.max(l1.length, l2.length);
  while (i < n || carry) {
    const a = l1[i] ?? 0;
    const b = l2[i] ?? 0;
    const sum = a + b + carry;
    const digit = sum % 10;
    const nextCarry = Math.floor(sum / 10);
    result.push(digit);
    push(6, `${a} + ${b} + carry ${carry} = ${sum} → write ${digit}, carry ${nextCarry}.`, snap({ i, carry: nextCarry, result: [...result] }));
    carry = nextCarry;
    i++;
  }

  push(10, `Result digits (least-significant first): ${result.join(", ")}.`, snap({ i: n, done: true }));
  return steps;
}
