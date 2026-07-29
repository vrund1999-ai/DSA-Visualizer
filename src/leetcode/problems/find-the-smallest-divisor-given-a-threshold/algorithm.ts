import type { Step } from "@/core/types";

export interface DivisorData {
  nums: number[];
  threshold: number;
  lo: number;
  hi: number;
  mid: number | null;
  /** per-element ceil(n/mid) values */
  quotients: number[];
  cost: number | null;
  ok: boolean | null;
  answer: number | null;
}

export type DivisorStep = Step<DivisorData>;

/**
 * The division-sum cost decreases as the divisor grows, so we binary-search the divisor. For each
 * candidate we sum ceil(n / d) over the array and keep the smaller half whenever that sum stays within
 * the threshold. `line` indexes CODE.
 */
export function divisorSteps(nums: number[], threshold: number): DivisorStep[] {
  const steps: DivisorStep[] = [];
  let lo = 1;
  let hi = Math.max(...nums);

  const snap = (o: Partial<DivisorData>): DivisorData => ({ nums, threshold, lo, hi, mid: null, quotients: [], cost: null, ok: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DivisorData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Binary-search the smallest divisor whose Σceil(n/d) ≤ ${threshold}.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const quotients = nums.map((n) => Math.ceil(n / mid));
    const cost = quotients.reduce((a, b) => a + b, 0);
    const ok = cost <= threshold;
    push(6, `Divisor ${mid}: Σceil = ${cost} ${ok ? "≤" : ">"} ${threshold}.`, { mid, quotients, cost, ok });
    if (ok) {
      hi = mid;
      push(6, `Within threshold → try smaller (hi = ${hi}).`, { mid, quotients, cost, ok });
    } else {
      lo = mid + 1;
      push(7, `Over threshold → need larger divisor (lo = ${lo}).`, { mid, quotients, cost, ok });
    }
  }

  push(9, `Smallest valid divisor: ${lo}.`, { answer: lo });
  return steps;
}
