import { describe, it, expect } from "vitest";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";

describe("rangeSumSteps", () => {
  it("answers range-sum queries via prefix sums", () => {
    const steps = rangeSumSteps({ nums: [-2, 0, 3, -5, 2, -1], queries: [[0, 2], [2, 5], [0, 5]] });
    const answers = steps.filter((s) => s.data.answer !== null).map((s) => s.data.answer);
    expect(answers).toEqual([1, -1, -3]);
  });

  it("builds the correct prefix array", () => {
    const steps = rangeSumSteps({ nums: [1, 2, 3], queries: [] });
    expect(steps[steps.length - 1].data.prefix).toEqual([0, 1, 3, 6]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeSumSteps({ nums: [1, 2, 3], queries: [[0, 2]] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
