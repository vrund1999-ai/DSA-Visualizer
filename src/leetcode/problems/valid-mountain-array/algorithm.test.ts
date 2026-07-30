import { describe, it, expect } from "vitest";
import { mountainSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[]) => {
  const steps = mountainSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("mountainSteps", () => {
  it("validates mountain arrays", () => {
    expect(solve([0, 3, 5, 4, 2, 1])).toBe(true);
    expect(solve([2, 1])).toBe(false);
    expect(solve([3, 5, 5])).toBe(false);
    expect(solve([0, 3, 2, 1])).toBe(true);
    expect(solve([0, 1, 2, 3])).toBe(false);
    expect(solve([3, 2, 1])).toBe(false);
    expect(solve([1, 2, 3, 2, 1])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mountainSteps([0, 3, 5, 4, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
