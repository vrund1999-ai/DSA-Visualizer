import { describe, it, expect } from "vitest";
import { addDigitsSteps } from "./algorithm";
import { CODE } from "./code";

const root = (num: number) => {
  const steps = addDigitsSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("addDigitsSteps", () => {
  it("computes the digital root", () => {
    expect(root(38)).toBe(2);
    expect(root(0)).toBe(0);
    expect(root(9)).toBe(9);
    expect(root(199)).toBe(1);
    // matches the closed form
    for (let n = 0; n <= 100; n++) {
      expect(root(n)).toBe(n === 0 ? 0 : 1 + ((n - 1) % 9));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addDigitsSteps(38)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
