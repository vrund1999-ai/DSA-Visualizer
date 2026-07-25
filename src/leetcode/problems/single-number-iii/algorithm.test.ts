import { describe, it, expect } from "vitest";
import { singleIIISteps } from "./algorithm";
import { CODE } from "./code";

const singles = (nums: number[]) => {
  const steps = singleIIISteps(nums);
  return steps[steps.length - 1].data.answer!.slice().sort((a, b) => a - b);
};

describe("singleIIISteps", () => {
  it("recovers the two unique numbers", () => {
    expect(singles([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
    expect(singles([0, 1])).toEqual([0, 1]);
    expect(singles([9, 9, 8, 8, 4, 7])).toEqual([4, 7]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of singleIIISteps([1, 2, 1, 3, 2, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
