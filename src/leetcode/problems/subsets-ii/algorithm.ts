import type { Highlight, Step } from "@/core/types";

export interface SubsetsIIData {
  nums: number[];
  chosen: number[];
  results: number[][];
}

export type SubsetsIIStep = Step<SubsetsIIData>;

/**
 * Like Subsets, but the array is sorted first so duplicates are adjacent, and a
 * value is skipped when it repeats the previous choice at the same recursion
 * level — this prevents duplicate subsets. `line` indexes CODE.
 */
export function subsetsIISteps(input: number[]): SubsetsIIStep[] {
  const nums = [...input].sort((a, b) => a - b);
  const steps: SubsetsIIStep[] = [];
  const results: number[][] = [];
  const chosen: number[] = []; // indices

  const snap = (): SubsetsIIData => ({
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
    push(4, `Record subset [${chosen.map((i) => nums[i]).join(", ")}].`, []);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        push(6, `Skip nums[${i}] = ${nums[i]} — duplicate choice at this level.`, [{ ref: i, role: "visited" }]);
        continue;
      }
      chosen.push(i);
      push(7, `Include nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "current" }]);
      bt(i + 1);
      chosen.pop();
      push(9, `Backtrack — remove nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "swapped" }]);
    }
  };

  push(1, "Sort so duplicates are adjacent, then explore include/exclude choices.", []);
  bt(0);
  push(13, `Generated ${results.length} unique subsets.`, []);
  return steps;
}
