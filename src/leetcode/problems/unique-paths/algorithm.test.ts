import { describe, it, expect } from "vitest";
import { uniquePathsSteps } from "./algorithm";
import { CODE } from "./code";

const paths = (m: number, n: number) => {
  const steps = uniquePathsSteps({ m, n });
  const dp = steps[steps.length - 1].data.dp;
  return dp[m - 1][n - 1];
};

describe("uniquePathsSteps", () => {
  it("counts unique grid paths", () => {
    expect(paths(3, 7)).toBe(28);
    expect(paths(3, 2)).toBe(3);
    expect(paths(1, 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of uniquePathsSteps({ m: 3, n: 4 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
