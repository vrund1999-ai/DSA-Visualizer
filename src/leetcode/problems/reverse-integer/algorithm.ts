import type { Highlight, Step } from "@/core/types";

export interface ReverseIntData {
  inputDigits: string[];
  outputDigits: string[];
  poppedCount: number;
  sign: number;
  res: number;
  overflow: boolean;
  done: boolean;
}

export type ReverseIntStep = Step<ReverseIntData>;

const LIMIT = 2 ** 31 - 1;

/**
 * Peel the last digit off n (n % 10) and push it onto res (res*10 + digit),
 * which builds the reversed number. A result beyond the signed 32-bit range
 * returns 0. `line` indexes CODE.
 */
export function reverseIntSteps(x: number): ReverseIntStep[] {
  const steps: ReverseIntStep[] = [];
  const sign = Math.sign(x);
  const inputDigits = String(Math.abs(x)).split("");
  let n = Math.abs(x);
  let res = 0;
  let poppedCount = 0;
  const output: string[] = [];

  const snap = (o: Partial<ReverseIntData>): ReverseIntData => ({
    inputDigits: [...inputDigits],
    outputDigits: [...output],
    poppedCount,
    sign,
    res,
    overflow: false,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: ReverseIntData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, `Reverse ${x}: pop digits off the right, push them onto the result.`, snap({}), []);

  while (n > 0) {
    const digit = n % 10;
    res = res * 10 + digit;
    output.push(String(digit));
    poppedCount++;
    // Rightmost not-yet-popped index in the input.
    const idx = inputDigits.length - poppedCount;
    push(4, `Pop ${digit}; result becomes ${res}.`, snap({ res, poppedCount }), [
      { ref: `in${idx}`, role: "current" },
      { ref: `out${output.length - 1}`, role: "sorted" },
    ]);
    n = Math.floor(n / 10);
  }

  if (res > LIMIT) {
    push(7, `Result ${res} exceeds the 32-bit limit ${LIMIT} — return 0.`, snap({ res, overflow: true, done: true }), []);
    return steps;
  }

  push(8, `Reversed value is ${sign * res}.`, snap({ res, done: true }), []);
  return steps;
}
