import type { Step } from "@/core/types";

export interface PickWeightData {
  weights: number[];
  prefix: number[];
  total: number;
  /** the sampled target value being searched */
  target: number | null;
  lo: number;
  hi: number;
  mid: number | null;
  /** index resolved for the current target */
  picked: number | null;
  answer: string | null;
}

export type PickWeightStep = Step<PickWeightData>;

/**
 * Turning weights into cumulative sums maps each index to a contiguous band on [1, total] sized by its
 * weight. A random target then lands in exactly one band, found by binary-searching for the first prefix
 * ≥ target — so an index is chosen in proportion to its weight. `line` indexes CODE.
 */
export function pickWeightSteps(weights: number[], targets: number[]): PickWeightStep[] {
  const steps: PickWeightStep[] = [];
  const prefix: number[] = [];
  let sum = 0;
  for (const x of weights) prefix.push((sum += x));
  const total = sum;

  const snap = (o: Partial<PickWeightData>): PickWeightData => ({ weights, prefix, total, target: null, lo: 0, hi: prefix.length - 1, mid: null, picked: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PickWeightData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Prefix sums [${prefix.join(", ")}] partition [1, ${total}] into weight-sized bands.`);

  for (const target of targets) {
    let lo = 0;
    let hi = prefix.length - 1;
    push(9, `Sample target r = ${target}: binary-search for the first band ≥ ${target}.`, { target, lo, hi });
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (prefix[mid] < target) {
        push(13, `prefix[${mid}]=${prefix[mid]} < ${target}: go right.`, { target, lo, hi, mid });
        lo = mid + 1;
      } else {
        push(14, `prefix[${mid}]=${prefix[mid]} ≥ ${target}: keep ≤ ${mid}.`, { target, lo, hi, mid });
        hi = mid;
      }
    }
    push(16, `Target ${target} picks index ${lo}.`, { target, lo, hi: lo, picked: lo });
  }

  push(16, "Each index is chosen with probability proportional to its weight.", { answer: "weighted" });
  return steps;
}
