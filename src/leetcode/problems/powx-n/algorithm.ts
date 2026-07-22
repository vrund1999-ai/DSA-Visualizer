import type { Step } from "@/core/types";

export interface PowInput {
  x: number;
  n: number;
}

export interface PowData {
  base: number;
  exp: number;
  result: number;
  bit: number | null;
  done: boolean;
}

export type PowStep = Step<PowData>;

const round = (v: number) => Math.round(v * 1e6) / 1e6;

/**
 * Exponentiation by squaring: read the exponent's binary bits low to high,
 * squaring the base each step and multiplying it into the result whenever the
 * current bit is 1. This is O(log n) instead of O(n). `line` indexes CODE.
 */
export function powSteps(input: PowInput): PowStep[] {
  const steps: PowStep[] = [];
  let x = input.x;
  let n = input.n;
  let result = 1;

  const snap = (o: Partial<PowData>): PowData => ({ base: round(x), exp: n, result: round(result), bit: null, done: false, ...o });
  const push = (line: number, explanation: string, data: PowData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (n < 0) {
    x = 1 / x;
    n = -n;
    push(1, `Negative exponent — invert the base to ${round(x)} and use |n| = ${n}.`, snap({}));
  }

  push(2, "Multiply the base into the result on each 1-bit while squaring it.", snap({}));

  while (n > 0) {
    const bit = n & 1;
    if (bit) {
      result *= x;
      push(4, `Bit is 1 — multiply into result → ${round(result)}.`, snap({ bit }));
    } else {
      push(4, `Bit is 0 — skip the multiply.`, snap({ bit }));
    }
    x *= x;
    n >>= 1;
    push(6, `Square the base → ${round(x)}; shift exponent → ${n}.`, snap({}));
  }

  push(8, `Result = ${round(result)}.`, snap({ done: true }));
  return steps;
}
