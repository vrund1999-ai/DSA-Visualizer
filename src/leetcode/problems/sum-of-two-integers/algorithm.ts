import type { Step } from "@/core/types";

export interface SumBitsData {
  origA: number;
  origB: number;
  a: number;
  b: number;
  carry: number | null;
  answer: number | null;
}

export type SumBitsStep = Step<SumBitsData>;

/**
 * Add without '+': a ^ b sums the bits ignoring carries, while (a & b) << 1 is exactly
 * the carry. Repeat, feeding the carry back in as b, until no carry remains. `line`
 * indexes CODE.
 */
export function sumBitsSteps(a: number, b: number): SumBitsStep[] {
  const steps: SumBitsStep[] = [];
  const origA = a;
  const origB = b;

  const snap = (o: Partial<SumBitsData>): SumBitsData => ({ origA, origB, a, b, carry: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: SumBitsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Add ${origA} + ${origB} using XOR (sum) and AND<<1 (carry).`, snap({}));

  while (b !== 0) {
    const carry = (a & b) << 1;
    const newA = a ^ b;
    push(4, `carry = (${a} & ${b})<<1 = ${carry}; a = ${a}^${b} = ${newA}.`, snap({ carry }));
    a = newA;
    b = carry;
  }

  push(6, `Sum: ${a}.`, snap({ answer: a }));
  return steps;
}
