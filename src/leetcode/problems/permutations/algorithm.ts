import type { Highlight, Step } from "@/core/types";

export interface PermutationsData {
  nums: number[];
  used: boolean[];
  current: number[];
  results: number[][];
}

export type PermutationsStep = Step<PermutationsData>;

/**
 * Backtracking: build a permutation position by position, marking each chosen
 * index as used so it isn't repeated, and unmarking it when backtracking. A
 * full-length arrangement is one permutation. `line` indexes CODE.
 */
export function permutationsSteps(nums: number[]): PermutationsStep[] {
  const steps: PermutationsStep[] = [];
  const results: number[][] = [];
  const used = new Array(nums.length).fill(false);
  const current: number[] = [];

  const snap = (): PermutationsData => ({
    nums: [...nums],
    used: [...used],
    current: [...current],
    results: results.map((r) => [...r]),
  });
  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data: snap(), highlights, metrics: { found: results.length } });
  };

  const bt = () => {
    if (current.length === nums.length) {
      results.push([...current]);
      push(4, `Full permutation [${current.join(", ")}] — record it.`, []);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(nums[i]);
      push(8, `Choose nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "current" }]);
      bt();
      used[i] = false;
      current.pop();
      push(10, `Backtrack — release nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "swapped" }]);
    }
  };

  push(1, "Build permutations by choosing an unused element at each position.", []);
  bt();
  push(14, `Generated all ${results.length} permutations.`, []);
  return steps;
}
