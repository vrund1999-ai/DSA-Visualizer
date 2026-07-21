import type { Highlight, Step } from "@/core/types";

export interface ContainsDupData {
  nums: number[];
  i: number | null;
  seen: number[];
  result: boolean | null;
}

export type ContainsDupStep = Step<ContainsDupData>;

/**
 * Track values seen so far in a hash set; the first value already present proves
 * a duplicate. `line` indexes CODE.
 */
export function containsDupSteps(nums: number[]): ContainsDupStep[] {
  const steps: ContainsDupStep[] = [];
  const seen = new Set<number>();
  const firstIndex = new Map<number, number>();
  let result: boolean | null = null;

  const snap = (o: Partial<ContainsDupData>): ContainsDupData => ({
    nums: [...nums],
    i: null,
    seen: [...seen],
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: ContainsDupData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Remember every value seen so far in a set.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (seen.has(x)) {
      result = true;
      push(3, `${x} is already in the set — duplicate found.`, snap({ i, result: true }), [
        { ref: firstIndex.get(x)!, role: "compared" },
        { ref: i, role: "swapped" },
      ]);
      return steps;
    }
    seen.add(x);
    firstIndex.set(x, i);
    push(4, `${x} is new — add it to the set.`, snap({ i }), [{ ref: i, role: "sorted" }]);
  }

  result = false;
  push(6, "Scanned everything with no repeats — no duplicates.", snap({ result: false }), []);
  return steps;
}
