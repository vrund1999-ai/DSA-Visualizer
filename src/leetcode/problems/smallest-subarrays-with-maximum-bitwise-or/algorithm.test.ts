import { describe, it, expect } from "vitest";
import { smallestOrSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = smallestOrSteps(nums);
  return steps[steps.length - 1].data.answer;
};

// O(n^2) reference.
function brute(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    let maxOr = 0;
    for (let j = i; j < n; j++) maxOr |= nums[j];
    let cur = 0;
    for (let j = i; j < n; j++) {
      cur |= nums[j];
      if (cur === maxOr) {
        res[i] = j - i + 1;
        break;
      }
    }
  }
  return res;
}

describe("smallestOrSteps", () => {
  it("matches a brute-force reference", () => {
    for (const nums of [[1, 0, 2, 1, 3], [1, 2], [7, 0, 0, 0], [0, 0, 0], [8, 4, 2, 1]]) {
      expect(solve(nums)).toEqual(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of smallestOrSteps([1, 0, 2, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
