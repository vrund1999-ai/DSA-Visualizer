import type { Step } from "@/core/types";

export interface PrefixCommonData {
  A: number[];
  B: number[];
  i: number | null;
  /** values seen in both prefixes so far */
  common: number[];
  res: number[];
  answer: number[] | null;
}

export type PrefixCommonStep = Step<PrefixCommonData>;

/**
 * A value is "common" at position i once it has appeared in both prefixes. Counting how many times each
 * value has been seen across the two arrays, it becomes common exactly when its count hits 2, so a single
 * running total tracks the intersection size. `line` indexes CODE.
 */
export function prefixCommonSteps(A: number[], B: number[]): PrefixCommonStep[] {
  const steps: PrefixCommonStep[] = [];
  const count = new Map<number, number>();
  const res: number[] = [];
  const commonSet = new Set<number>();

  const snap = (o: Partial<PrefixCommonData>): PrefixCommonData => ({ A, B, i: null, common: [...commonSet], res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PrefixCommonData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "A value counts as common once it has appeared in both prefixes (its count reaches 2).");

  let common = 0;
  for (let i = 0; i < A.length; i++) {
    count.set(A[i], (count.get(A[i]) || 0) + 1);
    if (count.get(A[i]) === 2) {
      common++;
      commonSet.add(A[i]);
    }
    count.set(B[i], (count.get(B[i]) || 0) + 1);
    if (count.get(B[i]) === 2) {
      common++;
      commonSet.add(B[i]);
    }
    res.push(common);
    push(8, `i=${i}: prefixes now share ${common} value(s) {${[...commonSet].join(", ")}}.`, { i });
  }

  push(10, `Prefix common array: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
