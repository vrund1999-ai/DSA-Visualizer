import { describe, it, expect } from "vitest";
import { threeSubSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = threeSubSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

// Brute-force: try all triples of non-overlapping window starts.
function brute(nums: number[], k: number): number[] {
  const n = nums.length;
  const W: number[] = [];
  for (let i = 0; i + k <= n; i++) W.push(nums.slice(i, i + k).reduce((a, b) => a + b, 0));
  let best = -1;
  let ans: number[] = [];
  for (let a = 0; a < W.length; a++)
    for (let b = a + k; b < W.length; b++)
      for (let c = b + k; c < W.length; c++) {
        const t = W[a] + W[b] + W[c];
        if (t > best) {
          best = t;
          ans = [a, b, c];
        }
      }
  return ans;
}

describe("threeSubSteps", () => {
  it("matches a brute-force reference", () => {
    const cases: [number[], number][] = [
      [[1, 2, 1, 2, 6, 7, 5, 1], 2],
      [[1, 2, 1, 2, 1, 2, 1, 2, 1], 2],
      [[4, 3, 2, 1, 5, 6, 7, 8, 9], 3],
      [[7, 13, 20, 19, 19, 2, 10, 1, 1, 19], 3],
    ];
    for (const [nums, k] of cases) expect(solve(nums, k)).toEqual(brute(nums, k));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of threeSubSteps([1, 2, 1, 2, 6, 7, 5, 1], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
