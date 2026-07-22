import type { Step } from "@/core/types";

export interface AddBinaryInput {
  a: string;
  b: string;
}

export interface AddBinaryData {
  a: string[];
  b: string[];
  i: number;
  j: number;
  carry: number;
  result: string[];
  done: boolean;
}

export type AddBinaryStep = Step<AddBinaryData>;

/**
 * Grade-school binary addition from the least-significant bit: add the two bits
 * plus the carry, write sum % 2, carry sum >> 1. `line` indexes CODE.
 */
export function addBinarySteps(input: AddBinaryInput): AddBinaryStep[] {
  const a = [...input.a];
  const b = [...input.b];
  const steps: AddBinaryStep[] = [];
  const res: string[] = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  const snap = (o: Partial<AddBinaryData>): AddBinaryData => ({
    a: [...a],
    b: [...b],
    i,
    j,
    carry,
    result: [...res].reverse(),
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: AddBinaryData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { carry: data.carry } });
  };

  push(2, "Add bit by bit from the right, tracking a carry.", snap({}));

  while (i >= 0 || j >= 0 || carry) {
    const av = i >= 0 ? Number(a[i]) : 0;
    const bv = j >= 0 ? Number(b[j]) : 0;
    const sum = av + bv + carry;
    res.push(String(sum % 2));
    const newCarry = sum >> 1;
    push(5, `${av} + ${bv} + carry ${carry} = ${sum} → write ${sum % 2}, carry ${newCarry}.`, snap({ result: [...res].reverse() }));
    carry = newCarry;
    i--;
    j--;
  }

  push(8, `Binary sum is ${[...res].reverse().join("")}.`, snap({ done: true }));
  return steps;
}
