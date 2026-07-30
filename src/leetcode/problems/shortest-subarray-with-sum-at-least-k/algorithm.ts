import type { Step } from "@/core/types";

export interface ShortestSubarrayData {
  nums: number[];
  k: number;
  prefix: number[];
  /** current prefix index j */
  j: number | null;
  /** deque of prefix indices (increasing prefix values) */
  deque: number[];
  best: number;
  /** [start, end) of the best window found so far */
  bestWindow: [number, number] | null;
  answer: number | null;
}

export type ShortestSubarrayStep = Step<ShortestSubarrayData>;

/**
 * Shortest Subarray with Sum at Least K (values may be negative): on prefix sums, a subarray (i, j] has sum
 * prefix[j] − prefix[i]. A monotonic deque of increasing prefix values lets us, for each j, pop fronts that
 * already satisfy ≥ k (recording the shortest) and pop backs that are ≥ prefix[j] (never useful later).
 * `line` indexes CODE.
 */
export function shortestSubarraySteps(nums: number[], k: number): ShortestSubarrayStep[] {
  const steps: ShortestSubarrayStep[] = [];
  const n = nums.length;
  const prefix = [0];
  for (const x of nums) prefix.push(prefix[prefix.length - 1] + x);
  let best = Infinity;
  let bestWindow: [number, number] | null = null;
  const dq: number[] = [];

  const snap = (o: Partial<ShortestSubarrayData>): ShortestSubarrayData => ({
    nums,
    k,
    prefix,
    j: null,
    deque: [...dq],
    best,
    bestWindow,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ShortestSubarrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Prefix sums [${prefix.join(", ")}]. Use a monotonic deque to find the shortest window with sum ≥ ${k}.`);

  for (let j = 0; j <= n; j++) {
    while (dq.length && prefix[j] - prefix[dq[0]] >= k) {
      const i = dq.shift()!;
      if (j - i < best) {
        best = j - i;
        bestWindow = [i, j];
      }
      push(9, `prefix[${j}] − prefix[${i}] = ${prefix[j] - prefix[i]} ≥ ${k} → window length ${j - i}. Best ${best}.`, { j });
    }
    while (dq.length && prefix[dq[dq.length - 1]] >= prefix[j]) dq.pop();
    dq.push(j);
    push(14, `Push index ${j} (prefix ${prefix[j]}).`, { j });
  }

  const answer = best === Infinity ? -1 : best;
  push(16, best === Infinity ? `No qualifying subarray → -1.` : `Shortest length = ${best}.`, { answer });
  return steps;
}
