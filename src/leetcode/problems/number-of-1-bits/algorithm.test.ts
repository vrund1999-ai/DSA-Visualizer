import { describe, it, expect } from "vitest";
import { oneBitsSteps } from "./algorithm";
import { CODE } from "./code";

const count = (n: number) => {
  const steps = oneBitsSteps(n);
  return steps[steps.length - 1].data.count;
};

describe("oneBitsSteps", () => {
  it("counts set bits", () => {
    expect(count(11)).toBe(3);
    expect(count(128)).toBe(1);
    expect(count(182)).toBe(5); // 10110110
    expect(count(0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of oneBitsSteps(182)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
