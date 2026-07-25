import { describe, it, expect } from "vitest";
import { reverseBitsSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (n: number) => {
  const steps = reverseBitsSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("reverseBitsSteps", () => {
  it("reverses the 32-bit representation", () => {
    expect(reverse(43261596)).toBe(964176192);
    expect(reverse(4294967293)).toBe(3221225471);
    expect(reverse(0)).toBe(0);
    expect(reverse(1)).toBe(2147483648);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseBitsSteps(43261596)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
