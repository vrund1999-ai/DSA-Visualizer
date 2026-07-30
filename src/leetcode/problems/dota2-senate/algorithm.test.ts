import { describe, it, expect } from "vitest";
import { senateSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (senate: string) => {
  const steps = senateSteps(senate);
  return steps[steps.length - 1].data.answer;
};

describe("senateSteps", () => {
  it("predicts the winning party", () => {
    expect(solve("RD")).toBe("Radiant");
    expect(solve("RDD")).toBe("Dire");
    expect(solve("RDDRD")).toBe("Dire");
    expect(solve("DDRRR")).toBe("Dire");
    expect(solve("R")).toBe("Radiant");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of senateSteps("RDDRD")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
