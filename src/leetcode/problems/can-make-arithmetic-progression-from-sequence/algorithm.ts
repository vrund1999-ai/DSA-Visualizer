import type { Step } from "@/core/types";

export interface ArithProgData {
  arr: number[];
  d: number | null;
  /** the pair (i-1, i) being checked */
  i: number | null;
  /** difference of the current pair */
  gap: number | null;
  ok: boolean | null;
  answer: boolean | null;
}

export type ArithProgStep = Step<ArithProgData>;

/**
 * A set can form an arithmetic progression iff, once sorted, every adjacent difference equals
 * the first one. Sorting fixes the only possible order, then a single scan verifies the common
 * difference d = arr[1] - arr[0]. `line` indexes CODE.
 */
export function arithProgSteps(input: number[]): ArithProgStep[] {
  const steps: ArithProgStep[] = [];
  const arr = [...input].sort((a, b) => a - b);

  const snap = (o: Partial<ArithProgData>): ArithProgData => ({ arr, d: null, i: null, gap: null, ok: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ArithProgData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort the values: [${arr.join(", ")}].`);

  if (arr.length <= 2) {
    push(6, "Two or fewer elements always form a progression → true.", { answer: true });
    return steps;
  }

  const d = arr[1] - arr[0];
  push(2, `Common difference must be d = ${arr[1]} − ${arr[0]} = ${d}.`, { d });

  for (let i = 2; i < arr.length; i++) {
    const gap = arr[i] - arr[i - 1];
    const ok = gap === d;
    push(4, `${arr[i]} − ${arr[i - 1]} = ${gap} ${ok ? "= d ✓" : "≠ d ✗"}.`, { d, i, gap, ok });
    if (!ok) {
      push(5, `Difference ${gap} breaks the progression → false.`, { d, i, gap, ok: false, answer: false });
      return steps;
    }
  }

  push(6, "Every adjacent difference equals d → true.", { d, answer: true });
  return steps;
}
