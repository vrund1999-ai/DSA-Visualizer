import type { Step } from "@/core/types";

export interface TwoKeysData {
  n: number;
  /** remaining value being factored */
  remaining: number;
  /** prime factors extracted so far */
  factors: number[];
  d: number | null;
  ops: number;
  answer: number | null;
}

export type TwoKeysStep = Step<TwoKeysData>;

/**
 * Building n 'A's from a group of size g by one Copy-All plus (n/g − 1) Pastes costs n/g operations, so
 * factoring n into primes and summing them minimizes the total: each prime factor p contributes exactly p
 * operations. `line` indexes CODE.
 */
export function twoKeysSteps(n: number): TwoKeysStep[] {
  const steps: TwoKeysStep[] = [];
  const factors: number[] = [];
  let remaining = n;
  let ops = 0;

  const snap = (o: Partial<TwoKeysData>): TwoKeysData => ({ n, remaining, factors: [...factors], d: null, ops, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TwoKeysData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Minimum operations to type ${n} 'A's = sum of ${n}'s prime factors.`);

  if (n === 1) {
    push(8, "n = 1 needs no operations.", { answer: 0 });
    return steps;
  }

  for (let d = 2; remaining > 1; d++) {
    while (remaining % d === 0) {
      ops += d;
      remaining /= d;
      factors.push(d);
      push(4, `${d} divides in: add ${d} operations (Copy + ${d - 1} Paste). Remaining ${remaining}.`, { d });
    }
  }

  push(8, `Prime factors ${factors.join(" + ")} = ${ops} operations.`, { answer: ops });
  return steps;
}
