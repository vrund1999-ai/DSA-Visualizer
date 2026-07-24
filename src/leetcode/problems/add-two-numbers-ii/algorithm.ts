import type { Step } from "@/core/types";

export interface AddTwoII {
  l1: number[];
  l2: number[];
  s1: number[];
  s2: number[];
  a: number | null;
  b: number | null;
  carry: number;
  result: number[];
}

export type AddTwoIIStep = Step<AddTwoII>;

/**
 * The lists store the most-significant digit first, so we can't walk them tail to
 * head directly. Push both onto stacks, then pop (giving least-significant first),
 * add with carry, and prepend each digit to the result. `line` indexes CODE.
 */
export function addTwoNumbersIISteps(l1: number[], l2: number[]): AddTwoIIStep[] {
  const steps: AddTwoIIStep[] = [];
  const s1 = [...l1];
  const s2 = [...l2];
  let carry = 0;
  const result: number[] = [];

  const snap = (o: Partial<AddTwoII>): AddTwoII => ({ l1, l2, s1: [...s1], s2: [...s2], a: null, b: null, carry, result: [...result], ...o });
  const push = (line: number, explanation: string, data: AddTwoII) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Push both lists onto stacks so we can read the least-significant digit first.", snap({}));

  while (s1.length || s2.length || carry) {
    const a = s1.length ? s1.pop()! : 0;
    const b = s2.length ? s2.pop()! : 0;
    const sum = a + b + carry;
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
    push(11, `${a} + ${b} + carry = ${sum} → write ${sum % 10}, carry ${carry}.`, snap({ a, b }));
  }

  push(13, `Sum: ${result.join("")}.`, snap({}));
  return steps;
}
