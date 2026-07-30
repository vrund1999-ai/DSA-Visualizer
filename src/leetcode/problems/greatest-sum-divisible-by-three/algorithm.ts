import type { Step } from "@/core/types";

export interface DivThreeData {
  nums: number[];
  dp: number[];
  i: number | null;
  answer: number | null;
}

export type DivThreeStep = Step<DivThreeData>;

/**
 * dp[r] is the largest subset sum whose total is ≡ r (mod 3). Each number can extend any state, moving
 * remainder r to (r + x) mod 3, so we keep the best sum for each of the three remainders. The answer is
 * dp[0], the best sum divisible by three. `line` indexes CODE.
 */
export function divThreeSteps(nums: number[]): DivThreeStep[] {
  const steps: DivThreeStep[] = [];
  let dp = [0, -Infinity, -Infinity];

  const snap = (o: Partial<DivThreeData>): DivThreeData => ({ nums, dp: [...dp], i: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DivThreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "dp[r] = best subset sum with total ≡ r (mod 3); start dp = [0, −∞, −∞].");

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const next = [...dp];
    for (let r = 0; r < 3; r++) {
      if (dp[r] === -Infinity) continue;
      const nr = (r + x) % 3;
      next[nr] = Math.max(next[nr], dp[r] + x);
    }
    dp = next;
    push(10, `Add ${x}: dp = [${dp.map((v) => (v === -Infinity ? "−∞" : v)).join(", ")}].`, { i });
  }

  push(12, `Greatest sum divisible by 3: ${dp[0]}.`, { answer: dp[0] });
  return steps;
}
