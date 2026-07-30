import { describe, it, expect } from "vitest";
import { timeDiffSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (times: string[]) => {
  const steps = timeDiffSteps(times);
  return steps[steps.length - 1].data.answer;
};

describe("timeDiffSteps", () => {
  it("computes the minimum circular time difference", () => {
    expect(solve(["23:59", "00:00"])).toBe(1);
    expect(solve(["00:00", "23:59", "00:00"])).toBe(0);
    expect(solve(["23:59", "00:00", "12:30", "06:15"])).toBe(1);
    expect(solve(["01:01", "02:01"])).toBe(60);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of timeDiffSteps(["23:59", "00:00", "12:30", "06:15"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
