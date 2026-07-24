import { describe, it, expect } from "vitest";
import { sortListSteps } from "./algorithm";
import { CODE } from "./code";

const sorted = (nums: number[]) => {
  const steps = sortListSteps(nums);
  return steps[steps.length - 1].data.values;
};

describe("sortListSteps", () => {
  it("sorts the list ascending", () => {
    expect(sorted([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    expect(sorted([-1, 5, 3, 4, 0])).toEqual([-1, 0, 3, 4, 5]);
    expect(sorted([])).toEqual([]);
    expect(sorted([1])).toEqual([1]);
    const rnd = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100) - 50);
    expect(sorted(rnd)).toEqual([...rnd].sort((a, b) => a - b));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortListSteps([4, 2, 1, 3, 5, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
