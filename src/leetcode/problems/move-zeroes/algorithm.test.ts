import { describe, it, expect } from "vitest";
import { moveZeroesSteps } from "./algorithm";
import { CODE } from "./code";

describe("moveZeroesSteps", () => {
  it("moves zeros to the end preserving order", () => {
    const steps = moveZeroesSteps([0, 1, 0, 3, 12]);
    expect(steps[steps.length - 1].data.nums).toEqual([1, 3, 12, 0, 0]);
  });

  it("leaves an all-non-zero array unchanged", () => {
    const steps = moveZeroesSteps([1, 2, 3]);
    expect(steps[steps.length - 1].data.nums).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of moveZeroesSteps([0, 1, 0, 3, 12])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
