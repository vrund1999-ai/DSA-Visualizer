import { describe, it, expect } from "vitest";
import { sortArraySteps } from "./algorithm";
import { CODE } from "./code";

const sorted = (nums: number[]) => {
  const steps = sortArraySteps(nums);
  return steps[steps.length - 1].data.values;
};

describe("sortArraySteps", () => {
  it("sorts arrays ascending", () => {
    expect(sorted([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
    expect(sorted([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
    expect(sorted([1])).toEqual([1]);
    expect(sorted([])).toEqual([]);
    const rnd = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    expect(sorted(rnd)).toEqual([...rnd].sort((a, b) => a - b));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortArraySteps([5, 2, 3, 1, 4, 8, 6, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
