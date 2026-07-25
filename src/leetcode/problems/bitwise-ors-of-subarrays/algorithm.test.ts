import { describe, it, expect } from "vitest";
import { bitwiseOrsSteps } from "./algorithm";
import { CODE } from "./code";

const distinct = (arr: number[]) => {
  const steps = bitwiseOrsSteps(arr);
  return steps[steps.length - 1].data.answer;
};

// brute-force reference
const brute = (arr: number[]) => {
  const set = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    let or = 0;
    for (let j = i; j < arr.length; j++) { or |= arr[j]; set.add(or); }
  }
  return set.size;
};

describe("bitwiseOrsSteps", () => {
  it("counts distinct subarray ORs", () => {
    expect(distinct([0])).toBe(1);
    expect(distinct([1, 1, 2])).toBe(3);
    expect(distinct([1, 2, 4])).toBe(6);
    const rand = [3, 1, 4, 1, 5, 9, 2, 6];
    expect(distinct(rand)).toBe(brute(rand));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bitwiseOrsSteps([1, 1, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
