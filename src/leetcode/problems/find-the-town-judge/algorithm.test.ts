import { describe, it, expect } from "vitest";
import { judgeSteps } from "./algorithm";
import { CODE } from "./code";

const judge = (n: number, trust: number[][]) => {
  const steps = judgeSteps(n, trust);
  return steps[steps.length - 1].data.answer;
};

describe("judgeSteps", () => {
  it("finds the town judge", () => {
    expect(judge(2, [[1, 2]])).toBe(2);
    expect(judge(3, [[1, 3], [2, 3]])).toBe(3);
    expect(judge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1);
    expect(judge(1, [])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of judgeSteps(3, [[1, 3], [2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
