import type { Step } from "@/core/types";

export interface DupIIIData {
  nums: number[];
  k: number;
  t: number;
  i: number | null;
  /** window start index (i - k) */
  windowStart: number;
  /** bucketId -> value pairs currently held */
  buckets: [number, number][];
  /** the index that matched, if found */
  matchIdx: number | null;
  answer: boolean | null;
}

export type DupIIIStep = Step<DupIIIData>;

/**
 * Bucketing values into intervals of width t+1 means any two values in the same bucket differ by at
 * most t. For each element we check its own bucket and the two neighbors within a sliding window of k
 * indices, evicting the value that falls out of the window. `line` indexes CODE.
 */
export function dupIIISteps(nums: number[], k: number, t: number): DupIIIStep[] {
  const steps: DupIIIStep[] = [];
  const width = t + 1;
  const id = (x: number) => Math.floor(x / width);
  const buckets = new Map<number, number>();

  const snap = (o: Partial<DupIIIData>): DupIIIData => ({ nums, k, t, i: null, windowStart: 0, buckets: [...buckets.entries()], matchIdx: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DupIIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Bucket values by width ${width}; scan a window of ${k} indices for a near-duplicate within ${t}.`);

  for (let i = 0; i < nums.length; i++) {
    const b = id(nums[i]);
    const windowStart = Math.max(0, i - k);
    if (buckets.has(b)) {
      push(6, `${nums[i]} shares bucket ${b} with a windowed value → true.`, { i, windowStart, matchIdx: i, answer: true });
      return steps;
    }
    if (buckets.has(b - 1) && nums[i] - buckets.get(b - 1)! <= t) {
      push(8, `${nums[i]} within ${t} of ${buckets.get(b - 1)} (bucket ${b - 1}) → true.`, { i, windowStart, matchIdx: i, answer: true });
      return steps;
    }
    if (buckets.has(b + 1) && buckets.get(b + 1)! - nums[i] <= t) {
      push(10, `${nums[i]} within ${t} of ${buckets.get(b + 1)} (bucket ${b + 1}) → true.`, { i, windowStart, matchIdx: i, answer: true });
      return steps;
    }
    buckets.set(b, nums[i]);
    if (i >= k) buckets.delete(id(nums[i - k]));
    push(11, `No near-duplicate for ${nums[i]}; add to bucket ${b}${i >= k ? `, evict ${nums[i - k]}` : ""}.`, { i, windowStart });
  }

  push(14, "No qualifying pair found → false.", { answer: false });
  return steps;
}
