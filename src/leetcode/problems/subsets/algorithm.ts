import type { Highlight, Step } from "@/core/types";

export interface SubsetsData {
  nums: number[];
  chosen: number[];
  results: number[][];
}

export type SubsetsStep = Step<SubsetsData>;

/**
 * Backtracking: at each index decide to include the element or not. Every node
 * of the recursion (the "cur" prefix) is itself a valid subset, so we record it
 * on entry. `line` indexes CODE.
 */
export function subsetsSteps(nums: number[]): SubsetsStep[] {
  const steps: SubsetsStep[] = [];
  const results: number[][] = [];
  const chosen: number[] = []; // indices currently included

  const snap = (): SubsetsData => ({
    nums: [...nums],
    chosen: [...chosen],
    results: results.map((r) => [...r]),
  });
  const push = (line: number, explanation: string, extra: Highlight[]) => {
    const hl: Highlight[] = [...chosen.map((idx) => ({ ref: idx, role: "path" as const })), ...extra];
    steps.push({ id: steps.length, line, explanation, data: snap(), highlights: hl, metrics: { subsets: results.length } });
  };

  const bt = (start: number) => {
    results.push(chosen.map((idx) => nums[idx]));
    push(3, `Record subset [${chosen.map((i) => nums[i]).join(", ")}].`, []);
    for (let i = start; i < nums.length; i++) {
      chosen.push(i);
      push(5, `Include nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "current" }]);
      bt(i + 1);
      chosen.pop();
      push(7, `Backtrack — remove nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "swapped" }]);
    }
  };

  push(1, "Explore every include/exclude choice; each prefix is a subset.", []);
  bt(0);
  push(11, `Generated all ${results.length} subsets.`, []);
  return steps;
}
