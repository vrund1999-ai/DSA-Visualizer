import { describe, it, expect } from "vitest";
import { serversSteps } from "./algorithm";
import { CODE } from "./code";

const count = (grid: number[][]) => {
  const steps = serversSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("serversSteps", () => {
  it("counts communicating servers", () => {
    expect(count([[1, 0], [0, 1]])).toBe(0);
    expect(count([[1, 0], [1, 1]])).toBe(3);
    expect(count([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of serversSteps([[1, 0], [1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
