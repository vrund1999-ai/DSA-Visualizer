import { describe, it, expect } from "vitest";
import { digitOneSteps } from "./algorithm";
import { CODE } from "./code";

const countOnes = (n: number) => {
  const steps = digitOneSteps(n);
  return steps[steps.length - 1].data.answer;
};

// brute-force reference
const brute = (n: number) => {
  let c = 0;
  for (let i = 1; i <= n; i++) c += String(i).split("").filter((d) => d === "1").length;
  return c;
};

describe("digitOneSteps", () => {
  it("matches the brute-force count", () => {
    expect(countOnes(13)).toBe(6);
    expect(countOnes(0)).toBe(0);
    expect(countOnes(213)).toBe(brute(213));
    expect(countOnes(1000)).toBe(brute(1000));
    expect(countOnes(824)).toBe(brute(824));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of digitOneSteps(213)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
