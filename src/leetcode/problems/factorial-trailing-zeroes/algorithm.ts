import type { Step } from "@/core/types";

export interface TrailingZeroesData {
  n: number;
  /** rows so far: power of 5, and how many multiples ≤ n it contributes */
  terms: { power: number; contribution: number }[];
  count: number;
  answer: number | null;
}

export type TrailingZeroesStep = Step<TrailingZeroesData>;

/**
 * Trailing zeros of n! equal the number of factors of 5 in it (factors of 2 are
 * always more plentiful). Legendre's formula sums ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …
 * `line` indexes CODE.
 */
export function trailingZeroesSteps(n: number): TrailingZeroesStep[] {
  const steps: TrailingZeroesStep[] = [];
  const terms: { power: number; contribution: number }[] = [];
  let count = 0;

  const snap = (o: Partial<TrailingZeroesData>): TrailingZeroesData => ({ n, terms: terms.map((t) => ({ ...t })), count, answer: null, ...o });
  const push = (line: number, explanation: string, data: TrailingZeroesData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, `Count factors of 5 in ${n}! — that's the number of trailing zeros.`, snap({}));

  for (let p = 5; p <= n; p *= 5) {
    const contribution = Math.floor(n / p);
    terms.push({ power: p, contribution });
    count += contribution;
    push(5, `⌊${n}/${p}⌋ = ${contribution} → running total ${count}.`, snap({}));
  }

  push(7, `${n}! ends in ${count} zero(s).`, snap({ answer: count }));
  return steps;
}
