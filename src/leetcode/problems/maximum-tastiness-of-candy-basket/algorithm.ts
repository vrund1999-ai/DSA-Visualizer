import type { Step } from "@/core/types";

export interface TastinessData {
  sorted: number[];
  k: number;
  lo: number;
  hi: number;
  mid: number | null;
  /** indices greedily picked when testing mid */
  picked: number[];
  count: number | null;
  feasible: boolean | null;
  answer: number | null;
}

export type TastinessStep = Step<TastinessData>;

/**
 * Maximum Tastiness: pick k prices maximizing the minimum pairwise gap. Binary-search the gap d; a greedy
 * sweep counts how many prices can be chosen with consecutive gaps ≥ d. The largest feasible d is the
 * answer. `line` indexes CODE.
 */
export function tastinessSteps(price: number[], k: number): TastinessStep[] {
  const steps: TastinessStep[] = [];
  const sorted = [...price].sort((a, b) => a - b);
  let lo = 0;
  let hi = sorted[sorted.length - 1] - sorted[0];

  const canPick = (d: number): { ok: boolean; count: number; picked: number[] } => {
    let count = 1;
    let last = sorted[0];
    const picked = [0];
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] - last >= d) {
        count++;
        last = sorted[i];
        picked.push(i);
      }
    }
    return { ok: count >= k, count, picked };
  };

  const snap = (o: Partial<TastinessData>): TastinessData => ({
    sorted,
    k,
    lo,
    hi,
    mid: null,
    picked: [],
    count: null,
    feasible: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TastinessData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(8, `Sorted [${sorted.join(", ")}]. Binary-search the largest feasible minimum gap.`);

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const { ok, count, picked } = canPick(mid);
    if (ok) {
      lo = mid;
      push(11, `Gap ${mid}: can pick ${count} ≥ k=${k} → feasible, raise lo.`, { mid, picked, count, feasible: true });
    } else {
      hi = mid - 1;
      push(12, `Gap ${mid}: only ${count} < k=${k} → infeasible, lower hi.`, { mid, picked, count, feasible: false });
    }
  }

  const finalPick = canPick(lo).picked;
  push(14, `Maximum tastiness = ${lo}.`, { answer: lo, picked: finalPick });
  return steps;
}
