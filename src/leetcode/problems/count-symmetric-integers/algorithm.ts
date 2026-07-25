import type { Step } from "@/core/types";

export interface SymmetricData {
  low: number;
  high: number;
  x: number | null;
  digits: string;
  leftSum: number | null;
  rightSum: number | null;
  symmetric: boolean | null;
  count: number;
  answer: number | null;
}

export type SymmetricStep = Step<SymmetricData>;

const sumDigits = (s: string) => s.split("").reduce((a, c) => a + Number(c), 0);

/**
 * A symmetric integer has an even number of digits whose first half sums to the same value as its
 * second half. We scan the range, skip odd-length numbers, and compare the two halves' digit sums.
 * `line` indexes CODE.
 */
export function symmetricSteps(low: number, high: number): SymmetricStep[] {
  const steps: SymmetricStep[] = [];
  let count = 0;

  const snap = (o: Partial<SymmetricData>): SymmetricData => ({ low, high, x: null, digits: "", leftSum: null, rightSum: null, symmetric: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SymmetricData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count integers in [${low}, ${high}] whose two digit-halves sum equally.`);

  for (let x = low; x <= high; x++) {
    const s = String(x);
    if (s.length % 2 !== 0) {
      push(4, `${x} has an odd digit count → skip.`, { x, digits: s });
      continue;
    }
    const h = s.length / 2;
    const leftSum = sumDigits(s.slice(0, h));
    const rightSum = sumDigits(s.slice(h));
    const symmetric = leftSum === rightSum;
    if (symmetric) count++;
    push(8, `${x}: left ${leftSum} ${symmetric ? "=" : "≠"} right ${rightSum} → ${symmetric ? "symmetric ✓" : "no"} (count ${count}).`, { x, digits: s, leftSum, rightSum, symmetric });
  }

  push(10, `Symmetric integers in range: ${count}.`, { answer: count });
  return steps;
}
