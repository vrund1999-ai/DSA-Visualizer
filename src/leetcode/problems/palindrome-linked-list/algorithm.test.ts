import { describe, it, expect } from "vitest";
import { palindromeListSteps } from "./algorithm";
import { CODE } from "./code";

const isPal = (values: number[]) => {
  const steps = palindromeListSteps(values);
  return steps[steps.length - 1].data.result;
};

describe("palindromeListSteps", () => {
  it("recognizes palindrome lists", () => {
    expect(isPal([1, 2, 2, 1])).toBe(true);
    expect(isPal([1, 2, 3, 2, 1])).toBe(true);
    expect(isPal([1])).toBe(true);
  });

  it("rejects non-palindromes", () => {
    expect(isPal([1, 2])).toBe(false);
    expect(isPal([1, 2, 3])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palindromeListSteps([1, 2, 3, 2, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
