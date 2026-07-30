import { describe, it, expect } from "vitest";
import { visibleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heights: number[]) => {
  const steps = visibleSteps(heights);
  return steps[steps.length - 1].data.answer;
};

// O(n^2) reference.
function brute(heights: number[]): number[] {
  const n = heights.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let maxBetween = 0;
    for (let j = i + 1; j < n; j++) {
      if (Math.min(heights[i], heights[j]) > maxBetween) res[i]++;
      maxBetween = Math.max(maxBetween, heights[j]);
      if (heights[j] >= heights[i]) break;
    }
  }
  return res;
}

describe("visibleSteps", () => {
  it("matches a brute-force count", () => {
    for (const h of [[10, 6, 8, 5, 11, 9], [5, 1, 2, 3, 10], [1, 2, 3, 4], [4, 3, 2, 1], [7]]) {
      expect(solve(h)).toEqual(brute(h));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of visibleSteps([10, 6, 8, 5, 11, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
