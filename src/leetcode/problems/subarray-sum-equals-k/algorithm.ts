import type { Highlight, Step } from "@/core/types";

export interface PrefixEntry {
  key: number;
  val: number;
}

export interface SubarrayData {
  nums: number[];
  k: number;
  i: number | null;
  sum: number;
  count: number;
  need: number | null;
  entries: PrefixEntry[];
}

export type SubarrayStep = Step<SubarrayData>;

const toEntries = (m: Map<number, number>): PrefixEntry[] =>
  [...m.entries()].map(([key, val]) => ({ key, val }));

/**
 * A subarray sums to k exactly when (prefixSum − k) is a prefix sum we've seen
 * before. Counting occurrences of each prefix sum in a hash map turns the whole
 * problem into one linear pass. `line` indexes CODE.
 */
export function subarraySumSteps(nums: number[], k: number): SubarrayStep[] {
  const steps: SubarrayStep[] = [];
  const seen = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let count = 0;

  const snap = (o: Partial<SubarrayData>): SubarrayData => ({
    nums: [...nums],
    k,
    i: null,
    sum,
    count,
    need: null,
    entries: toEntries(seen),
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: SubarrayData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { count } });
  };

  push(1, "Store how many times each prefix sum has occurred, seeding 0 → 1.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const need = sum - k;
    push(4, `Extend to index ${i}: running sum = ${sum}. Look for a prior prefix ${need}.`, snap({ i, need }), [
      { ref: i, role: "current" },
    ]);
    if (seen.has(need)) {
      count += seen.get(need)!;
      push(6, `Seen ${need} ${seen.get(need)}× — that many subarrays end here summing to ${k}. Count = ${count}.`, snap({ i, need }), [
        { ref: i, role: "sorted" },
      ]);
    }
    seen.set(sum, (seen.get(sum) ?? 0) + 1);
    push(7, `Record prefix sum ${sum}.`, snap({ i }), [{ ref: i, role: "visited" }]);
  }

  push(9, `Total subarrays summing to ${k}: ${count}.`, snap({ i: null }), []);
  return steps;
}
