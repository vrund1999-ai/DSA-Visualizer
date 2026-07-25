import type { Step } from "@/core/types";

export interface PermSeqData {
  n: number;
  k: number;
  /** remaining available digits */
  available: number[];
  /** k value remaining (0-indexed) */
  remaining: number;
  /** block size = (i-1)! */
  blockSize: number | null;
  /** index picked this step */
  pickedIndex: number | null;
  res: string;
  answer: string | null;
}

export type PermSeqStep = Step<PermSeqData>;

/**
 * The first digit changes every (n−1)! permutations, so ⌊k/(n−1)!⌋ selects it; remove
 * that digit and recurse on the remainder. This is reading k in the factorial number
 * system. `line` indexes CODE.
 */
export function permSeqSteps(n: number, k: number): PermSeqStep[] {
  const steps: PermSeqStep[] = [];
  const fact = [1];
  for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
  const available = Array.from({ length: n }, (_, i) => i + 1);
  let rem = k - 1;
  let res = "";

  const snap = (o: Partial<PermSeqData>): PermSeqData => ({ n, k, available: [...available], remaining: rem, blockSize: null, pickedIndex: null, res, answer: null, ...o });
  const push = (line: number, explanation: string, data: PermSeqData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(5, `Find the ${k}th permutation of 1..${n} (0-indexed k = ${rem}).`, snap({}));

  for (let i = n; i >= 1; i--) {
    const blockSize = fact[i - 1];
    const idx = Math.floor(rem / blockSize);
    const digit = available[idx];
    push(7, `Block size ${blockSize}; pick index ${idx} → digit ${digit}.`, snap({ blockSize, pickedIndex: idx }));
    res += digit;
    available.splice(idx, 1);
    rem %= blockSize;
  }

  push(12, `Permutation: ${res}.`, snap({ answer: res }));
  return steps;
}
