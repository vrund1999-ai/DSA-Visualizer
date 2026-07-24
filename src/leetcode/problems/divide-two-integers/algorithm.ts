import type { Step } from "@/core/types";

export interface DivideData {
  dividend: number;
  divisor: number;
  neg: boolean;
  /** current remainder */
  a: number;
  /** doubled divisor for the current chunk */
  temp: number | null;
  /** multiple that temp represents */
  multiple: number | null;
  quotient: number;
  answer: number | null;
}

export type DivideStep = Step<DivideData>;

/**
 * Division by repeated doubling: find the largest shift where divisor·2^k still fits
 * in the remainder, subtract it, add 2^k to the quotient, and repeat. This is O(log²)
 * and avoids the * / % operators. `line` indexes CODE.
 */
export function divideSteps(dividend: number, divisor: number): DivideStep[] {
  const steps: DivideStep[] = [];
  const neg = dividend < 0 !== divisor < 0;
  let a = Math.abs(dividend);
  const b = Math.abs(divisor);
  let quotient = 0;

  const snap = (o: Partial<DivideData>): DivideData => ({ dividend, divisor, neg, a, temp: null, multiple: null, quotient, answer: null, ...o });
  const push = (line: number, explanation: string, data: DivideData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, `Divide ${Math.abs(dividend)} by ${b} using doubling.`, snap({}));

  while (a >= b) {
    let temp = b;
    let multiple = 1;
    while (a >= temp * 2) {
      temp *= 2;
      multiple *= 2;
      push(7, `Double: ${b}×${multiple} = ${temp} still ≤ ${a}.`, snap({ temp, multiple }));
    }
    a -= temp;
    quotient += multiple;
    push(9, `Subtract ${temp}; quotient += ${multiple} → ${quotient}, remainder ${a}.`, snap({ temp, multiple }));
  }

  const answer = neg ? -quotient : quotient;
  push(11, `${dividend} / ${divisor} = ${answer}.`, snap({ answer }));
  return steps;
}
