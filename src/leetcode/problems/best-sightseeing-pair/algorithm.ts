import type { Step } from "@/core/types";

export interface SightseeingData {
  values: number[];
  /** index j (right spot) currently being scored */
  j: number | null;
  /** index i that currently maximizes values[i] + i */
  bestIdx: number;
  best: number;
  ans: number;
  answer: number | null;
}

export type SightseeingStep = Step<SightseeingData>;

/**
 * The score values[i]+values[j]+i-j splits into (values[i]+i) + (values[j]-j). Fixing the right
 * spot j, the best left spot is whichever earlier i maximizes values[i]+i — so we keep that
 * running maximum and pair it with each j in one pass. `line` indexes CODE.
 */
export function sightseeingSteps(values: number[]): SightseeingStep[] {
  const steps: SightseeingStep[] = [];
  let best = values[0] + 0;
  let bestIdx = 0;
  let ans = -Infinity;

  const snap = (o: Partial<SightseeingData>): SightseeingData => ({ values, j: null, bestIdx, best, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SightseeingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Track best (values[i] + i); start with index 0 → ${best}.`);

  for (let j = 1; j < values.length; j++) {
    const score = best + values[j] - j;
    ans = Math.max(ans, score);
    push(4, `j=${j}: ${best} + ${values[j]} − ${j} = ${score}; best answer ${ans}.`, { j, ans });
    if (values[j] + j > best) {
      best = values[j] + j;
      bestIdx = j;
      push(5, `values[${j}] + ${j} = ${best} is a better left spot.`, { j, bestIdx, best });
    }
  }

  push(7, `Maximum sightseeing-pair score: ${ans}.`, { answer: ans });
  return steps;
}
