import { describe, it, expect } from "vitest";
import { divSubsetSteps } from "./algorithm";
import { CODE } from "./code";

const subset = (nums: number[]) => {
  const steps = divSubsetSteps(nums);
  const { answer, nums: sorted } = steps[steps.length - 1].data;
  return answer!.map((k) => sorted[k]);
};

const isValid = (s: number[]) => {
  for (let i = 1; i < s.length; i++) if (s[i] % s[i - 1] !== 0) return false;
  return true;
};

describe("divSubsetSteps", () => {
  it("finds a largest divisible subset", () => {
    expect(subset([1, 2, 3])).toEqual([1, 2]);
    const r = subset([1, 2, 4, 8, 3]);
    expect(r.length).toBe(4);
    expect(isValid(r)).toBe(true);
    expect(subset([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divSubsetSteps([1, 2, 4, 8, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
