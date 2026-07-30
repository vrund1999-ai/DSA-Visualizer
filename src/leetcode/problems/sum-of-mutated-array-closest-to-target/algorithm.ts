import type { Step } from "@/core/types";

export interface MutatedData {
  arr: number[];
  target: number;
  lo: number;
  hi: number;
  t: number | null;
  capSum: number | null;
  answer: number | null;
}

export type MutatedStep = Step<MutatedData>;

/**
 * Capping every element at t makes the mutated sum a non-decreasing function of t, so binary search finds
 * where it crosses the target. The best cap is then whichever of the crossover value or the one just
 * below lands closest (ties favor the smaller). `line` indexes CODE.
 */
export function mutatedSteps(arr: number[], target: number): MutatedStep[] {
  const steps: MutatedStep[] = [];
  const capSum = (t: number) => arr.reduce((s, x) => s + Math.min(x, t), 0);
  let lo = 0;
  let hi = Math.max(...arr);

  const snap = (o: Partial<MutatedData>): MutatedData => ({ arr, target, lo, hi, t: null, capSum: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MutatedData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Binary-search the cap value in [0, ${hi}]; capped sum is non-decreasing in t.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const s = capSum(mid);
    if (s < target) {
      push(6, `cap ${mid}: sum ${s} < target ${target} → go higher.`, { t: mid, capSum: s });
      lo = mid + 1;
    } else {
      push(7, `cap ${mid}: sum ${s} ≥ target ${target} → keep ≤ ${mid}.`, { t: mid, capSum: s });
      hi = mid;
    }
  }

  const upper = capSum(lo);
  const lower = lo > 0 ? capSum(lo - 1) : capSum(0);
  const answer = Math.abs(upper - target) < Math.abs(lower - target) ? lo : lo - 1;
  push(12, `Compare cap ${lo} (sum ${upper}) vs ${lo - 1} (sum ${lower}) → best cap ${answer}.`, { t: answer, capSum: capSum(answer), answer });
  return steps;
}
