import { describe, it, expect } from "vitest";
import { enclavesSteps } from "./algorithm";
import { CODE } from "./code";

const enclaves = (grid: number[][]) => {
  const steps = enclavesSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("enclavesSteps", () => {
  it("counts enclosed land cells", () => {
    expect(enclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])).toBe(3);
    expect(enclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]])).toBe(0);
    expect(enclaves([[1, 1], [1, 1]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of enclavesSteps([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
