import type { Step } from "@/core/types";

export interface MaxProductData {
  nums: number[];
  /** indices forming the "three largest" candidate */
  topThree: number[];
  /** indices forming the "two smallest + largest" candidate */
  twoLow: number[];
  topValue: number | null;
  lowValue: number | null;
  /** which candidate won */
  winner: "top" | "low" | null;
  answer: number | null;
}

export type MaxProductStep = Step<MaxProductData>;

/**
 * After sorting, the maximum product of three is either the three largest values or — when two
 * large-magnitude negatives are present — the two smallest (most negative) times the single
 * largest. Comparing just those two candidates suffices. `line` indexes CODE.
 */
export function maxProductSteps(input: number[]): MaxProductStep[] {
  const steps: MaxProductStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  const n = nums.length;

  const snap = (o: Partial<MaxProductData>): MaxProductData => ({ nums, topThree: [], twoLow: [], topValue: null, lowValue: null, winner: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxProductData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort ascending: [${nums.join(", ")}].`);

  const topThree = [n - 3, n - 2, n - 1];
  const topValue = nums[n - 1] * nums[n - 2] * nums[n - 3];
  push(3, `Three largest: ${nums[n - 3]} × ${nums[n - 2]} × ${nums[n - 1]} = ${topValue}.`, { topThree, topValue });

  const twoLow = [0, 1, n - 1];
  const lowValue = nums[0] * nums[1] * nums[n - 1];
  push(4, `Two smallest × largest: ${nums[0]} × ${nums[1]} × ${nums[n - 1]} = ${lowValue}.`, { topThree, twoLow, topValue, lowValue });

  const winner = topValue >= lowValue ? "top" : "low";
  const answer = Math.max(topValue, lowValue);
  push(5, `Maximum product = max(${topValue}, ${lowValue}) = ${answer}.`, { topThree, twoLow, topValue, lowValue, winner, answer });
  return steps;
}
