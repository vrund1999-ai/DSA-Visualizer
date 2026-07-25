import type { Step } from "@/core/types";

export interface KClosestData {
  arr: number[];
  x: number;
  lo: number;
  hi: number;
  /** which end we just dropped, for narration highlighting */
  dropped: "lo" | "hi" | null;
  answer: number[] | null;
}

export type KClosestStep = Step<KClosestData>;

/**
 * The answer is a contiguous window of size k (sorted array). Shrink [lo, hi] from
 * whichever end is farther from x until exactly k elements remain; ties drop the right end
 * to prefer smaller values. `line` indexes CODE.
 */
export function kClosestSteps(arr: number[], k: number, x: number): KClosestStep[] {
  const steps: KClosestStep[] = [];
  let lo = 0;
  let hi = arr.length - 1;

  const snap = (o: Partial<KClosestData>): KClosestData => ({ arr, x, lo, hi, dropped: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KClosestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Window is [${lo}, ${hi}]; shrink until ${k} remain, keeping those closest to ${x}.`);

  while (hi - lo >= k) {
    const leftDist = x - arr[lo];
    const rightDist = arr[hi] - x;
    push(2, `Window size ${hi - lo + 1} > ${k}: compare ends |${x}-${arr[lo]}|=${leftDist} vs |${arr[hi]}-${x}|=${rightDist}.`);
    if (leftDist > rightDist) {
      lo++;
      push(4, `Left end ${arr[lo - 1]} is farther → drop it (lo → ${lo}).`, { dropped: "lo" });
    } else {
      hi--;
      push(6, `Right end ${arr[hi + 1]} is farther (or tie) → drop it (hi → ${hi}).`, { dropped: "hi" });
    }
  }

  const answer = arr.slice(lo, lo + k);
  push(8, `Window has ${k} elements: [${answer.join(", ")}].`, { answer });
  return steps;
}
