import { describe, it, expect } from "vitest";
import { game24Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = game24Steps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("game24Steps", () => {
  it("matches the canonical examples", () => {
    expect(solve([4, 1, 8, 7])).toBe(true); // (8-4)*(7-1)
    expect(solve([1, 2, 1, 2])).toBe(false);
    expect(solve([3, 3, 8, 8])).toBe(true); // 8/(3 - 8/3)
    expect(solve([1, 1, 1, 1])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of game24Steps([4, 1, 8, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
