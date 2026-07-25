import type { Step } from "@/core/types";

export interface BalancedData {
  n: number;
  candidate: number | null;
  /** [digit, count] pairs for the candidate */
  counts: [string, number][];
  /** the digit whose count breaks balance, if any */
  badDigit: string | null;
  balanced: boolean | null;
  answer: number | null;
}

export type BalancedStep = Step<BalancedData>;

const MAX_STEPS = 400;

/**
 * A numerically balanced number contains each digit d exactly d times (so it never contains 0).
 * We scan upward from n+1, tallying digits of each candidate and accepting the first whose every
 * digit's count equals its value. `line` indexes CODE.
 */
export function balancedSteps(n: number): BalancedStep[] {
  const steps: BalancedStep[] = [];

  const snap = (o: Partial<BalancedData>): BalancedData => ({ n, candidate: null, counts: [], badDigit: null, balanced: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BalancedData> = {}) => {
    if (steps.length >= MAX_STEPS && o.answer === undefined) return;
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Scan upward from ${n + 1} for a number where each digit d appears exactly d times.`);

  for (let x = n + 1; ; x++) {
    const count = new Map<string, number>();
    for (const d of String(x)) count.set(d, (count.get(d) ?? 0) + 1);
    const counts = [...count.entries()].sort();
    let badDigit: string | null = null;
    for (const [d, c] of counts) if (Number(d) !== c) { badDigit = d; break; }
    if (badDigit === null) {
      push(7, `${x}: every digit d occurs d times → balanced. Answer.`, { candidate: x, counts, balanced: true, answer: x });
      return steps;
    }
    push(6, `${x}: digit '${badDigit}' occurs ${count.get(badDigit)} ≠ ${badDigit} → skip.`, { candidate: x, counts, badDigit, balanced: false });
  }
}
