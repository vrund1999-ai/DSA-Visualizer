import type { Step } from "@/core/types";

export interface PowerOfTwoData {
  n: number;
  bitsN: number[];
  bitsNMinus1: number[];
  bitsAnd: number[];
  width: number;
  result: boolean | null;
}

export type PowerOfTwoStep = Step<PowerOfTwoData>;

/**
 * A positive power of two has exactly one set bit, so subtracting 1 flips that
 * bit and all zeros below it; ANDing the two gives 0 precisely when there was a
 * single bit. `line` indexes CODE.
 */
export function powerOfTwoSteps(n: number): PowerOfTwoStep[] {
  const steps: PowerOfTwoStep[] = [];
  const width = 8;
  const bitsOf = (v: number) => Array.from({ length: width }, (_, b) => (v >> (width - 1 - b)) & 1);

  const snap = (result: boolean | null): PowerOfTwoData => ({
    n,
    bitsN: bitsOf(n),
    bitsNMinus1: bitsOf(n - 1),
    bitsAnd: bitsOf(n & (n - 1)),
    width,
    result,
  });
  const push = (line: number, explanation: string, data: PowerOfTwoData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (n <= 0) {
    push(1, `${n} ≤ 0 — not a power of two.`, snap(false));
    return steps;
  }

  push(0, `Test ${n} (${n.toString(2)}).`, snap(null));
  push(2, `n − 1 = ${n - 1} (${(n - 1).toString(2)}); n & (n−1) = ${n & (n - 1)}.`, snap(null));
  const result = (n & (n - 1)) === 0;
  push(2, result ? `Result is 0 — ${n} has one set bit, so it's a power of two.` : `Result is nonzero — ${n} has multiple set bits, not a power of two.`, snap(result));
  return steps;
}
