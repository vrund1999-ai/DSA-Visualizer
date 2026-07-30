import { describe, it, expect } from "vitest";
import { hammingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = hammingSteps(nums);
  return steps[steps.length - 1].data.answer;
};

const brute = (nums: number[]) => {
  let t = 0;
  for (let i = 0; i < nums.length; i++) for (let j = i + 1; j < nums.length; j++) {
    let x = nums[i] ^ nums[j];
    while (x) {
      t += x & 1;
      x >>= 1;
    }
  }
  return t;
};

describe("hammingSteps", () => {
  it("matches a brute-force pairwise sum", () => {
    for (const nums of [[4, 14, 2], [4, 14, 4], [1, 2, 3, 4, 5], [0], [7, 7, 7]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hammingSteps([4, 14, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
