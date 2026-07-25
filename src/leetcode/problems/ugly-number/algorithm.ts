import type { Step } from "@/core/types";

export interface UglyData {
  n: number;
  /** reduction chain: value and factor divided out */
  chain: { value: number; factor: number }[];
  current: number;
  factor: number | null;
  answer: boolean | null;
}

export type UglyStep = Step<UglyData>;

/**
 * An ugly number's only prime factors are 2, 3, and 5. Repeatedly divide those out; if
 * the leftover is 1, every factor was allowed. `line` indexes CODE.
 */
export function uglySteps(n: number): UglyStep[] {
  const steps: UglyStep[] = [];
  const chain: { value: number; factor: number }[] = [];

  const snap = (current: number, o: Partial<UglyData>): UglyData => ({ n, chain: chain.map((c) => ({ ...c })), current, factor: null, answer: null, ...o });
  const push = (line: number, explanation: string, current: number, o: Partial<UglyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current, o), highlights: [] });
  };

  if (n <= 0) {
    push(1, `${n} ≤ 0 — not ugly.`, n, { answer: false });
    return steps;
  }

  push(2, `Strip factors 2, 3, 5 from ${n}.`, n);

  let cur = n;
  for (const f of [2, 3, 5]) {
    while (cur % f === 0) {
      cur /= f;
      chain.push({ value: cur, factor: f });
      push(3, `Divide by ${f} → ${cur}.`, cur, { factor: f });
    }
  }

  const answer = cur === 1;
  push(5, cur === 1 ? "Reduced to 1 → ugly." : `Leftover ${cur} has another prime factor → not ugly.`, cur, { answer });
  return steps;
}
