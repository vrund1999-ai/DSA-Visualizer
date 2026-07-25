import { describe, it, expect } from "vitest";
import { goodPairsSteps } from "./algorithm";
import { CODE } from "./code";

const pairs = (nums: number[]) => {
  const steps = goodPairsSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("goodPairsSteps", () => {
  it("counts good pairs", () => {
    expect(pairs([1, 2, 3, 1, 1, 3])).toBe(4);
    expect(pairs([1, 1, 1, 1])).toBe(6);
    expect(pairs([1, 2, 3])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of goodPairsSteps([1, 2, 3, 1, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
