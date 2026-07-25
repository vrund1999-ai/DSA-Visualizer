import type { Step } from "@/core/types";

export interface FairPairsData {
  nums: number[];
  lower: number;
  upper: number;
  /** which bound's countLE is running */
  phase: "upper" | "lowerMinus1" | "done";
  l: number | null;
  r: number | null;
  count: number;
  leUpper: number | null;
  leLower: number | null;
  answer: number | null;
}

export type FairPairsStep = Step<FairPairsData>;

/**
 * A fair pair has sum in [lower, upper]. Counting pairs with sum ≤ x is easy after sorting: two
 * pointers where, whenever nums[l]+nums[r] ≤ x, every element between l and r also pairs with l.
 * The answer is countLE(upper) − countLE(lower−1). `line` indexes CODE.
 */
export function fairPairsSteps(input: number[], lower: number, upper: number): FairPairsStep[] {
  const steps: FairPairsStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  let leUpper = 0;
  let leLower = 0;

  const snap = (o: Partial<FairPairsData>): FairPairsData => ({ nums, lower, upper, phase: "upper", l: null, r: null, count: 0, leUpper: null, leLower: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FairPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const countLE = (x: number, phase: "upper" | "lowerMinus1"): number => {
    let l = 0;
    let r = nums.length - 1;
    let c = 0;
    while (l < r) {
      if (nums[l] + nums[r] <= x) {
        c += r - l;
        push(7, `${nums[l]} + ${nums[r]} = ${nums[l] + nums[r]} ≤ ${x} → +${r - l} pairs (c=${c}). l++`, { phase, l, r, count: c, leUpper: phase === "lowerMinus1" ? leUpper : null });
        l++;
      } else {
        push(9, `${nums[l]} + ${nums[r]} = ${nums[l] + nums[r]} > ${x} → r--`, { phase, l, r, count: c, leUpper: phase === "lowerMinus1" ? leUpper : null });
        r--;
      }
    }
    return c;
  };

  push(1, `Sort: [${nums.join(", ")}]. Fair sum range [${lower}, ${upper}].`);

  leUpper = countLE(upper, "upper");
  push(13, `Pairs with sum ≤ ${upper}: ${leUpper}.`, { phase: "upper", leUpper });

  leLower = countLE(lower - 1, "lowerMinus1");
  push(13, `Pairs with sum ≤ ${lower - 1}: ${leLower}.`, { phase: "lowerMinus1", leUpper, leLower });

  const answer = leUpper - leLower;
  push(13, `Fair pairs = ${leUpper} − ${leLower} = ${answer}.`, { phase: "done", leUpper, leLower, answer });
  return steps;
}
