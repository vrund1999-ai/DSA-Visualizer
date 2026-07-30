import type { Step } from "@/core/types";

export interface KSubsetData {
  nums: number[];
  k: number;
  target: number;
  /** values placed in each bucket */
  buckets: number[][];
  /** index in nums being placed */
  i: number | null;
  /** bucket index just touched */
  j: number | null;
  action: "place" | "undo" | null;
  answer: boolean | null;
}

export type KSubsetStep = Step<KSubsetData>;

const MAX_STEPS = 500;

/**
 * If a k-way equal partition exists, each subset sums to total/k. Backtracking places the largest numbers
 * first into whichever bucket still has room; equal buckets are interchangeable so empty ones are tried
 * once. Success means every number found a home. `line` indexes CODE.
 */
export function kSubsetSteps(input: number[], k: number): KSubsetStep[] {
  const steps: KSubsetStep[] = [];
  const total = input.reduce((a, b) => a + b, 0);
  const nums = [...input].sort((a, b) => b - a);
  const target = total / k;
  const buckets: number[][] = Array.from({ length: k }, () => []);
  const sums = new Array(k).fill(0);

  const snap = (o: Partial<KSubsetData>): KSubsetData => ({ nums, k, target, buckets: buckets.map((b) => [...b]), i: null, j: null, action: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KSubsetData> = {}) => {
    if (steps.length >= MAX_STEPS) return;
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (total % k !== 0) {
    steps.push({ id: 0, line: 2, explanation: `Total ${total} is not divisible by ${k} → impossible.`, data: snap({ answer: false }), highlights: [] });
    return steps;
  }

  push(3, `Each of the ${k} subsets must sum to ${target}.`);

  function bt(i: number): boolean {
    if (i === nums.length) return true;
    for (let j = 0; j < k; j++) {
      if (sums[j] + nums[i] <= target) {
        sums[j] += nums[i];
        buckets[j].push(nums[i]);
        push(10, `Place ${nums[i]} into bucket ${j} (sum ${sums[j]}/${target}).`, { i, j, action: "place" });
        if (bt(i + 1)) return true;
        sums[j] -= nums[i];
        buckets[j].pop();
        push(12, `Backtrack: remove ${nums[i]} from bucket ${j}.`, { i, j, action: "undo" });
      }
      if (sums[j] === 0) break;
    }
    return false;
  }

  const answer = bt(0);
  steps.push({ id: steps.length, line: 18, explanation: answer ? `All numbers placed → true.` : `No valid partition → false.`, data: snap({ answer }), highlights: [] });
  return steps;
}
