import { describe, it, expect } from "vitest";
import { provincesSteps } from "./algorithm";
import { CODE } from "./code";

const provinces = (m: number[][]) => {
  const steps = provincesSteps(m);
  return steps[steps.length - 1].data.provinces;
};

describe("provincesSteps", () => {
  it("counts connected city groups", () => {
    expect(provinces([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
    expect(provinces([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toBe(3);
    expect(provinces([[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of provincesSteps([[1, 1, 0], [1, 1, 0], [0, 0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
