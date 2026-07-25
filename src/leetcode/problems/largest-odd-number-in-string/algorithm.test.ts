import { describe, it, expect } from "vitest";
import { largestOddSteps } from "./algorithm";
import { CODE } from "./code";

const largestOdd = (num: string) => {
  const steps = largestOddSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("largestOddSteps", () => {
  it("returns the longest prefix ending in an odd digit", () => {
    expect(largestOdd("52")).toBe("5");
    expect(largestOdd("4206")).toBe("");
    expect(largestOdd("35427")).toBe("35427");
    expect(largestOdd("10133890")).toBe("1013389");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of largestOddSteps("35427")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
