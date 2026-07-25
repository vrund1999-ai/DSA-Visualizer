import type { Step } from "@/core/types";

export interface RepeatedData {
  s: string;
  /** candidate pattern length */
  len: number | null;
  /** whether n is divisible by len */
  divides: boolean | null;
  /** whether repeating the pattern reproduces s */
  matches: boolean | null;
  answer: boolean | null;
}

export type RepeatedStep = Step<RepeatedData>;

/**
 * If s is built from a repeated block, that block's length divides n and lies in [1, n/2]. We test
 * each divisor length: tile the prefix of that length across n and check it reproduces s exactly.
 * `line` indexes CODE.
 */
export function repeatedSteps(s: string): RepeatedStep[] {
  const steps: RepeatedStep[] = [];
  const n = s.length;

  const snap = (o: Partial<RepeatedData>): RepeatedData => ({ s, len: null, divides: null, matches: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RepeatedData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Try every prefix length that divides n as the repeating block.");

  for (let len = 1; len <= n / 2; len++) {
    if (n % len !== 0) {
      push(3, `len ${len}: ${n} % ${len} ≠ 0 → can't tile evenly, skip.`, { len, divides: false });
      continue;
    }
    const pattern = s.slice(0, len);
    const matches = pattern.repeat(n / len) === s;
    if (matches) {
      push(6, `len ${len}: "${pattern}" repeated ${n / len}× equals s → true.`, { len, divides: true, matches: true, answer: true });
      return steps;
    }
    push(5, `len ${len}: "${pattern}" repeated ${n / len}× ≠ s.`, { len, divides: true, matches: false });
  }

  push(8, "No repeating block reproduces s → false.", { answer: false });
  return steps;
}
