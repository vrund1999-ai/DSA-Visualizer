import { describe, it, expect } from "vitest";
import { invitationsSteps } from "./algorithm";
import { CODE } from "./code";

const maxMatch = (grid: number[][]) => {
  const steps = invitationsSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("invitationsSteps", () => {
  it("computes the maximum bipartite matching", () => {
    expect(maxMatch([[1, 1, 1], [1, 0, 1], [0, 0, 1]])).toBe(3);
    expect(maxMatch([[1, 0, 1, 0], [1, 0, 0, 0], [0, 0, 1, 0], [1, 1, 1, 0]])).toBe(3);
    expect(maxMatch([[0, 0], [0, 0]])).toBe(0);
    expect(maxMatch([[1, 1], [1, 1]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of invitationsSteps([[1, 1, 1], [1, 0, 1], [0, 0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
