import { describe, it, expect } from "vitest";
import { containerSteps } from "./algorithm";
import { CODE } from "./code";

describe("containerSteps", () => {
  it("finds the maximum area", () => {
    const steps = containerSteps([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    expect(steps[steps.length - 1].data.best).toBe(49);
  });

  it("handles the minimal two-bar case", () => {
    const steps = containerSteps([1, 1]);
    expect(steps[steps.length - 1].data.best).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of containerSteps([1, 8, 6, 2, 5, 4, 8, 3, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
