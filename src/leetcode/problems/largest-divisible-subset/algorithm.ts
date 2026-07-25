import type { Step } from "@/core/types";

export interface DivSubsetData {
  nums: number[];
  dp: number[];
  /** current i and the j being tested */
  i: number | null;
  j: number | null;
  /** whether nums[i] % nums[j] === 0 and it extended the chain */
  extended: boolean;
  /** indices in the final subset */
  answer: number[] | null;
}

export type DivSubsetStep = Step<DivSubsetData>;

/**
 * Sort ascending: then a % b == 0 for a > b makes divisibility transitive, so the
 * answer is a longest chain. dp[i] is the longest divisible chain ending at i, extended
 * from any earlier j that divides nums[i]; back-pointers reconstruct the subset. `line`
 * indexes CODE.
 */
export function divSubsetSteps(input: number[]): DivSubsetStep[] {
  const steps: DivSubsetStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  const dp = nums.map(() => 1);
  const prev = nums.map(() => -1);
  let best = 0;

  const snap = (o: Partial<DivSubsetData>): DivSubsetData => ({ nums: [...nums], dp: [...dp], i: null, j: null, extended: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: DivSubsetData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Sort; dp[i] = longest divisible chain ending at index i.", snap({}));

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
        push(7, `${nums[i]} % ${nums[j]} = 0 — extend chain to dp[${i}] = ${dp[i]}.`, snap({ i, j, extended: true }));
      }
    }
    if (dp[i] > dp[best]) best = i;
    push(10, `dp[${i}] = ${dp[i]} (value ${nums[i]}).`, snap({ i }));
  }

  const answer: number[] = [];
  for (let k = best; k !== -1; k = prev[k]) answer.unshift(k);
  push(12, `Largest subset: [${answer.map((k) => nums[k]).join(", ")}].`, snap({ answer }));
  return steps;
}
