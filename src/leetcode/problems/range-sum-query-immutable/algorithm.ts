import type { Step } from "@/core/types";

export interface RangeSumInput {
  nums: number[];
  queries: [number, number][];
}

export interface RangeSumData {
  nums: number[];
  prefix: number[];
  phase: "build" | "query";
  buildIndex: number | null;
  queryRange: [number, number] | null;
  answer: number | null;
}

export type RangeSumStep = Step<RangeSumData>;

/**
 * Precompute prefix sums once (prefix[k] = sum of the first k values). Then any
 * range sum is a single subtraction prefix[j+1] − prefix[i], so queries are O(1).
 * `line` indexes CODE.
 */
export function rangeSumSteps(input: RangeSumInput): RangeSumStep[] {
  const { nums, queries } = input;
  const steps: RangeSumStep[] = [];
  const prefix = [0];

  const snap = (o: Partial<RangeSumData>): RangeSumData => ({
    nums: [...nums],
    prefix: [...prefix],
    phase: "build",
    buildIndex: null,
    queryRange: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: RangeSumData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Build a prefix-sum array so any range sum is one subtraction.", snap({}));
  for (let i = 0; i < nums.length; i++) {
    prefix.push(prefix[prefix.length - 1] + nums[i]);
    push(4, `prefix[${i + 1}] = prefix[${i}] + nums[${i}] = ${prefix[prefix.length - 1]}.`, snap({ buildIndex: i }));
  }

  for (const [i, j] of queries) {
    const answer = prefix[j + 1] - prefix[i];
    push(7, `sumRange(${i}, ${j}) = prefix[${j + 1}] − prefix[${i}] = ${prefix[j + 1]} − ${prefix[i]} = ${answer}.`, snap({ phase: "query", queryRange: [i, j], answer }));
  }

  return steps;
}
