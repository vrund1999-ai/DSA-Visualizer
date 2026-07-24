import type { Step } from "@/core/types";

export interface HouseRobberIIData {
  nums: number[];
  /** which pass: houses [0..n-2] or [1..n-1] */
  range: [number, number] | null;
  /** house index currently evaluated */
  cur: number | null;
  best: number;
  /** result of each of the two passes */
  passResults: (number | null)[];
  answer: number | null;
}

export type HouseRobberIIStep = Step<HouseRobberIIData>;

/**
 * The houses form a circle, so the first and last can't both be robbed. Run the
 * linear house-robber DP twice — once excluding the last house, once excluding the
 * first — and take the better. `line` indexes CODE.
 */
export function houseRobberIISteps(nums: number[]): HouseRobberIIStep[] {
  const steps: HouseRobberIIStep[] = [];
  const passResults: (number | null)[] = [null, null];

  const snap = (o: Partial<HouseRobberIIData>): HouseRobberIIData => ({ nums: [...nums], range: null, cur: null, best: 0, passResults: [...passResults], answer: null, ...o });
  const push = (line: number, explanation: string, data: HouseRobberIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (nums.length === 1) {
    push(1, `Single house — rob it for ${nums[0]}.`, snap({ answer: nums[0] }));
    return steps;
  }

  push(2, "Circular: rob houses [0..n-2] OR [1..n-1], never both ends.", snap({}));

  const line = (lo: number, hi: number, pass: number): number => {
    let prev = 0;
    let cur = 0;
    for (let i = lo; i <= hi; i++) {
      const take = prev + nums[i];
      prev = cur;
      cur = Math.max(cur, take);
      push(8, `House ${i} (${nums[i]}): best so far ${cur}.`, snap({ range: [lo, hi], cur: i, best: cur }));
    }
    passResults[pass] = cur;
    return cur;
  };

  const a = line(0, nums.length - 2, 0);
  const b = line(1, nums.length - 1, 1);
  const answer = Math.max(a, b);
  push(12, `Best of the two passes: max(${a}, ${b}) = ${answer}.`, snap({ answer }));
  return steps;
}
