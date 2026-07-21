import { describe, it, expect } from "vitest";
import { trapSteps } from "./algorithm";
import { CODE } from "./code";

describe("trapSteps", () => {
  it("computes the total trapped water", () => {
    const steps = trapSteps([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    expect(steps[steps.length - 1].data.water).toBe(6);
  });

  it("traps nothing on a monotonic terrain", () => {
    const steps = trapSteps([1, 2, 3, 4]);
    expect(steps[steps.length - 1].data.water).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of trapSteps([4, 2, 0, 3, 2, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
