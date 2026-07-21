import type { Highlight, Step } from "@/core/types";

export interface RobberData {
  nums: number[];
  dp: (number | string)[];
  i: number | null;
  skip: number | null;
  take: number | null;
}

export type RobberStep = Step<RobberData>;

/**
 * DP where dp[i] is the most money robbable from houses 0..i. At each house
 * choose the better of skipping it (dp[i-1]) or robbing it (dp[i-2] + nums[i]),
 * since adjacent houses can't both be robbed. `line` indexes CODE.
 */
export function robberSteps(nums: number[]): RobberStep[] {
  const steps: RobberStep[] = [];
  const dp: number[] = [];

  const display = () => nums.map((_, idx) => (idx < dp.length ? dp[idx] : "·"));
  const snap = (o: Partial<RobberData>): RobberData => ({
    nums: [...nums],
    dp: display(),
    i: null,
    skip: null,
    take: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: RobberData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best: dp.length ? dp[dp.length - 1] : 0 } });
  };

  push(1, "dp[i] = most money robbable from houses 0..i.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const skip = i >= 1 ? dp[i - 1] : 0;
    const take = (i >= 2 ? dp[i - 2] : 0) + nums[i];
    dp[i] = Math.max(skip, take);
    const robbed = take >= skip;
    push(
      5,
      `House ${i} (${nums[i]}): skip → ${skip}, rob → ${take}. dp[${i}] = ${dp[i]}.`,
      snap({ i, skip, take }),
      [
        { ref: i, role: robbed ? "target" : "current" },
        ...(i >= 1 ? [{ ref: i - 1, role: "compared" as const }] : []),
        ...(i >= 2 ? [{ ref: i - 2, role: "compared" as const }] : []),
      ],
    );
  }

  push(7, `Maximum money robbable: ${dp.length ? dp[dp.length - 1] : 0}.`, snap({ i: nums.length - 1 }), [
    { ref: Math.max(0, nums.length - 1), role: "target" },
  ]);
  return steps;
}
