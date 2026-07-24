import type { Step } from "@/core/types";

export interface AddStringsInput {
  a: string;
  b: string;
}

export interface AddStringsData {
  a: string[];
  b: string[];
  i: number;
  j: number;
  carry: number;
  result: string[];
  done: boolean;
}

export type AddStringsStep = Step<AddStringsData>;

/**
 * Grade-school decimal addition from the least-significant digit: add the two
 * digits plus the carry, write sum % 10, carry sum / 10 — all without converting
 * to numbers. `line` indexes CODE.
 */
export function addStringsSteps(input: AddStringsInput): AddStringsStep[] {
  const a = [...input.a];
  const b = [...input.b];
  const steps: AddStringsStep[] = [];
  const res: string[] = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  const snap = (o: Partial<AddStringsData>): AddStringsData => ({ a: [...a], b: [...b], i, j, carry, result: [...res].reverse(), done: false, ...o });
  const push = (line: number, explanation: string, data: AddStringsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { carry: data.carry } });
  };

  push(2, "Add digit by digit from the right, tracking a carry.", snap({}));

  while (i >= 0 || j >= 0 || carry) {
    const av = i >= 0 ? Number(a[i]) : 0;
    const bv = j >= 0 ? Number(b[j]) : 0;
    const sum = av + bv + carry;
    res.push(String(sum % 10));
    const newCarry = Math.floor(sum / 10);
    push(5, `${av} + ${bv} + carry ${carry} = ${sum} → write ${sum % 10}, carry ${newCarry}.`, snap({ result: [...res].reverse() }));
    carry = newCarry;
    i--;
    j--;
  }

  push(8, `Sum is ${[...res].reverse().join("")}.`, snap({ done: true }));
  return steps;
}
