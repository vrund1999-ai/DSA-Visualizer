import { describe, it, expect } from "vitest";
import { largestNumberSteps } from "./algorithm";
import { CODE } from "./code";

const largest = (nums: number[]) => {
  const steps = largestNumberSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("largestNumberSteps", () => {
  it("forms the largest concatenation", () => {
    expect(largest([10, 2])).toBe("210");
    expect(largest([3, 30, 34, 5, 9])).toBe("9534330");
    expect(largest([0, 0])).toBe("0");
    expect(largest([1])).toBe("1");
    expect(largest([432, 43, 43])).toBe("4343432");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of largestNumberSteps([3, 30, 34, 5, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
