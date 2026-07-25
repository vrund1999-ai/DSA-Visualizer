import type { Step } from "@/core/types";

export interface ArrayPartitionData {
  nums: number[];
  /** index being added (the min of its pair) */
  pick: number | null;
  /** index of the discarded partner */
  partner: number | null;
  sum: number;
  answer: number | null;
}

export type ArrayPartitionStep = Step<ArrayPartitionData>;

/**
 * To maximize the sum of pair-minimums, pair neighbors in sorted order: each min is then as
 * large as possible. After sorting, every even index is the smaller of its pair, so summing
 * nums[0], nums[2], … gives the answer. `line` indexes CODE.
 */
export function arrayPartitionSteps(input: number[]): ArrayPartitionStep[] {
  const steps: ArrayPartitionStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  let sum = 0;

  const snap = (o: Partial<ArrayPartitionData>): ArrayPartitionData => ({ nums, pick: null, partner: null, sum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ArrayPartitionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort so neighbors pair up: [${nums.join(", ")}].`);

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
    const partner = i + 1 < nums.length ? i + 1 : null;
    push(4, `Pair (${nums[i]}${partner !== null ? `, ${nums[partner]}` : ""}) → add min ${nums[i]} (sum ${sum}).`, { pick: i, partner, sum });
  }

  push(5, `Maximum sum of pair minimums: ${sum}.`, { answer: sum });
  return steps;
}
