import { describe, it, expect } from "vitest";
import { pattern132Steps } from "./algorithm";
import { CODE } from "./code";

const has132 = (nums: number[]) => {
  const steps = pattern132Steps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("pattern132Steps", () => {
  it("detects 132 patterns", () => {
    expect(has132([1, 2, 3, 4])).toBe(false);
    expect(has132([3, 1, 4, 2])).toBe(true);
    expect(has132([-1, 3, 2, 0])).toBe(true);
    expect(has132([1, 0, 1, -4, -3])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pattern132Steps([3, 1, 4, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
