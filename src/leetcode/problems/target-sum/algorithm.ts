import type { Step } from "@/core/types";

export interface TargetSumData {
  nums: number[];
  target: number;
  /** index of the number just folded in */
  cur: number | null;
  /** dp map (sum -> ways) as sorted entries */
  dp: [number, number][];
  answer: number | null;
}

export type TargetSumStep = Step<TargetSumData>;

/**
 * Assign each number a + or − sign. dp maps each reachable running sum to the number
 * of sign choices that reach it; folding in a number branches every entry into sum±n.
 * `line` indexes CODE.
 */
export function targetSumSteps(nums: number[], target: number): TargetSumStep[] {
  const steps: TargetSumStep[] = [];
  let dp = new Map<number, number>([[0, 1]]);

  const entries = (m: Map<number, number>) => [...m.entries()].sort((a, b) => a[0] - b[0]);
  const snap = (o: Partial<TargetSumData>): TargetSumData => ({ nums: [...nums], target, cur: null, dp: entries(dp), answer: null, ...o });
  const push = (line: number, explanation: string, data: TargetSumData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Assign ± to each number to reach ${target}; dp = {0: 1}.`, snap({}));

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const next = new Map<number, number>();
    for (const [sum, ways] of dp) {
      next.set(sum + n, (next.get(sum + n) ?? 0) + ways);
      next.set(sum - n, (next.get(sum - n) ?? 0) + ways);
    }
    dp = next;
    push(9, `Fold in ${n} (±): every running sum branches.`, snap({ cur: i }));
  }

  const answer = dp.get(target) ?? 0;
  push(11, `Ways to reach ${target}: ${answer}.`, snap({ answer }));
  return steps;
}
