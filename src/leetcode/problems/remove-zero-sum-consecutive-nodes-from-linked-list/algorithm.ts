import type { Step } from "@/core/types";

export interface ZeroSumData {
  values: number[];
  /** prefix sums: prefix[k] = sum before node k (length n+1) */
  prefix: number[];
  removed: boolean[];
  /** segment currently identified for removal [startNode, endNode] */
  segment: [number, number] | null;
  answer: number[] | null;
}

export type ZeroSumStep = Step<ZeroSumData>;

/**
 * Consecutive nodes sum to zero exactly when their running prefix sum returns to an earlier value. Mapping
 * each prefix sum to its last occurrence lets us jump over every zero-sum run in one rebuild pass. `line`
 * indexes CODE.
 */
export function zeroSumSteps(values: number[]): ZeroSumStep[] {
  const steps: ZeroSumStep[] = [];
  const n = values.length;
  const prefix = [0];
  for (let i = 0; i < n; i++) prefix.push(prefix[i] + values[i]);
  const removed = new Array(n).fill(false);
  // last occurrence of each prefix sum
  const last = new Map<number, number>();
  for (let k = 0; k <= n; k++) last.set(prefix[k], k);

  const snap = (o: Partial<ZeroSumData>): ZeroSumData => ({ values, prefix, removed: [...removed], segment: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ZeroSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(6, "Record each prefix sum's last position; a repeat marks a zero-sum run to skip.");

  let i = 0;
  while (i < n) {
    const target = last.get(prefix[i])!;
    if (target > i) {
      for (let k = i; k < target; k++) removed[k] = true;
      push(11, `Prefix sum ${prefix[i]} repeats at position ${target}: nodes ${i}…${target - 1} sum to 0 — remove them.`, { segment: [i, target - 1] });
      i = target;
    } else {
      push(10, `Node ${values[i]} kept (prefix ${prefix[i]} not repeated later).`, {});
      i++;
    }
  }

  const result = values.filter((_, k) => !removed[k]);
  push(13, `Result: [${result.join(", ")}].`, { answer: result });
  return steps;
}
