import type { Step } from "@/core/types";

export interface NextGreaterIIIData {
  digits: string[];
  /** pivot index (first digit from the right smaller than its successor) */
  pivot: number | null;
  /** index of the digit swapped with the pivot */
  swapWith: number | null;
  /** [start, end] range of the suffix being reversed */
  reverseRange: [number, number] | null;
  answer: number | null;
}

export type NextGreaterIIIStep = Step<NextGreaterIIIData>;

/**
 * Standard "next permutation" on the decimal digits: find the rightmost ascending
 * pivot, swap it with the smallest larger digit to its right, then reverse the suffix
 * to make it as small as possible. `line` indexes CODE.
 */
export function nextGreaterIIISteps(n: number): NextGreaterIIIStep[] {
  const steps: NextGreaterIIIStep[] = [];
  const d = String(n).split("");

  const snap = (o: Partial<NextGreaterIIIData>): NextGreaterIIIData => ({ digits: [...d], pivot: null, swapWith: null, reverseRange: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: NextGreaterIIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Find the next permutation of the digits of ${n}.`, snap({}));

  let i = d.length - 2;
  while (i >= 0 && d[i] >= d[i + 1]) i--;
  if (i < 0) {
    push(4, "Digits are in descending order — already the largest → -1.", snap({ answer: -1 }));
    return steps;
  }
  push(3, `Pivot at index ${i} (digit ${d[i]}): first drop from the right.`, snap({ pivot: i }));

  let j = d.length - 1;
  while (d[j] <= d[i]) j--;
  push(6, `Swap pivot with digit ${d[j]} at index ${j} (smallest larger).`, snap({ pivot: i, swapWith: j }));
  [d[i], d[j]] = [d[j], d[i]];
  push(7, `After swap: ${d.join("")}.`, snap({ pivot: i }));

  // reverse suffix after i
  let lo = i + 1;
  let hi = d.length - 1;
  const rangeStart = lo;
  const rangeEnd = hi;
  while (lo < hi) {
    [d[lo], d[hi]] = [d[hi], d[lo]];
    lo++;
    hi--;
  }
  push(8, `Reverse the suffix to its smallest order: ${d.join("")}.`, snap({ reverseRange: rangeStart <= rangeEnd ? [rangeStart, rangeEnd] : null }));

  const val = Number(d.join(""));
  const answer = val <= 2 ** 31 - 1 ? val : -1;
  push(10, answer === -1 ? "Overflows 32-bit range → -1." : `Next greater number: ${answer}.`, snap({ answer }));
  return steps;
}
